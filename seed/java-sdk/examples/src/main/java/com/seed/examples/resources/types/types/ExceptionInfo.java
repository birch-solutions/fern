/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.resources.types.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.examples.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = ExceptionInfo.Builder.class)
public final class ExceptionInfo {
    private final String exceptionType;

    private final String exceptionMessage;

    private final String exceptionStacktrace;

    private final Map<String, Object> additionalProperties;

    private ExceptionInfo(
            String exceptionType,
            String exceptionMessage,
            String exceptionStacktrace,
            Map<String, Object> additionalProperties) {
        this.exceptionType = exceptionType;
        this.exceptionMessage = exceptionMessage;
        this.exceptionStacktrace = exceptionStacktrace;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("exceptionType")
    public String getExceptionType() {
        return exceptionType;
    }

    @JsonProperty("exceptionMessage")
    public String getExceptionMessage() {
        return exceptionMessage;
    }

    @JsonProperty("exceptionStacktrace")
    public String getExceptionStacktrace() {
        return exceptionStacktrace;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ExceptionInfo && equalTo((ExceptionInfo) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ExceptionInfo other) {
        return exceptionType.equals(other.exceptionType)
                && exceptionMessage.equals(other.exceptionMessage)
                && exceptionStacktrace.equals(other.exceptionStacktrace);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.exceptionType, this.exceptionMessage, this.exceptionStacktrace);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static ExceptionTypeStage builder() {
        return new Builder();
    }

    public interface ExceptionTypeStage {
        ExceptionMessageStage exceptionType(@NotNull String exceptionType);

        Builder from(ExceptionInfo other);
    }

    public interface ExceptionMessageStage {
        ExceptionStacktraceStage exceptionMessage(@NotNull String exceptionMessage);
    }

    public interface ExceptionStacktraceStage {
        _FinalStage exceptionStacktrace(@NotNull String exceptionStacktrace);
    }

    public interface _FinalStage {
        ExceptionInfo build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder
            implements ExceptionTypeStage, ExceptionMessageStage, ExceptionStacktraceStage, _FinalStage {
        private String exceptionType;

        private String exceptionMessage;

        private String exceptionStacktrace;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(ExceptionInfo other) {
            exceptionType(other.getExceptionType());
            exceptionMessage(other.getExceptionMessage());
            exceptionStacktrace(other.getExceptionStacktrace());
            return this;
        }

        @java.lang.Override
        @JsonSetter("exceptionType")
        public ExceptionMessageStage exceptionType(@NotNull String exceptionType) {
            this.exceptionType = Objects.requireNonNull(exceptionType, "exceptionType must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("exceptionMessage")
        public ExceptionStacktraceStage exceptionMessage(@NotNull String exceptionMessage) {
            this.exceptionMessage = Objects.requireNonNull(exceptionMessage, "exceptionMessage must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("exceptionStacktrace")
        public _FinalStage exceptionStacktrace(@NotNull String exceptionStacktrace) {
            this.exceptionStacktrace =
                    Objects.requireNonNull(exceptionStacktrace, "exceptionStacktrace must not be null");
            return this;
        }

        @java.lang.Override
        public ExceptionInfo build() {
            return new ExceptionInfo(exceptionType, exceptionMessage, exceptionStacktrace, additionalProperties);
        }
    }
}
