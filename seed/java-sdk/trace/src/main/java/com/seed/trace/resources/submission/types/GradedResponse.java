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
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = GradedResponse.Builder.class)
public final class GradedResponse {
    private final UUID submissionId;

    private final Map<String, TestCaseResultWithStdout> testCases;

    private final Map<String, Object> additionalProperties;

    private GradedResponse(
            UUID submissionId,
            Map<String, TestCaseResultWithStdout> testCases,
            Map<String, Object> additionalProperties) {
        this.submissionId = submissionId;
        this.testCases = testCases;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("submissionId")
    public UUID getSubmissionId() {
        return submissionId;
    }

    @JsonProperty("testCases")
    public Map<String, TestCaseResultWithStdout> getTestCases() {
        return testCases;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof GradedResponse && equalTo((GradedResponse) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(GradedResponse other) {
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
        _FinalStage submissionId(@NotNull UUID submissionId);

        Builder from(GradedResponse other);
    }

    public interface _FinalStage {
        GradedResponse build();

        _FinalStage testCases(Map<String, TestCaseResultWithStdout> testCases);

        _FinalStage putAllTestCases(Map<String, TestCaseResultWithStdout> testCases);

        _FinalStage testCases(String key, TestCaseResultWithStdout value);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements SubmissionIdStage, _FinalStage {
        private UUID submissionId;

        private Map<String, TestCaseResultWithStdout> testCases = new LinkedHashMap<>();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(GradedResponse other) {
            submissionId(other.getSubmissionId());
            testCases(other.getTestCases());
            return this;
        }

        @java.lang.Override
        @JsonSetter("submissionId")
        public _FinalStage submissionId(@NotNull UUID submissionId) {
            this.submissionId = submissionId;
            return this;
        }

        @java.lang.Override
        public _FinalStage testCases(String key, TestCaseResultWithStdout value) {
            this.testCases.put(key, value);
            return this;
        }

        @java.lang.Override
        public _FinalStage putAllTestCases(Map<String, TestCaseResultWithStdout> testCases) {
            this.testCases.putAll(testCases);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "testCases", nulls = Nulls.SKIP)
        public _FinalStage testCases(Map<String, TestCaseResultWithStdout> testCases) {
            this.testCases.clear();
            this.testCases.putAll(testCases);
            return this;
        }

        @java.lang.Override
        public GradedResponse build() {
            return new GradedResponse(submissionId, testCases, additionalProperties);
        }
    }
}
