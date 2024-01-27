# frozen_string_literal: true

module SeedExamplesClient
  class Service
    attr_reader :client

    # @param client [TODOMERGECLIENT]
    # @return [Service]
    def initialize(client:)
      # @type [TODOMERGECLIENT]
      @client = client
    end
  end
end
