/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.submission.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.trace.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = RuntimeError.Builder.class)
public final class RuntimeError {
    private final String message;

    private final Map<String, Object> additionalProperties;

    private RuntimeError(String message, Map<String, Object> additionalProperties) {
        this.message = message;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("message")
    public String getMessage() {
        return message;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof RuntimeError && equalTo((RuntimeError) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(RuntimeError other) {
        return message.equals(other.message);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.message);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static MessageStage builder() {
        return new Builder();
    }

    public interface MessageStage {
        _FinalStage message(@NotNull String message);

        Builder from(RuntimeError other);
    }

    public interface _FinalStage {
        RuntimeError build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements MessageStage, _FinalStage {
        private String message;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(RuntimeError other) {
            message(other.getMessage());
            return this;
        }

        @java.lang.Override
        @JsonSetter("message")
        public _FinalStage message(@NotNull String message) {
            this.message = Objects.requireNonNull(message, "message must not be null");
            return this;
        }

        @java.lang.Override
        public RuntimeError build() {
            return new RuntimeError(message, additionalProperties);
        }
    }
}
