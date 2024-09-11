/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.multiUrlEnvironment.resources.ec2.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.multiUrlEnvironment.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = BootInstanceRequest.Builder.class)
public final class BootInstanceRequest {
    private final String size;

    private final Map<String, Object> additionalProperties;

    private BootInstanceRequest(String size, Map<String, Object> additionalProperties) {
        this.size = size;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("size")
    public String getSize() {
        return size;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof BootInstanceRequest && equalTo((BootInstanceRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(BootInstanceRequest other) {
        return size.equals(other.size);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.size);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static SizeStage builder() {
        return new Builder();
    }

    public interface SizeStage {
        _FinalStage size(@NotNull String size);

        Builder from(BootInstanceRequest other);
    }

    public interface _FinalStage {
        BootInstanceRequest build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements SizeStage, _FinalStage {
        private String size;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(BootInstanceRequest other) {
            size(other.getSize());
            return this;
        }

        @java.lang.Override
        @JsonSetter("size")
        public _FinalStage size(@NotNull String size) {
            this.size = Objects.requireNonNull(size, "size must not be null");
            return this;
        }

        @java.lang.Override
        public BootInstanceRequest build() {
            return new BootInstanceRequest(size, additionalProperties);
        }
    }
}
