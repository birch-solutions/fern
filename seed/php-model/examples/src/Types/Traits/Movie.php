<?php

namespace Seed\Types\Traits;

use Seed\Core\Json\JsonProperty;
use Seed\Core\Types\ArrayType;

trait Movie
{
    /**
     * @var string $id
     */
    #[JsonProperty('id')]
    public string $id;

    /**
     * @var ?string $prequel
     */
    #[JsonProperty('prequel')]
    public ?string $prequel;

    /**
     * @var string $title
     */
    #[JsonProperty('title')]
    public string $title;

    /**
     * @var string $from
     */
    #[JsonProperty('from')]
    public string $from;

    /**
     * @var float $rating The rating scale is one to five stars
     */
    #[JsonProperty('rating')]
    public float $rating;

    /**
     * @var string $type
     */
    #[JsonProperty('type')]
    public string $type;

    /**
     * @var string $tag
     */
    #[JsonProperty('tag')]
    public string $tag;

    /**
     * @var ?string $book
     */
    #[JsonProperty('book')]
    public ?string $book;

    /**
     * @var array<string, mixed> $metadata
     */
    #[JsonProperty('metadata'), ArrayType(['string' => 'mixed'])]
    public array $metadata;

    /**
     * @var int $revenue
     */
    #[JsonProperty('revenue')]
    public int $revenue;
}
