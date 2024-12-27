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
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.object.core.ObjectMappers;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = RootType1.Builder.class)
public final class RootType1 {
    private final String foo;

    private final RootType1InlineType1 bar;

    private final Map<String, RootType1FooMapValue> fooMap;

    private final List<RootType1FooListItem> fooList;

    private final Set<RootType1FooSetItem> fooSet;

    private final ReferenceType ref;

    private final Map<String, Object> additionalProperties;

    private RootType1(
            String foo,
            RootType1InlineType1 bar,
            Map<String, RootType1FooMapValue> fooMap,
            List<RootType1FooListItem> fooList,
            Set<RootType1FooSetItem> fooSet,
            ReferenceType ref,
            Map<String, Object> additionalProperties) {
        this.foo = foo;
        this.bar = bar;
        this.fooMap = fooMap;
        this.fooList = fooList;
        this.fooSet = fooSet;
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
    @JsonProperty("bar")
    public RootType1InlineType1 getBar() {
        return bar;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("fooMap")
    public Map<String, RootType1FooMapValue> getFooMap() {
        return fooMap;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("fooList")
    public List<RootType1FooListItem> getFooList() {
        return fooList;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("fooSet")
    public Set<RootType1FooSetItem> getFooSet() {
        return fooSet;
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
        return other instanceof RootType1 && equalTo((RootType1) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(RootType1 other) {
        return foo.equals(other.foo)
                && bar.equals(other.bar)
                && fooMap.equals(other.fooMap)
                && fooList.equals(other.fooList)
                && fooSet.equals(other.fooSet)
                && ref.equals(other.ref);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.foo, this.bar, this.fooMap, this.fooList, this.fooSet, this.ref);
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

        Builder from(RootType1 other);
    }

    public interface BarStage {
        RefStage bar(@NotNull RootType1InlineType1 bar);
    }

    public interface RefStage {
        _FinalStage ref(@NotNull ReferenceType ref);
    }

    public interface _FinalStage {
        RootType1 build();

        _FinalStage fooMap(Map<String, RootType1FooMapValue> fooMap);

        _FinalStage putAllFooMap(Map<String, RootType1FooMapValue> fooMap);

        _FinalStage fooMap(String key, RootType1FooMapValue value);

        _FinalStage fooList(List<RootType1FooListItem> fooList);

        _FinalStage addFooList(RootType1FooListItem fooList);

        _FinalStage addAllFooList(List<RootType1FooListItem> fooList);

        _FinalStage fooSet(Set<RootType1FooSetItem> fooSet);

        _FinalStage addFooSet(RootType1FooSetItem fooSet);

        _FinalStage addAllFooSet(Set<RootType1FooSetItem> fooSet);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements FooStage, BarStage, RefStage, _FinalStage {
        private String foo;

        private RootType1InlineType1 bar;

        private ReferenceType ref;

        private Set<RootType1FooSetItem> fooSet = new LinkedHashSet<>();

        private List<RootType1FooListItem> fooList = new ArrayList<>();

        private Map<String, RootType1FooMapValue> fooMap = new LinkedHashMap<>();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(RootType1 other) {
            foo(other.getFoo());
            bar(other.getBar());
            fooMap(other.getFooMap());
            fooList(other.getFooList());
            fooSet(other.getFooSet());
            ref(other.getRef());
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("foo")
        public BarStage foo(@NotNull String foo) {
            this.foo = Objects.requireNonNull(foo, "foo must not be null");
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("bar")
        public RefStage bar(@NotNull RootType1InlineType1 bar) {
            this.bar = Objects.requireNonNull(bar, "bar must not be null");
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

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        public _FinalStage addAllFooSet(Set<RootType1FooSetItem> fooSet) {
            this.fooSet.addAll(fooSet);
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        public _FinalStage addFooSet(RootType1FooSetItem fooSet) {
            this.fooSet.add(fooSet);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "fooSet", nulls = Nulls.SKIP)
        public _FinalStage fooSet(Set<RootType1FooSetItem> fooSet) {
            this.fooSet.clear();
            this.fooSet.addAll(fooSet);
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        public _FinalStage addAllFooList(List<RootType1FooListItem> fooList) {
            this.fooList.addAll(fooList);
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        public _FinalStage addFooList(RootType1FooListItem fooList) {
            this.fooList.add(fooList);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "fooList", nulls = Nulls.SKIP)
        public _FinalStage fooList(List<RootType1FooListItem> fooList) {
            this.fooList.clear();
            this.fooList.addAll(fooList);
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        public _FinalStage fooMap(String key, RootType1FooMapValue value) {
            this.fooMap.put(key, value);
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        public _FinalStage putAllFooMap(Map<String, RootType1FooMapValue> fooMap) {
            this.fooMap.putAll(fooMap);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "fooMap", nulls = Nulls.SKIP)
        public _FinalStage fooMap(Map<String, RootType1FooMapValue> fooMap) {
            this.fooMap.clear();
            this.fooMap.putAll(fooMap);
            return this;
        }

        @java.lang.Override
        public RootType1 build() {
            return new RootType1(foo, bar, fooMap, fooList, fooSet, ref, additionalProperties);
        }
    }
}
