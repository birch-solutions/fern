/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.reference.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Boolean;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = SendRequest.Builder.class
)
public final class SendRequest {
  private final String query;

  private SendRequest(String query) {
    this.query = query;
  }

  @JsonProperty("prompt")
  public String getPrompt() {
    return "You are a helpful assistant";
  }

  @JsonProperty("query")
  public String getQuery() {
    return query;
  }

  @JsonProperty("stream")
  public Boolean getStream() {
    return false;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof SendRequest && equalTo((SendRequest) other);
  }

  private boolean equalTo(SendRequest other) {
    return query.equals(other.query);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.query);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static QueryStage builder() {
    return new Builder();
  }

  public interface QueryStage {
    _FinalStage query(String query);

    Builder from(SendRequest other);
  }

  public interface _FinalStage {
    SendRequest build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements QueryStage, _FinalStage {
    private String query;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(SendRequest other) {
      query(other.getQuery());
      return this;
    }

    @java.lang.Override
    @JsonSetter("query")
    public _FinalStage query(String query) {
      this.query = query;
      return this;
    }

    @java.lang.Override
    public SendRequest build() {
      return new SendRequest(query);
    }
  }
}
