<?php

namespace Seed\User\Events\Metadata;

use Seed\Core\RawClient;
use Seed\User\Events\Metadata\Requests\GetEventMetadataRequest;
use Seed\User\Events\Metadata\Types\Metadata;
use Seed\Exceptions\SeedException;
use Seed\Exceptions\SeedApiException;
use Seed\Core\JsonApiRequest;
use Seed\Core\HttpMethod;
use JsonException;
use Psr\Http\Client\ClientExceptionInterface;

class MetadataClient
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
     * Get event metadata.
     *
     * @param GetEventMetadataRequest $request
     * @param ?array{
     *   baseUrl?: string,
     * } $options
     * @return Metadata
     * @throws SeedException
     * @throws SeedApiException
     */
    public function getMetadata(GetEventMetadataRequest $request, ?array $options = null): Metadata
    {
        $query = [];
        $query['id'] = $request->id;
        try {
            $response = $this->client->sendRequest(
                new JsonApiRequest(
                    baseUrl: $this->options['baseUrl'] ?? $this->client->options['baseUrl'] ?? '',
                    path: "/users/events/metadata/",
                    method: HttpMethod::GET,
                    query: $query,
                ),
            );
            $statusCode = $response->getStatusCode();
            if ($statusCode >= 200 && $statusCode < 400) {
                $json = $response->getBody()->getContents();
                return Metadata::fromJson($json);
            }
        } catch (JsonException $e) {
            throw new SeedException("Failed to deserialize response: {$e->getMessage()}");
        } catch (ClientExceptionInterface $e) {
            throw new SeedException($e->getMessage());
        }
        throw new SeedApiException("API request failed", $statusCode, $response->getBody()->getContents());
    }
}
