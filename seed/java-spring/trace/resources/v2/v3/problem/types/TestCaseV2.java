/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.v2.v3.problem.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import resources.commons.types.VariableValue;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = TestCaseV2.Builder.class
)
public final class TestCaseV2 {
  private final TestCaseMetadata metadata;

  private final TestCaseImplementationReference implementation;

  private final Map<ParameterId, VariableValue> arguments;

  private final Optional<TestCaseExpects> expects;

  private TestCaseV2(TestCaseMetadata metadata, TestCaseImplementationReference implementation,
      Map<ParameterId, VariableValue> arguments, Optional<TestCaseExpects> expects) {
    this.metadata = metadata;
    this.implementation = implementation;
    this.arguments = arguments;
    this.expects = expects;
  }

  @JsonProperty("metadata")
  public TestCaseMetadata getMetadata() {
    return metadata;
  }

  @JsonProperty("implementation")
  public TestCaseImplementationReference getImplementation() {
    return implementation;
  }

  @JsonProperty("arguments")
  public Map<ParameterId, VariableValue> getArguments() {
    return arguments;
  }

  @JsonProperty("expects")
  public Optional<TestCaseExpects> getExpects() {
    return expects;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof TestCaseV2 && equalTo((TestCaseV2) other);
  }

  private boolean equalTo(TestCaseV2 other) {
    return metadata.equals(other.metadata) && implementation.equals(other.implementation) && arguments.equals(other.arguments) && expects.equals(other.expects);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.metadata, this.implementation, this.arguments, this.expects);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static MetadataStage builder() {
    return new Builder();
  }

  public interface MetadataStage {
    ImplementationStage metadata(TestCaseMetadata metadata);

    Builder from(TestCaseV2 other);
  }

  public interface ImplementationStage {
    _FinalStage implementation(TestCaseImplementationReference implementation);
  }

  public interface _FinalStage {
    TestCaseV2 build();

    _FinalStage arguments(Map<ParameterId, VariableValue> arguments);

    _FinalStage putAllArguments(Map<ParameterId, VariableValue> arguments);

    _FinalStage arguments(ParameterId key, VariableValue value);

    _FinalStage expects(Optional<TestCaseExpects> expects);

    _FinalStage expects(TestCaseExpects expects);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements MetadataStage, ImplementationStage, _FinalStage {
    private TestCaseMetadata metadata;

    private TestCaseImplementationReference implementation;

    private Optional<TestCaseExpects> expects = Optional.empty();

    private Map<ParameterId, VariableValue> arguments = new LinkedHashMap<>();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(TestCaseV2 other) {
      metadata(other.getMetadata());
      implementation(other.getImplementation());
      arguments(other.getArguments());
      expects(other.getExpects());
      return this;
    }

    @java.lang.Override
    @JsonSetter("metadata")
    public ImplementationStage metadata(TestCaseMetadata metadata) {
      this.metadata = metadata;
      return this;
    }

    @java.lang.Override
    @JsonSetter("implementation")
    public _FinalStage implementation(TestCaseImplementationReference implementation) {
      this.implementation = implementation;
      return this;
    }

    @java.lang.Override
    public _FinalStage expects(TestCaseExpects expects) {
      this.expects = Optional.of(expects);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "expects",
        nulls = Nulls.SKIP
    )
    public _FinalStage expects(Optional<TestCaseExpects> expects) {
      this.expects = expects;
      return this;
    }

    @java.lang.Override
    public _FinalStage arguments(ParameterId key, VariableValue value) {
      this.arguments.put(key, value);
      return this;
    }

    @java.lang.Override
    public _FinalStage putAllArguments(Map<ParameterId, VariableValue> arguments) {
      this.arguments.putAll(arguments);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "arguments",
        nulls = Nulls.SKIP
    )
    public _FinalStage arguments(Map<ParameterId, VariableValue> arguments) {
      this.arguments.clear();
      this.arguments.putAll(arguments);
      return this;
    }

    @java.lang.Override
    public TestCaseV2 build() {
      return new TestCaseV2(metadata, implementation, arguments, expects);
    }
  }
}
