<?php

namespace Seed\FolderB;

use Seed\Core\RawClient;
use Seed\FolderB\Common\CommonClient;

class FolderBClient
{
    /**
     * @var RawClient $client
     */
    private RawClient $client;

    /**
     * @var CommonClient $common
     */
    public CommonClient $common;

    /**
     * @param RawClient $client
     */
    public function __construct(
        RawClient $client,
    ) {
        $this->client = $client;
        $this->common = new CommonClient($this->client);
    }
}
