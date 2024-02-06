/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.v2.problem.types;

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

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = TestCaseExpects.Builder.class)
public final class TestCaseExpects {
    private final Optional<String> expectedStdout;

    private final Map<String, Object> additionalProperties;

    private TestCaseExpects(Optional<String> expectedStdout, Map<String, Object> additionalProperties) {
        this.expectedStdout = expectedStdout;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("expectedStdout")
    public Optional<String> getExpectedStdout() {
        return expectedStdout;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof TestCaseExpects && equalTo((TestCaseExpects) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(TestCaseExpects other) {
        return expectedStdout.equals(other.expectedStdout);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.expectedStdout);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static Builder builder() {
        return new Builder();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder {
        private Optional<String> expectedStdout = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        public Builder from(TestCaseExpects other) {
            expectedStdout(other.getExpectedStdout());
            return this;
        }

        @JsonSetter(value = "expectedStdout", nulls = Nulls.SKIP)
        public Builder expectedStdout(Optional<String> expectedStdout) {
            this.expectedStdout = expectedStdout;
            return this;
        }

        public Builder expectedStdout(String expectedStdout) {
            this.expectedStdout = Optional.of(expectedStdout);
            return this;
        }

        public TestCaseExpects build() {
            return new TestCaseExpects(expectedStdout, additionalProperties);
        }
    }
}
