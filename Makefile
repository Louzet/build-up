ifndef APP_ENV
	include .env
endif

DOCKER_COMPOSE  = docker-compose -f docker-compose.yml

EXEC_PHP        = $(DOCKER_COMPOSE) exec php
EXEC_NGINX      = $(DOCKER_COMPOSE) exec nginx
EXEC_DB         = $(DOCKER_COMPOSE) exec mysql mysql
EXEC_SYMFONY    = $(DOCKER_COMPOSE) php bin/console
TEST            = $(DOCKER_COMPOSE) -f docker-compose.test.yml run --rm

COMPOSER        = $(EXEC_PHP) composer

.DEFAULT_GOAL := help
.PHONY: help
help: ## Affiche cette aide
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m<target>\033[0m\n"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-27s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)


.PHONY: start
start:## Lance le serveur de développement
	$(DOCKER_COMPOSE) up -d


.PHONY: down
down: ## destroy images and containers created
	$(info Make: Destroy images and containers created.)
	$(DOCKER_COMPOSE) down


reload: down start


.PHONY: build
build: ## Download the latest versions of the pre-built images & Building images in without cache
	$(info Make: Building images in without cache.)
	$(DOCKER_COMPOSE) pull --ignore-pull-failures
	$(DOCKER_COMPOSE) build --force-rm


.PHONY: ps
ps: ## Lists containers
	$(info Make: Lists containers.)
	$(DOCKER_COMPOSE) ps


.PHONY: logs
logs: ## Displays log output from services
	$(info Make: Displays log output from services.)
	$(DOCKER_COMPOSE) logs


.PHONY: kill
kill: ## Forces running containers to stop
	$(info Make: Forces running containers to stop.)
	$(DOCKER_COMPOSE) kill -s SIGKILL


.PHONY: remove
remove: ## Removes stopped service containers
	$(info Make: Removes stopped service containers.)
	$(DOCKER_COMPOSE) rm --stop --force


.PHONY: install
install: vendor/autoload.php ## Installe les différentes dépendances


.PHONY: composer-require
composer-require: ## Install php dependancies (eg: make composer-require env=dev dep=phpstan/phpstan)
ifdef dep
ifdef env
	$(COMPOSER) require --${env} ${dep}
else
	$(COMPOSER) require ${dep}
endif
endif


.PHONY: composer-remove
composer-remove: ## Uninstall php dependancies
ifdef dep
ifdef env
	$(COMPOSER) remove --${env} ${dep}
else
	$(COMPOSER) remove ${dep}
endif
endif


.PHONY: stan
stan: vendor/autoload.php ## Analyse le code
	docker run -v $(PWD):/app --rm phpstan/phpstan analyse --level=5


.PHONY: db
db: ## exec nginx in bash mode
	$(info Make: Exec postgres db in bash mode.)
	$(EXEC_DB) -u ${MYSQL_USER} -p


php: ## exec php container in bash mode
	$(EXEC_PHP) bash


vendor/autoload.php: composer.lock
	$(DOCKER_COMPOSE) run --rm --no-deps php composer install
	touch vendor/autoload.php