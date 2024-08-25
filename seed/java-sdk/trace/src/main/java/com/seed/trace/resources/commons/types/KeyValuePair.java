/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.commons.types;

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
@JsonDeserialize(builder = KeyValuePair.Builder.class)
public final class KeyValuePair {
    private final VariableValue key;

    private final VariableValue value;

    private final Map<String, Object> additionalProperties;

    private KeyValuePair(VariableValue key, VariableValue value, Map<String, Object> additionalProperties) {
        this.key = key;
        this.value = value;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("key")
    public VariableValue getKey() {
        return key;
    }

    @JsonProperty("value")
    public VariableValue getValue() {
        return value;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof KeyValuePair && equalTo((KeyValuePair) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(KeyValuePair other) {
        return key.equals(other.key) && value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.key, this.value);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static KeyStage builder() {
        return new Builder();
    }

    public interface KeyStage {
        ValueStage key(VariableValue key);

        Builder from(KeyValuePair other);
    }

    public interface ValueStage {
        _FinalStage value(VariableValue value);
    }

    public interface _FinalStage {
        KeyValuePair build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements KeyStage, ValueStage, _FinalStage {
        private VariableValue key;

        private VariableValue value;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(KeyValuePair other) {
            key(other.getKey());
            value(other.getValue());
            return this;
        }

        @java.lang.Override
        @JsonSetter("key")
        public ValueStage key(VariableValue key) {
            this.key = key;
            return this;
        }

        @java.lang.Override
        @JsonSetter("value")
        public _FinalStage value(VariableValue value) {
            this.value = value;
            return this;
        }

        @java.lang.Override
        public KeyValuePair build() {
            return new KeyValuePair(key, value, additionalProperties);
        }
    }
}
