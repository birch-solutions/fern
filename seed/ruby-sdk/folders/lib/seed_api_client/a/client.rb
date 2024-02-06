# frozen_string_literal: true
require_relative "../../requests"
require_relative "c/client"

module SeedApiClient
  module A
    class Client
      attr_reader :
      # @param request_client [RequestClient] 
      # @return [A::Client]
      def initialize(request_client:)
        @ = A::C::Client.new(request_client: request_client)
      end
    end
    class AsyncClient
      attr_reader :
      # @param request_client [RequestClient] 
      # @return [A::AsyncClient]
      def initialize(request_client:)
        @ = A::C::AsyncClient.new(request_client: request_client)
      end
    end
  end
end