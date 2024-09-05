/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.responseProperty.model.service;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.responseProperty.core.ObjectMappers;
import com.seed.responseProperty.model.IWithMetadata;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = Response.Builder.class)
public final class Response implements IWithMetadata, IWithDocs {
    private final Map<String, String> metadata;

    private final String docs;

    private final Movie data;

    private Response(Map<String, String> metadata, String docs, Movie data) {
        this.metadata = metadata;
        this.docs = docs;
        this.data = data;
    }

    @JsonProperty("metadata")
    @java.lang.Override
    public Map<String, String> getMetadata() {
        return metadata;
    }

    @JsonProperty("docs")
    @java.lang.Override
    public String getDocs() {
        return docs;
    }

    @JsonProperty("data")
    public Movie getData() {
        return data;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Response && equalTo((Response) other);
    }

    private boolean equalTo(Response other) {
        return metadata.equals(other.metadata) && docs.equals(other.docs) && data.equals(other.data);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.metadata, this.docs, this.data);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static DocsStage builder() {
        return new Builder();
    }

    public interface DocsStage {
        DataStage docs(@NotNull String docs);

        Builder from(Response other);
    }

    public interface DataStage {
        _FinalStage data(@NotNull Movie data);
    }

    public interface _FinalStage {
        Response build();

        _FinalStage metadata(Map<String, String> metadata);

        _FinalStage putAllMetadata(Map<String, String> metadata);

        _FinalStage metadata(String key, String value);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements DocsStage, DataStage, _FinalStage {
        private String docs;

        private Movie data;

        private Map<String, String> metadata = new LinkedHashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(Response other) {
            metadata(other.getMetadata());
            docs(other.getDocs());
            data(other.getData());
            return this;
        }

        @java.lang.Override
        @JsonSetter("docs")
        public DataStage docs(@NotNull String docs) {
            this.docs = Objects.requireNonNull(docs, "docs must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("data")
        public _FinalStage data(@NotNull Movie data) {
            this.data = Objects.requireNonNull(data, "data must not be null");
            return this;
        }

        @java.lang.Override
        public _FinalStage metadata(String key, String value) {
            this.metadata.put(key, value);
            return this;
        }

        @java.lang.Override
        public _FinalStage putAllMetadata(Map<String, String> metadata) {
            this.metadata.putAll(metadata);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "metadata", nulls = Nulls.SKIP)
        public _FinalStage metadata(Map<String, String> metadata) {
            this.metadata.clear();
            this.metadata.putAll(metadata);
            return this;
        }

        @java.lang.Override
        public Response build() {
            return new Response(metadata, docs, data);
        }
    }
}
