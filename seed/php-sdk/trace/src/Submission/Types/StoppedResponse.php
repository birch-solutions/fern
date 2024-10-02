<?php

namespace Seed\Submission\Types;

use Seed\Core\Json\JsonSerializableType;
use Seed\Core\Json\JsonProperty;

class StoppedResponse extends JsonSerializableType
{
    /**
     * @var string $submissionId
     */
    #[JsonProperty('submissionId')]
    public string $submissionId;

    /**
     * @param array{
     *   submissionId: string,
     * } $values
     */
    public function __construct(
        array $values,
    ) {
        $this->submissionId = $values['submissionId'];
    }
}
