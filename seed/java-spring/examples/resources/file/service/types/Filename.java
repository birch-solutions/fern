/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.file.service.types;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.lang.Object;
import java.lang.String;

public final class Filename {
  private final String value;

  private Filename(String value) {
    this.value = value;
  }

  @JsonValue
  public String get() {
    return this.value;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    return this == other || (other instanceof Filename && this.value.equals(((Filename) other).value));
  }

  @java.lang.Override
  public int hashCode() {
    return value.hashCode();
  }

  @java.lang.Override
  public String toString() {
    return value;
  }

  @JsonCreator(
      mode = JsonCreator.Mode.DELEGATING
  )
  public static Filename of(String value) {
    return new Filename(value);
  }

  public static Filename valueOf(String value) {
    return of(value);
  }
}
