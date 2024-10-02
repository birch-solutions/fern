<?php

namespace Seed\Types\Union;

use Seed\Core\Json\SerializableType;
use Seed\Core\Json\JsonProperty;

class Cat extends SerializableType
{
    /**
     * @var string $name
     */
    #[JsonProperty('name')]
    public string $name;

    /**
     * @var bool $likesToMeow
     */
    #[JsonProperty('likesToMeow')]
    public bool $likesToMeow;

    /**
     * @param array{
     *   name: string,
     *   likesToMeow: bool,
     * } $values
     */
    public function __construct(
        array $values,
    ) {
        $this->name = $values['name'];
        $this->likesToMeow = $values['likesToMeow'];
    }
}
