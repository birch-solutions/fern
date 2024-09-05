/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.errors.types;

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
    builder = UnauthorizedRequestErrorBody.Builder.class
)
public final class UnauthorizedRequestErrorBody {
  private final String message;

  private UnauthorizedRequestErrorBody(String message) {
    this.message = message;
  }

  @JsonProperty("message")
  public String getMessage() {
    return message;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof UnauthorizedRequestErrorBody && equalTo((UnauthorizedRequestErrorBody) other);
  }

  private boolean equalTo(UnauthorizedRequestErrorBody other) {
    return message.equals(other.message);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.message);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static MessageStage builder() {
    return new Builder();
  }

  public interface MessageStage {
    _FinalStage message(@NotNull String message);

    Builder from(UnauthorizedRequestErrorBody other);
  }

  public interface _FinalStage {
    UnauthorizedRequestErrorBody build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements MessageStage, _FinalStage {
    private String message;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(UnauthorizedRequestErrorBody other) {
      message(other.getMessage());
      return this;
    }

    @java.lang.Override
    @JsonSetter("message")
    public _FinalStage message(@NotNull String message) {
      this.message = Objects.requireNonNull(message, "message must not be null");
      return this;
    }

    @java.lang.Override
    public UnauthorizedRequestErrorBody build() {
      return new UnauthorizedRequestErrorBody(message);
    }
  }
}
