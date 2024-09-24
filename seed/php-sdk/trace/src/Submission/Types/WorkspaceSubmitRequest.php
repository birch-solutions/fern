<?php

namespace Seed\Submission\Types;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;
use Seed\Commons\Types\Language;
use Seed\Core\ArrayType;

class WorkspaceSubmitRequest extends SerializableType
{
    /**
     * @var string $submissionId
     */
    #[JsonProperty('submissionId')]
    public string $submissionId;

    /**
     * @var value-of<Language> $language
     */
    #[JsonProperty('language')]
    public string $language;

    /**
     * @var array<SubmissionFileInfo> $submissionFiles
     */
    #[JsonProperty('submissionFiles'), ArrayType([SubmissionFileInfo::class])]
    public array $submissionFiles;

    /**
     * @var ?string $userId
     */
    #[JsonProperty('userId')]
    public ?string $userId;

    /**
     * @param array{
     *   submissionId: string,
     *   language: value-of<Language>,
     *   submissionFiles: array<SubmissionFileInfo>,
     *   userId?: ?string,
     * } $values
     */
    public function __construct(
        array $values,
    ) {
        $this->submissionId = $values['submissionId'];
        $this->language = $values['language'];
        $this->submissionFiles = $values['submissionFiles'];
        $this->userId = $values['userId'] ?? null;
    }
}
