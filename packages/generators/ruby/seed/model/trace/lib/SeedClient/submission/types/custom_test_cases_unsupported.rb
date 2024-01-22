# frozen_string_literal: true

require_relative "commons/types/PROBLEM_ID"
require_relative "submission/types/SUBMISSION_ID"
require "json"

module SeedClient
  module Submission
    class CustomTestCasesUnsupported
      attr_reader :problem_id, :submission_id, :additional_properties

      # @param problem_id [Commons::PROBLEM_ID]
      # @param submission_id [Submission::SUBMISSION_ID]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [Submission::CustomTestCasesUnsupported]
      def initialze(problem_id:, submission_id:, additional_properties: nil)
        # @type [Commons::PROBLEM_ID]
        @problem_id = problem_id
        # @type [Submission::SUBMISSION_ID]
        @submission_id = submission_id
        # @type [OpenStruct] Additional properties unmapped to the current class definition
        @additional_properties = additional_properties
      end

      # Deserialize a JSON object to an instance of CustomTestCasesUnsupported
      #
      # @param json_object [JSON]
      # @return [Submission::CustomTestCasesUnsupported]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        problem_id = Commons::PROBLEM_ID.from_json(json_object: struct.problemId)
        submission_id = Submission::SUBMISSION_ID.from_json(json_object: struct.submissionId)
        new(problem_id: problem_id, submission_id: submission_id, additional_properties: struct)
      end

      # Serialize an instance of CustomTestCasesUnsupported to a JSON object
      #
      # @return [JSON]
      def to_json(*_args)
        { problemId: @problem_id, submissionId: @submission_id }.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        Commons::PROBLEM_ID.validate_raw(obj: obj.problem_id)
        Submission::SUBMISSION_ID.validate_raw(obj: obj.submission_id)
      end
    end
  end
end
