/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.resources.file.service.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.examples.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = GetFileRequest.Builder.class)
public final class GetFileRequest {
    private final String xFileApiVersion;

    private final Map<String, Object> additionalProperties;

    private GetFileRequest(String xFileApiVersion, Map<String, Object> additionalProperties) {
        this.xFileApiVersion = xFileApiVersion;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("X-File-API-Version")
    public String getXFileApiVersion() {
        return xFileApiVersion;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof GetFileRequest && equalTo((GetFileRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(GetFileRequest other) {
        return xFileApiVersion.equals(other.xFileApiVersion);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.xFileApiVersion);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static XFileApiVersionStage builder() {
        return new Builder();
    }

    public interface XFileApiVersionStage {
        _FinalStage xFileApiVersion(@NotNull String xFileApiVersion);

        Builder from(GetFileRequest other);
    }

    public interface _FinalStage {
        GetFileRequest build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements XFileApiVersionStage, _FinalStage {
        private String xFileApiVersion;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(GetFileRequest other) {
            xFileApiVersion(other.getXFileApiVersion());
            return this;
        }

        @java.lang.Override
        @JsonSetter("X-File-API-Version")
        public _FinalStage xFileApiVersion(@NotNull String xFileApiVersion) {
            this.xFileApiVersion = xFileApiVersion;
            return this;
        }

        @java.lang.Override
        public GetFileRequest build() {
            return new GetFileRequest(xFileApiVersion, additionalProperties);
        }
    }
}
