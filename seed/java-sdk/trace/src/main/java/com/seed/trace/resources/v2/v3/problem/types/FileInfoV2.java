/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.v2.v3.problem.types;

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
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = FileInfoV2.Builder.class)
public final class FileInfoV2 {
    private final String filename;

    private final String directory;

    private final String contents;

    private final boolean editable;

    private final Map<String, Object> additionalProperties;

    private FileInfoV2(
            String filename,
            String directory,
            String contents,
            boolean editable,
            Map<String, Object> additionalProperties) {
        this.filename = filename;
        this.directory = directory;
        this.contents = contents;
        this.editable = editable;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("filename")
    public String getFilename() {
        return filename;
    }

    @JsonProperty("directory")
    public String getDirectory() {
        return directory;
    }

    @JsonProperty("contents")
    public String getContents() {
        return contents;
    }

    @JsonProperty("editable")
    public boolean getEditable() {
        return editable;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof FileInfoV2 && equalTo((FileInfoV2) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(FileInfoV2 other) {
        return filename.equals(other.filename)
                && directory.equals(other.directory)
                && contents.equals(other.contents)
                && editable == other.editable;
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.filename, this.directory, this.contents, this.editable);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static FilenameStage builder() {
        return new Builder();
    }

    public interface FilenameStage {
        DirectoryStage filename(@NotNull String filename);

        Builder from(FileInfoV2 other);
    }

    public interface DirectoryStage {
        ContentsStage directory(@NotNull String directory);
    }

    public interface ContentsStage {
        EditableStage contents(@NotNull String contents);
    }

    public interface EditableStage {
        _FinalStage editable(boolean editable);
    }

    public interface _FinalStage {
        FileInfoV2 build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder
            implements FilenameStage, DirectoryStage, ContentsStage, EditableStage, _FinalStage {
        private String filename;

        private String directory;

        private String contents;

        private boolean editable;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(FileInfoV2 other) {
            filename(other.getFilename());
            directory(other.getDirectory());
            contents(other.getContents());
            editable(other.getEditable());
            return this;
        }

        @java.lang.Override
        @JsonSetter("filename")
        public DirectoryStage filename(@NotNull String filename) {
            this.filename = filename;
            return this;
        }

        @java.lang.Override
        @JsonSetter("directory")
        public ContentsStage directory(@NotNull String directory) {
            this.directory = directory;
            return this;
        }

        @java.lang.Override
        @JsonSetter("contents")
        public EditableStage contents(@NotNull String contents) {
            this.contents = contents;
            return this;
        }

        @java.lang.Override
        @JsonSetter("editable")
        public _FinalStage editable(boolean editable) {
            this.editable = Objects.requireNonNull(editable, "editable must not be null");
            return this;
        }

        @java.lang.Override
        public FileInfoV2 build() {
            return new FileInfoV2(filename, directory, contents, editable, additionalProperties);
        }
    }
}
