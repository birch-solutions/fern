<?php

namespace Seed\Submission;

use Seed\Core\Json\SerializableType;
use Seed\Core\Json\JsonProperty;

class InternalError extends SerializableType
{
    /**
     * @var ExceptionInfo $exceptionInfo
     */
    #[JsonProperty('exceptionInfo')]
    public ExceptionInfo $exceptionInfo;

    /**
     * @param array{
     *   exceptionInfo: ExceptionInfo,
     * } $values
     */
    public function __construct(
        array $values,
    ) {
        $this->exceptionInfo = $values['exceptionInfo'];
    }
}
