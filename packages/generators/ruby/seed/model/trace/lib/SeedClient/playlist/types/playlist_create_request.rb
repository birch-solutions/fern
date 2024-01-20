# frozen_string_literal: true

module SeedClient
  module Playlist
    class PlaylistCreateRequest
      attr_reader :name, :problems, :additional_properties
      # @param name [String] 
      # @param problems [Array<Commons::ProblemId>] 
      # @param additional_properties [OpenStruct] Additional properties unmapped to the current class definition
      # @return [Playlist::PlaylistCreateRequest] 
      def initialze(name:, problems:, additional_properties: nil)
        # @type [String] 
        @name = name
        # @type [Array<Commons::ProblemId>] 
        @problems = problems
        # @type [OpenStruct] 
        @additional_properties = additional_properties
      end
      # Deserialize a JSON object to an instance of PlaylistCreateRequest
      #
      # @param json_object [JSON] 
      # @return [Playlist::PlaylistCreateRequest] 
      def self.from_json(json_object:)
        struct = JSON.parse(json_object, object_class: OpenStruct)
        name = struct.name
        problems = struct.problems.map() do | v |
 Commons::ProblemId.from_json(json_object: v)
end
        new(name: name, problems: problems, additional_properties: struct)
      end
      # Serialize an instance of PlaylistCreateRequest to a JSON object
      #
      # @return [JSON] 
      def to_json
        {
 name: @name,
 problems: @problems
}.to_json()
      end
    end
  end
end