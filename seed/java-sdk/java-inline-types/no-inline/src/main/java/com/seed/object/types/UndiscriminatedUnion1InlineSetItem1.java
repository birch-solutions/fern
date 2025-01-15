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
@JsonDeserialize(builder = UndiscriminatedUnion1InlineSetItem1.Builder.class)
public final class UndiscriminatedUnion1InlineSetItem1 {
    private final String foo;

    private final ReferenceType ref;

    private final Map<String, Object> additionalProperties;

    private UndiscriminatedUnion1InlineSetItem1(
            String foo, ReferenceType ref, Map<String, Object> additionalProperties) {
        this.foo = foo;
        this.ref = ref;
        this.additionalProperties = additionalProperties;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("foo")
    public String getFoo() {
        return foo;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("ref")
    public ReferenceType getRef() {
        return ref;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof UndiscriminatedUnion1InlineSetItem1
                && equalTo((UndiscriminatedUnion1InlineSetItem1) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(UndiscriminatedUnion1InlineSetItem1 other) {
        return foo.equals(other.foo) && ref.equals(other.ref);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.foo, this.ref);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static FooStage builder() {
        return new Builder();
    }

    public interface FooStage {
        RefStage foo(@NotNull String foo);

        Builder from(UndiscriminatedUnion1InlineSetItem1 other);
    }

    public interface RefStage {
        _FinalStage ref(@NotNull ReferenceType ref);
    }

    public interface _FinalStage {
        UndiscriminatedUnion1InlineSetItem1 build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements FooStage, RefStage, _FinalStage {
        private String foo;

        private ReferenceType ref;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(UndiscriminatedUnion1InlineSetItem1 other) {
            foo(other.getFoo());
            ref(other.getRef());
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("foo")
        public RefStage foo(@NotNull String foo) {
            this.foo = Objects.requireNonNull(foo, "foo must not be null");
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("ref")
        public _FinalStage ref(@NotNull ReferenceType ref) {
            this.ref = Objects.requireNonNull(ref, "ref must not be null");
            return this;
        }

        @java.lang.Override
        public UndiscriminatedUnion1InlineSetItem1 build() {
            return new UndiscriminatedUnion1InlineSetItem1(foo, ref, additionalProperties);
        }
    }
}
