/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.ast.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = ObjectFieldValue.Builder.class
)
public final class ObjectFieldValue {
  private final FieldName name;

  private final FieldValue value;

  private ObjectFieldValue(FieldName name, FieldValue value) {
    this.name = name;
    this.value = value;
  }

  @JsonProperty("name")
  public FieldName getName() {
    return name;
  }

  @JsonProperty("value")
  public FieldValue getValue() {
    return value;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof ObjectFieldValue && equalTo((ObjectFieldValue) other);
  }

  private boolean equalTo(ObjectFieldValue other) {
    return name.equals(other.name) && value.equals(other.value);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.name, this.value);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static NameStage builder() {
    return new Builder();
  }

  public interface NameStage {
    ValueStage name(FieldName name);

    Builder from(ObjectFieldValue other);
  }

  public interface ValueStage {
    _FinalStage value(FieldValue value);
  }

  public interface _FinalStage {
    ObjectFieldValue build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements NameStage, ValueStage, _FinalStage {
    private FieldName name;

    private FieldValue value;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(ObjectFieldValue other) {
      name(other.getName());
      value(other.getValue());
      return this;
    }

    @java.lang.Override
    @JsonSetter("name")
    public ValueStage name(FieldName name) {
      this.name = name;
      return this;
    }

    @java.lang.Override
    @JsonSetter("value")
    public _FinalStage value(FieldValue value) {
      this.value = value;
      return this;
    }

    @java.lang.Override
    public ObjectFieldValue build() {
      return new ObjectFieldValue(name, value);
    }
  }
}
