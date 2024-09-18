<?php

namespace Seed\Auth;

use Seed\Core\SerializableType;
use Seed\Core\JsonProperty;

/**
* An OAuth token response.
 */
class TokenResponse extends SerializableType
{
    /**
     * @var string $accessToken
     */
    #[JsonProperty("access_token")]
    public string $accessToken;

    /**
     * @var int $expiresIn
     */
    #[JsonProperty("expires_in")]
    public int $expiresIn;

    /**
     * @param string $accessToken
     * @param int $expiresIn
     */
    public function __construct(
        string $accessToken,
        int $expiresIn,
    ) {
        $this->accessToken = $accessToken;
        $this->expiresIn = $expiresIn;
    }
}
