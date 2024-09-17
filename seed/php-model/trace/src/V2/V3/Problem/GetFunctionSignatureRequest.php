<?php

namespace Seed\V2\V3\Problem;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;

class GetFunctionSignatureRequest extends SerializableType
{
    #[JsonProperty("functionSignature")]
    /**
     * @var mixed $functionSignature
     */
    public mixed $functionSignature;

    /**
     * @param mixed $functionSignature
     */
    public function __construct(
        mixed $functionSignature,
    ) {
        $this->functionSignature = $functionSignature;
    }
}
