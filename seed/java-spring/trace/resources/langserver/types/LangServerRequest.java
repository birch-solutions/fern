/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.langserver.types;

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
    builder = LangServerRequest.Builder.class
)
public final class LangServerRequest {
  private final Object request;

  private LangServerRequest(Object request) {
    this.request = request;
  }

  @JsonProperty("request")
  public Object getRequest() {
    return request;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof LangServerRequest && equalTo((LangServerRequest) other);
  }

  private boolean equalTo(LangServerRequest other) {
    return request.equals(other.request);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.request);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static RequestStage builder() {
    return new Builder();
  }

  public interface RequestStage {
    _FinalStage request(@NotNull Object request);

    Builder from(LangServerRequest other);
  }

  public interface _FinalStage {
    LangServerRequest build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements RequestStage, _FinalStage {
    private Object request;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(LangServerRequest other) {
      request(other.getRequest());
      return this;
    }

    @java.lang.Override
    @JsonSetter("request")
    public _FinalStage request(@NotNull Object request) {
      this.request = Objects.requireNonNull(request, "request must not be null");
      return this;
    }

    @java.lang.Override
    public LangServerRequest build() {
      return new LangServerRequest(request);
    }
  }
}
