/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.v2.v3.problem.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.trace.core.ObjectMappers;
import com.seed.trace.resources.commons.types.VariableType;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = Parameter.Builder.class)
public final class Parameter {
    private final String parameterId;

    private final String name;

    private final VariableType variableType;

    private final Map<String, Object> additionalProperties;

    private Parameter(
            String parameterId, String name, VariableType variableType, Map<String, Object> additionalProperties) {
        this.parameterId = parameterId;
        this.name = name;
        this.variableType = variableType;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("parameterId")
    public String getParameterId() {
        return parameterId;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("variableType")
    public VariableType getVariableType() {
        return variableType;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Parameter && equalTo((Parameter) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(Parameter other) {
        return parameterId.equals(other.parameterId)
                && name.equals(other.name)
                && variableType.equals(other.variableType);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.parameterId, this.name, this.variableType);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static ParameterIdStage builder() {
        return new Builder();
    }

    public interface ParameterIdStage {
        NameStage parameterId(@NotNull String parameterId);

        Builder from(Parameter other);
    }

    public interface NameStage {
        VariableTypeStage name(@NotNull String name);
    }

    public interface VariableTypeStage {
        _FinalStage variableType(@NotNull VariableType variableType);
    }

    public interface _FinalStage {
        Parameter build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements ParameterIdStage, NameStage, VariableTypeStage, _FinalStage {
        private String parameterId;

        private String name;

        private VariableType variableType;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(Parameter other) {
            parameterId(other.getParameterId());
            name(other.getName());
            variableType(other.getVariableType());
            return this;
        }

        @java.lang.Override
        @JsonSetter("parameterId")
        public NameStage parameterId(@NotNull String parameterId) {
            this.parameterId = parameterId;
            return this;
        }

        @java.lang.Override
        @JsonSetter("name")
        public VariableTypeStage name(@NotNull String name) {
            this.name = name;
            return this;
        }

        @java.lang.Override
        @JsonSetter("variableType")
        public _FinalStage variableType(@NotNull VariableType variableType) {
            this.variableType = variableType;
            return this;
        }

        @java.lang.Override
        public Parameter build() {
            return new Parameter(parameterId, name, variableType, additionalProperties);
        }
    }
}
