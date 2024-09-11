/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.validation.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.validation.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = GetRequest.Builder.class)
public final class GetRequest {
    private final double decimal;

    private final int even;

    private final String name;

    private final Map<String, Object> additionalProperties;

    private GetRequest(double decimal, int even, String name, Map<String, Object> additionalProperties) {
        this.decimal = decimal;
        this.even = even;
        this.name = name;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("decimal")
    public double getDecimal() {
        return decimal;
    }

    @JsonProperty("even")
    public int getEven() {
        return even;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof GetRequest && equalTo((GetRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(GetRequest other) {
        return decimal == other.decimal && even == other.even && name.equals(other.name);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.decimal, this.even, this.name);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static DecimalStage builder() {
        return new Builder();
    }

    public interface DecimalStage {
        EvenStage decimal(double decimal);

        Builder from(GetRequest other);
    }

    public interface EvenStage {
        NameStage even(int even);
    }

    public interface NameStage {
        _FinalStage name(@NotNull String name);
    }

    public interface _FinalStage {
        GetRequest build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements DecimalStage, EvenStage, NameStage, _FinalStage {
        private double decimal;

        private int even;

        private String name;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(GetRequest other) {
            decimal(other.getDecimal());
            even(other.getEven());
            name(other.getName());
            return this;
        }

        @java.lang.Override
        @JsonSetter("decimal")
        public EvenStage decimal(double decimal) {
            this.decimal = Objects.requireNonNull(decimal, "decimal must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("even")
        public NameStage even(int even) {
            this.even = Objects.requireNonNull(even, "even must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("name")
        public _FinalStage name(@NotNull String name) {
            this.name = name;
            return this;
        }

        @java.lang.Override
        public GetRequest build() {
            return new GetRequest(decimal, even, name, additionalProperties);
        }
    }
}
