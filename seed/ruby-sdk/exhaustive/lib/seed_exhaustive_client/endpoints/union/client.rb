# frozen_string_literal: true

require_relative "../../types/union/types/animal"
require "async"

module SeedExhaustiveClient
  module Endpoints
    module Union
      class UnionClient
        attr_reader :request_client

        # @param request_client [RequestClient]
        # @return [UnionClient]
        def initialize(request_client:)
          # @type [RequestClient]
          @request_client = request_client
        end

        # @param request [Types::Union::Animal]
        # @param request_options [RequestOptions]
        # @return [Types::Union::Animal]
        def get_and_return_union(request:, request_options: nil)
          response = @request_client.conn.post("/union") do |req|
            req.headers["Authorization"] = @request_client.token unless @request_client.token.nil?
            req.body = request
          end
          Types::Union::Animal.from_json(json_object: response)
        end
      end

      class AsyncUnionClient
        attr_reader :request_client

        # @param request_client [AsyncRequestClient]
        # @return [AsyncUnionClient]
        def initialize(request_client:)
          # @type [AsyncRequestClient]
          @request_client = request_client
        end

        # @param request [Types::Union::Animal]
        # @param request_options [RequestOptions]
        # @return [Types::Union::Animal]
        def get_and_return_union(request:, request_options: nil)
          Async.call do
            response = @request_client.conn.post("/union") do |req|
              req.headers["Authorization"] = @request_client.token unless @request_client.token.nil?
              req.body = request
            end
            Types::Union::Animal.from_json(json_object: response)
          end
        end
      end
    end
  end
end
