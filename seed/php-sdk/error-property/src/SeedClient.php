<?php

namespace Seed;

use Seed\Errors\ErrorsClient;
use Seed\PropertyBasedError\PropertyBasedErrorClient;
use GuzzleHttp\ClientInterface;
use Seed\Core\RawClient;
use GuzzleHttp\Client;

class SeedClient
{
    /**
     * @var ErrorsClient $errors
     */
    public ErrorsClient $errors;

    /**
     * @var PropertyBasedErrorClient $propertyBasedError
     */
    public PropertyBasedErrorClient $propertyBasedError;

    /**
     * @var ?array{baseUrl?: string, client?: ClientInterface} $options
     */
    private ?array $options;

    /**
     * @var RawClient $client
     */
    private RawClient $client;

    /**
     * @param ?array{baseUrl?: string, client?: ClientInterface} $options
     */
    public function __construct(
        ?array $options = null,
    ) {
        $defaultHeaders = [
            "X-Fern-Language" => "PHP",
            "X-Fern-SDK-Name" => "Seed",
            "X-Fern-SDK-Version" => "0.0.1",
        ];
        $this->options = $options ?? [];
        $this->client = new RawClient(client: $this->options['client'] ?? new Client(), headers: $defaultHeaders);
        $this->errors = new ErrorsClient($this->client);
        $this->propertyBasedError = new PropertyBasedErrorClient($this->client);
    }
}
