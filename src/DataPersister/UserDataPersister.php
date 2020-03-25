<?php

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\Entity\Member;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserDataPersister implements DataPersisterInterface
{
    private $em;

    private $encoder;

    public function __construct(EntityManagerInterface $em, UserPasswordEncoderInterface $encoder)
    {
        $this->em = $em;
        $this->encoder = $encoder;
    }
    /**
     * Is the data supported by the persister?
     */
    public function supports($data): bool
    {
        return $data instanceof Member;
    }

    /**
     * Persists the data.
     * @param Member $data
     * @return object|void Void will not be supported in API Platform 3, an object should always be returned
     */
    public function persist($data)
    {
        if ($data->getPlainPassword()) {
            $data->setPassword(
                $this->encoder->encodePassword($data, $data->getPlainPassword())
            );
            $data->eraseCredentials();
        }

        $this->em->persist($data);
        $this->em->flush();
    }

    /**
     * Removes the data.
     */
    public function remove($data)
    {
        $this->em->remove($data);
        $this->em->flush();
    }
}