/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.api.core.ObjectMappers;
import com.seed.api.resources.a.types.A;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = ImportingA.Builder.class)
public final class ImportingA {
    private final Optional<A> a;

    private final Map<String, Object> additionalProperties;

    private ImportingA(Optional<A> a, Map<String, Object> additionalProperties) {
        this.a = a;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("a")
    public Optional<A> getA() {
        return a;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ImportingA && equalTo((ImportingA) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ImportingA other) {
        return a.equals(other.a);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.a);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static Builder builder() {
        return new Builder();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder {
        private Optional<A> a = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        public Builder from(ImportingA other) {
            a(other.getA());
            return this;
        }

        @JsonSetter(value = "a", nulls = Nulls.SKIP)
        public Builder a(Optional<A> a) {
            this.a = a;
            return this;
        }

        public Builder a(A a) {
            this.a = Optional.of(a);
            return this;
        }

        public ImportingA build() {
            return new ImportingA(a, additionalProperties);
        }
    }
}
