<?php

declare(strict_types=1);

namespace App\Validator\Exception;

class NullArgumentException extends \Exception
{
    public function __construct($message = 'This property can not be null')
    {
        parent::__construct($message);
    }
}
