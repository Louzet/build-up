<?php

namespace App\EventSubscriber;

use App\Entity\Member;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JwtCreatedSubscriber
{

    public function updateJwtData(JWTCreatedEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof Member) {
            return;
        }

        $data['id'] = $user->getId();
        $data['enabled'] = $user->getEnabled();

        $event->setData($data);
    }
}
