<?php

namespace Seed\V2\Problem;

use Seed\Core\Json\SerializableType;
use Seed\Core\Json\JsonProperty;

class NonVoidFunctionDefinition extends SerializableType
{
    /**
     * @var NonVoidFunctionSignature $signature
     */
    #[JsonProperty('signature')]
    public NonVoidFunctionSignature $signature;

    /**
     * @var FunctionImplementationForMultipleLanguages $code
     */
    #[JsonProperty('code')]
    public FunctionImplementationForMultipleLanguages $code;

    /**
     * @param array{
     *   signature: NonVoidFunctionSignature,
     *   code: FunctionImplementationForMultipleLanguages,
     * } $values
     */
    public function __construct(
        array $values,
    ) {
        $this->signature = $values['signature'];
        $this->code = $values['code'];
    }
}
