/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.types.object.types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.lang.Object;
import java.lang.String;
import java.util.Optional;

public final class OptionalAlias {
  private final Optional<String> value;

  private OptionalAlias(Optional<String> value) {
    this.value = value;
  }

  @JsonValue
  public Optional<String> get() {
    return this.value;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    return this == other || (other instanceof OptionalAlias && this.value.equals(((OptionalAlias) other).value));
  }

  @java.lang.Override
  public int hashCode() {
    return value.hashCode();
  }

  @java.lang.Override
  public String toString() {
    return value.toString();
  }

  @JsonCreator(
      mode = JsonCreator.Mode.DELEGATING
  )
  public static OptionalAlias of(Optional<String> value) {
    return new OptionalAlias(value);
  }
}
