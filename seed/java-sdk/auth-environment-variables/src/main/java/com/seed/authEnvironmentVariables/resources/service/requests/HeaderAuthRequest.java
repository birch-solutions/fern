/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.authEnvironmentVariables.resources.service.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.authEnvironmentVariables.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = HeaderAuthRequest.Builder.class)
public final class HeaderAuthRequest {
    private final String xEndpointHeader;

    private final Map<String, Object> additionalProperties;

    private HeaderAuthRequest(String xEndpointHeader, Map<String, Object> additionalProperties) {
        this.xEndpointHeader = xEndpointHeader;
        this.additionalProperties = additionalProperties;
    }

    /**
     * @return Specifies the endpoint key.
     */
    @JsonProperty("X-Endpoint-Header")
    public String getXEndpointHeader() {
        return xEndpointHeader;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof HeaderAuthRequest && equalTo((HeaderAuthRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(HeaderAuthRequest other) {
        return xEndpointHeader.equals(other.xEndpointHeader);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.xEndpointHeader);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static XEndpointHeaderStage builder() {
        return new Builder();
    }

    public interface XEndpointHeaderStage {
        _FinalStage xEndpointHeader(@NotNull String xEndpointHeader);

        Builder from(HeaderAuthRequest other);
    }

    public interface _FinalStage {
        HeaderAuthRequest build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements XEndpointHeaderStage, _FinalStage {
        private String xEndpointHeader;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(HeaderAuthRequest other) {
            xEndpointHeader(other.getXEndpointHeader());
            return this;
        }

        /**
         * <p>Specifies the endpoint key.</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("X-Endpoint-Header")
        public _FinalStage xEndpointHeader(@NotNull String xEndpointHeader) {
            this.xEndpointHeader = xEndpointHeader;
            return this;
        }

        @java.lang.Override
        public HeaderAuthRequest build() {
            return new HeaderAuthRequest(xEndpointHeader, additionalProperties);
        }
    }
}
