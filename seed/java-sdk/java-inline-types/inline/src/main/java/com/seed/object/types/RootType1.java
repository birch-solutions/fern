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
import com.fasterxml.jackson.annotation.JsonValue;
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

    private final Bar bar;

    private final Map<String, FooMapValue> fooMap;

    private final List<FooListItem> fooList;

    private final Set<FooSetItem> fooSet;

    private final ReferenceType ref;

    private final Map<String, Object> additionalProperties;

    private RootType1(
            String foo,
            Bar bar,
            Map<String, FooMapValue> fooMap,
            List<FooListItem> fooList,
            Set<FooSetItem> fooSet,
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
    public Bar getBar() {
        return bar;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("fooMap")
    public Map<String, FooMapValue> getFooMap() {
        return fooMap;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("fooList")
    public List<FooListItem> getFooList() {
        return fooList;
    }

    /**
     * @return lorem ipsum
     */
    @JsonProperty("fooSet")
    public Set<FooSetItem> getFooSet() {
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
        RefStage bar(@NotNull Bar bar);
    }

    public interface RefStage {
        _FinalStage ref(@NotNull ReferenceType ref);
    }

    public interface _FinalStage {
        RootType1 build();

        _FinalStage fooMap(Map<String, FooMapValue> fooMap);

        _FinalStage putAllFooMap(Map<String, FooMapValue> fooMap);

        _FinalStage fooMap(String key, FooMapValue value);

        _FinalStage fooList(List<FooListItem> fooList);

        _FinalStage addFooList(FooListItem fooList);

        _FinalStage addAllFooList(List<FooListItem> fooList);

        _FinalStage fooSet(Set<FooSetItem> fooSet);

        _FinalStage addFooSet(FooSetItem fooSet);

        _FinalStage addAllFooSet(Set<FooSetItem> fooSet);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements FooStage, BarStage, RefStage, _FinalStage {
        private String foo;

        private Bar bar;

        private ReferenceType ref;

        private Set<FooSetItem> fooSet = new LinkedHashSet<>();

        private List<FooListItem> fooList = new ArrayList<>();

        private Map<String, FooMapValue> fooMap = new LinkedHashMap<>();

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
        public RefStage bar(@NotNull Bar bar) {
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
        public _FinalStage addAllFooSet(Set<FooSetItem> fooSet) {
            this.fooSet.addAll(fooSet);
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        public _FinalStage addFooSet(FooSetItem fooSet) {
            this.fooSet.add(fooSet);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "fooSet", nulls = Nulls.SKIP)
        public _FinalStage fooSet(Set<FooSetItem> fooSet) {
            this.fooSet.clear();
            this.fooSet.addAll(fooSet);
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        public _FinalStage addAllFooList(List<FooListItem> fooList) {
            this.fooList.addAll(fooList);
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        public _FinalStage addFooList(FooListItem fooList) {
            this.fooList.add(fooList);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "fooList", nulls = Nulls.SKIP)
        public _FinalStage fooList(List<FooListItem> fooList) {
            this.fooList.clear();
            this.fooList.addAll(fooList);
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        public _FinalStage fooMap(String key, FooMapValue value) {
            this.fooMap.put(key, value);
            return this;
        }

        /**
         * <p>lorem ipsum</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        public _FinalStage putAllFooMap(Map<String, FooMapValue> fooMap) {
            this.fooMap.putAll(fooMap);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "fooMap", nulls = Nulls.SKIP)
        public _FinalStage fooMap(Map<String, FooMapValue> fooMap) {
            this.fooMap.clear();
            this.fooMap.putAll(fooMap);
            return this;
        }

        @java.lang.Override
        public RootType1 build() {
            return new RootType1(foo, bar, fooMap, fooList, fooSet, ref, additionalProperties);
        }
    }

    @JsonInclude(JsonInclude.Include.NON_ABSENT)
    @JsonDeserialize(builder = FooMapValue.Builder.class)
    public static final class FooMapValue {
        private final String foo;

        private final ReferenceType ref;

        private final Map<String, Object> additionalProperties;

        private FooMapValue(String foo, ReferenceType ref, Map<String, Object> additionalProperties) {
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
            return other instanceof FooMapValue && equalTo((FooMapValue) other);
        }

        @JsonAnyGetter
        public Map<String, Object> getAdditionalProperties() {
            return this.additionalProperties;
        }

        private boolean equalTo(FooMapValue other) {
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

            Builder from(FooMapValue other);
        }

        public interface RefStage {
            _FinalStage ref(@NotNull ReferenceType ref);
        }

        public interface _FinalStage {
            FooMapValue build();
        }

        @JsonIgnoreProperties(ignoreUnknown = true)
        public static final class Builder implements FooStage, RefStage, _FinalStage {
            private String foo;

            private ReferenceType ref;

            @JsonAnySetter
            private Map<String, Object> additionalProperties = new HashMap<>();

            private Builder() {}

            @java.lang.Override
            public Builder from(FooMapValue other) {
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
            public FooMapValue build() {
                return new FooMapValue(foo, ref, additionalProperties);
            }
        }
    }

    @JsonInclude(JsonInclude.Include.NON_ABSENT)
    @JsonDeserialize(builder = Bar.Builder.class)
    public static final class Bar {
        private final String foo;

        private final Bar_ bar;

        private final ReferenceType ref;

        private final Map<String, Object> additionalProperties;

        private Bar(String foo, Bar_ bar, ReferenceType ref, Map<String, Object> additionalProperties) {
            this.foo = foo;
            this.bar = bar;
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
        public Bar_ getBar() {
            return bar;
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
            return other instanceof Bar && equalTo((Bar) other);
        }

        @JsonAnyGetter
        public Map<String, Object> getAdditionalProperties() {
            return this.additionalProperties;
        }

        private boolean equalTo(Bar other) {
            return foo.equals(other.foo) && bar.equals(other.bar) && ref.equals(other.ref);
        }

        @java.lang.Override
        public int hashCode() {
            return Objects.hash(this.foo, this.bar, this.ref);
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

            Builder from(Bar other);
        }

        public interface BarStage {
            RefStage bar(@NotNull Bar_ bar);
        }

        public interface RefStage {
            _FinalStage ref(@NotNull ReferenceType ref);
        }

        public interface _FinalStage {
            Bar build();
        }

        @JsonIgnoreProperties(ignoreUnknown = true)
        public static final class Builder implements FooStage, BarStage, RefStage, _FinalStage {
            private String foo;

            private Bar_ bar;

            private ReferenceType ref;

            @JsonAnySetter
            private Map<String, Object> additionalProperties = new HashMap<>();

            private Builder() {}

            @java.lang.Override
            public Builder from(Bar other) {
                foo(other.getFoo());
                bar(other.getBar());
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
            public RefStage bar(@NotNull Bar_ bar) {
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

            @java.lang.Override
            public Bar build() {
                return new Bar(foo, bar, ref, additionalProperties);
            }
        }

        @JsonInclude(JsonInclude.Include.NON_ABSENT)
        @JsonDeserialize(builder = Bar_.Builder.class)
        public static final class Bar_ {
            private final String foo;

            private final String bar;

            private final MyEnum myEnum;

            private final ReferenceType ref;

            private final Map<String, Object> additionalProperties;

            private Bar_(
                    String foo,
                    String bar,
                    MyEnum myEnum,
                    ReferenceType ref,
                    Map<String, Object> additionalProperties) {
                this.foo = foo;
                this.bar = bar;
                this.myEnum = myEnum;
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
            public String getBar() {
                return bar;
            }

            /**
             * @return lorem ipsum
             */
            @JsonProperty("myEnum")
            public MyEnum getMyEnum() {
                return myEnum;
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
                return other instanceof Bar_ && equalTo((Bar_) other);
            }

            @JsonAnyGetter
            public Map<String, Object> getAdditionalProperties() {
                return this.additionalProperties;
            }

            private boolean equalTo(Bar_ other) {
                return foo.equals(other.foo)
                        && bar.equals(other.bar)
                        && myEnum.equals(other.myEnum)
                        && ref.equals(other.ref);
            }

            @java.lang.Override
            public int hashCode() {
                return Objects.hash(this.foo, this.bar, this.myEnum, this.ref);
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

                Builder from(Bar_ other);
            }

            public interface BarStage {
                MyEnumStage bar(@NotNull String bar);
            }

            public interface MyEnumStage {
                RefStage myEnum(@NotNull MyEnum myEnum);
            }

            public interface RefStage {
                _FinalStage ref(@NotNull ReferenceType ref);
            }

            public interface _FinalStage {
                Bar_ build();
            }

            @JsonIgnoreProperties(ignoreUnknown = true)
            public static final class Builder implements FooStage, BarStage, MyEnumStage, RefStage, _FinalStage {
                private String foo;

                private String bar;

                private MyEnum myEnum;

                private ReferenceType ref;

                @JsonAnySetter
                private Map<String, Object> additionalProperties = new HashMap<>();

                private Builder() {}

                @java.lang.Override
                public Builder from(Bar_ other) {
                    foo(other.getFoo());
                    bar(other.getBar());
                    myEnum(other.getMyEnum());
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
                public MyEnumStage bar(@NotNull String bar) {
                    this.bar = Objects.requireNonNull(bar, "bar must not be null");
                    return this;
                }

                /**
                 * <p>lorem ipsum</p>
                 * @return Reference to {@code this} so that method calls can be chained together.
                 */
                @java.lang.Override
                @JsonSetter("myEnum")
                public RefStage myEnum(@NotNull MyEnum myEnum) {
                    this.myEnum = Objects.requireNonNull(myEnum, "myEnum must not be null");
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
                public Bar_ build() {
                    return new Bar_(foo, bar, myEnum, ref, additionalProperties);
                }
            }

            public enum MyEnum {
                SUNNY("SUNNY"),

                CLOUDY("CLOUDY"),

                RAINING("RAINING"),

                SNOWING("SNOWING");

                private final String value;

                MyEnum(String value) {
                    this.value = value;
                }

                @JsonValue
                @java.lang.Override
                public String toString() {
                    return this.value;
                }
            }
        }
    }

    @JsonInclude(JsonInclude.Include.NON_ABSENT)
    @JsonDeserialize(builder = FooListItem.Builder.class)
    public static final class FooListItem {
        private final String foo;

        private final ReferenceType ref;

        private final Map<String, Object> additionalProperties;

        private FooListItem(String foo, ReferenceType ref, Map<String, Object> additionalProperties) {
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
            return other instanceof FooListItem && equalTo((FooListItem) other);
        }

        @JsonAnyGetter
        public Map<String, Object> getAdditionalProperties() {
            return this.additionalProperties;
        }

        private boolean equalTo(FooListItem other) {
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

            Builder from(FooListItem other);
        }

        public interface RefStage {
            _FinalStage ref(@NotNull ReferenceType ref);
        }

        public interface _FinalStage {
            FooListItem build();
        }

        @JsonIgnoreProperties(ignoreUnknown = true)
        public static final class Builder implements FooStage, RefStage, _FinalStage {
            private String foo;

            private ReferenceType ref;

            @JsonAnySetter
            private Map<String, Object> additionalProperties = new HashMap<>();

            private Builder() {}

            @java.lang.Override
            public Builder from(FooListItem other) {
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
            public FooListItem build() {
                return new FooListItem(foo, ref, additionalProperties);
            }
        }
    }

    @JsonInclude(JsonInclude.Include.NON_ABSENT)
    @JsonDeserialize(builder = FooSetItem.Builder.class)
    public static final class FooSetItem {
        private final String foo;

        private final ReferenceType ref;

        private final Map<String, Object> additionalProperties;

        private FooSetItem(String foo, ReferenceType ref, Map<String, Object> additionalProperties) {
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
            return other instanceof FooSetItem && equalTo((FooSetItem) other);
        }

        @JsonAnyGetter
        public Map<String, Object> getAdditionalProperties() {
            return this.additionalProperties;
        }

        private boolean equalTo(FooSetItem other) {
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

            Builder from(FooSetItem other);
        }

        public interface RefStage {
            _FinalStage ref(@NotNull ReferenceType ref);
        }

        public interface _FinalStage {
            FooSetItem build();
        }

        @JsonIgnoreProperties(ignoreUnknown = true)
        public static final class Builder implements FooStage, RefStage, _FinalStage {
            private String foo;

            private ReferenceType ref;

            @JsonAnySetter
            private Map<String, Object> additionalProperties = new HashMap<>();

            private Builder() {}

            @java.lang.Override
            public Builder from(FooSetItem other) {
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
            public FooSetItem build() {
                return new FooSetItem(foo, ref, additionalProperties);
            }
        }
    }
}
