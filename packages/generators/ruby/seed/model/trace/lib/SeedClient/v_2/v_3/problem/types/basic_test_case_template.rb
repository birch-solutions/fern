# frozen_string_literal: true
require "v_2/v_3/problem/types/TestCaseTemplateId"
require "v_2/v_3/problem/types/TestCaseImplementationDescription"
require "v_2/v_3/problem/types/ParameterId"
require "json"

module SeedClient
  module V2
    module V3
      module Problem
        class BasicTestCaseTemplate
          attr_reader :template_id, :name, :description, :expected_value_parameter_id, :additional_properties
          # @param template_id [V2::V3::Problem::TestCaseTemplateId] 
          # @param name [String] 
          # @param description [V2::V3::Problem::TestCaseImplementationDescription] 
          # @param expected_value_parameter_id [V2::V3::Problem::ParameterId] 
          # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
          # @return [V2::V3::Problem::BasicTestCaseTemplate] 
          def initialze(template_id:, name:, description:, expected_value_parameter_id:, additional_properties: nil)
            # @type [V2::V3::Problem::TestCaseTemplateId] 
            @template_id = template_id
            # @type [String] 
            @name = name
            # @type [V2::V3::Problem::TestCaseImplementationDescription] 
            @description = description
            # @type [V2::V3::Problem::ParameterId] 
            @expected_value_parameter_id = expected_value_parameter_id
            # @type [OpenStruct] Additional properties unmapped to the current class definition
            @additional_properties = additional_properties
          end
          # Deserialize a JSON object to an instance of BasicTestCaseTemplate
          #
          # @param json_object [JSON] 
          # @return [V2::V3::Problem::BasicTestCaseTemplate] 
          def self.from_json(json_object:)
            struct = JSON.parse(json_object, object_class: OpenStruct)
            template_id V2::V3::Problem::TestCaseTemplateId.from_json(json_object: struct.templateId)
            name struct.name
            description V2::V3::Problem::TestCaseImplementationDescription.from_json(json_object: struct.description)
            expected_value_parameter_id V2::V3::Problem::ParameterId.from_json(json_object: struct.expectedValueParameterId)
            new(template_id: template_id, name: name, description: description, expected_value_parameter_id: expected_value_parameter_id, additional_properties: struct)
          end
          # Serialize an instance of BasicTestCaseTemplate to a JSON object
          #
          # @return [JSON] 
          def to_json
            { templateId: @template_id, name: @name, description: @description, expectedValueParameterId: @expected_value_parameter_id }.to_json()
          end
          # Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.
          #
          # @param obj [Object] 
          # @return [Void] 
          def self.validate_raw(obj:)
            TestCaseTemplateId.validate_raw(obj: obj.template_id)
            obj.name.is_a?(String) != false || raise("Passed value for field obj.name is not the expected type, validation failed.")
            TestCaseImplementationDescription.validate_raw(obj: obj.description)
            ParameterId.validate_raw(obj: obj.expected_value_parameter_id)
          end
        end
      end
    end
  end
end