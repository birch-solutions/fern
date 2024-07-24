/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.oauthClientCredentials.model.auth;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.oauthClientCredentials.core.ObjectMappers;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = TokenResponse.Builder.class)
public final class TokenResponse {
    private final String accessToken;

    private final int expiresIn;

    private final Optional<String> refreshToken;

    private TokenResponse(String accessToken, int expiresIn, Optional<String> refreshToken) {
        this.accessToken = accessToken;
        this.expiresIn = expiresIn;
        this.refreshToken = refreshToken;
    }

    @JsonProperty("access_token")
    public String getAccessToken() {
        return accessToken;
    }

    @JsonProperty("expires_in")
    public int getExpiresIn() {
        return expiresIn;
    }

    @JsonProperty("refresh_token")
    public Optional<String> getRefreshToken() {
        return refreshToken;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof TokenResponse && equalTo((TokenResponse) other);
    }

    private boolean equalTo(TokenResponse other) {
        return accessToken.equals(other.accessToken)
                && expiresIn == other.expiresIn
                && refreshToken.equals(other.refreshToken);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.accessToken, this.expiresIn, this.refreshToken);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static AccessTokenStage builder() {
        return new Builder();
    }

    public interface AccessTokenStage {
        ExpiresInStage accessToken(String accessToken);

        Builder from(TokenResponse other);
    }

    public interface ExpiresInStage {
        _FinalStage expiresIn(int expiresIn);
    }

    public interface _FinalStage {
        TokenResponse build();

        _FinalStage refreshToken(Optional<String> refreshToken);

        _FinalStage refreshToken(String refreshToken);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements AccessTokenStage, ExpiresInStage, _FinalStage {
        private String accessToken;

        private int expiresIn;

        private Optional<String> refreshToken = Optional.empty();

        private Builder() {}

        @java.lang.Override
        public Builder from(TokenResponse other) {
            accessToken(other.getAccessToken());
            expiresIn(other.getExpiresIn());
            refreshToken(other.getRefreshToken());
            return this;
        }

        @java.lang.Override
        @JsonSetter("access_token")
        public ExpiresInStage accessToken(String accessToken) {
            this.accessToken = accessToken;
            return this;
        }

        @java.lang.Override
        @JsonSetter("expires_in")
        public _FinalStage expiresIn(int expiresIn) {
            this.expiresIn = expiresIn;
            return this;
        }

        @java.lang.Override
        public _FinalStage refreshToken(String refreshToken) {
            this.refreshToken = Optional.ofNullable(refreshToken);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "refresh_token", nulls = Nulls.SKIP)
        public _FinalStage refreshToken(Optional<String> refreshToken) {
            this.refreshToken = refreshToken;
            return this;
        }

        @java.lang.Override
        public TokenResponse build() {
            return new TokenResponse(accessToken, expiresIn, refreshToken);
        }
    }
}
