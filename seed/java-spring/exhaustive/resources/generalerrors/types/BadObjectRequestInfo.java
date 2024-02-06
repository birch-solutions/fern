/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.generalerrors.types;

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
    builder = BadObjectRequestInfo.Builder.class
)
public final class BadObjectRequestInfo {
  private final String message;

  private BadObjectRequestInfo(String message) {
    this.message = message;
  }

  @JsonProperty("message")
  public String getMessage() {
    return message;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof BadObjectRequestInfo && equalTo((BadObjectRequestInfo) other);
  }

  private boolean equalTo(BadObjectRequestInfo other) {
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
    _FinalStage message(String message);

    Builder from(BadObjectRequestInfo other);
  }

  public interface _FinalStage {
    BadObjectRequestInfo build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements MessageStage, _FinalStage {
    private String message;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(BadObjectRequestInfo other) {
      message(other.getMessage());
      return this;
    }

    @java.lang.Override
    @JsonSetter("message")
    public _FinalStage message(String message) {
      this.message = message;
      return this;
    }

    @java.lang.Override
    public BadObjectRequestInfo build() {
      return new BadObjectRequestInfo(message);
    }
  }
}
