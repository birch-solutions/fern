/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.foo.types;

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

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = FilteredType.Builder.class
)
public final class FilteredType {
  private final Optional<String> publicProperty;

  private final int privateProperty;

  private FilteredType(Optional<String> publicProperty, int privateProperty) {
    this.publicProperty = publicProperty;
    this.privateProperty = privateProperty;
  }

  @JsonProperty("public_property")
  public Optional<String> getPublicProperty() {
    return publicProperty;
  }

  @JsonProperty("private_property")
  public int getPrivateProperty() {
    return privateProperty;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof FilteredType && equalTo((FilteredType) other);
  }

  private boolean equalTo(FilteredType other) {
    return publicProperty.equals(other.publicProperty) && privateProperty == other.privateProperty;
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.publicProperty, this.privateProperty);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static PrivatePropertyStage builder() {
    return new Builder();
  }

  public interface PrivatePropertyStage {
    _FinalStage privateProperty(int privateProperty);

    Builder from(FilteredType other);
  }

  public interface _FinalStage {
    FilteredType build();

    _FinalStage publicProperty(Optional<String> publicProperty);

    _FinalStage publicProperty(String publicProperty);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements PrivatePropertyStage, _FinalStage {
    private int privateProperty;

    private Optional<String> publicProperty = Optional.empty();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(FilteredType other) {
      publicProperty(other.getPublicProperty());
      privateProperty(other.getPrivateProperty());
      return this;
    }

    @java.lang.Override
    @JsonSetter("private_property")
    public _FinalStage privateProperty(int privateProperty) {
      this.privateProperty = privateProperty;
      return this;
    }

    @java.lang.Override
    public _FinalStage publicProperty(String publicProperty) {
      this.publicProperty = Optional.of(publicProperty);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "public_property",
        nulls = Nulls.SKIP
    )
    public _FinalStage publicProperty(Optional<String> publicProperty) {
      this.publicProperty = publicProperty;
      return this;
    }

    @java.lang.Override
    public FilteredType build() {
      return new FilteredType(publicProperty, privateProperty);
    }
  }
}
