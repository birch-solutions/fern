/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.resources.types.object.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.exhaustive.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = ObjectWithRequiredField.Builder.class)
public final class ObjectWithRequiredField {
    private final String string;

    private final Map<String, Object> additionalProperties;

    private ObjectWithRequiredField(String string, Map<String, Object> additionalProperties) {
        this.string = string;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("string")
    public String getString() {
        return string;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ObjectWithRequiredField && equalTo((ObjectWithRequiredField) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ObjectWithRequiredField other) {
        return string.equals(other.string);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.string);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static StringStage builder() {
        return new Builder();
    }

    public interface StringStage {
        _FinalStage string(@NotNull String string);

        Builder from(ObjectWithRequiredField other);
    }

    public interface _FinalStage {
        ObjectWithRequiredField build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements StringStage, _FinalStage {
        private String string;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(ObjectWithRequiredField other) {
            string(other.getString());
            return this;
        }

        @java.lang.Override
        @JsonSetter("string")
        public _FinalStage string(@NotNull String string) {
            this.string = string;
            return this;
        }

        @java.lang.Override
        public ObjectWithRequiredField build() {
            return new ObjectWithRequiredField(string, additionalProperties);
        }
    }
}
