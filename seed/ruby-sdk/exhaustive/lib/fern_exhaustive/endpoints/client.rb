# frozen_string_literal: true

require_relative "../../requests"
require_relative "container/client"
require_relative "enum/client"
require_relative "http_methods/client"
require_relative "object/client"
require_relative "params/client"
require_relative "primitive/client"
require_relative "union/client"

module SeedExhaustiveClient
  module Endpoints
    class Client
      attr_reader :container, :enum, :http_methods, :object, :params, :primitive, :union

      # @param request_client [SeedExhaustiveClient::RequestClient]
      # @return [SeedExhaustiveClient::Endpoints::Client]
      def initialize(request_client:)
        @container = SeedExhaustiveClient::Endpoints::ContainerClient.new(request_client: request_client)
        @enum = SeedExhaustiveClient::Endpoints::EnumClient.new(request_client: request_client)
        @http_methods = SeedExhaustiveClient::Endpoints::HttpMethodsClient.new(request_client: request_client)
        @object = SeedExhaustiveClient::Endpoints::ObjectClient.new(request_client: request_client)
        @params = SeedExhaustiveClient::Endpoints::ParamsClient.new(request_client: request_client)
        @primitive = SeedExhaustiveClient::Endpoints::PrimitiveClient.new(request_client: request_client)
        @union = SeedExhaustiveClient::Endpoints::UnionClient.new(request_client: request_client)
      end
    end

    class AsyncClient
      attr_reader :container, :enum, :http_methods, :object, :params, :primitive, :union

      # @param request_client [SeedExhaustiveClient::AsyncRequestClient]
      # @return [SeedExhaustiveClient::Endpoints::AsyncClient]
      def initialize(request_client:)
        @container = SeedExhaustiveClient::Endpoints::AsyncContainerClient.new(request_client: request_client)
        @enum = SeedExhaustiveClient::Endpoints::AsyncEnumClient.new(request_client: request_client)
        @http_methods = SeedExhaustiveClient::Endpoints::AsyncHttpMethodsClient.new(request_client: request_client)
        @object = SeedExhaustiveClient::Endpoints::AsyncObjectClient.new(request_client: request_client)
        @params = SeedExhaustiveClient::Endpoints::AsyncParamsClient.new(request_client: request_client)
        @primitive = SeedExhaustiveClient::Endpoints::AsyncPrimitiveClient.new(request_client: request_client)
        @union = SeedExhaustiveClient::Endpoints::AsyncUnionClient.new(request_client: request_client)
      end
    end
  end
end
