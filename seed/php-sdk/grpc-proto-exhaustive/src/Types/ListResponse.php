<?php

namespace Seed\Types;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;
use Seed\Core\ArrayType;
use Seed\Types\ListElement;
use Seed\Types\Pagination;
use Seed\Types\Usage;

class ListResponse extends SerializableType
{
    #[JsonProperty("columns"), ArrayType([ListElement::class])]
    /**
     * @var ?array<ListElement> $columns
     */
    public ?array $columns;

    #[JsonProperty("pagination")]
    /**
     * @var ?Pagination $pagination
     */
    public ?Pagination $pagination;

    #[JsonProperty("namespace")]
    /**
     * @var ?string $namespace
     */
    public ?string $namespace;

    #[JsonProperty("usage")]
    /**
     * @var ?Usage $usage
     */
    public ?Usage $usage;

    /**
     * @param ?array<ListElement> $columns
     * @param ?Pagination $pagination
     * @param ?string $namespace
     * @param ?Usage $usage
     */
    public function __construct(
        ?array $columns = null,
        ?Pagination $pagination = null,
        ?string $namespace = null,
        ?Usage $usage = null,
    ) {
        $this->columns = $columns;
        $this->pagination = $pagination;
        $this->namespace = $namespace;
        $this->usage = $usage;
    }
}
