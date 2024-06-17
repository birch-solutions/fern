# frozen_string_literal: true

require_relative "problem_description"
require_relative "variable_type_and_name"
require_relative "../../commons/types/variable_type"
require_relative "../../commons/types/test_case_with_expected_result"
require "ostruct"
require "json"

module SeedTraceClient
  class Problem
    class CreateProblemRequest
      # @return [String]
      attr_reader :problem_name
      # @return [ProblemDescription]
      attr_reader :problem_description
      # @return [Hash{Language => ProblemFiles}]
      attr_reader :files
      # @return [Array<VariableTypeAndName>]
      attr_reader :input_params
      # @return [VariableType]
      attr_reader :output_type
      # @return [Array<TestCaseWithExpectedResult>]
      attr_reader :testcases
      # @return [String]
      attr_reader :method_name
      # @return [OpenStruct] Additional properties unmapped to the current class definition
      attr_reader :additional_properties
      # @return [Object]
      attr_reader :_field_set
      protected :_field_set

      OMIT = Object.new

      # @param problem_name [String]
      # @param problem_description [ProblemDescription]
      # @param files [Hash{Language => ProblemFiles}]
      # @param input_params [Array<VariableTypeAndName>]
      # @param output_type [VariableType]
      # @param testcases [Array<TestCaseWithExpectedResult>]
      # @param method_name [String]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [CreateProblemRequest]
      def initialize(problem_name:, problem_description:, files:, input_params:, output_type:, testcases:,
                     method_name:, additional_properties: nil)
        @problem_name = problem_name
        @problem_description = problem_description
        @files = files
        @input_params = input_params
        @output_type = output_type
        @testcases = testcases
        @method_name = method_name
        @additional_properties = additional_properties
        @_field_set = {
          "problemName": problem_name,
          "problemDescription": problem_description,
          "files": files,
          "inputParams": input_params,
          "outputType": output_type,
          "testcases": testcases,
          "methodName": method_name
        }
      end

      # Deserialize a JSON object to an instance of CreateProblemRequest
      #
      # @param json_object [String]
      # @return [CreateProblemRequest]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        parsed_json = JSON.parse(json_object)
        problem_name = struct["problemName"]
        if parsed_json["problemDescription"].nil?
          problem_description = nil
        else
          problem_description = parsed_json["problemDescription"].to_json
          problem_description = ProblemDescription.from_json(json_object: problem_description)
        end
        files = parsed_json["files"]&.transform_values do |v|
          v = v.to_json
          ProblemFiles.from_json(json_object: v)
        end
        input_params = parsed_json["inputParams"]&.map do |v|
          v = v.to_json
          VariableTypeAndName.from_json(json_object: v)
        end
        if parsed_json["outputType"].nil?
          output_type = nil
        else
          output_type = parsed_json["outputType"].to_json
          output_type = VariableType.from_json(json_object: output_type)
        end
        testcases = parsed_json["testcases"]&.map do |v|
          v = v.to_json
          TestCaseWithExpectedResult.from_json(json_object: v)
        end
        method_name = struct["methodName"]
        new(
          problem_name: problem_name,
          problem_description: problem_description,
          files: files,
          input_params: input_params,
          output_type: output_type,
          testcases: testcases,
          method_name: method_name,
          additional_properties: struct
        )
      end

      # Serialize an instance of CreateProblemRequest to a JSON object
      #
      # @return [String]
      def to_json(*_args)
        @_field_set&.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given
      #  hash and check each fields type against the current object's property
      #  definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        obj.problem_name.is_a?(String) != false || raise("Passed value for field obj.problem_name is not the expected type, validation failed.")
        ProblemDescription.validate_raw(obj: obj.problem_description)
        obj.files.is_a?(Hash) != false || raise("Passed value for field obj.files is not the expected type, validation failed.")
        obj.input_params.is_a?(Array) != false || raise("Passed value for field obj.input_params is not the expected type, validation failed.")
        VariableType.validate_raw(obj: obj.output_type)
        obj.testcases.is_a?(Array) != false || raise("Passed value for field obj.testcases is not the expected type, validation failed.")
        obj.method_name.is_a?(String) != false || raise("Passed value for field obj.method_name is not the expected type, validation failed.")
      end
    end
  end
end
