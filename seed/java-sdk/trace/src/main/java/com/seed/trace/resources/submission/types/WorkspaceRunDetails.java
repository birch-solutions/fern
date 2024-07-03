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
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.trace.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = WorkspaceRunDetails.Builder.class)
public final class WorkspaceRunDetails {
    private final Optional<ExceptionV2> exceptionV2;

    private final Optional<ExceptionInfo> exception;

    private final String stdout;

    private final Map<String, Object> additionalProperties;

    private WorkspaceRunDetails(
            Optional<ExceptionV2> exceptionV2,
            Optional<ExceptionInfo> exception,
            String stdout,
            Map<String, Object> additionalProperties) {
        this.exceptionV2 = exceptionV2;
        this.exception = exception;
        this.stdout = stdout;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("exceptionV2")
    public Optional<ExceptionV2> getExceptionV2() {
        return exceptionV2;
    }

    @JsonProperty("exception")
    public Optional<ExceptionInfo> getException() {
        return exception;
    }

    @JsonProperty("stdout")
    public String getStdout() {
        return stdout;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof WorkspaceRunDetails && equalTo((WorkspaceRunDetails) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(WorkspaceRunDetails other) {
        return exceptionV2.equals(other.exceptionV2)
                && exception.equals(other.exception)
                && stdout.equals(other.stdout);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.exceptionV2, this.exception, this.stdout);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static StdoutStage builder() {
        return new Builder();
    }

    public interface StdoutStage {
        _FinalStage stdout(String stdout);

        Builder from(WorkspaceRunDetails other);
    }

    public interface _FinalStage {
        WorkspaceRunDetails build();

        _FinalStage exceptionV2(Optional<ExceptionV2> exceptionV2);

        _FinalStage exceptionV2(ExceptionV2 exceptionV2);

        _FinalStage exception(Optional<ExceptionInfo> exception);

        _FinalStage exception(ExceptionInfo exception);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements StdoutStage, _FinalStage {
        private String stdout;

        private Optional<ExceptionInfo> exception = Optional.empty();

        private Optional<ExceptionV2> exceptionV2 = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(WorkspaceRunDetails other) {
            exceptionV2(other.getExceptionV2());
            exception(other.getException());
            stdout(other.getStdout());
            return this;
        }

        @java.lang.Override
        @JsonSetter("stdout")
        public _FinalStage stdout(String stdout) {
            this.stdout = stdout;
            return this;
        }

        @java.lang.Override
        public _FinalStage exception(ExceptionInfo exception) {
            this.exception = Optional.of(exception);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "exception", nulls = Nulls.SKIP)
        public _FinalStage exception(Optional<ExceptionInfo> exception) {
            this.exception = exception;
            return this;
        }

        @java.lang.Override
        public _FinalStage exceptionV2(ExceptionV2 exceptionV2) {
            this.exceptionV2 = Optional.of(exceptionV2);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "exceptionV2", nulls = Nulls.SKIP)
        public _FinalStage exceptionV2(Optional<ExceptionV2> exceptionV2) {
            this.exceptionV2 = exceptionV2;
            return this;
        }

        @java.lang.Override
        public WorkspaceRunDetails build() {
            return new WorkspaceRunDetails(exceptionV2, exception, stdout, additionalProperties);
        }
    }
}
