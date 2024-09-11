/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.resources.types.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.examples.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = File.Builder.class)
public final class File {
    private final String name;

    private final String contents;

    private final Map<String, Object> additionalProperties;

    private File(String name, String contents, Map<String, Object> additionalProperties) {
        this.name = name;
        this.contents = contents;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("contents")
    public String getContents() {
        return contents;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof File && equalTo((File) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(File other) {
        return name.equals(other.name) && contents.equals(other.contents);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.name, this.contents);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static NameStage builder() {
        return new Builder();
    }

    public interface NameStage {
        ContentsStage name(@NotNull String name);

        Builder from(File other);
    }

    public interface ContentsStage {
        _FinalStage contents(@NotNull String contents);
    }

    public interface _FinalStage {
        File build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements NameStage, ContentsStage, _FinalStage {
        private String name;

        private String contents;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(File other) {
            name(other.getName());
            contents(other.getContents());
            return this;
        }

        @java.lang.Override
        @JsonSetter("name")
        public ContentsStage name(@NotNull String name) {
            this.name = name;
            return this;
        }

        @java.lang.Override
        @JsonSetter("contents")
        public _FinalStage contents(@NotNull String contents) {
            this.contents = contents;
            return this;
        }

        @java.lang.Override
        public File build() {
            return new File(name, contents, additionalProperties);
        }
    }
}
