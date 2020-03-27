<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;

class SecurityController extends AbstractController
{
    public function login(): JsonResponse
    {
        return $this->json([
            'user' => $this->getUser() ? $this->getUser()->getId() : null
        ]);
    }
}