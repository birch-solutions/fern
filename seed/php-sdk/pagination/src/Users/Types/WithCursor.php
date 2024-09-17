<?php

namespace Seed\Users\Types;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;

class WithCursor extends SerializableType
{
    #[JsonProperty("cursor")]
    /**
     * @var ?string $cursor
     */
    public ?string $cursor;

    /**
     * @param ?string $cursor
     */
    public function __construct(
        ?string $cursor = null,
    ) {
        $this->cursor = $cursor;
    }
}
