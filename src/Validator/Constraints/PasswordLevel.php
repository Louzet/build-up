<?php

declare(strict_types=1);

namespace App\Validator\Constraints;

use App\Validator\Exception\NullArgumentException;
use Symfony\Component\Validator\Constraint;

/**
 * @Annotation
 * @Target({"PROPERTY", "ANNOTATION"})
 */
class PasswordLevel extends Constraint
{
    public $level;

    public const PASSWORD_LEVEL_LOW = 'low';
    public const PASSWORD_LEVEL_MEDIUM = 'medium';
    public const PASSWORD_LEVEL_HIGH = 'high';

    public static $levels = [
        self::PASSWORD_LEVEL_LOW,
        self::PASSWORD_LEVEL_MEDIUM,
        self::PASSWORD_LEVEL_HIGH
    ];

    public $messageLow = 'Your password must be between 8 and 30 characters.';

    public $messageMedium = 'Votre mot de passe doit contenir au moins une mujuscule, une minuscule, un chiffre et contenir au moins 8 caractères';

    public $messageHigh   = 'Your password must contains at least one uppercase, one lowercase, one digit, one special character and be greather than 8 characters';

    public function __construct($options = null)
    {
        parent::__construct($options);

        if (null === $this->level || '' === $this->level) {
            throw new NullArgumentException();
        }

        if (!\in_array($this->level, self::$levels, true)) {
            throw new \RuntimeException('The "level" parameter value is not valid !');
        }
    }
}