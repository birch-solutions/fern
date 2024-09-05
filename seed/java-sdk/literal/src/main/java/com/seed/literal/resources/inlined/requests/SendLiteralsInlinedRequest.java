/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.literal.resources.inlined.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.literal.core.ObjectMappers;
import com.seed.literal.resources.inlined.types.ATopLevelLiteral;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = SendLiteralsInlinedRequest.Builder.class)
public final class SendLiteralsInlinedRequest {
    private final Optional<String> context;

    private final String query;

    private final Optional<Double> temperature;

    private final String aliasedContext;

    private final Optional<String> maybeContext;

    private final ATopLevelLiteral objectWithLiteral;

    private final Map<String, Object> additionalProperties;

    private SendLiteralsInlinedRequest(
            Optional<String> context,
            String query,
            Optional<Double> temperature,
            String aliasedContext,
            Optional<String> maybeContext,
            ATopLevelLiteral objectWithLiteral,
            Map<String, Object> additionalProperties) {
        this.context = context;
        this.query = query;
        this.temperature = temperature;
        this.aliasedContext = aliasedContext;
        this.maybeContext = maybeContext;
        this.objectWithLiteral = objectWithLiteral;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("prompt")
    public String getPrompt() {
        return "You are a helpful assistant";
    }

    @JsonProperty("context")
    public Optional<String> getContext() {
        return context;
    }

    @JsonProperty("query")
    public String getQuery() {
        return query;
    }

    @JsonProperty("temperature")
    public Optional<Double> getTemperature() {
        return temperature;
    }

    @JsonProperty("stream")
    public Boolean getStream() {
        return false;
    }

    @JsonProperty("aliasedContext")
    public String getAliasedContext() {
        return aliasedContext;
    }

    @JsonProperty("maybeContext")
    public Optional<String> getMaybeContext() {
        return maybeContext;
    }

    @JsonProperty("objectWithLiteral")
    public ATopLevelLiteral getObjectWithLiteral() {
        return objectWithLiteral;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof SendLiteralsInlinedRequest && equalTo((SendLiteralsInlinedRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(SendLiteralsInlinedRequest other) {
        return context.equals(other.context)
                && query.equals(other.query)
                && temperature.equals(other.temperature)
                && aliasedContext.equals(other.aliasedContext)
                && maybeContext.equals(other.maybeContext)
                && objectWithLiteral.equals(other.objectWithLiteral);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(
                this.context,
                this.query,
                this.temperature,
                this.aliasedContext,
                this.maybeContext,
                this.objectWithLiteral);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static QueryStage builder() {
        return new Builder();
    }

    public interface QueryStage {
        AliasedContextStage query(String query);

        Builder from(SendLiteralsInlinedRequest other);
    }

    public interface AliasedContextStage {
        ObjectWithLiteralStage aliasedContext(String aliasedContext);
    }

    public interface ObjectWithLiteralStage {
        _FinalStage objectWithLiteral(ATopLevelLiteral objectWithLiteral);
    }

    public interface _FinalStage {
        SendLiteralsInlinedRequest build();

        _FinalStage context(Optional<String> context);

        _FinalStage context(String context);

        _FinalStage temperature(Optional<Double> temperature);

        _FinalStage temperature(Double temperature);

        _FinalStage maybeContext(Optional<String> maybeContext);

        _FinalStage maybeContext(String maybeContext);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements QueryStage, AliasedContextStage, ObjectWithLiteralStage, _FinalStage {
        private String query;

        private String aliasedContext;

        private ATopLevelLiteral objectWithLiteral;

        private Optional<String> maybeContext = Optional.empty();

        private Optional<Double> temperature = Optional.empty();

        private Optional<String> context = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(SendLiteralsInlinedRequest other) {
            context(other.getContext());
            query(other.getQuery());
            temperature(other.getTemperature());
            aliasedContext(other.getAliasedContext());
            maybeContext(other.getMaybeContext());
            objectWithLiteral(other.getObjectWithLiteral());
            return this;
        }

        @java.lang.Override
        @JsonSetter("query")
        public AliasedContextStage query(String query) {
            this.query = query;
            return this;
        }

        @java.lang.Override
        @JsonSetter("aliasedContext")
        public ObjectWithLiteralStage aliasedContext(String aliasedContext) {
            this.aliasedContext = aliasedContext;
            return this;
        }

        @java.lang.Override
        @JsonSetter("objectWithLiteral")
        public _FinalStage objectWithLiteral(ATopLevelLiteral objectWithLiteral) {
            this.objectWithLiteral = objectWithLiteral;
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
        public _FinalStage temperature(Double temperature) {
            this.temperature = Optional.ofNullable(temperature);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "temperature", nulls = Nulls.SKIP)
        public _FinalStage temperature(Optional<Double> temperature) {
            this.temperature = temperature;
            return this;
        }

        @java.lang.Override
        public _FinalStage context(String context) {
            this.context = Optional.ofNullable(context);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "context", nulls = Nulls.SKIP)
        public _FinalStage context(Optional<String> context) {
            this.context = context;
            return this;
        }

        @java.lang.Override
        public SendLiteralsInlinedRequest build() {
            return new SendLiteralsInlinedRequest(
                    context, query, temperature, aliasedContext, maybeContext, objectWithLiteral, additionalProperties);
        }
    }
}
