/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.responseProperty.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.responseProperty.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = StringResponse.Builder.class)
public final class StringResponse {
    private final String data;

    private final Map<String, Object> additionalProperties;

    private StringResponse(String data, Map<String, Object> additionalProperties) {
        this.data = data;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("data")
    public String getData() {
        return data;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof StringResponse && equalTo((StringResponse) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(StringResponse other) {
        return data.equals(other.data);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.data);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static DataStage builder() {
        return new Builder();
    }

    public interface DataStage {
        _FinalStage data(String data);

        Builder from(StringResponse other);
    }

    public interface _FinalStage {
        StringResponse build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements DataStage, _FinalStage {
        private String data;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(StringResponse other) {
            data(other.getData());
            return this;
        }

        @java.lang.Override
        @JsonSetter("data")
        public _FinalStage data(String data) {
            this.data = data;
            return this;
        }

        @java.lang.Override
        public StringResponse build() {
            return new StringResponse(data, additionalProperties);
        }
    }
}
