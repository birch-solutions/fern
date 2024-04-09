# frozen_string_literal: true

require_relative "../../v_2/problem/types/test_case_id"
require "ostruct"
require "json"

module SeedTraceClient
  class Submission
    class RecordedTestCaseUpdate
      attr_reader :test_case_id, :trace_responses_size, :additional_properties, :_field_set
      protected :_field_set
      OMIT = Object.new
      # @param test_case_id [SeedTraceClient::V2::Problem::TEST_CASE_ID]
      # @param trace_responses_size [Integer]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedTraceClient::Submission::RecordedTestCaseUpdate]
      def initialize(test_case_id:, trace_responses_size:, additional_properties: nil)
        # @type [SeedTraceClient::V2::Problem::TEST_CASE_ID]
        @test_case_id = test_case_id
        # @type [Integer]
        @trace_responses_size = trace_responses_size
        @_field_set = { "testCaseId": @test_case_id, "traceResponsesSize": @trace_responses_size }.reject do |_k, v|
          v == OMIT
        end
      end

      # Deserialize a JSON object to an instance of RecordedTestCaseUpdate
      #
      # @param json_object [String]
      # @return [SeedTraceClient::Submission::RecordedTestCaseUpdate]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        test_case_id = struct["testCaseId"]
        trace_responses_size = struct["traceResponsesSize"]
        new(test_case_id: test_case_id, trace_responses_size: trace_responses_size, additional_properties: struct)
      end

      # Serialize an instance of RecordedTestCaseUpdate to a JSON object
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
        obj.test_case_id.is_a?(String) != false || raise("Passed value for field obj.test_case_id is not the expected type, validation failed.")
        obj.trace_responses_size.is_a?(Integer) != false || raise("Passed value for field obj.trace_responses_size is not the expected type, validation failed.")
      end
    end
  end
end
