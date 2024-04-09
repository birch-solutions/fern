# frozen_string_literal: true

require_relative "submission_id"
require "ostruct"
require "json"

module SeedTraceClient
  class Submission
    class FinishedResponse
      attr_reader :submission_id, :additional_properties, :_field_set
      protected :_field_set
      OMIT = Object.new
      # @param submission_id [SeedTraceClient::Submission::SUBMISSION_ID]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedTraceClient::Submission::FinishedResponse]
      def initialize(submission_id:, additional_properties: nil)
        # @type [SeedTraceClient::Submission::SUBMISSION_ID]
        @submission_id = submission_id
        @_field_set = { "submissionId": @submission_id }.reject do |_k, v|
          v == OMIT
        end
      end

      # Deserialize a JSON object to an instance of FinishedResponse
      #
      # @param json_object [String]
      # @return [SeedTraceClient::Submission::FinishedResponse]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        submission_id = struct["submissionId"]
        new(submission_id: submission_id, additional_properties: struct)
      end

      # Serialize an instance of FinishedResponse to a JSON object
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
        obj.submission_id.is_a?(String) != false || raise("Passed value for field obj.submission_id is not the expected type, validation failed.")
      end
    end
  end
end
