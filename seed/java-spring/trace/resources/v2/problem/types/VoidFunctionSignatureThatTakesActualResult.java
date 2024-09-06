/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.v2.problem.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;
import resources.commons.types.VariableType;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = VoidFunctionSignatureThatTakesActualResult.Builder.class
)
public final class VoidFunctionSignatureThatTakesActualResult {
  private final List<Parameter> parameters;

  private final VariableType actualResultType;

  private VoidFunctionSignatureThatTakesActualResult(List<Parameter> parameters,
      VariableType actualResultType) {
    this.parameters = parameters;
    this.actualResultType = actualResultType;
  }

  @JsonProperty("parameters")
  public List<Parameter> getParameters() {
    return parameters;
  }

  @JsonProperty("actualResultType")
  public VariableType getActualResultType() {
    return actualResultType;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof VoidFunctionSignatureThatTakesActualResult && equalTo((VoidFunctionSignatureThatTakesActualResult) other);
  }

  private boolean equalTo(VoidFunctionSignatureThatTakesActualResult other) {
    return parameters.equals(other.parameters) && actualResultType.equals(other.actualResultType);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.parameters, this.actualResultType);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static ActualResultTypeStage builder() {
    return new Builder();
  }

  public interface ActualResultTypeStage {
    _FinalStage actualResultType(@NotNull VariableType actualResultType);

    Builder from(VoidFunctionSignatureThatTakesActualResult other);
  }

  public interface _FinalStage {
    VoidFunctionSignatureThatTakesActualResult build();

    _FinalStage parameters(List<Parameter> parameters);

    _FinalStage addParameters(Parameter parameters);

    _FinalStage addAllParameters(List<Parameter> parameters);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements ActualResultTypeStage, _FinalStage {
    private VariableType actualResultType;

    private List<Parameter> parameters = new ArrayList<>();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(VoidFunctionSignatureThatTakesActualResult other) {
      parameters(other.getParameters());
      actualResultType(other.getActualResultType());
      return this;
    }

    @java.lang.Override
    @JsonSetter("actualResultType")
    public _FinalStage actualResultType(@NotNull VariableType actualResultType) {
      this.actualResultType = Objects.requireNonNull(actualResultType, "actualResultType must not be null");
      return this;
    }

    @java.lang.Override
    public _FinalStage addAllParameters(List<Parameter> parameters) {
      this.parameters.addAll(parameters);
      return this;
    }

    @java.lang.Override
    public _FinalStage addParameters(Parameter parameters) {
      this.parameters.add(parameters);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "parameters",
        nulls = Nulls.SKIP
    )
    public _FinalStage parameters(List<Parameter> parameters) {
      this.parameters.clear();
      this.parameters.addAll(parameters);
      return this;
    }

    @java.lang.Override
    public VoidFunctionSignatureThatTakesActualResult build() {
      return new VoidFunctionSignatureThatTakesActualResult(parameters, actualResultType);
    }
  }
}
