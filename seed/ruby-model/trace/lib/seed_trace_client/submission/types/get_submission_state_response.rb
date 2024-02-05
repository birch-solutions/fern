# frozen_string_literal: true

require "date"
require_relative "../../commons/types/language"
require_relative "submission_type_state"
require "json"

module SeedTraceClient
  module Submission
    class GetSubmissionStateResponse
      attr_reader :time_submitted, :submission, :language, :submission_type_state, :additional_properties

      # @param time_submitted [DateTime]
      # @param submission [String]
      # @param language [LANGUAGE]
      # @param submission_type_state [Submission::SubmissionTypeState]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [Submission::GetSubmissionStateResponse]
      def initialize(submission:, language:, submission_type_state:, time_submitted: nil, additional_properties: nil)
        # @type [DateTime]
        @time_submitted = time_submitted
        # @type [String]
        @submission = submission
        # @type [LANGUAGE]
        @language = language
        # @type [Submission::SubmissionTypeState]
        @submission_type_state = submission_type_state
        # @type [OpenStruct] Additional properties unmapped to the current class definition
        @additional_properties = additional_properties
      end

      # Deserialize a JSON object to an instance of GetSubmissionStateResponse
      #
      # @param json_object [JSON]
      # @return [Submission::GetSubmissionStateResponse]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        parsed_json = JSON.parse(json_object)
        time_submitted = DateTime.parse(parsed_json["timeSubmitted"])
        submission = struct.submission
        language = Commons::LANGUAGE.key(parsed_json["language"]) || parsed_json["language"]
        if parsed_json["submissionTypeState"].nil?
          submission_type_state = nil
        else
          submission_type_state = parsed_json["submissionTypeState"].to_json
          submission_type_state = Submission::SubmissionTypeState.from_json(json_object: submission_type_state)
        end
        new(time_submitted: time_submitted, submission: submission, language: language,
            submission_type_state: submission_type_state, additional_properties: struct)
      end

      # Serialize an instance of GetSubmissionStateResponse to a JSON object
      #
      # @return [JSON]
      def to_json(*_args)
        {
          "timeSubmitted": @time_submitted,
          "submission": @submission,
          "language": Commons::LANGUAGE[@language] || @language,
          "submissionTypeState": @submission_type_state
        }.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        obj.time_submitted&.is_a?(DateTime) != false || raise("Passed value for field obj.time_submitted is not the expected type, validation failed.")
        obj.submission.is_a?(String) != false || raise("Passed value for field obj.submission is not the expected type, validation failed.")
        obj.language.is_a?(Commons::LANGUAGE) != false || raise("Passed value for field obj.language is not the expected type, validation failed.")
        Submission::SubmissionTypeState.validate_raw(obj: obj.submission_type_state)
      end
    end
  end
end
