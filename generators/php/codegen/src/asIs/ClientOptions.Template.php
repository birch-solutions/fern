<?php

namespace <%= namespace%>;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;

class ClientOptions
{
    /**
     * The base URL for the API.
     *
     * @var string
     */
    public string $baseUrl;

    /**
     * The HTTP client used to make requests.
     *
     * @var ClientInterface
     */
    public ClientInterface $httpClient;

    /**
     * The HTTP headers sent with the request.
     *
     * @var array<string, string>
     */
    public array $headers;

    /**
     * @param string $baseUrl The Base URL for the API.
     * @param ?Client $httpClient The HTTP client used to make requests.
     * @param array<string, string> $headers The HTTP headers sent on every request.
     */
    public function __construct(
        ?Client $httpClient = null,
        array $headers = [],
        string $baseUrl = '',
    ) {
        $this->baseUrl = $baseUrl;
        $this->headers = $headers;
        $this->httpClient = $httpClient ?? new Client(['timeout' => 30.0]);
    }
}