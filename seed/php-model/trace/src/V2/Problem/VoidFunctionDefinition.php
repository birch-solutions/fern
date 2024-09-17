<?php

namespace Seed\V2\Problem;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;
use Seed\Core\ArrayType;
use Seed\V2\Problem\Parameter;
use Seed\V2\Problem\FunctionImplementationForMultipleLanguages;

class VoidFunctionDefinition extends SerializableType
{
    #[JsonProperty("parameters"), ArrayType([Parameter])]
    /**
     * @var array<Parameter> $parameters
     */
    public array $parameters;

    #[JsonProperty("code")]
    /**
     * @var FunctionImplementationForMultipleLanguages $code
     */
    public FunctionImplementationForMultipleLanguages $code;

    /**
     * @param array<Parameter> $parameters
     * @param FunctionImplementationForMultipleLanguages $code
     */
    public function __construct(
        array $parameters,
        FunctionImplementationForMultipleLanguages $code,
    ) {
        $this->parameters = $parameters;
        $this->code = $code;
    }
}
