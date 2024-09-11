/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.alias.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.alias.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = Type.Builder.class)
public final class Type {
    private final String id;

    private final String name;

    private final Map<String, Object> additionalProperties;

    private Type(String id, String name, Map<String, Object> additionalProperties) {
        this.id = id;
        this.name = name;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("id")
    public String getId() {
        return id;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Type && equalTo((Type) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(Type other) {
        return id.equals(other.id) && name.equals(other.name);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.id, this.name);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static IdStage builder() {
        return new Builder();
    }

    public interface IdStage {
        NameStage id(@NotNull String id);

        Builder from(Type other);
    }

    public interface NameStage {
        _FinalStage name(@NotNull String name);
    }

    public interface _FinalStage {
        Type build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements IdStage, NameStage, _FinalStage {
        private String id;

        private String name;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(Type other) {
            id(other.getId());
            name(other.getName());
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public NameStage id(@NotNull String id) {
            this.id = id;
            return this;
        }

        @java.lang.Override
        @JsonSetter("name")
        public _FinalStage name(@NotNull String name) {
            this.name = name;
            return this;
        }

        @java.lang.Override
        public Type build() {
            return new Type(id, name, additionalProperties);
        }
    }
}
