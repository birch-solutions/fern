<?php

namespace Seed\Types\Types;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;
use Seed\Types\Identifier;
use Seed\Core\ArrayType;

class Response extends SerializableType
{
    /**
     * @var mixed $response
     */
    #[JsonProperty("response")]
    public mixed $response;

    /**
     * @var array<Identifier> $identifiers
     */
    #[JsonProperty("identifiers"), ArrayType([Identifier::class])]
    public array $identifiers;

    /**
     * @param mixed $response
     * @param array<Identifier> $identifiers
     */
    public function __construct(
        mixed $response,
        array $identifiers,
    ) {
        $this->response = $response;
        $this->identifiers = $identifiers;
    }
}
