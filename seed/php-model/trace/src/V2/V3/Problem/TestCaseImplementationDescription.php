<?php

namespace Seed\V2\V3\Problem;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;
use Seed\Core\ArrayType;

class TestCaseImplementationDescription extends SerializableType
{
    #[JsonProperty("boards"), ArrayType(["mixed"])]
    /**
     * @var array<mixed> $boards
     */
    public array $boards;

    /**
     * @param array<mixed> $boards
     */
    public function __construct(
        array $boards,
    ) {
        $this->boards = $boards;
    }
}
