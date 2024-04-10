# frozen_string_literal: true

require "ostruct"
require "json"

module SeedTraceClient
  class Submission
    class StderrResponse
      attr_reader :submission_id, :stderr, :additional_properties, :_field_set
      protected :_field_set
      OMIT = Object.new
      # @param submission_id [String]
      # @param stderr [String]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedTraceClient::Submission::StderrResponse]
      def initialize(submission_id:, stderr:, additional_properties: nil)
        # @type [String]
        @submission_id = submission_id
        # @type [String]
        @stderr = stderr
        @_field_set = { "submissionId": @submission_id, "stderr": @stderr }.reject do |_k, v|
          v == OMIT
        end
      end

      # Deserialize a JSON object to an instance of StderrResponse
      #
      # @param json_object [String]
      # @return [SeedTraceClient::Submission::StderrResponse]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        submission_id = struct["submissionId"]
        stderr = struct["stderr"]
        new(submission_id: submission_id, stderr: stderr, additional_properties: struct)
      end

      # Serialize an instance of StderrResponse to a JSON object
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
        obj.stderr.is_a?(String) != false || raise("Passed value for field obj.stderr is not the expected type, validation failed.")
      end
    end
  end
end
