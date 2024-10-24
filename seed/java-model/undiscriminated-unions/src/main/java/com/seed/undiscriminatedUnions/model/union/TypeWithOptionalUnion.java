/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.undiscriminatedUnions.model.union;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.undiscriminatedUnions.core.ObjectMappers;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = TypeWithOptionalUnion.Builder.class)
public final class TypeWithOptionalUnion {
    private final Optional<MyUnion> myUnion;

    private TypeWithOptionalUnion(Optional<MyUnion> myUnion) {
        this.myUnion = myUnion;
    }

    @JsonProperty("myUnion")
    public Optional<MyUnion> getMyUnion() {
        return myUnion;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof TypeWithOptionalUnion && equalTo((TypeWithOptionalUnion) other);
    }

    private boolean equalTo(TypeWithOptionalUnion other) {
        return myUnion.equals(other.myUnion);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.myUnion);
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
        private Optional<MyUnion> myUnion = Optional.empty();

        private Builder() {}

        public Builder from(TypeWithOptionalUnion other) {
            myUnion(other.getMyUnion());
            return this;
        }

        @JsonSetter(value = "myUnion", nulls = Nulls.SKIP)
        public Builder myUnion(Optional<MyUnion> myUnion) {
            this.myUnion = myUnion;
            return this;
        }

        public Builder myUnion(MyUnion myUnion) {
            this.myUnion = Optional.ofNullable(myUnion);
            return this;
        }

        public TypeWithOptionalUnion build() {
            return new TypeWithOptionalUnion(myUnion);
        }
    }
}
