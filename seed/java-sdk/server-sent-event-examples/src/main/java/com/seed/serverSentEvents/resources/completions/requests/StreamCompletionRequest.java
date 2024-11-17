/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.serverSentEvents.resources.completions.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.serverSentEvents.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = StreamCompletionRequest.Builder.class)
public final class StreamCompletionRequest {
    private final String query;

    private final Map<String, Object> additionalProperties;

    private StreamCompletionRequest(String query, Map<String, Object> additionalProperties) {
        this.query = query;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("query")
    public String getQuery() {
        return query;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof StreamCompletionRequest && equalTo((StreamCompletionRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(StreamCompletionRequest other) {
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
        _FinalStage query(@NotNull String query);

        Builder from(StreamCompletionRequest other);
    }

    public interface _FinalStage {
        StreamCompletionRequest build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements QueryStage, _FinalStage {
        private String query;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(StreamCompletionRequest other) {
            query(other.getQuery());
            return this;
        }

        @java.lang.Override
        @JsonSetter("query")
        public _FinalStage query(@NotNull String query) {
            this.query = Objects.requireNonNull(query, "query must not be null");
            return this;
        }

        @java.lang.Override
        public StreamCompletionRequest build() {
            return new StreamCompletionRequest(query, additionalProperties);
        }
    }
}
