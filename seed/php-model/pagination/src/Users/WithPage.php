<?php

namespace Seed\Users;

use Seed\Core\Json\JsonSerializableType;
use Seed\Core\Json\JsonProperty;

class WithPage extends JsonSerializableType
{
    /**
     * @var ?int $page
     */
    #[JsonProperty('page')]
    public ?int $page;

    /**
     * @param array{
     *   page?: ?int,
     * } $values
     */
    public function __construct(
        array $values = [],
    ) {
        $this->page = $values['page'] ?? null;
    }
}
