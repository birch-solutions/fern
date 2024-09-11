/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.queryParameters.resources.user.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.queryParameters.core.ObjectMappers;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = User.Builder.class)
public final class User {
    private final String name;

    private final List<String> tags;

    private final Map<String, Object> additionalProperties;

    private User(String name, List<String> tags, Map<String, Object> additionalProperties) {
        this.name = name;
        this.tags = tags;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("tags")
    public List<String> getTags() {
        return tags;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof User && equalTo((User) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(User other) {
        return name.equals(other.name) && tags.equals(other.tags);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.name, this.tags);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static NameStage builder() {
        return new Builder();
    }

    public interface NameStage {
        _FinalStage name(@NotNull String name);

        Builder from(User other);
    }

    public interface _FinalStage {
        User build();

        _FinalStage tags(List<String> tags);

        _FinalStage addTags(String tags);

        _FinalStage addAllTags(List<String> tags);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements NameStage, _FinalStage {
        private String name;

        private List<String> tags = new ArrayList<>();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(User other) {
            name(other.getName());
            tags(other.getTags());
            return this;
        }

        @java.lang.Override
        @JsonSetter("name")
        public _FinalStage name(@NotNull String name) {
            this.name = name;
            return this;
        }

        @java.lang.Override
        public _FinalStage addAllTags(List<String> tags) {
            this.tags.addAll(tags);
            return this;
        }

        @java.lang.Override
        public _FinalStage addTags(String tags) {
            this.tags.add(tags);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "tags", nulls = Nulls.SKIP)
        public _FinalStage tags(List<String> tags) {
            this.tags.clear();
            this.tags.addAll(tags);
            return this;
        }

        @java.lang.Override
        public User build() {
            return new User(name, tags, additionalProperties);
        }
    }
}
