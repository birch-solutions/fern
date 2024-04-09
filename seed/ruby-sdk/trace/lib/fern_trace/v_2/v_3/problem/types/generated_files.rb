# frozen_string_literal: true

require "ostruct"
require "json"

module SeedTraceClient
  module V2
    module V3
      class Problem
        class GeneratedFiles
          attr_reader :generated_test_case_files, :generated_template_files, :other, :additional_properties, :_field_set
          protected :_field_set
          OMIT = Object.new
          # @param generated_test_case_files [Hash{SeedTraceClient::Commons::Language => SeedTraceClient::V2::V3::Problem::Files}]
          # @param generated_template_files [Hash{SeedTraceClient::Commons::Language => SeedTraceClient::V2::V3::Problem::Files}]
          # @param other [Hash{SeedTraceClient::Commons::Language => SeedTraceClient::V2::V3::Problem::Files}]
          # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
          # @return [SeedTraceClient::V2::V3::Problem::GeneratedFiles]
          def initialize(generated_test_case_files:, generated_template_files:, other:, additional_properties: nil)
            # @type [Hash{SeedTraceClient::Commons::Language => SeedTraceClient::V2::V3::Problem::Files}]
            @generated_test_case_files = generated_test_case_files
            # @type [Hash{SeedTraceClient::Commons::Language => SeedTraceClient::V2::V3::Problem::Files}]
            @generated_template_files = generated_template_files
            # @type [Hash{SeedTraceClient::Commons::Language => SeedTraceClient::V2::V3::Problem::Files}]
            @other = other
            @_field_set = {
              "generatedTestCaseFiles": @generated_test_case_files,
              "generatedTemplateFiles": @generated_template_files,
              "other": @other
            }.reject do |_k, v|
              v == OMIT
            end
          end

          # Deserialize a JSON object to an instance of GeneratedFiles
          #
          # @param json_object [String]
          # @return [SeedTraceClient::V2::V3::Problem::GeneratedFiles]
          def self.from_json(json_object:)
            struct = JSON.parse(json_object, object_class: OpenStruct)
            parsed_json = JSON.parse(json_object)
            generated_test_case_files = parsed_json["generatedTestCaseFiles"]&.transform_values do |v|
              v = v.to_json
              SeedTraceClient::V2::V3::Problem::Files.from_json(json_object: v)
            end
            generated_template_files = parsed_json["generatedTemplateFiles"]&.transform_values do |v|
              v = v.to_json
              SeedTraceClient::V2::V3::Problem::Files.from_json(json_object: v)
            end
            other = parsed_json["other"]&.transform_values do |v|
              v = v.to_json
              SeedTraceClient::V2::V3::Problem::Files.from_json(json_object: v)
            end
            new(generated_test_case_files: generated_test_case_files,
                generated_template_files: generated_template_files, other: other, additional_properties: struct)
          end

          # Serialize an instance of GeneratedFiles to a JSON object
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
            obj.generated_test_case_files.is_a?(Hash) != false || raise("Passed value for field obj.generated_test_case_files is not the expected type, validation failed.")
            obj.generated_template_files.is_a?(Hash) != false || raise("Passed value for field obj.generated_template_files is not the expected type, validation failed.")
            obj.other.is_a?(Hash) != false || raise("Passed value for field obj.other is not the expected type, validation failed.")
          end
        end
      end
    end
  end
end
