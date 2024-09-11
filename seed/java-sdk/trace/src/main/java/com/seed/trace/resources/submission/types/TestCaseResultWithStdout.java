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
@JsonDeserialize(builder = TestCaseResultWithStdout.Builder.class)
public final class TestCaseResultWithStdout {
    private final TestCaseResult result;

    private final String stdout;

    private final Map<String, Object> additionalProperties;

    private TestCaseResultWithStdout(TestCaseResult result, String stdout, Map<String, Object> additionalProperties) {
        this.result = result;
        this.stdout = stdout;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("result")
    public TestCaseResult getResult() {
        return result;
    }

    @JsonProperty("stdout")
    public String getStdout() {
        return stdout;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof TestCaseResultWithStdout && equalTo((TestCaseResultWithStdout) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(TestCaseResultWithStdout other) {
        return result.equals(other.result) && stdout.equals(other.stdout);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.result, this.stdout);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static ResultStage builder() {
        return new Builder();
    }

    public interface ResultStage {
        StdoutStage result(@NotNull TestCaseResult result);

        Builder from(TestCaseResultWithStdout other);
    }

    public interface StdoutStage {
        _FinalStage stdout(@NotNull String stdout);
    }

    public interface _FinalStage {
        TestCaseResultWithStdout build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements ResultStage, StdoutStage, _FinalStage {
        private TestCaseResult result;

        private String stdout;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(TestCaseResultWithStdout other) {
            result(other.getResult());
            stdout(other.getStdout());
            return this;
        }

        @java.lang.Override
        @JsonSetter("result")
        public StdoutStage result(@NotNull TestCaseResult result) {
            this.result = Objects.requireNonNull(result, "result must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("stdout")
        public _FinalStage stdout(@NotNull String stdout) {
            this.stdout = Objects.requireNonNull(stdout, "stdout must not be null");
            return this;
        }

        @java.lang.Override
        public TestCaseResultWithStdout build() {
            return new TestCaseResultWithStdout(result, stdout, additionalProperties);
        }
    }
}
