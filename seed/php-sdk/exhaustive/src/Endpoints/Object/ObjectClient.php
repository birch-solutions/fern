<?php

namespace Seed\Endpoints\Object;

use Seed\Core\RawClient;
use Seed\Types\Object\Types\ObjectWithOptionalField;
use Seed\Core\JsonApiRequest;
use Seed\Core\HttpMethod;
use JsonException;
use Exception;
use Psr\Http\Client\ClientExceptionInterface;
use Seed\Types\Object\Types\ObjectWithRequiredField;
use Seed\Types\Object\Types\ObjectWithMapOfMap;
use Seed\Types\Object\Types\NestedObjectWithOptionalField;
use Seed\Types\Object\Types\NestedObjectWithRequiredField;

class ObjectClient
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
     * @param ObjectWithOptionalField $request
     * @param ?array{baseUrl?: string} $options
     * @return ObjectWithOptionalField
     */
    public function getAndReturnWithOptionalField(ObjectWithOptionalField $request, ?array $options = null): ObjectWithOptionalField
    {
        try {
            $response = $this->client->sendRequest(
                new JsonApiRequest(
                    baseUrl: $this->options['baseUrl'] ?? $this->client->options['baseUrl'] ?? '',
                    path: "/object/get-and-return-with-optional-field",
                    method: HttpMethod::POST,
                    body: $request,
                ),
            );
            $statusCode = $response->getStatusCode();
            if ($statusCode >= 200 && $statusCode < 400) {
                $json = $response->getBody()->getContents();
                return ObjectWithOptionalField::fromJson($json);
            }
        } catch (JsonException $e) {
            throw new Exception("Failed to deserialize response", 0, $e);
        } catch (ClientExceptionInterface $e) {
            throw new Exception($e->getMessage());
        }
        throw new Exception("Error with status code " . $statusCode);
    }

    /**
     * @param ObjectWithRequiredField $request
     * @param ?array{baseUrl?: string} $options
     * @return ObjectWithRequiredField
     */
    public function getAndReturnWithRequiredField(ObjectWithRequiredField $request, ?array $options = null): ObjectWithRequiredField
    {
        try {
            $response = $this->client->sendRequest(
                new JsonApiRequest(
                    baseUrl: $this->options['baseUrl'] ?? $this->client->options['baseUrl'] ?? '',
                    path: "/object/get-and-return-with-required-field",
                    method: HttpMethod::POST,
                    body: $request,
                ),
            );
            $statusCode = $response->getStatusCode();
            if ($statusCode >= 200 && $statusCode < 400) {
                $json = $response->getBody()->getContents();
                return ObjectWithRequiredField::fromJson($json);
            }
        } catch (JsonException $e) {
            throw new Exception("Failed to deserialize response", 0, $e);
        } catch (ClientExceptionInterface $e) {
            throw new Exception($e->getMessage());
        }
        throw new Exception("Error with status code " . $statusCode);
    }

    /**
     * @param ObjectWithMapOfMap $request
     * @param ?array{baseUrl?: string} $options
     * @return ObjectWithMapOfMap
     */
    public function getAndReturnWithMapOfMap(ObjectWithMapOfMap $request, ?array $options = null): ObjectWithMapOfMap
    {
        try {
            $response = $this->client->sendRequest(
                new JsonApiRequest(
                    baseUrl: $this->options['baseUrl'] ?? $this->client->options['baseUrl'] ?? '',
                    path: "/object/get-and-return-with-map-of-map",
                    method: HttpMethod::POST,
                    body: $request,
                ),
            );
            $statusCode = $response->getStatusCode();
            if ($statusCode >= 200 && $statusCode < 400) {
                $json = $response->getBody()->getContents();
                return ObjectWithMapOfMap::fromJson($json);
            }
        } catch (JsonException $e) {
            throw new Exception("Failed to deserialize response", 0, $e);
        } catch (ClientExceptionInterface $e) {
            throw new Exception($e->getMessage());
        }
        throw new Exception("Error with status code " . $statusCode);
    }

    /**
     * @param NestedObjectWithOptionalField $request
     * @param ?array{baseUrl?: string} $options
     * @return NestedObjectWithOptionalField
     */
    public function getAndReturnNestedWithOptionalField(NestedObjectWithOptionalField $request, ?array $options = null): NestedObjectWithOptionalField
    {
        try {
            $response = $this->client->sendRequest(
                new JsonApiRequest(
                    baseUrl: $this->options['baseUrl'] ?? $this->client->options['baseUrl'] ?? '',
                    path: "/object/get-and-return-nested-with-optional-field",
                    method: HttpMethod::POST,
                    body: $request,
                ),
            );
            $statusCode = $response->getStatusCode();
            if ($statusCode >= 200 && $statusCode < 400) {
                $json = $response->getBody()->getContents();
                return NestedObjectWithOptionalField::fromJson($json);
            }
        } catch (JsonException $e) {
            throw new Exception("Failed to deserialize response", 0, $e);
        } catch (ClientExceptionInterface $e) {
            throw new Exception($e->getMessage());
        }
        throw new Exception("Error with status code " . $statusCode);
    }

    /**
     * @param string $string
     * @param NestedObjectWithRequiredField $request
     * @param ?array{baseUrl?: string} $options
     * @return NestedObjectWithRequiredField
     */
    public function getAndReturnNestedWithRequiredField(string $string, NestedObjectWithRequiredField $request, ?array $options = null): NestedObjectWithRequiredField
    {
        try {
            $response = $this->client->sendRequest(
                new JsonApiRequest(
                    baseUrl: $this->options['baseUrl'] ?? $this->client->options['baseUrl'] ?? '',
                    path: "/object/get-and-return-nested-with-required-field/$string",
                    method: HttpMethod::POST,
                    body: $request,
                ),
            );
            $statusCode = $response->getStatusCode();
            if ($statusCode >= 200 && $statusCode < 400) {
                $json = $response->getBody()->getContents();
                return NestedObjectWithRequiredField::fromJson($json);
            }
        } catch (JsonException $e) {
            throw new Exception("Failed to deserialize response", 0, $e);
        } catch (ClientExceptionInterface $e) {
            throw new Exception($e->getMessage());
        }
        throw new Exception("Error with status code " . $statusCode);
    }

    /**
     * @param array<NestedObjectWithRequiredField> $request
     * @param ?array{baseUrl?: string} $options
     * @return NestedObjectWithRequiredField
     */
    public function getAndReturnNestedWithRequiredFieldAsList(array $request, ?array $options = null): NestedObjectWithRequiredField
    {
        try {
            $response = $this->client->sendRequest(
                new JsonApiRequest(
                    baseUrl: $this->options['baseUrl'] ?? $this->client->options['baseUrl'] ?? '',
                    path: "/object/get-and-return-nested-with-required-field-list",
                    method: HttpMethod::POST,
                    body: $request,
                ),
            );
            $statusCode = $response->getStatusCode();
            if ($statusCode >= 200 && $statusCode < 400) {
                $json = $response->getBody()->getContents();
                return NestedObjectWithRequiredField::fromJson($json);
            }
        } catch (JsonException $e) {
            throw new Exception("Failed to deserialize response", 0, $e);
        } catch (ClientExceptionInterface $e) {
            throw new Exception($e->getMessage());
        }
        throw new Exception("Error with status code " . $statusCode);
    }

}
