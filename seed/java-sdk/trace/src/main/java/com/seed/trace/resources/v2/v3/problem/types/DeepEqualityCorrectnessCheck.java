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

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = DeepEqualityCorrectnessCheck.Builder.class)
public final class DeepEqualityCorrectnessCheck {
    private final String expectedValueParameterId;

    private final Map<String, Object> additionalProperties;

    private DeepEqualityCorrectnessCheck(String expectedValueParameterId, Map<String, Object> additionalProperties) {
        this.expectedValueParameterId = expectedValueParameterId;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("expectedValueParameterId")
    public String getExpectedValueParameterId() {
        return expectedValueParameterId;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof DeepEqualityCorrectnessCheck && equalTo((DeepEqualityCorrectnessCheck) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(DeepEqualityCorrectnessCheck other) {
        return expectedValueParameterId.equals(other.expectedValueParameterId);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.expectedValueParameterId);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static ExpectedValueParameterIdStage builder() {
        return new Builder();
    }

    public interface ExpectedValueParameterIdStage {
        _FinalStage expectedValueParameterId(String expectedValueParameterId);

        Builder from(DeepEqualityCorrectnessCheck other);
    }

    public interface _FinalStage {
        DeepEqualityCorrectnessCheck build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements ExpectedValueParameterIdStage, _FinalStage {
        private String expectedValueParameterId;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(DeepEqualityCorrectnessCheck other) {
            expectedValueParameterId(other.getExpectedValueParameterId());
            return this;
        }

        @java.lang.Override
        @JsonSetter("expectedValueParameterId")
        public _FinalStage expectedValueParameterId(String expectedValueParameterId) {
            this.expectedValueParameterId = expectedValueParameterId;
            return this;
        }

        @java.lang.Override
        public DeepEqualityCorrectnessCheck build() {
            return new DeepEqualityCorrectnessCheck(expectedValueParameterId, additionalProperties);
        }
    }
}
