/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.literal.resources.reference.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.literal.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = SendRequest.Builder.class)
public final class SendRequest {
    private final String query;

    private final String context;

    private final Optional<String> maybeContext;

    private final Map<String, Object> additionalProperties;

    private SendRequest(
            String query, String context, Optional<String> maybeContext, Map<String, Object> additionalProperties) {
        this.query = query;
        this.context = context;
        this.maybeContext = maybeContext;
        this.additionalProperties = additionalProperties;
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

    @JsonProperty("context")
    public String getContext() {
        return context;
    }

    @JsonProperty("maybeContext")
    public Optional<String> getMaybeContext() {
        return maybeContext;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof SendRequest && equalTo((SendRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(SendRequest other) {
        return query.equals(other.query) && context.equals(other.context) && maybeContext.equals(other.maybeContext);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.query, this.context, this.maybeContext);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static QueryStage builder() {
        return new Builder();
    }

    public interface QueryStage {
        ContextStage query(@NotNull String query);

        Builder from(SendRequest other);
    }

    public interface ContextStage {
        _FinalStage context(@NotNull String context);
    }

    public interface _FinalStage {
        SendRequest build();

        _FinalStage maybeContext(Optional<String> maybeContext);

        _FinalStage maybeContext(String maybeContext);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements QueryStage, ContextStage, _FinalStage {
        private String query;

        private String context;

        private Optional<String> maybeContext = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(SendRequest other) {
            query(other.getQuery());
            context(other.getContext());
            maybeContext(other.getMaybeContext());
            return this;
        }

        @java.lang.Override
        @JsonSetter("query")
        public ContextStage query(@NotNull String query) {
            this.query = query;
            return this;
        }

        @java.lang.Override
        @JsonSetter("context")
        public _FinalStage context(@NotNull String context) {
            this.context = context;
            return this;
        }

        @java.lang.Override
        public _FinalStage maybeContext(String maybeContext) {
            this.maybeContext = Optional.ofNullable(maybeContext);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "maybeContext", nulls = Nulls.SKIP)
        public _FinalStage maybeContext(Optional<String> maybeContext) {
            this.maybeContext = maybeContext;
            return this;
        }

        @java.lang.Override
        public SendRequest build() {
            return new SendRequest(query, context, maybeContext, additionalProperties);
        }
    }
}
