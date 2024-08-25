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
@JsonDeserialize(builder = CustomTestCasesUnsupported.Builder.class)
public final class CustomTestCasesUnsupported {
    private final String problemId;

    private final UUID submissionId;

    private final Map<String, Object> additionalProperties;

    private CustomTestCasesUnsupported(String problemId, UUID submissionId, Map<String, Object> additionalProperties) {
        this.problemId = problemId;
        this.submissionId = submissionId;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("problemId")
    public String getProblemId() {
        return problemId;
    }

    @JsonProperty("submissionId")
    public UUID getSubmissionId() {
        return submissionId;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof CustomTestCasesUnsupported && equalTo((CustomTestCasesUnsupported) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(CustomTestCasesUnsupported other) {
        return problemId.equals(other.problemId) && submissionId.equals(other.submissionId);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.problemId, this.submissionId);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static ProblemIdStage builder() {
        return new Builder();
    }

    public interface ProblemIdStage {
        SubmissionIdStage problemId(String problemId);

        Builder from(CustomTestCasesUnsupported other);
    }

    public interface SubmissionIdStage {
        _FinalStage submissionId(UUID submissionId);
    }

    public interface _FinalStage {
        CustomTestCasesUnsupported build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements ProblemIdStage, SubmissionIdStage, _FinalStage {
        private String problemId;

        private UUID submissionId;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(CustomTestCasesUnsupported other) {
            problemId(other.getProblemId());
            submissionId(other.getSubmissionId());
            return this;
        }

        @java.lang.Override
        @JsonSetter("problemId")
        public SubmissionIdStage problemId(String problemId) {
            this.problemId = problemId;
            return this;
        }

        @java.lang.Override
        @JsonSetter("submissionId")
        public _FinalStage submissionId(UUID submissionId) {
            this.submissionId = submissionId;
            return this;
        }

        @java.lang.Override
        public CustomTestCasesUnsupported build() {
            return new CustomTestCasesUnsupported(problemId, submissionId, additionalProperties);
        }
    }
}
