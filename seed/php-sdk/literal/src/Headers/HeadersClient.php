<?php

namespace Seed\Headers;

use Seed\Core\RawClient;
use Seed\Headers\Requests\SendLiteralsInHeadersRequest;
use Seed\Types\SendResponse;
use Seed\Core\JsonApiRequest;
use Seed\Core\HttpMethod;
use JsonException;
use Exception;
use Psr\Http\Client\ClientExceptionInterface;

class HeadersClient
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
     * @param SendLiteralsInHeadersRequest $request
     * @param ?array{baseUrl?: string} $options
     * @returns SendResponse
     */
    public function send(SendLiteralsInHeadersRequest $request, ?array $options = null): SendResponse
    {
        $headers = [];
        $headers['X-Endpoint-Version'] = $request->endpointVersion;
        $headers['X-Async'] = $request->async;
        try {
            $response = $this->client->sendRequest(
                new JsonApiRequest(
                    baseUrl: $this->options['baseUrl'] ?? $this->client->options['baseUrl'] ?? '',
                    path: "headers",
                    method: HttpMethod::POST,
                    headers: $headers,
                    body: $request,
                ),
            );
            $statusCode = $response->getStatusCode();
            if ($statusCode >= 200 && $statusCode < 400) {
                $json = $response->getBody()->getContents();
                return SendResponse::fromJson($json);
            }
        } catch (JsonException $e) {
            throw new Exception("Failed to deserialize response", 0, $e);
        } catch (ClientExceptionInterface $e) {
            throw new Exception($e->getMessage());
        }
        throw new Exception("Error with status code " . $statusCode);
    }

}
