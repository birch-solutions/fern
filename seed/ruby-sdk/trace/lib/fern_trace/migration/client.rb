# frozen_string_literal: true

require_relative "../../requests"
require_relative "types/migration"
require "async"

module SeedTraceClient
  class MigrationClient
    attr_reader :request_client

    # @param request_client [SeedTraceClient::RequestClient]
    # @return [SeedTraceClient::MigrationClient]
    def initialize(request_client:)
      # @type [SeedTraceClient::RequestClient]
      @request_client = request_client
    end

    # @param admin_key_header [String]
    # @param request_options [SeedTraceClient::RequestOptions]
    # @return [Array<SeedTraceClient::Migration::Migration>]
    def get_attempted_migrations(admin_key_header:, request_options: nil)
      response = @request_client.conn.get do |req|
        req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
        req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
        req.headers["X-Random-Header"] = request_options.x_random_header unless request_options&.x_random_header.nil?
        req.headers = {
          **req.headers,
          **(request_options&.additional_headers || {}),
          "admin-key-header": admin_key_header
        }.compact
        req.url "#{@request_client.get_url(request_options: request_options)}/migration-info/all"
      end
      response.body&.map do |v|
        v = v.to_json
        SeedTraceClient::Migration::Migration.from_json(json_object: v)
      end
    end
  end

  class AsyncMigrationClient
    attr_reader :request_client

    # @param request_client [SeedTraceClient::AsyncRequestClient]
    # @return [SeedTraceClient::AsyncMigrationClient]
    def initialize(request_client:)
      # @type [SeedTraceClient::AsyncRequestClient]
      @request_client = request_client
    end

    # @param admin_key_header [String]
    # @param request_options [SeedTraceClient::RequestOptions]
    # @return [Array<SeedTraceClient::Migration::Migration>]
    def get_attempted_migrations(admin_key_header:, request_options: nil)
      Async do
        response = @request_client.conn.get do |req|
          req.options.timeout = request_options.timeout_in_seconds unless request_options&.timeout_in_seconds.nil?
          req.headers["Authorization"] = request_options.token unless request_options&.token.nil?
          req.headers["X-Random-Header"] = request_options.x_random_header unless request_options&.x_random_header.nil?
          req.headers = {
            **req.headers,
            **(request_options&.additional_headers || {}),
            "admin-key-header": admin_key_header
          }.compact
          req.url "#{@request_client.get_url(request_options: request_options)}/migration-info/all"
        end
        response.body&.map do |v|
          v = v.to_json
          SeedTraceClient::Migration::Migration.from_json(json_object: v)
        end
      end
    end
  end
end
