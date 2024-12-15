/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.exhaustive.resources.endpoints.params.requests;

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
@JsonDeserialize(builder = ModifyResourceAtPath.Builder.class)
public final class ModifyResourceAtPath {
    private final String body;

    private final Map<String, Object> additionalProperties;

    private ModifyResourceAtPath(String body, Map<String, Object> additionalProperties) {
        this.body = body;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("body")
    public String getBody() {
        return body;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ModifyResourceAtPath && equalTo((ModifyResourceAtPath) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ModifyResourceAtPath other) {
        return body.equals(other.body);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.body);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static BodyStage builder() {
        return new Builder();
    }

    public interface BodyStage {
        _FinalStage body(@NotNull String body);

        Builder from(ModifyResourceAtPath other);
    }

    public interface _FinalStage {
        ModifyResourceAtPath build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements BodyStage, _FinalStage {
        private String body;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(ModifyResourceAtPath other) {
            body(other.getBody());
            return this;
        }

        @java.lang.Override
        @JsonSetter("body")
        public _FinalStage body(@NotNull String body) {
            this.body = Objects.requireNonNull(body, "body must not be null");
            return this;
        }

        @java.lang.Override
        public ModifyResourceAtPath build() {
            return new ModifyResourceAtPath(body, additionalProperties);
        }
    }
}
