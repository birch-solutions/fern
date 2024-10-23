<?php

namespace Seed\File\Service;

use Seed\Core\Client\RawClient;
use Seed\File\Service\Requests\GetFileRequest;
use Seed\Types\Types\File;
use Seed\Exceptions\SeedException;
use Seed\Exceptions\SeedApiException;
use Seed\Core\Json\JsonApiRequest;
use Seed\Core\Client\HttpMethod;
use JsonException;
use Psr\Http\Client\ClientExceptionInterface;

class ServiceClient
{
    /**
     * @var RawClient $client
     */
    private RawClient $client;

    /**
     * @param RawClient $client
     */
    public function __construct(
        RawClient $client,
    ) {
        $this->client = $client;
    }

    /**
     * This endpoint returns a file by its name.
     *
     * @param string $filename This is a filename
     * @param GetFileRequest $request
     * @param ?array{
     *   baseUrl?: string,
     * } $options
     * @return File
     * @throws SeedException
     * @throws SeedApiException
     */
    public function getFile(string $filename, GetFileRequest $request, ?array $options = null): File
    {
        $headers = [];
        $headers['X-File-API-Version'] = $request->xFileApiVersion;
        try {
            $response = $this->client->sendRequest(
                new JsonApiRequest(
                    baseUrl: $options['baseUrl'] ?? $this->client->options['baseUrl'] ?? '',
                    path: "/file/$filename",
                    method: HttpMethod::GET,
                    headers: $headers,
                ),
            );
            $statusCode = $response->getStatusCode();
            if ($statusCode >= 200 && $statusCode < 400) {
                $json = $response->getBody()->getContents();
                return File::fromJson($json);
            }
        } catch (JsonException $e) {
            throw new SeedException(message: "Failed to deserialize response: {$e->getMessage()}", previous: $e);
        } catch (ClientExceptionInterface $e) {
            throw new SeedException(message: $e->getMessage(), previous: $e);
        }
        throw new SeedApiException(
            message: 'API request failed',
            statusCode: $statusCode,
            body: $response->getBody()->getContents(),
        );
    }
}
