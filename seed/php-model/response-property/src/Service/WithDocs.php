<?php

namespace Seed\Service;

use Seed\Core\Json\SerializableType;
use Seed\Core\Json\JsonProperty;

class WithDocs extends SerializableType
{
    /**
     * @var string $docs
     */
    #[JsonProperty('docs')]
    public string $docs;

    /**
     * @param array{
     *   docs: string,
     * } $values
     */
    public function __construct(
        array $values,
    ) {
        $this->docs = $values['docs'];
    }
}
