/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.inlinedrequest.requests;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;
import types.ColorOrOperand;
import types.Operand;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = SendEnumInlinedRequest.Builder.class
)
public final class SendEnumInlinedRequest {
  private final Operand operand;

  private final Optional<Operand> maybeOperand;

  private final ColorOrOperand operandOrColor;

  private final Optional<ColorOrOperand> maybeOperandOrColor;

  private SendEnumInlinedRequest(Operand operand, Optional<Operand> maybeOperand,
      ColorOrOperand operandOrColor, Optional<ColorOrOperand> maybeOperandOrColor) {
    this.operand = operand;
    this.maybeOperand = maybeOperand;
    this.operandOrColor = operandOrColor;
    this.maybeOperandOrColor = maybeOperandOrColor;
  }

  @JsonProperty("operand")
  public Operand getOperand() {
    return operand;
  }

  @JsonProperty("maybeOperand")
  public Optional<Operand> getMaybeOperand() {
    return maybeOperand;
  }

  @JsonProperty("operandOrColor")
  public ColorOrOperand getOperandOrColor() {
    return operandOrColor;
  }

  @JsonProperty("maybeOperandOrColor")
  public Optional<ColorOrOperand> getMaybeOperandOrColor() {
    return maybeOperandOrColor;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof SendEnumInlinedRequest && equalTo((SendEnumInlinedRequest) other);
  }

  private boolean equalTo(SendEnumInlinedRequest other) {
    return operand.equals(other.operand) && maybeOperand.equals(other.maybeOperand) && operandOrColor.equals(other.operandOrColor) && maybeOperandOrColor.equals(other.maybeOperandOrColor);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.operand, this.maybeOperand, this.operandOrColor, this.maybeOperandOrColor);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static OperandStage builder() {
    return new Builder();
  }

  public interface OperandStage {
    OperandOrColorStage operand(Operand operand);

    Builder from(SendEnumInlinedRequest other);
  }

  public interface OperandOrColorStage {
    _FinalStage operandOrColor(ColorOrOperand operandOrColor);
  }

  public interface _FinalStage {
    SendEnumInlinedRequest build();

    _FinalStage maybeOperand(Optional<Operand> maybeOperand);

    _FinalStage maybeOperand(Operand maybeOperand);

    _FinalStage maybeOperandOrColor(Optional<ColorOrOperand> maybeOperandOrColor);

    _FinalStage maybeOperandOrColor(ColorOrOperand maybeOperandOrColor);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements OperandStage, OperandOrColorStage, _FinalStage {
    private Operand operand;

    private ColorOrOperand operandOrColor;

    private Optional<ColorOrOperand> maybeOperandOrColor = Optional.empty();

    private Optional<Operand> maybeOperand = Optional.empty();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(SendEnumInlinedRequest other) {
      operand(other.getOperand());
      maybeOperand(other.getMaybeOperand());
      operandOrColor(other.getOperandOrColor());
      maybeOperandOrColor(other.getMaybeOperandOrColor());
      return this;
    }

    @java.lang.Override
    @JsonSetter("operand")
    public OperandOrColorStage operand(Operand operand) {
      this.operand = operand;
      return this;
    }

    @java.lang.Override
    @JsonSetter("operandOrColor")
    public _FinalStage operandOrColor(ColorOrOperand operandOrColor) {
      this.operandOrColor = operandOrColor;
      return this;
    }

    @java.lang.Override
    public _FinalStage maybeOperandOrColor(ColorOrOperand maybeOperandOrColor) {
      this.maybeOperandOrColor = Optional.of(maybeOperandOrColor);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "maybeOperandOrColor",
        nulls = Nulls.SKIP
    )
    public _FinalStage maybeOperandOrColor(Optional<ColorOrOperand> maybeOperandOrColor) {
      this.maybeOperandOrColor = maybeOperandOrColor;
      return this;
    }

    @java.lang.Override
    public _FinalStage maybeOperand(Operand maybeOperand) {
      this.maybeOperand = Optional.of(maybeOperand);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "maybeOperand",
        nulls = Nulls.SKIP
    )
    public _FinalStage maybeOperand(Optional<Operand> maybeOperand) {
      this.maybeOperand = maybeOperand;
      return this;
    }

    @java.lang.Override
    public SendEnumInlinedRequest build() {
      return new SendEnumInlinedRequest(operand, maybeOperand, operandOrColor, maybeOperandOrColor);
    }
  }
}
