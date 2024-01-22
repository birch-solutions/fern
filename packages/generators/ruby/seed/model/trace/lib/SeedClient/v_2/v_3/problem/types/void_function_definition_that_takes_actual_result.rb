# frozen_string_literal: true
require_relative "v_2/v_3/problem/types/Parameter"
require_relative "v_2/v_3/problem/types/FunctionImplementationForMultipleLanguages"
require "json"

module SeedClient
  module V2
    module V3
      module Problem
        # The generated signature will include an additional param, actualResult
        class VoidFunctionDefinitionThatTakesActualResult
          attr_reader :additional_parameters, :code, :additional_properties
          # @param additional_parameters [Array<V2::V3::Problem::Parameter>] 
          # @param code [V2::V3::Problem::FunctionImplementationForMultipleLanguages] 
          # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
          # @return [V2::V3::Problem::VoidFunctionDefinitionThatTakesActualResult]
          def initialze(additional_parameters:, code:, additional_properties: nil)
            # @type [Array<V2::V3::Problem::Parameter>] 
            @additional_parameters = additional_parameters
            # @type [V2::V3::Problem::FunctionImplementationForMultipleLanguages] 
            @code = code
            # @type [OpenStruct] Additional properties unmapped to the current class definition
            @additional_properties = additional_properties
          end
          # Deserialize a JSON object to an instance of VoidFunctionDefinitionThatTakesActualResult
          #
          # @param json_object [JSON] 
          # @return [V2::V3::Problem::VoidFunctionDefinitionThatTakesActualResult]
          def self.from_json(json_object:)
            struct = JSON.parse(json_object, object_class: OpenStruct)
            additional_parameters = struct.additionalParameters.map() do | v |
  V2::V3::Problem::Parameter.from_json(json_object: v)
end
            code = V2::V3::Problem::FunctionImplementationForMultipleLanguages.from_json(json_object: struct.code)
            new(additional_parameters: additional_parameters, code: code, additional_properties: struct)
          end
          # Serialize an instance of VoidFunctionDefinitionThatTakesActualResult to a JSON object
          #
          # @return [JSON]
          def to_json
            { additionalParameters: @additional_parameters, code: @code }.to_json()
          end
          # Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.
          #
          # @param obj [Object] 
          # @return [Void]
          def self.validate_raw(obj:)
            obj.additional_parameters.is_a?(Array) != false || raise("Passed value for field obj.additional_parameters is not the expected type, validation failed.")
            V2::V3::Problem::FunctionImplementationForMultipleLanguages.validate_raw(obj: obj.code)
          end
        end
      end
    end
  end
end