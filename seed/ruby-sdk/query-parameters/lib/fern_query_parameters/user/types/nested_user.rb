# frozen_string_literal: true

require_relative "user"
require "ostruct"
require "json"

module SeedQueryParametersClient
  class User
    class NestedUser
      # @return [String]
      attr_reader :name
      # @return [User]
      attr_reader :user
      # @return [OpenStruct] Additional properties unmapped to the current class definition
      attr_reader :additional_properties
      # @return [Object]
      attr_reader :_field_set
      protected :_field_set

      OMIT = Object.new

      # @param name [String]
      # @param user [User]
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [NestedUser]
      def initialize(name:, user:, additional_properties: nil)
        @name = name
        @user = user
        @additional_properties = additional_properties
        @_field_set = { "name": name, "user": user }
      end

      # Deserialize a JSON object to an instance of NestedUser
      #
      # @param json_object [String]
      # @return [NestedUser]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        parsed_json = JSON.parse(json_object)
        name = struct["name"]
        if parsed_json["user"].nil?
          user = nil
        else
          user = parsed_json["user"].to_json
          user = User.from_json(json_object: user)
        end
        new(
          name: name,
          user: user,
          additional_properties: struct
        )
      end

      # Serialize an instance of NestedUser to a JSON object
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
        obj.name.is_a?(String) != false || raise("Passed value for field obj.name is not the expected type, validation failed.")
        User.validate_raw(obj: obj.user)
      end
    end
  end
end
