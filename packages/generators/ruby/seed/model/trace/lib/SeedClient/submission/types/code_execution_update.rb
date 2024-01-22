# frozen_string_literal: true

require_relative "json"
require_relative "submission/types/BuildingExecutorResponse"
require_relative "submission/types/RunningResponse"
require_relative "submission/types/ErroredResponse"
require_relative "submission/types/StoppedResponse"
require_relative "submission/types/GradedResponse"
require_relative "submission/types/GradedResponseV2"
require_relative "submission/types/WorkspaceRanResponse"
require_relative "submission/types/RecordingResponseNotification"
require_relative "submission/types/RecordedResponseNotification"
require_relative "submission/types/InvalidRequestResponse"
require_relative "submission/types/FinishedResponse"

module SeedClient
  module Submission
    class CodeExecutionUpdate
      attr_reader :member, :discriminant

      private_class_method :new
      alias kind_of? is_a?
      # @param member [Object]
      # @param discriminant [String]
      # @return [Submission::CodeExecutionUpdate]
      def initialze(member:, discriminant:)
        # @type [Object]
        @member = member
        # @type [String]
        @discriminant = discriminant
      end

      # Deserialize a JSON object to an instance of CodeExecutionUpdate
      #
      # @param json_object [JSON]
      # @return [Submission::CodeExecutionUpdate]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        member = case struct.type
                 when "buildingExecutor"
                   Submission::BuildingExecutorResponse.from_json(json_object: json_object)
                 when "running"
                   Submission::RunningResponse.from_json(json_object: json_object)
                 when "errored"
                   Submission::ErroredResponse.from_json(json_object: json_object)
                 when "stopped"
                   Submission::StoppedResponse.from_json(json_object: json_object)
                 when "graded"
                   Submission::GradedResponse.from_json(json_object: json_object)
                 when "gradedV2"
                   Submission::GradedResponseV2.from_json(json_object: json_object)
                 when "workspaceRan"
                   Submission::WorkspaceRanResponse.from_json(json_object: json_object)
                 when "recording"
                   Submission::RecordingResponseNotification.from_json(json_object: json_object)
                 when "recorded"
                   Submission::RecordedResponseNotification.from_json(json_object: json_object)
                 when "invalidRequest"
                   Submission::InvalidRequestResponse.from_json(json_object: json_object)
                 when "finished"
                   Submission::FinishedResponse.from_json(json_object: json_object)
                 else
                   Submission::BuildingExecutorResponse.from_json(json_object: json_object)
                 end
        new(member: member, discriminant: struct.type)
      end

      # For Union Types, to_json functionality is delegated to the wrapped member.
      #
      # @return []
      def to_json(*_args)
        case @discriminant
        when "buildingExecutor"
          { type: @discriminant, **@member.to_json }.to_json
        when "running"
          { type: @discriminant, **@member.to_json }.to_json
        when "errored"
          { type: @discriminant, **@member.to_json }.to_json
        when "stopped"
          { type: @discriminant, **@member.to_json }.to_json
        when "graded"
          { type: @discriminant, **@member.to_json }.to_json
        when "gradedV2"
          { type: @discriminant, **@member.to_json }.to_json
        when "workspaceRan"
          { type: @discriminant, **@member.to_json }.to_json
        when "recording"
          { type: @discriminant, **@member.to_json }.to_json
        when "recorded"
          { type: @discriminant, **@member.to_json }.to_json
        when "invalidRequest"
          { type: @discriminant, **@member.to_json }.to_json
        when "finished"
          { type: @discriminant, **@member.to_json }.to_json
        else
          { type: @discriminant, value: @member }.to_json
        end
        @member.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        case obj.type
        when "buildingExecutor"
          BuildingExecutorResponse.validate_raw(obj: obj)
        when "running"
          RunningResponse.validate_raw(obj: obj)
        when "errored"
          ErroredResponse.validate_raw(obj: obj)
        when "stopped"
          StoppedResponse.validate_raw(obj: obj)
        when "graded"
          GradedResponse.validate_raw(obj: obj)
        when "gradedV2"
          GradedResponseV2.validate_raw(obj: obj)
        when "workspaceRan"
          WorkspaceRanResponse.validate_raw(obj: obj)
        when "recording"
          RecordingResponseNotification.validate_raw(obj: obj)
        when "recorded"
          RecordedResponseNotification.validate_raw(obj: obj)
        when "invalidRequest"
          InvalidRequestResponse.validate_raw(obj: obj)
        when "finished"
          FinishedResponse.validate_raw(obj: obj)
        else
          raise("Passed value matched no type within the union, validation failed.")
        end
      end

      # For Union Types, is_a? functionality is delegated to the wrapped member.
      #
      # @param obj [Object]
      # @return []
      def is_a(obj)
        @member.is_a?(obj)
      end

      # @param member [Submission::BuildingExecutorResponse]
      # @return [Submission::CodeExecutionUpdate]
      def self.building_executor(member:)
        new(member: member, discriminant: "buildingExecutor")
      end

      # @param member [Submission::RunningResponse]
      # @return [Submission::CodeExecutionUpdate]
      def self.running(member:)
        new(member: member, discriminant: "running")
      end

      # @param member [Submission::ErroredResponse]
      # @return [Submission::CodeExecutionUpdate]
      def self.errored(member:)
        new(member: member, discriminant: "errored")
      end

      # @param member [Submission::StoppedResponse]
      # @return [Submission::CodeExecutionUpdate]
      def self.stopped(member:)
        new(member: member, discriminant: "stopped")
      end

      # @param member [Submission::GradedResponse]
      # @return [Submission::CodeExecutionUpdate]
      def self.graded(member:)
        new(member: member, discriminant: "graded")
      end

      # @param member [Submission::GradedResponseV2]
      # @return [Submission::CodeExecutionUpdate]
      def self.graded_v_2(member:)
        new(member: member, discriminant: "gradedV2")
      end

      # @param member [Submission::WorkspaceRanResponse]
      # @return [Submission::CodeExecutionUpdate]
      def self.workspace_ran(member:)
        new(member: member, discriminant: "workspaceRan")
      end

      # @param member [Submission::RecordingResponseNotification]
      # @return [Submission::CodeExecutionUpdate]
      def self.recording(member:)
        new(member: member, discriminant: "recording")
      end

      # @param member [Submission::RecordedResponseNotification]
      # @return [Submission::CodeExecutionUpdate]
      def self.recorded(member:)
        new(member: member, discriminant: "recorded")
      end

      # @param member [Submission::InvalidRequestResponse]
      # @return [Submission::CodeExecutionUpdate]
      def self.invalid_request(member:)
        new(member: member, discriminant: "invalidRequest")
      end

      # @param member [Submission::FinishedResponse]
      # @return [Submission::CodeExecutionUpdate]
      def self.finished(member:)
        new(member: member, discriminant: "finished")
      end
    end
  end
end
