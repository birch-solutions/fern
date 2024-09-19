<?php

namespace Seed\Commons;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;

class DebugKeyValuePairs extends SerializableType
{
    /**
     * @var mixed $key
     */
    #[JsonProperty("key")]
    public mixed $key;

    /**
     * @var mixed $value
     */
    #[JsonProperty("value")]
    public mixed $value;

    /**
     * @param mixed $key
     * @param mixed $value
     */
    public function __construct(
        mixed $key,
        mixed $value,
    ) {
        $this->key = $key;
        $this->value = $value;
    }
}
