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
import java.util.UUID;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = ErroredResponse.Builder.class)
public final class ErroredResponse {
    private final UUID submissionId;

    private final ErrorInfo errorInfo;

    private final Map<String, Object> additionalProperties;

    private ErroredResponse(UUID submissionId, ErrorInfo errorInfo, Map<String, Object> additionalProperties) {
        this.submissionId = submissionId;
        this.errorInfo = errorInfo;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("submissionId")
    public UUID getSubmissionId() {
        return submissionId;
    }

    @JsonProperty("errorInfo")
    public ErrorInfo getErrorInfo() {
        return errorInfo;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ErroredResponse && equalTo((ErroredResponse) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ErroredResponse other) {
        return submissionId.equals(other.submissionId) && errorInfo.equals(other.errorInfo);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.submissionId, this.errorInfo);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static SubmissionIdStage builder() {
        return new Builder();
    }

    public interface SubmissionIdStage {
        ErrorInfoStage submissionId(UUID submissionId);

        Builder from(ErroredResponse other);
    }

    public interface ErrorInfoStage {
        _FinalStage errorInfo(ErrorInfo errorInfo);
    }

    public interface _FinalStage {
        ErroredResponse build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements SubmissionIdStage, ErrorInfoStage, _FinalStage {
        private UUID submissionId;

        private ErrorInfo errorInfo;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(ErroredResponse other) {
            submissionId(other.getSubmissionId());
            errorInfo(other.getErrorInfo());
            return this;
        }

        @java.lang.Override
        @JsonSetter("submissionId")
        public ErrorInfoStage submissionId(UUID submissionId) {
            this.submissionId = submissionId;
            return this;
        }

        @java.lang.Override
        @JsonSetter("errorInfo")
        public _FinalStage errorInfo(ErrorInfo errorInfo) {
            this.errorInfo = errorInfo;
            return this;
        }

        @java.lang.Override
        public ErroredResponse build() {
            return new ErroredResponse(submissionId, errorInfo, additionalProperties);
        }
    }
}
