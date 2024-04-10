# frozen_string_literal: true

require "ostruct"
require "json"

module SeedTraceClient
  class Submission
    class GradedResponseV2
      # @return [String]
      attr_reader :submission_id
      # @return [Hash{String => SeedTraceClient::Submission::TestCaseGrade}]
      attr_reader :test_cases
      # @return [OpenStruct] Additional properties unmapped to the current class definition
      attr_reader :additional_properties
      # @return [Object]
      attr_reader :_field_set
      protected :_field_set

      OMIT = Object.new

      # @param submission_id [String]
      # @param test_cases [Hash{String => SeedTraceClient::Submission::TestCaseGrade}]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedTraceClient::Submission::GradedResponseV2]
      def initialize(submission_id:, test_cases:, additional_properties: nil)
        @submission_id = submission_id
        @test_cases = test_cases
        @additional_properties = additional_properties
        @_field_set = { "submissionId": submission_id, "testCases": test_cases }
      end

      # Deserialize a JSON object to an instance of GradedResponseV2
      #
      # @param json_object [String]
      # @return [SeedTraceClient::Submission::GradedResponseV2]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        parsed_json = JSON.parse(json_object)
        submission_id = struct["submissionId"]
        test_cases = parsed_json["testCases"]&.transform_values do |v|
          v = v.to_json
          SeedTraceClient::Submission::TestCaseGrade.from_json(json_object: v)
        end
        new(submission_id: submission_id, test_cases: test_cases, additional_properties: struct)
      end

      # Serialize an instance of GradedResponseV2 to a JSON object
      #
      # @return [String]
      def to_json(*_args)
        @_field_set&.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given
      #  hash and check each fields type against the current object's property
      #  definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        obj.submission_id.is_a?(String) != false || raise("Passed value for field obj.submission_id is not the expected type, validation failed.")
        obj.test_cases.is_a?(Hash) != false || raise("Passed value for field obj.test_cases is not the expected type, validation failed.")
      end
    end
  end
end
