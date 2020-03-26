<?php

declare(strict_types=1);

namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;
use App\Validator\Constraints\PasswordLevel;
use Symfony\Component\Validator\ConstraintValidator;
use Symfony\Component\Validator\Exception\UnexpectedTypeException;
use Symfony\Component\Validator\Exception\UnexpectedValueException;

class PasswordLevelValidator extends ConstraintValidator
{
    private $level;

    public function __construct($level = PasswordLevel::PASSWORD_LEVEL_LOW)
    {
        if (!\in_array($level, PasswordLevel::$levels, true)) {
            throw new \InvalidArgumentException('The "level" parameter value is not valid.');
        }
        $this->level = $level;
    }

    /**
     * Checks if the passed value is valid.
     *
     * @param mixed $value The value that should be validated
     * @param Constraint $constraint The constraint for the validation
     */
    public function validate($value, Constraint $constraint): void
    {
        if (!$constraint instanceof PasswordLevel) {
            throw new UnexpectedTypeException($constraint, PasswordLevel::class);
        }

        if (null === $constraint->level) {
            $constraint->level = $this->level;
        }

        if (null === $value || '' === $value) {
            return;
        }

        if (!is_string($value)) {
            throw new UnexpectedValueException($value, 'string');
        }

        if (0 === $this->validateByRegex($constraint->level, $value)) {
            $message = null;
            if (!$this->levelIsValid($constraint->level)) {
                throw new \RuntimeException(sprintf('This %s is unknown', $constraint->level));
            }
            switch ($constraint->level) {
                case 'low':
                    $message = $constraint->messageLow;
                    break;
                case 'medium':
                    $message = $constraint->messageMedium;
                    break;
                case 'high':
                    $message = $constraint->messageHigh;
                    break;
            }
            $this->context->buildViolation($message)
                ->setParameter('{{ value }}', $value)
                ->addViolation();
        }
    }

    /**
     * @param string $level
     * @return bool
     * Check if the given level exists
     */
    private function levelIsValid(string $level): bool
    {
        return in_array($level, PasswordLevel::$levels, true);
    }

    /**
     * @param string $level
     * @return string
     */
    private function levelRegexFactory(string $level): string
    {
        $regex = '';

        switch ($level) {
            case 'none':
                $regex = '';
                break;
            case 'low':
                $regex = '/^(?=.*).{8,30}$/';
                break;
            case 'medium':
                $regex = '/^\A(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[-_a-zA-Z0-9!@#$%£^&*()\',.?"¤µ*§:{}|\[\]<>’“”«»•~–±°×+=÷\\/²³€àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]{8,30}\z$/';
                break;
            case 'high':
                $regex = '/^\A(?=.*?[a-z])(?=.*[A-Z])(?=.*?[0-9])(?=.*?[!@#$%£^&*()\',.?"¤µ*§:{}|\[\]<>’“”«»•~–±°×+=÷\\/²³€àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ])[-_a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,30}\z$/';
                break;
        }

        return $regex;
    }

    /**
     * @param string $level
     * @param string $password
     * @return false|int
     */
    private function validateByRegex(string $level, string $password)
    {
        $regex = $this->levelRegexFactory($level);
        return preg_match($regex, $password);
    }
}
