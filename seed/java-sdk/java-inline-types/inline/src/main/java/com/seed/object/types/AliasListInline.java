/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.JsonValue;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.object.core.ObjectMappers;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

public final class AliasListInline {
    private final List<ValueItem> value;

    private AliasListInline(List<ValueItem> value) {
        this.value = value;
    }

    @JsonValue
    public List<ValueItem> get() {
        return this.value;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        return this == other
                || (other instanceof AliasListInline && this.value.equals(((AliasListInline) other).value));
    }

    @java.lang.Override
    public int hashCode() {
        return value.hashCode();
    }

    @java.lang.Override
    public String toString() {
        return value.toString();
    }

    @JsonCreator(mode = JsonCreator.Mode.DELEGATING)
    public static AliasListInline of(List<ValueItem> value) {
        return new AliasListInline(value);
    }

    @JsonInclude(JsonInclude.Include.NON_ABSENT)
    @JsonDeserialize(builder = ValueItem.Builder.class)
    public static final class ValueItem {
        private final String foo;

        private final String bar;

        private final Map<String, Object> additionalProperties;

        private ValueItem(String foo, String bar, Map<String, Object> additionalProperties) {
            this.foo = foo;
            this.bar = bar;
            this.additionalProperties = additionalProperties;
        }

        @JsonProperty("foo")
        public String getFoo() {
            return foo;
        }

        @JsonProperty("bar")
        public String getBar() {
            return bar;
        }

        @java.lang.Override
        public boolean equals(Object other) {
            if (this == other) return true;
            return other instanceof ValueItem && equalTo((ValueItem) other);
        }

        @JsonAnyGetter
        public Map<String, Object> getAdditionalProperties() {
            return this.additionalProperties;
        }

        private boolean equalTo(ValueItem other) {
            return foo.equals(other.foo) && bar.equals(other.bar);
        }

        @java.lang.Override
        public int hashCode() {
            return Objects.hash(this.foo, this.bar);
        }

        @java.lang.Override
        public String toString() {
            return ObjectMappers.stringify(this);
        }

        public static FooStage builder() {
            return new Builder();
        }

        public interface FooStage {
            BarStage foo(@NotNull String foo);

            Builder from(ValueItem other);
        }

        public interface BarStage {
            _FinalStage bar(@NotNull String bar);
        }

        public interface _FinalStage {
            ValueItem build();
        }

        @JsonIgnoreProperties(ignoreUnknown = true)
        public static final class Builder implements FooStage, BarStage, _FinalStage {
            private String foo;

            private String bar;

            @JsonAnySetter
            private Map<String, Object> additionalProperties = new HashMap<>();

            private Builder() {}

            @java.lang.Override
            public Builder from(ValueItem other) {
                foo(other.getFoo());
                bar(other.getBar());
                return this;
            }

            @java.lang.Override
            @JsonSetter("foo")
            public BarStage foo(@NotNull String foo) {
                this.foo = Objects.requireNonNull(foo, "foo must not be null");
                return this;
            }

            @java.lang.Override
            @JsonSetter("bar")
            public _FinalStage bar(@NotNull String bar) {
                this.bar = Objects.requireNonNull(bar, "bar must not be null");
                return this;
            }

            @java.lang.Override
            public ValueItem build() {
                return new ValueItem(foo, bar, additionalProperties);
            }
        }
    }
}
