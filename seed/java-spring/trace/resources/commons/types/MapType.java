/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.commons.types;

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

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = MapType.Builder.class
)
public final class MapType {
  private final VariableType keyType;

  private final VariableType valueType;

  private MapType(VariableType keyType, VariableType valueType) {
    this.keyType = keyType;
    this.valueType = valueType;
  }

  @JsonProperty("keyType")
  public VariableType getKeyType() {
    return keyType;
  }

  @JsonProperty("valueType")
  public VariableType getValueType() {
    return valueType;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof MapType && equalTo((MapType) other);
  }

  private boolean equalTo(MapType other) {
    return keyType.equals(other.keyType) && valueType.equals(other.valueType);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.keyType, this.valueType);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static KeyTypeStage builder() {
    return new Builder();
  }

  public interface KeyTypeStage {
    ValueTypeStage keyType(@NotNull VariableType keyType);

    Builder from(MapType other);
  }

  public interface ValueTypeStage {
    _FinalStage valueType(@NotNull VariableType valueType);
  }

  public interface _FinalStage {
    MapType build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements KeyTypeStage, ValueTypeStage, _FinalStage {
    private VariableType keyType;

    private VariableType valueType;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(MapType other) {
      keyType(other.getKeyType());
      valueType(other.getValueType());
      return this;
    }

    @java.lang.Override
    @JsonSetter("keyType")
    public ValueTypeStage keyType(@NotNull VariableType keyType) {
      this.keyType = Objects.requireNonNull(keyType, "keyType must not be null");
      return this;
    }

    @java.lang.Override
    @JsonSetter("valueType")
    public _FinalStage valueType(@NotNull VariableType valueType) {
      this.valueType = Objects.requireNonNull(valueType, "valueType must not be null");
      return this;
    }

    @java.lang.Override
    public MapType build() {
      return new MapType(keyType, valueType);
    }
  }
}
