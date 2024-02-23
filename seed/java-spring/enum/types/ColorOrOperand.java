/**
 * This file was auto-generated by Fern from our API Definition.
 */

package types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.annotation.JsonValue;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;

public final class ColorOrOperand {
  private final Value value;

  @JsonCreator(
      mode = JsonCreator.Mode.DELEGATING
  )
  private ColorOrOperand(Value value) {
    this.value = value;
  }

  public <T> T visit(Visitor<T> visitor) {
    return value.visit(visitor);
  }

  public static ColorOrOperand color(Color value) {
    return new ColorOrOperand(new ColorValue(value));
  }

  public static ColorOrOperand operand(Operand value) {
    return new ColorOrOperand(new OperandValue(value));
  }

  public boolean isColor() {
    return value instanceof ColorValue;
  }

  public boolean isOperand() {
    return value instanceof OperandValue;
  }

  public boolean _isUnknown() {
    return value instanceof _UnknownValue;
  }

  public Optional<Color> getColor() {
    if (isColor()) {
      return Optional.of(((ColorValue) value).value);
    }
    return Optional.empty();
  }

  public Optional<Operand> getOperand() {
    if (isOperand()) {
      return Optional.of(((OperandValue) value).value);
    }
    return Optional.empty();
  }

  public Optional<Object> _getUnknown() {
    if (_isUnknown()) {
      return Optional.of(((_UnknownValue) value).value);
    }
    return Optional.empty();
  }

  @JsonValue
  private Value getValue() {
    return this.value;
  }

  public interface Visitor<T> {
    T visitColor(Color color);

    T visitOperand(Operand operand);

    T _visitUnknown(Object unknownType);
  }

  @JsonTypeInfo(
      use = JsonTypeInfo.Id.NAME,
      property = "type",
      visible = true,
      defaultImpl = _UnknownValue.class
  )
  @JsonSubTypes({
      @JsonSubTypes.Type(ColorValue.class),
      @JsonSubTypes.Type(OperandValue.class)
  })
  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  private interface Value {
    <T> T visit(Visitor<T> visitor);
  }

  @JsonTypeName("color")
  private static final class ColorValue implements Value {
    @JsonProperty("value")
    private Color value;

    @JsonCreator(
        mode = JsonCreator.Mode.PROPERTIES
    )
    private ColorValue(@JsonProperty("value") Color value) {
      this.value = value;
    }

    @java.lang.Override
    public <T> T visit(Visitor<T> visitor) {
      return visitor.visitColor(value);
    }

    @java.lang.Override
    public boolean equals(Object other) {
      if (this == other) return true;
      return other instanceof ColorValue && equalTo((ColorValue) other);
    }

    private boolean equalTo(ColorValue other) {
      return value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
      return Objects.hash(this.value);
    }

    @java.lang.Override
    public String toString() {
      return "ColorOrOperand{" + "value: " + value + "}";
    }
  }

  @JsonTypeName("operand")
  private static final class OperandValue implements Value {
    @JsonProperty("value")
    private Operand value;

    @JsonCreator(
        mode = JsonCreator.Mode.PROPERTIES
    )
    private OperandValue(@JsonProperty("value") Operand value) {
      this.value = value;
    }

    @java.lang.Override
    public <T> T visit(Visitor<T> visitor) {
      return visitor.visitOperand(value);
    }

    @java.lang.Override
    public boolean equals(Object other) {
      if (this == other) return true;
      return other instanceof OperandValue && equalTo((OperandValue) other);
    }

    private boolean equalTo(OperandValue other) {
      return value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
      return Objects.hash(this.value);
    }

    @java.lang.Override
    public String toString() {
      return "ColorOrOperand{" + "value: " + value + "}";
    }
  }

  private static final class _UnknownValue implements Value {
    private String type;

    @JsonValue
    private Object value;

    @JsonCreator(
        mode = JsonCreator.Mode.PROPERTIES
    )
    private _UnknownValue(@JsonProperty("value") Object value) {
    }

    @java.lang.Override
    public <T> T visit(Visitor<T> visitor) {
      return visitor._visitUnknown(value);
    }

    @java.lang.Override
    public boolean equals(Object other) {
      if (this == other) return true;
      return other instanceof _UnknownValue && equalTo((_UnknownValue) other);
    }

    private boolean equalTo(_UnknownValue other) {
      return type.equals(other.type) && value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
      return Objects.hash(this.type, this.value);
    }

    @java.lang.Override
    public String toString() {
      return "ColorOrOperand{" + "type: " + type + ", value: " + value + "}";
    }
  }
}
