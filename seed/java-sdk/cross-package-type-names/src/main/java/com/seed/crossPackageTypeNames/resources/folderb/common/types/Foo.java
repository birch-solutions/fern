/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.crossPackageTypeNames.resources.folderb.common.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.crossPackageTypeNames.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = Foo.Builder.class)
public final class Foo {
    private final Optional<com.seed.crossPackageTypeNames.resources.folderc.common.types.Foo> foo;

    private final Map<String, Object> additionalProperties;

    private Foo(
            Optional<com.seed.crossPackageTypeNames.resources.folderc.common.types.Foo> foo,
            Map<String, Object> additionalProperties) {
        this.foo = foo;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("foo")
    public Optional<com.seed.crossPackageTypeNames.resources.folderc.common.types.Foo> getFoo() {
        return foo;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Foo && equalTo((Foo) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(Foo other) {
        return foo.equals(other.foo);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.foo);
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
        private Optional<com.seed.crossPackageTypeNames.resources.folderc.common.types.Foo> foo = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        public Builder from(Foo other) {
            foo(other.getFoo());
            return this;
        }

        @JsonSetter(value = "foo", nulls = Nulls.SKIP)
        public Builder foo(Optional<com.seed.crossPackageTypeNames.resources.folderc.common.types.Foo> foo) {
            this.foo = foo;
            return this;
        }

        public Builder foo(com.seed.crossPackageTypeNames.resources.folderc.common.types.Foo foo) {
            this.foo = Optional.ofNullable(foo);
            return this;
        }

        public Foo build() {
            return new Foo(foo, additionalProperties);
        }
    }
}
