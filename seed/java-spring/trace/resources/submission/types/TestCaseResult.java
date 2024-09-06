/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.submission.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;
import resources.commons.types.VariableValue;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = TestCaseResult.Builder.class
)
public final class TestCaseResult {
  private final VariableValue expectedResult;

  private final ActualResult actualResult;

  private final boolean passed;

  private TestCaseResult(VariableValue expectedResult, ActualResult actualResult, boolean passed) {
    this.expectedResult = expectedResult;
    this.actualResult = actualResult;
    this.passed = passed;
  }

  @JsonProperty("expectedResult")
  public VariableValue getExpectedResult() {
    return expectedResult;
  }

  @JsonProperty("actualResult")
  public ActualResult getActualResult() {
    return actualResult;
  }

  @JsonProperty("passed")
  public boolean getPassed() {
    return passed;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof TestCaseResult && equalTo((TestCaseResult) other);
  }

  private boolean equalTo(TestCaseResult other) {
    return expectedResult.equals(other.expectedResult) && actualResult.equals(other.actualResult) && passed == other.passed;
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.expectedResult, this.actualResult, this.passed);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static ExpectedResultStage builder() {
    return new Builder();
  }

  public interface ExpectedResultStage {
    ActualResultStage expectedResult(@NotNull VariableValue expectedResult);

    Builder from(TestCaseResult other);
  }

  public interface ActualResultStage {
    PassedStage actualResult(@NotNull ActualResult actualResult);
  }

  public interface PassedStage {
    _FinalStage passed(boolean passed);
  }

  public interface _FinalStage {
    TestCaseResult build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements ExpectedResultStage, ActualResultStage, PassedStage, _FinalStage {
    private VariableValue expectedResult;

    private ActualResult actualResult;

    private boolean passed;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(TestCaseResult other) {
      expectedResult(other.getExpectedResult());
      actualResult(other.getActualResult());
      passed(other.getPassed());
      return this;
    }

    @java.lang.Override
    @JsonSetter("expectedResult")
    public ActualResultStage expectedResult(@NotNull VariableValue expectedResult) {
      this.expectedResult = Objects.requireNonNull(expectedResult, "expectedResult must not be null");
      return this;
    }

    @java.lang.Override
    @JsonSetter("actualResult")
    public PassedStage actualResult(@NotNull ActualResult actualResult) {
      this.actualResult = Objects.requireNonNull(actualResult, "actualResult must not be null");
      return this;
    }

    @java.lang.Override
    @JsonSetter("passed")
    public _FinalStage passed(boolean passed) {
      this.passed = passed;
      return this;
    }

    @java.lang.Override
    public TestCaseResult build() {
      return new TestCaseResult(expectedResult, actualResult, passed);
    }
  }
}
