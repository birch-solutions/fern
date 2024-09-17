<?php

namespace Seed\FolderC\Common\Types;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;

class Foo extends SerializableType
{
    #[JsonProperty("bar_property")]
    /**
     * @var string $barProperty
     */
    public string $barProperty;

    /**
     * @param string $barProperty
     */
    public function __construct(
        string $barProperty,
    ) {
        $this->barProperty = $barProperty;
    }
}
