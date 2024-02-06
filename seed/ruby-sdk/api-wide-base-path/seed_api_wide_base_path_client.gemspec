# frozen_string_literal: true

require_relative "lib/gemconfig"

Gem::Specification.new do |spec|
  spec.name = "seed_api_wide_base_path_client"
  spec.version = "0.0.1"
  spec.authors = SeedApiWideBasePathClient::Gemconfig::AUTHORS
  spec.email = SeedApiWideBasePathClient::Gemconfig::EMAIL
  spec.summary = SeedApiWideBasePathClient::Gemconfig::SUMMARY
  spec.description = SeedApiWideBasePathClient::Gemconfig::DESCRIPTION
  spec.homepage = SeedApiWideBasePathClient::Gemconfig::HOMEPAGE
  spec.required_ruby_version = ">= 2.7.0"
  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = SeedApiWideBasePathClient::Gemconfig::SOURCE_CODE_URI
  spec.metadata["changelog_uri"] = SeedApiWideBasePathClient::Gemconfig::CHANGELOG_URI
  spec.files = Dir.glob("lib/**/*")
  spec.bindir = "exe"
  spec.executables = spec.files.grep(%r{\Aexe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]
  spec.add_dependency "async-http-faraday", "~> 0.12"
  spec.add_dependency "faraday", "~> 2.7"
  spec.add_dependency "faraday-retry", "~> 2.2"
end
