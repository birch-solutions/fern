/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.literal.resources.inlined.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.literal.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = ATopLevelLiteral.Builder.class)
public final class ATopLevelLiteral {
    private final ANestedLiteral nestedLiteral;

    private final Map<String, Object> additionalProperties;

    private ATopLevelLiteral(ANestedLiteral nestedLiteral, Map<String, Object> additionalProperties) {
        this.nestedLiteral = nestedLiteral;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("nestedLiteral")
    public ANestedLiteral getNestedLiteral() {
        return nestedLiteral;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ATopLevelLiteral && equalTo((ATopLevelLiteral) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ATopLevelLiteral other) {
        return nestedLiteral.equals(other.nestedLiteral);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.nestedLiteral);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static NestedLiteralStage builder() {
        return new Builder();
    }

    public interface NestedLiteralStage {
        _FinalStage nestedLiteral(@NotNull ANestedLiteral nestedLiteral);

        Builder from(ATopLevelLiteral other);
    }

    public interface _FinalStage {
        ATopLevelLiteral build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements NestedLiteralStage, _FinalStage {
        private ANestedLiteral nestedLiteral;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(ATopLevelLiteral other) {
            nestedLiteral(other.getNestedLiteral());
            return this;
        }

        @java.lang.Override
        @JsonSetter("nestedLiteral")
        public _FinalStage nestedLiteral(@NotNull ANestedLiteral nestedLiteral) {
            this.nestedLiteral = nestedLiteral;
            return this;
        }

        @java.lang.Override
        public ATopLevelLiteral build() {
            return new ATopLevelLiteral(nestedLiteral, additionalProperties);
        }
    }
}
