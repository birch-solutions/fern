/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.literal.resources.headers.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.literal.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = SendLiteralsInHeadersRequest.Builder.class)
public final class SendLiteralsInHeadersRequest {
    private final String query;

    private final Map<String, Object> additionalProperties;

    private SendLiteralsInHeadersRequest(String query, Map<String, Object> additionalProperties) {
        this.query = query;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("X-Endpoint-Version")
    public String getEndpointVersion() {
        return "02-12-2024";
    }

    @JsonProperty("X-Async")
    public Boolean getAsync() {
        return true;
    }

    @JsonProperty("query")
    public String getQuery() {
        return query;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof SendLiteralsInHeadersRequest && equalTo((SendLiteralsInHeadersRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(SendLiteralsInHeadersRequest other) {
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

        Builder from(SendLiteralsInHeadersRequest other);
    }

    public interface _FinalStage {
        SendLiteralsInHeadersRequest build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements QueryStage, _FinalStage {
        private String query;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(SendLiteralsInHeadersRequest other) {
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
        public SendLiteralsInHeadersRequest build() {
            return new SendLiteralsInHeadersRequest(query, additionalProperties);
        }
    }
}
