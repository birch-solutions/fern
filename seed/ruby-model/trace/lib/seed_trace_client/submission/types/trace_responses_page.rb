# frozen_string_literal: true

require_relative "trace_response"
require "ostruct"
require "json"

module SeedTraceClient
  class Submission
    class TraceResponsesPage
      attr_reader :offset, :trace_responses, :additional_properties, :_field_set
      protected :_field_set
      OMIT = Object.new
      # @param offset [Integer] If present, use this to load subseqent pages.
      #   The offset is the id of the next trace response to load.
      # @param trace_responses [Array<SeedTraceClient::Submission::TraceResponse>]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedTraceClient::Submission::TraceResponsesPage]
      def initialize(trace_responses:, offset: OMIT, additional_properties: nil)
        # @type [Integer] If present, use this to load subseqent pages.
        #   The offset is the id of the next trace response to load.
        @offset = offset if offset != OMIT
        # @type [Array<SeedTraceClient::Submission::TraceResponse>]
        @trace_responses = trace_responses
        @_field_set = { "offset": @offset, "traceResponses": @trace_responses }.reject do |_k, v|
          v == OMIT
        end
      end

      # Deserialize a JSON object to an instance of TraceResponsesPage
      #
      # @param json_object [String]
      # @return [SeedTraceClient::Submission::TraceResponsesPage]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        parsed_json = JSON.parse(json_object)
        offset = struct["offset"]
        trace_responses = parsed_json["traceResponses"]&.map do |v|
          v = v.to_json
          SeedTraceClient::Submission::TraceResponse.from_json(json_object: v)
        end
        new(offset: offset, trace_responses: trace_responses, additional_properties: struct)
      end

      # Serialize an instance of TraceResponsesPage to a JSON object
      #
      # @return [String]
      def to_json(*_args)
        @_field_set&.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        obj.offset&.is_a?(Integer) != false || raise("Passed value for field obj.offset is not the expected type, validation failed.")
        obj.trace_responses.is_a?(Array) != false || raise("Passed value for field obj.trace_responses is not the expected type, validation failed.")
      end
    end
  end
end
