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
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = StderrResponse.Builder.class)
public final class StderrResponse {
    private final UUID submissionId;

    private final String stderr;

    private final Map<String, Object> additionalProperties;

    private StderrResponse(UUID submissionId, String stderr, Map<String, Object> additionalProperties) {
        this.submissionId = submissionId;
        this.stderr = stderr;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("submissionId")
    public UUID getSubmissionId() {
        return submissionId;
    }

    @JsonProperty("stderr")
    public String getStderr() {
        return stderr;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof StderrResponse && equalTo((StderrResponse) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(StderrResponse other) {
        return submissionId.equals(other.submissionId) && stderr.equals(other.stderr);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.submissionId, this.stderr);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static SubmissionIdStage builder() {
        return new Builder();
    }

    public interface SubmissionIdStage {
        StderrStage submissionId(@NotNull UUID submissionId);

        Builder from(StderrResponse other);
    }

    public interface StderrStage {
        _FinalStage stderr(@NotNull String stderr);
    }

    public interface _FinalStage {
        StderrResponse build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements SubmissionIdStage, StderrStage, _FinalStage {
        private UUID submissionId;

        private String stderr;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(StderrResponse other) {
            submissionId(other.getSubmissionId());
            stderr(other.getStderr());
            return this;
        }

        @java.lang.Override
        @JsonSetter("submissionId")
        public StderrStage submissionId(@NotNull UUID submissionId) {
            this.submissionId = Objects.requireNonNull(submissionId, "submissionId must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("stderr")
        public _FinalStage stderr(@NotNull String stderr) {
            this.stderr = Objects.requireNonNull(stderr, "stderr must not be null");
            return this;
        }

        @java.lang.Override
        public StderrResponse build() {
            return new StderrResponse(submissionId, stderr, additionalProperties);
        }
    }
}
