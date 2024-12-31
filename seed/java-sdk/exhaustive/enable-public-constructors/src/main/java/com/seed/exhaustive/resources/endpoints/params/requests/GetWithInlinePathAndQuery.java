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
    private final String param;

    private final String query;

    private final Map<String, Object> additionalProperties;

    public GetWithInlinePathAndQuery(String param, String query, Map<String, Object> additionalProperties) {
        this.param = param;
        this.query = query;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("param")
    public String getParam() {
        return param;
    }

    @JsonProperty("query")
    public String getQuery() {
        return query;
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
        return param.equals(other.param) && query.equals(other.query);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.param, this.query);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static ParamStage builder() {
        return new Builder();
    }

    public interface ParamStage {
        QueryStage param(@NotNull String param);

        Builder from(GetWithInlinePathAndQuery other);
    }

    public interface QueryStage {
        _FinalStage query(@NotNull String query);
    }

    public interface _FinalStage {
        GetWithInlinePathAndQuery build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements ParamStage, QueryStage, _FinalStage {
        private String param;

        private String query;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(GetWithInlinePathAndQuery other) {
            param(other.getParam());
            query(other.getQuery());
            return this;
        }

        @java.lang.Override
        @JsonSetter("param")
        public QueryStage param(@NotNull String param) {
            this.param = Objects.requireNonNull(param, "param must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("query")
        public _FinalStage query(@NotNull String query) {
            this.query = Objects.requireNonNull(query, "query must not be null");
            return this;
        }

        @java.lang.Override
        public GetWithInlinePathAndQuery build() {
            return new GetWithInlinePathAndQuery(param, query, additionalProperties);
        }
    }
}
