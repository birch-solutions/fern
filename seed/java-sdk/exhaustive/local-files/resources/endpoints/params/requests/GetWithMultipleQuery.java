/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.fern.sdk.resources.endpoints.params.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fern.sdk.core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = GetWithMultipleQuery.Builder.class
)
public final class GetWithMultipleQuery {
  private final String query;

  private final int numer;

  private final Map<String, Object> additionalProperties;

  private GetWithMultipleQuery(String query, int numer, Map<String, Object> additionalProperties) {
    this.query = query;
    this.numer = numer;
    this.additionalProperties = additionalProperties;
  }

  @JsonProperty("query")
  public String getQuery() {
    return query;
  }

  @JsonProperty("numer")
  public int getNumer() {
    return numer;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof GetWithMultipleQuery && equalTo((GetWithMultipleQuery) other);
  }

  @JsonAnyGetter
  public Map<String, Object> getAdditionalProperties() {
    return this.additionalProperties;
  }

  private boolean equalTo(GetWithMultipleQuery other) {
    return query.equals(other.query) && numer == other.numer;
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.query, this.numer);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static QueryStage builder() {
    return new Builder();
  }

  public interface QueryStage {
    NumerStage query(@NotNull String query);

    Builder from(GetWithMultipleQuery other);
  }

  public interface NumerStage {
    _FinalStage numer(int numer);
  }

  public interface _FinalStage {
    GetWithMultipleQuery build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements QueryStage, NumerStage, _FinalStage {
    private String query;

    private int numer;

    @JsonAnySetter
    private Map<String, Object> additionalProperties = new HashMap<>();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(GetWithMultipleQuery other) {
      query(other.getQuery());
      numer(other.getNumer());
      return this;
    }

    @java.lang.Override
    @JsonSetter("query")
    public NumerStage query(@NotNull String query) {
      this.query = Objects.requireNonNull(query, "query must not be null");
      return this;
    }

    @java.lang.Override
    @JsonSetter("numer")
    public _FinalStage numer(int numer) {
      this.numer = numer;
      return this;
    }

    @java.lang.Override
    public GetWithMultipleQuery build() {
      return new GetWithMultipleQuery(query, numer, additionalProperties);
    }
  }
}
