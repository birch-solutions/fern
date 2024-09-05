/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.folderc.common.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;
import java.util.UUID;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = Foo.Builder.class
)
public final class Foo {
  private final UUID barProperty;

  private Foo(UUID barProperty) {
    this.barProperty = barProperty;
  }

  @JsonProperty("bar_property")
  public UUID getBarProperty() {
    return barProperty;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof Foo && equalTo((Foo) other);
  }

  private boolean equalTo(Foo other) {
    return barProperty.equals(other.barProperty);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.barProperty);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static BarPropertyStage builder() {
    return new Builder();
  }

  public interface BarPropertyStage {
    _FinalStage barProperty(@NotNull UUID barProperty);

    Builder from(Foo other);
  }

  public interface _FinalStage {
    Foo build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements BarPropertyStage, _FinalStage {
    private UUID barProperty;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(Foo other) {
      barProperty(other.getBarProperty());
      return this;
    }

    @java.lang.Override
    @JsonSetter("bar_property")
    public _FinalStage barProperty(@NotNull UUID barProperty) {
      this.barProperty = Objects.requireNonNull(barProperty, "barProperty must not be null");
      return this;
    }

    @java.lang.Override
    public Foo build() {
      return new Foo(barProperty);
    }
  }
}
