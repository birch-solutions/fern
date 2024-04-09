# frozen_string_literal: true

require_relative "../../v_2/problem/types/test_case_id"
require_relative "test_case_grade"
require "ostruct"
require "json"

module SeedTraceClient
  class Submission
    class GradedTestCaseUpdate
      attr_reader :test_case_id, :grade, :additional_properties, :_field_set
      protected :_field_set
      OMIT = Object.new
      # @param test_case_id [SeedTraceClient::V2::Problem::TEST_CASE_ID]
      # @param grade [SeedTraceClient::Submission::TestCaseGrade]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedTraceClient::Submission::GradedTestCaseUpdate]
      def initialize(test_case_id:, grade:, additional_properties: nil)
        # @type [SeedTraceClient::V2::Problem::TEST_CASE_ID]
        @test_case_id = test_case_id
        # @type [SeedTraceClient::Submission::TestCaseGrade]
        @grade = grade
        @_field_set = { "testCaseId": @test_case_id, "grade": @grade }.reject do |_k, v|
          v == OMIT
        end
      end

      # Deserialize a JSON object to an instance of GradedTestCaseUpdate
      #
      # @param json_object [String]
      # @return [SeedTraceClient::Submission::GradedTestCaseUpdate]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        parsed_json = JSON.parse(json_object)
        test_case_id = struct["testCaseId"]
        if parsed_json["grade"].nil?
          grade = nil
        else
          grade = parsed_json["grade"].to_json
          grade = SeedTraceClient::Submission::TestCaseGrade.from_json(json_object: grade)
        end
        new(test_case_id: test_case_id, grade: grade, additional_properties: struct)
      end

      # Serialize an instance of GradedTestCaseUpdate to a JSON object
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
        SeedTraceClient::Submission::TestCaseGrade.validate_raw(obj: obj.grade)
      end
    end
  end
end
