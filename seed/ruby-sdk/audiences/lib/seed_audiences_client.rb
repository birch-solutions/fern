# frozen_string_literal: true

require_relative "seed_audiences_client/commons/types/imported"
require_relative "seed_audiences_client/folder_a/service/types/response"
require_relative "seed_audiences_client/folder_b/common/types/foo"
require_relative "seed_audiences_client/folder_c/common/types/foo"
require_relative "seed_audiences_client/foo/types/filtered_type"
require_relative "seed_audiences_client/foo/types/importing_type"
require_relative "seed_audiences_client/foo/types/optional_string"
require "faraday"
require_relative "seed_audiences_client/folder_a/service/client"
require_relative "seed_audiences_client/folder_aclient"
require_relative "seed_audiences_client/foo/client"
require "async/http/faraday"

module SeedAudiencesClient
  class Client
    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @return []
    def initialize(max_retries: nil, timeout_in_seconds: nil)
      request_client = RequestClient.initialize(headers: headers, base_url: base_url, conn: conn)
      @client = Client.initialize(request_client: request_client)
      @foo_client = FooClient.initialize(request_client: request_client)
    end
  end

  class AsyncClient
    # @param max_retries [Long] The number of times to retry a failed request, defaults to 2.
    # @param timeout_in_seconds [Long]
    # @return []
    def initialize(max_retries: nil, timeout_in_seconds: nil)
      AsyncRequestClient.initialize(headers: headers, base_url: base_url, conn: conn)
      @async_client = AsyncClient.initialize(client: request_client)
      @async_foo_client = AsyncFooClient.initialize(request_client: request_client)
    end
  end
end
