<?php

namespace Seed\Organizations;

use Seed\Core\Json\JsonSerializableType;
use Seed\Core\Json\JsonProperty;
use Seed\Core\Types\ArrayType;

class Organization extends JsonSerializableType
{
    /**
     * @var string $name
     */
    #[JsonProperty('name')]
    public string $name;

    /**
     * @var array<string> $tags
     */
    #[JsonProperty('tags'), ArrayType(['string'])]
    public array $tags;

    /**
     * @param array{
     *   name: string,
     *   tags: array<string>,
     * } $values
     */
    public function __construct(
        array $values,
    ) {
        $this->name = $values['name'];
        $this->tags = $values['tags'];
    }
}
