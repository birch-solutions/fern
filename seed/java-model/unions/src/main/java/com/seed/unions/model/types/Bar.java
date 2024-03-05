/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.unions.model.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.unions.core.ObjectMappers;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = Bar.Builder.class)
public final class Bar {
    private final String name;

    private Bar(String name) {
        this.name = name;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Bar && equalTo((Bar) other);
    }

    private boolean equalTo(Bar other) {
        return name.equals(other.name);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.name);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static NameStage builder() {
        return new Builder();
    }

    public interface NameStage {
        _FinalStage name(String name);

        Builder from(Bar other);
    }

    public interface _FinalStage {
        Bar build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements NameStage, _FinalStage {
        private String name;

        private Builder() {}

        @java.lang.Override
        public Builder from(Bar other) {
            name(other.getName());
            return this;
        }

        @java.lang.Override
        @JsonSetter("name")
        public _FinalStage name(String name) {
            this.name = name;
            return this;
        }

        @java.lang.Override
        public Bar build() {
            return new Bar(name);
        }
    }
}
