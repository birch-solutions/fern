<?php

namespace Seed\Core;

use Attribute;

#[Attribute(Attribute::TARGET_PROPERTY)]
class DateType
{
    public const TYPE_DATE = 'date';
    public const TYPE_DATETIME = 'datetime';

    public function __construct(public string $type) {}
}
