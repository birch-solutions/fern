<?php

namespace Seed\Migration\Types;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;
use Seed\Migration\Types\MigrationStatus;

class Migration extends SerializableType
{
    #[JsonProperty("name")]
    /**
     * @var string $name
     */
    public string $name;

    #[JsonProperty("status")]
    /**
     * @var MigrationStatus $status
     */
    public MigrationStatus $status;

    /**
     * @param string $name
     * @param MigrationStatus $status
     */
    public function __construct(
        string $name,
        MigrationStatus $status,
    ) {
        $this->name = $name;
        $this->status = $status;
    }
}
