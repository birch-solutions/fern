/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.objectsWithImports.resources.commons.metadata.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.objectsWithImports.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = Metadata.Builder.class)
public final class Metadata {
    private final String id;

    private final Optional<Map<String, String>> data;

    private final Map<String, Object> additionalProperties;

    private Metadata(String id, Optional<Map<String, String>> data, Map<String, Object> additionalProperties) {
        this.id = id;
        this.data = data;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("id")
    public String getId() {
        return id;
    }

    @JsonProperty("data")
    public Optional<Map<String, String>> getData() {
        return data;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Metadata && equalTo((Metadata) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(Metadata other) {
        return id.equals(other.id) && data.equals(other.data);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.id, this.data);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static IdStage builder() {
        return new Builder();
    }

    public interface IdStage {
        _FinalStage id(String id);

        Builder from(Metadata other);
    }

    public interface _FinalStage {
        Metadata build();

        _FinalStage data(Optional<Map<String, String>> data);

        _FinalStage data(Map<String, String> data);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements IdStage, _FinalStage {
        private String id;

        private Optional<Map<String, String>> data = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(Metadata other) {
            id(other.getId());
            data(other.getData());
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public _FinalStage id(String id) {
            this.id = id;
            return this;
        }

        @java.lang.Override
        public _FinalStage data(Map<String, String> data) {
            this.data = Optional.ofNullable(data);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "data", nulls = Nulls.SKIP)
        public _FinalStage data(Optional<Map<String, String>> data) {
            this.data = data;
            return this;
        }

        @java.lang.Override
        public Metadata build() {
            return new Metadata(id, data, additionalProperties);
        }
    }
}
