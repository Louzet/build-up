<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Serializer\Annotation\SerializedName;
use App\Validator\Constraints as Cons;

/**
 * @ApiResource(
 *  normalizationContext={"groups"={"members:output"}},
 *  denormalizationContext={"groups"={"members:input"}},
 *  attributes={
 *      "order"={"lastname":"asc"}
 *  }
 * )
 * @ApiFilter(SearchFilter::class, properties={"firstname":"partial", "lastname":"partial", "email":"partial"})
 * @ORM\Entity(repositoryClass="App\Repository\MemberRepository")
 * @UniqueEntity(fields={"email"}, message="Une membre existe déjà avec cet email.")
 */
class Member implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"members:output"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Groups({"members:output", "members:input"})
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Groups({"members:output", "members:input"})
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank(allowNull=false)
     * @Assert\Email(message = "L'email '{{ value }}' n'est pas un email valide.")
     * @Groups({"member:output", "members:input"})
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     * @Groups({"members:output"})
     */
    private $roles = [];

    /**
     * @SerializedName("password")
     * @Groups({"members:input"})
     * @Assert\NotBlank()
     * @Cons\PasswordLevel(level="medium")
     */
    private $plainPassword;

    /**
     * @ORM\Column(type="string", length=255)
     * @var string hashed password
     */
    private $password;

    /**
     * @ORM\Column(type="string", nullable=true)
     * @Groups({"members:output"})
     */
    private $birthdate;

    /**
     * @ORM\Column(type="string", nullable=true)
     * @Groups({"members:output"})
     * @Assert\Choice({"male", "female"})
     */
    private $sex;

    /**
     * @ORM\Column(name="created_at", type="datetime")
     * @Gedmo\Timestampable(on="create")
     * @Groups({"members:output"})
     */
    private $createdAt;

    /**
     * @ORM\Column(name="updated_at", type="datetime", nullable=true)
     * @Gedmo\Timestampable(on="update")
     * @Groups({"members:output"})
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"members:output"})
     */
    private $enabled;

    public function __construct()
    {
        $this->roles = ['ROLE_USER'];
        $this->createdAt = new \Datetime();
        $this->enabled = false;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        $this->setUpdatedAt();

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        $this->setUpdatedAt();

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        $this->setUpdatedAt();

        return $this;
    }

    /**
     * Returns the roles granted to the user.
     *
     *     public function getRoles()
     *     {
     *         return ['ROLE_USER'];
     *     }
     *
     * Alternatively, the roles might be stored on a ``roles`` property,
     * and populated in any number of different ways when the user object
     * is created.
     *
     * @return string[] The user roles
     */
    public function getRoles(): array
    {
        return $this->roles;
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        $this->setUpdatedAt();

        return $this;
    }

    /**
     * Get the value of plainPassword
     */ 
    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    /**
     * Set the value of plainPassword
     *
     * @return  self
     */ 
    public function setPlainPassword($plainPassword)
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }

    /**
     * Returns the password used to authenticate the user.
     *
     * This should be the encoded password. On authentication, a plain-text
     * password will be salted, encoded, and then compared to this value.
     *
     * @return string|null The encoded password if any
     */
    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        $this->setUpdatedAt();

        return $this;
    }

    /**
     * Returns the username used to authenticate the user.
     *
     * @return string The username
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    public function getBirthdate(): ?\DateTimeInterface
    {
        return new \DateTime($this->birthdate);
    }

    public function setBirthdate(string $birthdate): self
    {
        $this->birthdate = $birthdate;

        $this->setUpdatedAt();

        return $this;
    }

    /**
     * Get the value of sex
     */ 
    public function getSex(): ?string
    {
        return $this->sex;
    }

    /**
     * Set the value of sex
     *
     * @return  self
     */ 
    public function setSex(string $sex): self
    {
        $this->sex = $sex;

        return $this;
    }

    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\Datetime $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTime
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt()
    {
        $this->updatedAt = new \DateTime();
    }

    public function getEnabled(): bool
    {
        return $this->enabled;
    }

    public function setEnabled(bool $enabled): self
    {
        $this->enabled = $enabled;

        $this->setUpdatedAt();

        return $this;
    }

    /**
     * Returns the salt that was originally used to encode the password.
     *
     * This can return null if the password was not encoded using a salt.
     *
     * @return string|null The salt
     */
    public function getSalt()
    {
        return null;
    }

    /**
     * Removes sensitive data from the user.
     *
     * This is important if, at any given point, sensitive information like
     * the plain-text password is stored on this object.
     */
    public function eraseCredentials()
    {
        $this->plainPassword = null;
    }
}
