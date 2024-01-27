# frozen_string_literal: true

module SeedSingleUrlEnvironmentDefaultClient
  class Dummy
    attr_reader :client

    # @param client [TODOMERGECLIENT]
    # @return [Dummy]
    def initialize(client:)
      # @type [TODOMERGECLIENT]
      @client = client
    end
  end
end
