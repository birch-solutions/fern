# frozen_string_literal: true

require_relative "test_helper"
require "fern_objects-with-imports"

# Basic SeedObjectsWithImportsClient tests
class TestSeedObjectsWithImportsClient < Minitest::Test
  def test_function
    SeedObjectsWithImportsClient::Client.new
  end
end
