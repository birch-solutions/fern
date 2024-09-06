/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.v2.v3.problem.types;

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
@JsonDeserialize(builder = TestCaseImplementation.Builder.class)
public final class TestCaseImplementation {
    private final TestCaseImplementationDescription description;

    private final TestCaseFunction function;

    private final Map<String, Object> additionalProperties;

    private TestCaseImplementation(
            TestCaseImplementationDescription description,
            TestCaseFunction function,
            Map<String, Object> additionalProperties) {
        this.description = description;
        this.function = function;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("description")
    public TestCaseImplementationDescription getDescription() {
        return description;
    }

    @JsonProperty("function")
    public TestCaseFunction getFunction() {
        return function;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof TestCaseImplementation && equalTo((TestCaseImplementation) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(TestCaseImplementation other) {
        return description.equals(other.description) && function.equals(other.function);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.description, this.function);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static DescriptionStage builder() {
        return new Builder();
    }

    public interface DescriptionStage {
        FunctionStage description(@NotNull TestCaseImplementationDescription description);

        Builder from(TestCaseImplementation other);
    }

    public interface FunctionStage {
        _FinalStage function(@NotNull TestCaseFunction function);
    }

    public interface _FinalStage {
        TestCaseImplementation build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements DescriptionStage, FunctionStage, _FinalStage {
        private TestCaseImplementationDescription description;

        private TestCaseFunction function;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(TestCaseImplementation other) {
            description(other.getDescription());
            function(other.getFunction());
            return this;
        }

        @java.lang.Override
        @JsonSetter("description")
        public FunctionStage description(@NotNull TestCaseImplementationDescription description) {
            this.description = Objects.requireNonNull(description, "description must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("function")
        public _FinalStage function(@NotNull TestCaseFunction function) {
            this.function = Objects.requireNonNull(function, "function must not be null");
            return this;
        }

        @java.lang.Override
        public TestCaseImplementation build() {
            return new TestCaseImplementation(description, function, additionalProperties);
        }
    }
}
