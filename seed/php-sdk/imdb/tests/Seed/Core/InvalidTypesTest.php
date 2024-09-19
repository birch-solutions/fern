<?php

namespace Seed\Tests\Core;

use PHPUnit\Framework\TestCase;
use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;

class InvalidType extends SerializableType
{
    public function __construct(
        #[JsonProperty('integer_property')]
        public int $integerProperty
    ) {
    }
}

class InvalidTypesTest extends TestCase
{
    public function testInvalidTypesThrowExceptions(): void
    {
        // Create test data with invalid type for integer_property (string instead of int)
        $data = [
            'integer_property' => 'not_an_integer'
        ];

        $this->expectException(\TypeError::class);

        // Attempt to deserialize invalid data
        InvalidType::jsonDeserialize($data);
    }
}
