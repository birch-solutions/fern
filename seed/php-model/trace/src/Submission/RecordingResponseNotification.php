<?php

namespace Seed\Submission;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;

class RecordingResponseNotification extends SerializableType
{
    /**
     * @var string $submissionId
     */
    #[JsonProperty("submissionId")]
    public string $submissionId;

    /**
     * @var ?string $testCaseId
     */
    #[JsonProperty("testCaseId")]
    public ?string $testCaseId;

    /**
     * @var int $lineNumber
     */
    #[JsonProperty("lineNumber")]
    public int $lineNumber;

    /**
     * @var LightweightStackframeInformation $lightweightStackInfo
     */
    #[JsonProperty("lightweightStackInfo")]
    public LightweightStackframeInformation $lightweightStackInfo;

    /**
     * @var ?TracedFile $tracedFile
     */
    #[JsonProperty("tracedFile")]
    public ?TracedFile $tracedFile;

    /**
     * @param array{
     *   submissionId: string,
     *   testCaseId?: ?string,
     *   lineNumber: int,
     *   lightweightStackInfo: LightweightStackframeInformation,
     *   tracedFile?: ?TracedFile,
     * } $values
     */
    public function __construct(
        array $values,
    ) {
        $this->submissionId = $values['submissionId'];
        $this->testCaseId = $values['testCaseId'] ?? null;
        $this->lineNumber = $values['lineNumber'];
        $this->lightweightStackInfo = $values['lightweightStackInfo'];
        $this->tracedFile = $values['tracedFile'] ?? null;
    }
}
