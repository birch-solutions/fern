/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.objectsWithImports.model.file;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.objectsWithImports.core.ObjectMappers;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = File.Builder.class)
public final class File {
    private final String name;

    private final String contents;

    private final FileInfo info;

    private File(String name, String contents, FileInfo info) {
        this.name = name;
        this.contents = contents;
        this.info = info;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("contents")
    public String getContents() {
        return contents;
    }

    @JsonProperty("info")
    public FileInfo getInfo() {
        return info;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof File && equalTo((File) other);
    }

    private boolean equalTo(File other) {
        return name.equals(other.name) && contents.equals(other.contents) && info.equals(other.info);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.name, this.contents, this.info);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static NameStage builder() {
        return new Builder();
    }

    public interface NameStage {
        ContentsStage name(String name);

        Builder from(File other);
    }

    public interface ContentsStage {
        InfoStage contents(String contents);
    }

    public interface InfoStage {
        _FinalStage info(FileInfo info);
    }

    public interface _FinalStage {
        File build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements NameStage, ContentsStage, InfoStage, _FinalStage {
        private String name;

        private String contents;

        private FileInfo info;

        private Builder() {}

        @java.lang.Override
        public Builder from(File other) {
            name(other.getName());
            contents(other.getContents());
            info(other.getInfo());
            return this;
        }

        @java.lang.Override
        @JsonSetter("name")
        public ContentsStage name(String name) {
            this.name = Objects.requireNonNull(name, "name must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("contents")
        public InfoStage contents(String contents) {
            this.contents = Objects.requireNonNull(contents, "contents must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("info")
        public _FinalStage info(FileInfo info) {
            this.info = Objects.requireNonNull(info, "info must not be null");
            return this;
        }

        @java.lang.Override
        public File build() {
            return new File(name, contents, info);
        }
    }
}
