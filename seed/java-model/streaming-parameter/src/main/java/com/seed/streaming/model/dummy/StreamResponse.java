/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.streaming.model.dummy;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.streaming.core.ObjectMappers;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = StreamResponse.Builder.class)
public final class StreamResponse {
    private final String id;

    private final Optional<String> name;

    private StreamResponse(String id, Optional<String> name) {
        this.id = id;
        this.name = name;
    }

    @JsonProperty("id")
    public String getId() {
        return id;
    }

    @JsonProperty("name")
    public Optional<String> getName() {
        return name;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof StreamResponse && equalTo((StreamResponse) other);
    }

    private boolean equalTo(StreamResponse other) {
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
        _FinalStage id(String id);

        Builder from(StreamResponse other);
    }

    public interface _FinalStage {
        StreamResponse build();

        _FinalStage name(Optional<String> name);

        _FinalStage name(String name);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements IdStage, _FinalStage {
        private String id;

        private Optional<String> name = Optional.empty();

        private Builder() {}

        @java.lang.Override
        public Builder from(StreamResponse other) {
            id(other.getId());
            name(other.getName());
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public _FinalStage id(String id) {
            this.id = Objects.requireNonNull(id, "id must not be null");
            return this;
        }

        @java.lang.Override
        public _FinalStage name(String name) {
            this.name = Optional.ofNullable(name);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "name", nulls = Nulls.SKIP)
        public _FinalStage name(Optional<String> name) {
            this.name = name;
            return this;
        }

        @java.lang.Override
        public StreamResponse build() {
            return new StreamResponse(id, name);
        }
    }
}
