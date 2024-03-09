# frozen_string_literal: true

require "json"
require_relative "foo"
require_relative "bar"

module SeedUnionsClient
  class Types
    class UnionWithoutKey
      attr_reader :member, :discriminant

      private_class_method :new
      alias kind_of? is_a?
      # @param member [Object]
      # @param discriminant [String]
      # @return [Types::UnionWithoutKey]
      def initialize(member:, discriminant:)
        # @type [Object]
        @member = member
        # @type [String]
        @discriminant = discriminant
      end

      # Deserialize a JSON object to an instance of UnionWithoutKey
      #
      # @param json_object [JSON]
      # @return [Types::UnionWithoutKey]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        member = case struct.type
                 when "foo"
                   Types::Foo.from_json(json_object: json_object)
                 when "bar"
                   Types::Bar.from_json(json_object: json_object)
                 else
                   Types::Foo.from_json(json_object: json_object)
                 end
        new(member: member, discriminant: struct.type)
      end

      # For Union Types, to_json functionality is delegated to the wrapped member.
      #
      # @return [JSON]
      def to_json(*_args)
        case @discriminant
        when "foo"
          { **@member.to_json, type: @discriminant }.to_json
        when "bar"
          { **@member.to_json, type: @discriminant }.to_json
        else
          { "type": @discriminant, value: @member }.to_json
        end
        @member.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        case obj.type
        when "foo"
          Types::Foo.validate_raw(obj: obj)
        when "bar"
          Types::Bar.validate_raw(obj: obj)
        else
          raise("Passed value matched no type within the union, validation failed.")
        end
      end

      # For Union Types, is_a? functionality is delegated to the wrapped member.
      #
      # @param obj [Object]
      # @return [Boolean]
      def is_a?(obj)
        @member.is_a?(obj)
      end

      # @param member [Types::Foo]
      # @return [Types::UnionWithoutKey]
      def self.foo(member:)
        new(member: member, discriminant: "foo")
      end

      # @param member [Types::Bar]
      # @return [Types::UnionWithoutKey]
      def self.bar(member:)
        new(member: member, discriminant: "bar")
      end
    end
  end
end
