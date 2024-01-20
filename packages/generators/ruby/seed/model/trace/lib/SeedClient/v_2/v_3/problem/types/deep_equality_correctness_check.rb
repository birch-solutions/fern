# frozen_string_literal: true

module SeedClient
  module V2
    module V3
      module Problem
        class DeepEqualityCorrectnessCheck
          attr_reader :expected_value_parameter_id, :additional_properties

          # @param expected_value_parameter_id [V2::V3::Problem::ParameterId]
          # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
          # @return [V2::V3::Problem::DeepEqualityCorrectnessCheck]
          def initialze(expected_value_parameter_id:, additional_properties: nil)
            # @type [V2::V3::Problem::ParameterId]
            @expected_value_parameter_id = expected_value_parameter_id
            # @type [OpenStruct]
            @additional_properties = additional_properties
          end

          # Deserialize a JSON object to an instance of DeepEqualityCorrectnessCheck
          #
          # @param json_object [JSON]
          # @return [V2::V3::Problem::DeepEqualityCorrectnessCheck]
          def self.from_json(json_object:)
            struct = JSON.parse(json_object, object_class: OpenStruct)
            expected_value_parameter_id = V2::V3::Problem::ParameterId.from_json(json_object: struct.expectedValueParameterId)
            new(expected_value_parameter_id: expected_value_parameter_id, additional_properties: struct)
          end

          # Serialize an instance of DeepEqualityCorrectnessCheck to a JSON object
          #
          # @return [JSON]
          def to_json(*_args)
            {
              expectedValueParameterId: @expected_value_parameter_id
            }.to_json
          end
        end
      end
    end
  end
end
