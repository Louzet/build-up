FROM php:7.4-fpm

WORKDIR /var/www

ARG APCU_VERSION=5.1.18

# Set timezone
ARG TIMEZONE

RUN apt-get update && apt-get install -y \
      wget \
      git \
      curl \
      unzip \
      fish

RUN apt-get update && apt-get install -y libzip-dev libicu-dev && docker-php-ext-install pdo zip intl opcache

# Support de MySQL
RUN docker-php-ext-install mysqli pdo_mysql

# Xdebug
RUN pecl install xdebug-2.8.1 && docker-php-ext-enable xdebug

#Apcu
RUN pecl install apcu-${APCU_VERSION} && docker-php-ext-enable apcu opcache

# Redis
RUN pecl install redis && rm -rf /tmp/pear && docker-php-ext-enable redis.so

# Install Composer.
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer \
    && ln -s $(composer config --global home) /root/composer
ENV PATH=$PATH:/root/composer/vendor/bin COMPOSER_ALLOW_SUPERUSER=1

# Set timezone
RUN ln -snf /usr/share/zoneinfo/${TIMEZONE} /etc/localtime && echo ${TIMEZONE} > /etc/timezone
RUN printf '[PHP]\ndate.timezone = "%s"\n', ${TIMEZONE} > /usr/local/etc/php/conf.d/tzone.ini

# Xdebug copy to config
ADD xdebug.ini /usr/local/etc/php/conf.d/

# Php.ini copy to config
ADD php-ini-override.ini /etc/php/7.4/fpm/conf.d/php-ini-override.ini

EXPOSE 9000