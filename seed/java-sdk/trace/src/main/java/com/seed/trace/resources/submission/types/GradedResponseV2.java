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
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = GradedResponseV2.Builder.class)
public final class GradedResponseV2 {
    private final UUID submissionId;

    private final Map<String, TestCaseGrade> testCases;

    private final Map<String, Object> additionalProperties;

    private GradedResponseV2(
            UUID submissionId, Map<String, TestCaseGrade> testCases, Map<String, Object> additionalProperties) {
        this.submissionId = submissionId;
        this.testCases = testCases;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("submissionId")
    public UUID getSubmissionId() {
        return submissionId;
    }

    @JsonProperty("testCases")
    public Map<String, TestCaseGrade> getTestCases() {
        return testCases;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof GradedResponseV2 && equalTo((GradedResponseV2) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(GradedResponseV2 other) {
        return submissionId.equals(other.submissionId) && testCases.equals(other.testCases);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.submissionId, this.testCases);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static SubmissionIdStage builder() {
        return new Builder();
    }

    public interface SubmissionIdStage {
        _FinalStage submissionId(UUID submissionId);

        Builder from(GradedResponseV2 other);
    }

    public interface _FinalStage {
        GradedResponseV2 build();

        _FinalStage testCases(Map<String, TestCaseGrade> testCases);

        _FinalStage putAllTestCases(Map<String, TestCaseGrade> testCases);

        _FinalStage testCases(String key, TestCaseGrade value);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements SubmissionIdStage, _FinalStage {
        private UUID submissionId;

        private Map<String, TestCaseGrade> testCases = new LinkedHashMap<>();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(GradedResponseV2 other) {
            submissionId(other.getSubmissionId());
            testCases(other.getTestCases());
            return this;
        }

        @java.lang.Override
        @JsonSetter("submissionId")
        public _FinalStage submissionId(UUID submissionId) {
            this.submissionId = submissionId;
            return this;
        }

        @java.lang.Override
        public _FinalStage testCases(String key, TestCaseGrade value) {
            this.testCases.put(key, value);
            return this;
        }

        @java.lang.Override
        public _FinalStage putAllTestCases(Map<String, TestCaseGrade> testCases) {
            this.testCases.putAll(testCases);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "testCases", nulls = Nulls.SKIP)
        public _FinalStage testCases(Map<String, TestCaseGrade> testCases) {
            this.testCases.clear();
            this.testCases.putAll(testCases);
            return this;
        }

        @java.lang.Override
        public GradedResponseV2 build() {
            return new GradedResponseV2(submissionId, testCases, additionalProperties);
        }
    }
}
