/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.resources.endpoints.params.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.exhaustive.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = GetWithInlinePathAndQuery.Builder.class)
public final class GetWithInlinePathAndQuery {
    private final String query;

    private final String param;

    private final Map<String, Object> additionalProperties;

    public GetWithInlinePathAndQuery(String query, String param, Map<String, Object> additionalProperties) {
        this.query = query;
        this.param = param;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("query")
    public String getQuery() {
        return query;
    }

    @JsonProperty("param")
    public String getParam() {
        return param;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof GetWithInlinePathAndQuery && equalTo((GetWithInlinePathAndQuery) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(GetWithInlinePathAndQuery other) {
        return query.equals(other.query) && param.equals(other.param);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.query, this.param);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static QueryStage builder() {
        return new Builder();
    }

    public interface QueryStage {
        ParamStage query(@NotNull String query);

        Builder from(GetWithInlinePathAndQuery other);
    }

    public interface ParamStage {
        _FinalStage param(@NotNull String param);
    }

    public interface _FinalStage {
        GetWithInlinePathAndQuery build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements QueryStage, ParamStage, _FinalStage {
        private String query;

        private String param;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(GetWithInlinePathAndQuery other) {
            query(other.getQuery());
            param(other.getParam());
            return this;
        }

        @java.lang.Override
        @JsonSetter("query")
        public ParamStage query(@NotNull String query) {
            this.query = Objects.requireNonNull(query, "query must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("param")
        public _FinalStage param(@NotNull String param) {
            this.param = Objects.requireNonNull(param, "param must not be null");
            return this;
        }

        @java.lang.Override
        public GetWithInlinePathAndQuery build() {
            return new GetWithInlinePathAndQuery(query, param, additionalProperties);
        }
    }
}
