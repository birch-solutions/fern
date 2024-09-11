/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.mixedCase.resources.service.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.mixedCase.core.ObjectMappers;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = User.Builder.class)
public final class User {
    private final String userName;

    private final List<String> metadataTags;

    private final Map<String, String> extraProperties;

    private final Map<String, Object> additionalProperties;

    private User(
            String userName,
            List<String> metadataTags,
            Map<String, String> extraProperties,
            Map<String, Object> additionalProperties) {
        this.userName = userName;
        this.metadataTags = metadataTags;
        this.extraProperties = extraProperties;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("userName")
    public String getUserName() {
        return userName;
    }

    @JsonProperty("metadata_tags")
    public List<String> getMetadataTags() {
        return metadataTags;
    }

    @JsonProperty("EXTRA_PROPERTIES")
    public Map<String, String> getExtraProperties() {
        return extraProperties;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof User && equalTo((User) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(User other) {
        return userName.equals(other.userName)
                && metadataTags.equals(other.metadataTags)
                && extraProperties.equals(other.extraProperties);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.userName, this.metadataTags, this.extraProperties);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static UserNameStage builder() {
        return new Builder();
    }

    public interface UserNameStage {
        _FinalStage userName(@NotNull String userName);

        Builder from(User other);
    }

    public interface _FinalStage {
        User build();

        _FinalStage metadataTags(List<String> metadataTags);

        _FinalStage addMetadataTags(String metadataTags);

        _FinalStage addAllMetadataTags(List<String> metadataTags);

        _FinalStage extraProperties(Map<String, String> extraProperties);

        _FinalStage putAllExtraProperties(Map<String, String> extraProperties);

        _FinalStage extraProperties(String key, String value);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements UserNameStage, _FinalStage {
        private String userName;

        private Map<String, String> extraProperties = new LinkedHashMap<>();

        private List<String> metadataTags = new ArrayList<>();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(User other) {
            userName(other.getUserName());
            metadataTags(other.getMetadataTags());
            extraProperties(other.getExtraProperties());
            return this;
        }

        @java.lang.Override
        @JsonSetter("userName")
        public _FinalStage userName(@NotNull String userName) {
            this.userName = userName;
            return this;
        }

        @java.lang.Override
        public _FinalStage extraProperties(String key, String value) {
            this.extraProperties.put(key, value);
            return this;
        }

        @java.lang.Override
        public _FinalStage putAllExtraProperties(Map<String, String> extraProperties) {
            this.extraProperties.putAll(extraProperties);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "EXTRA_PROPERTIES", nulls = Nulls.SKIP)
        public _FinalStage extraProperties(Map<String, String> extraProperties) {
            this.extraProperties.clear();
            this.extraProperties.putAll(extraProperties);
            return this;
        }

        @java.lang.Override
        public _FinalStage addAllMetadataTags(List<String> metadataTags) {
            this.metadataTags.addAll(metadataTags);
            return this;
        }

        @java.lang.Override
        public _FinalStage addMetadataTags(String metadataTags) {
            this.metadataTags.add(metadataTags);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "metadata_tags", nulls = Nulls.SKIP)
        public _FinalStage metadataTags(List<String> metadataTags) {
            this.metadataTags.clear();
            this.metadataTags.addAll(metadataTags);
            return this;
        }

        @java.lang.Override
        public User build() {
            return new User(userName, metadataTags, extraProperties, additionalProperties);
        }
    }
}
