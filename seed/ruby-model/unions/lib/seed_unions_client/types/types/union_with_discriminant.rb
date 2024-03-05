# frozen_string_literal: true

require "json"
require_relative "foo"
require_relative "bar"

module SeedUnionsClient
  class Types
    class UnionWithDiscriminant
      attr_reader :member, :discriminant

      private_class_method :new
      alias kind_of? is_a?
      # @param member [Object]
      # @param discriminant [String]
      # @return [Types::UnionWithDiscriminant]
      def initialize(member:, discriminant:)
        # @type [Object]
        @member = member
        # @type [String]
        @discriminant = discriminant
      end

      # Deserialize a JSON object to an instance of UnionWithDiscriminant
      #
      # @param json_object [JSON]
      # @return [Types::UnionWithDiscriminant]
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        member = case struct._type
                 when "foo"
                   Types::Foo.from_json(json_object: json_object.foo)
                 when "bar"
                   Types::Bar.from_json(json_object: json_object.bar)
                 else
                   Types::Foo.from_json(json_object: json_object)
                 end
        new(member: member, discriminant: struct._type)
      end

      # For Union Types, to_json functionality is delegated to the wrapped member.
      #
      # @return [JSON]
      def to_json(*_args)
        case @discriminant
        when "foo"
          { "_type": @discriminant, "foo": @member }.to_json
        when "bar"
          { "_type": @discriminant, "bar": @member }.to_json
        else
          { "_type": @discriminant, value: @member }.to_json
        end
        @member.to_json
      end

      # Leveraged for Union-type generation, validate_raw attempts to parse the given hash and check each fields type against the current object's property definitions.
      #
      # @param obj [Object]
      # @return [Void]
      def self.validate_raw(obj:)
        case obj._type
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
      # @return [Types::UnionWithDiscriminant]
      def self.foo(member:)
        new(member: member, discriminant: "foo")
      end

      # @param member [Types::Bar]
      # @return [Types::UnionWithDiscriminant]
      def self.bar(member:)
        new(member: member, discriminant: "bar")
      end
    end
  end
end
