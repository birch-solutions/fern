# frozen_string_literal: true

require_relative "lib/gemconfig"

Gem::Specification.new do |spec|
  spec.name = "seed_undiscriminated_unions_client"
  spec.version = "0.0.1"
  spec.authors = SeedUndiscriminatedUnionsClient::Gemconfig::AUTHORS
  spec.email = SeedUndiscriminatedUnionsClient::Gemconfig::EMAIL
  spec.summary = SeedUndiscriminatedUnionsClient::Gemconfig::SUMMARY
  spec.description = SeedUndiscriminatedUnionsClient::Gemconfig::DESCRIPTION
  spec.homepage = SeedUndiscriminatedUnionsClient::Gemconfig::HOMEPAGE
  spec.required_ruby_version = ">= 2.7.0"
  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = SeedUndiscriminatedUnionsClient::Gemconfig::SOURCE_CODE_URI
  spec.metadata["changelog_uri"] = SeedUndiscriminatedUnionsClient::Gemconfig::CHANGELOG_URI
  spec.files = Dir.glob("lib/**/*")
  spec.bindir = "exe"
  spec.executables = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]
  spec.add_dependency "async-http-faraday", "~> 0.12"
  spec.add_dependency "faraday", "~> 2.7"
  spec.add_dependency "faraday-retry", "~> 2.2"
end
