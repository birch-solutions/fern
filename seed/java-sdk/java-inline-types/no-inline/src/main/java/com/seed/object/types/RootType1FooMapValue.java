/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.object.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = RootType1FooMapValue.Builder.class)
public final class RootType1FooMapValue {
    private final ReferenceType ref;

    private final String foo;

    private final Map<String, Object> additionalProperties;

    private RootType1FooMapValue(ReferenceType ref, String foo, Map<String, Object> additionalProperties) {
        this.ref = ref;
        this.foo = foo;
        this.additionalProperties = additionalProperties;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("ref")
    public ReferenceType getRef() {
        return ref;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("foo")
    public String getFoo() {
        return foo;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof RootType1FooMapValue && equalTo((RootType1FooMapValue) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(RootType1FooMapValue other) {
        return ref.equals(other.ref) && foo.equals(other.foo);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.ref, this.foo);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static RefStage builder() {
        return new Builder();
    }

    public interface RefStage {
        FooStage ref(@NotNull ReferenceType ref);

        Builder from(RootType1FooMapValue other);
    }

    public interface FooStage {
        _FinalStage foo(@NotNull String foo);
    }

    public interface _FinalStage {
        RootType1FooMapValue build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements RefStage, FooStage, _FinalStage {
        private ReferenceType ref;

        private String foo;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(RootType1FooMapValue other) {
            ref(other.getRef());
            foo(other.getFoo());
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("ref")
        public FooStage ref(@NotNull ReferenceType ref) {
            this.ref = Objects.requireNonNull(ref, "ref must not be null");
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("foo")
        public _FinalStage foo(@NotNull String foo) {
            this.foo = Objects.requireNonNull(foo, "foo must not be null");
            return this;
        }

        @java.lang.Override
        public RootType1FooMapValue build() {
            return new RootType1FooMapValue(ref, foo, additionalProperties);
        }
    }
}
