# frozen_string_literal: true

require_relative "seed_exhaustive_client/general_errors/types/bad_object_request_info"
require_relative "seed_exhaustive_client/types/object/types/nested_object_with_optional_field"
require_relative "seed_exhaustive_client/types/object/types/nested_object_with_required_field"
require_relative "seed_exhaustive_client/types/object/types/object_with_map_of_map"
require_relative "seed_exhaustive_client/types/object/types/object_with_optional_field"
require_relative "seed_exhaustive_client/types/object/types/object_with_required_field"
require_relative "seed_exhaustive_client/types/union/types/animal"
require_relative "seed_exhaustive_client/types/union/types/cat"
require_relative "seed_exhaustive_client/types/union/types/dog"
require "faraday"
require_relative "seed_exhaustive_client/endpoints/container/client"
require_relative "seed_exhaustive_client/endpoints/enum/client"
require_relative "seed_exhaustive_client/endpoints/http_methods/client"
require_relative "seed_exhaustive_client/endpoints/object/client"
require_relative "seed_exhaustive_client/endpoints/params/client"
require_relative "seed_exhaustive_client/endpoints/primitive/client"
require_relative "seed_exhaustive_client/endpoints/union/client"
require_relative "seed_exhaustive_client/endpointsclient"
require_relative "seed_exhaustive_client/inlined_requests/client"
require_relative "seed_exhaustive_client/no_auth/client"
require_relative "seed_exhaustive_client/no_req_body/client"
require_relative "seed_exhaustive_client/req_with_headers/client"
require "async/http/faraday"

module SeedExhaustiveClient
  class Client
    attr_reader :client, :inlined_requests_client, :no_auth_client, :no_req_body_client, :req_with_headers_client

    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param token [String]
    # @return [Client]
    def initialize(max_retries: nil, timeout_in_seconds: nil, token: nil)
      request_client = RequestClient.new(max_retries: max_retries, timeout_in_seconds: timeout_in_seconds, token: token)
      @client = Endpoints::Client.new(request_client: request_client)
      @inlined_requests_client = InlinedRequests::InlinedRequestsClient.new(request_client: request_client)
      @no_auth_client = NoAuth::NoAuthClient.new(request_client: request_client)
      @no_req_body_client = NoReqBody::NoReqBodyClient.new(request_client: request_client)
      @req_with_headers_client = ReqWithHeaders::ReqWithHeadersClient.new(request_client: request_client)
    end
  end

  class AsyncClient
    attr_reader :async_client, :async_inlined_requests_client, :async_no_auth_client, :async_no_req_body_client,
                :async_req_with_headers_client

    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @param token [String]
    # @return [AsyncClient]
    def initialize(max_retries: nil, timeout_in_seconds: nil, token: nil)
      AsyncRequestClient.new(headers: headers, base_url: base_url, conn: conn)
      @async_client = Endpoints::AsyncClient.new(client: request_client)
      @async_inlined_requests_client = InlinedRequests::AsyncInlinedRequestsClient.new(request_client: request_client)
      @async_no_auth_client = NoAuth::AsyncNoAuthClient.new(request_client: request_client)
      @async_no_req_body_client = NoReqBody::AsyncNoReqBodyClient.new(request_client: request_client)
      @async_req_with_headers_client = ReqWithHeaders::AsyncReqWithHeadersClient.new(request_client: request_client)
    end
  end
end
