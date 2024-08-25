/**
 * This file was auto-generated by Fern from our API Definition.
 */

package types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Integer;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = UploadResponse.Builder.class
)
public final class UploadResponse {
  private final Optional<Integer> count;

  private UploadResponse(Optional<Integer> count) {
    this.count = count;
  }

  @JsonProperty("count")
  public Optional<Integer> getCount() {
    return count;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof UploadResponse && equalTo((UploadResponse) other);
  }

  private boolean equalTo(UploadResponse other) {
    return count.equals(other.count);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.count);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static Builder builder() {
    return new Builder();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder {
    private Optional<Integer> count = Optional.empty();

    private Builder() {
    }

    public Builder from(UploadResponse other) {
      count(other.getCount());
      return this;
    }

    @JsonSetter(
        value = "count",
        nulls = Nulls.SKIP
    )
    public Builder count(Optional<Integer> count) {
      this.count = count;
      return this;
    }

    public Builder count(Integer count) {
      this.count = Optional.ofNullable(count);
      return this;
    }

    public UploadResponse build() {
      return new UploadResponse(count);
    }
  }
}
