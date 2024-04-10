# frozen_string_literal: true

require_relative "execution_session_status"
require "ostruct"
require "json"

module SeedTraceClient
  class Submission
    class BuildingExecutorResponse
      attr_reader :submission_id, :status, :additional_properties, :_field_set
      protected :_field_set
      OMIT = Object.new
      # @param submission_id [String]
      # @param status [SeedTraceClient::Submission::ExecutionSessionStatus]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [SeedTraceClient::Submission::BuildingExecutorResponse]
      def initialize(submission_id:, status:, additional_properties: nil)
        # @type [String]
        @submission_id = submission_id
        # @type [SeedTraceClient::Submission::ExecutionSessionStatus]
        @status = status
        @_field_set = { "submissionId": @submission_id, "status": @status }.reject do |_k, v|
          v == OMIT
        end
      end

      # Deserialize a JSON object to an instance of BuildingExecutorResponse
      #
      # @param json_object [String]
      # @return [SeedTraceClient::Submission::BuildingExecutorResponse]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        submission_id = struct["submissionId"]
        status = struct["status"]
        new(submission_id: submission_id, status: status, additional_properties: struct)
      end

      # Serialize an instance of BuildingExecutorResponse to a JSON object
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
        obj.status.is_a?(SeedTraceClient::Submission::ExecutionSessionStatus) != false || raise("Passed value for field obj.status is not the expected type, validation failed.")
      end
    end
  end
end
