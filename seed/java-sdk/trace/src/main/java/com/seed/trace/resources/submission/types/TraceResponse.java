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
import com.seed.trace.resources.commons.types.DebugVariableValue;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = TraceResponse.Builder.class)
public final class TraceResponse {
    private final UUID submissionId;

    private final int lineNumber;

    private final Optional<DebugVariableValue> returnValue;

    private final Optional<ExpressionLocation> expressionLocation;

    private final StackInformation stack;

    private final Optional<String> stdout;

    private final Map<String, Object> additionalProperties;

    private TraceResponse(
            UUID submissionId,
            int lineNumber,
            Optional<DebugVariableValue> returnValue,
            Optional<ExpressionLocation> expressionLocation,
            StackInformation stack,
            Optional<String> stdout,
            Map<String, Object> additionalProperties) {
        this.submissionId = submissionId;
        this.lineNumber = lineNumber;
        this.returnValue = returnValue;
        this.expressionLocation = expressionLocation;
        this.stack = stack;
        this.stdout = stdout;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("submissionId")
    public UUID getSubmissionId() {
        return submissionId;
    }

    @JsonProperty("lineNumber")
    public int getLineNumber() {
        return lineNumber;
    }

    @JsonProperty("returnValue")
    public Optional<DebugVariableValue> getReturnValue() {
        return returnValue;
    }

    @JsonProperty("expressionLocation")
    public Optional<ExpressionLocation> getExpressionLocation() {
        return expressionLocation;
    }

    @JsonProperty("stack")
    public StackInformation getStack() {
        return stack;
    }

    @JsonProperty("stdout")
    public Optional<String> getStdout() {
        return stdout;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof TraceResponse && equalTo((TraceResponse) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(TraceResponse other) {
        return submissionId.equals(other.submissionId)
                && lineNumber == other.lineNumber
                && returnValue.equals(other.returnValue)
                && expressionLocation.equals(other.expressionLocation)
                && stack.equals(other.stack)
                && stdout.equals(other.stdout);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(
                this.submissionId, this.lineNumber, this.returnValue, this.expressionLocation, this.stack, this.stdout);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static SubmissionIdStage builder() {
        return new Builder();
    }

    public interface SubmissionIdStage {
        LineNumberStage submissionId(@NotNull UUID submissionId);

        Builder from(TraceResponse other);
    }

    public interface LineNumberStage {
        StackStage lineNumber(int lineNumber);
    }

    public interface StackStage {
        _FinalStage stack(@NotNull StackInformation stack);
    }

    public interface _FinalStage {
        TraceResponse build();

        _FinalStage returnValue(Optional<DebugVariableValue> returnValue);

        _FinalStage returnValue(DebugVariableValue returnValue);

        _FinalStage expressionLocation(Optional<ExpressionLocation> expressionLocation);

        _FinalStage expressionLocation(ExpressionLocation expressionLocation);

        _FinalStage stdout(Optional<String> stdout);

        _FinalStage stdout(String stdout);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements SubmissionIdStage, LineNumberStage, StackStage, _FinalStage {
        private UUID submissionId;

        private int lineNumber;

        private StackInformation stack;

        private Optional<String> stdout = Optional.empty();

        private Optional<ExpressionLocation> expressionLocation = Optional.empty();

        private Optional<DebugVariableValue> returnValue = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(TraceResponse other) {
            submissionId(other.getSubmissionId());
            lineNumber(other.getLineNumber());
            returnValue(other.getReturnValue());
            expressionLocation(other.getExpressionLocation());
            stack(other.getStack());
            stdout(other.getStdout());
            return this;
        }

        @java.lang.Override
        @JsonSetter("submissionId")
        public LineNumberStage submissionId(@NotNull UUID submissionId) {
            this.submissionId = Objects.requireNonNull(submissionId, "submissionId must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("lineNumber")
        public StackStage lineNumber(int lineNumber) {
            this.lineNumber = lineNumber;
            return this;
        }

        @java.lang.Override
        @JsonSetter("stack")
        public _FinalStage stack(@NotNull StackInformation stack) {
            this.stack = Objects.requireNonNull(stack, "stack must not be null");
            return this;
        }

        @java.lang.Override
        public _FinalStage stdout(String stdout) {
            this.stdout = Optional.ofNullable(stdout);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "stdout", nulls = Nulls.SKIP)
        public _FinalStage stdout(Optional<String> stdout) {
            this.stdout = stdout;
            return this;
        }

        @java.lang.Override
        public _FinalStage expressionLocation(ExpressionLocation expressionLocation) {
            this.expressionLocation = Optional.ofNullable(expressionLocation);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "expressionLocation", nulls = Nulls.SKIP)
        public _FinalStage expressionLocation(Optional<ExpressionLocation> expressionLocation) {
            this.expressionLocation = expressionLocation;
            return this;
        }

        @java.lang.Override
        public _FinalStage returnValue(DebugVariableValue returnValue) {
            this.returnValue = Optional.ofNullable(returnValue);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "returnValue", nulls = Nulls.SKIP)
        public _FinalStage returnValue(Optional<DebugVariableValue> returnValue) {
            this.returnValue = returnValue;
            return this;
        }

        @java.lang.Override
        public TraceResponse build() {
            return new TraceResponse(
                    submissionId, lineNumber, returnValue, expressionLocation, stack, stdout, additionalProperties);
        }
    }
}
