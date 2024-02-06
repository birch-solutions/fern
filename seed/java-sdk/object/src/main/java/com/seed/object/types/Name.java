/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.object.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = Name.Builder.class)
public final class Name {
    private final String id;

    private final String value;

    private final Map<String, Object> additionalProperties;

    private Name(String id, String value, Map<String, Object> additionalProperties) {
        this.id = id;
        this.value = value;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("id")
    public String getId() {
        return id;
    }

    @JsonProperty("value")
    public String getValue() {
        return value;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Name && equalTo((Name) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(Name other) {
        return id.equals(other.id) && value.equals(other.value);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.id, this.value);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static IdStage builder() {
        return new Builder();
    }

    public interface IdStage {
        ValueStage id(String id);

        Builder from(Name other);
    }

    public interface ValueStage {
        _FinalStage value(String value);
    }

    public interface _FinalStage {
        Name build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements IdStage, ValueStage, _FinalStage {
        private String id;

        private String value;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(Name other) {
            id(other.getId());
            value(other.getValue());
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public ValueStage id(String id) {
            this.id = id;
            return this;
        }

        @java.lang.Override
        @JsonSetter("value")
        public _FinalStage value(String value) {
            this.value = value;
            return this;
        }

        @java.lang.Override
        public Name build() {
            return new Name(id, value, additionalProperties);
        }
    }
}
