/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.seed.pagination.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.pagination.core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = UsernamePage.Builder.class
)
public final class UsernamePage {
  private final Optional<String> after;

  private final List<String> data;

  private final Map<String, Object> additionalProperties;

  private UsernamePage(Optional<String> after, List<String> data,
      Map<String, Object> additionalProperties) {
    this.after = after;
    this.data = data;
    this.additionalProperties = additionalProperties;
  }

  @JsonProperty("after")
  public Optional<String> getAfter() {
    return after;
  }

  @JsonProperty("data")
  public List<String> getData() {
    return data;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof UsernamePage && equalTo((UsernamePage) other);
  }

  @JsonAnyGetter
  public Map<String, Object> getAdditionalProperties() {
    return this.additionalProperties;
  }

  private boolean equalTo(UsernamePage other) {
    return after.equals(other.after) && data.equals(other.data);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.after, this.data);
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
    private Optional<String> after = Optional.empty();

    private List<String> data = new ArrayList<>();

    @JsonAnySetter
    private Map<String, Object> additionalProperties = new HashMap<>();

    private Builder() {
    }

    public Builder from(UsernamePage other) {
      after(other.getAfter());
      data(other.getData());
      return this;
    }

    @JsonSetter(
        value = "after",
        nulls = Nulls.SKIP
    )
    public Builder after(Optional<String> after) {
      this.after = after;
      return this;
    }

    public Builder after(String after) {
      this.after = Optional.of(after);
      return this;
    }

    @JsonSetter(
        value = "data",
        nulls = Nulls.SKIP
    )
    public Builder data(List<String> data) {
      this.data.clear();
      this.data.addAll(data);
      return this;
    }

    public Builder addData(String data) {
      this.data.add(data);
      return this;
    }

    public Builder addAllData(List<String> data) {
      this.data.addAll(data);
      return this;
    }

    public UsernamePage build() {
      return new UsernamePage(after, data, additionalProperties);
    }
  }
}
