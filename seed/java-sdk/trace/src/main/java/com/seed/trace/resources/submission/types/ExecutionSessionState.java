/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.submission.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.trace.core.ObjectMappers;
import com.seed.trace.resources.commons.types.Language;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = ExecutionSessionState.Builder.class)
public final class ExecutionSessionState {
    private final Optional<String> lastTimeContacted;

    private final String sessionId;

    private final boolean isWarmInstance;

    private final Optional<String> awsTaskId;

    private final Language language;

    private final ExecutionSessionStatus status;

    private final Map<String, Object> additionalProperties;

    private ExecutionSessionState(
            Optional<String> lastTimeContacted,
            String sessionId,
            boolean isWarmInstance,
            Optional<String> awsTaskId,
            Language language,
            ExecutionSessionStatus status,
            Map<String, Object> additionalProperties) {
        this.lastTimeContacted = lastTimeContacted;
        this.sessionId = sessionId;
        this.isWarmInstance = isWarmInstance;
        this.awsTaskId = awsTaskId;
        this.language = language;
        this.status = status;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("lastTimeContacted")
    public Optional<String> getLastTimeContacted() {
        return lastTimeContacted;
    }

    /**
     * @return The auto-generated session id. Formatted as a uuid.
     */
    @JsonProperty("sessionId")
    public String getSessionId() {
        return sessionId;
    }

    @JsonProperty("isWarmInstance")
    public boolean getIsWarmInstance() {
        return isWarmInstance;
    }

    @JsonProperty("awsTaskId")
    public Optional<String> getAwsTaskId() {
        return awsTaskId;
    }

    @JsonProperty("language")
    public Language getLanguage() {
        return language;
    }

    @JsonProperty("status")
    public ExecutionSessionStatus getStatus() {
        return status;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ExecutionSessionState && equalTo((ExecutionSessionState) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ExecutionSessionState other) {
        return lastTimeContacted.equals(other.lastTimeContacted)
                && sessionId.equals(other.sessionId)
                && isWarmInstance == other.isWarmInstance
                && awsTaskId.equals(other.awsTaskId)
                && language.equals(other.language)
                && status.equals(other.status);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(
                this.lastTimeContacted,
                this.sessionId,
                this.isWarmInstance,
                this.awsTaskId,
                this.language,
                this.status);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static SessionIdStage builder() {
        return new Builder();
    }

    public interface SessionIdStage {
        IsWarmInstanceStage sessionId(@NotNull String sessionId);

        Builder from(ExecutionSessionState other);
    }

    public interface IsWarmInstanceStage {
        LanguageStage isWarmInstance(boolean isWarmInstance);
    }

    public interface LanguageStage {
        StatusStage language(@NotNull Language language);
    }

    public interface StatusStage {
        _FinalStage status(@NotNull ExecutionSessionStatus status);
    }

    public interface _FinalStage {
        ExecutionSessionState build();

        _FinalStage lastTimeContacted(Optional<String> lastTimeContacted);

        _FinalStage lastTimeContacted(String lastTimeContacted);

        _FinalStage awsTaskId(Optional<String> awsTaskId);

        _FinalStage awsTaskId(String awsTaskId);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder
            implements SessionIdStage, IsWarmInstanceStage, LanguageStage, StatusStage, _FinalStage {
        private String sessionId;

        private boolean isWarmInstance;

        private Language language;

        private ExecutionSessionStatus status;

        private Optional<String> awsTaskId = Optional.empty();

        private Optional<String> lastTimeContacted = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(ExecutionSessionState other) {
            lastTimeContacted(other.getLastTimeContacted());
            sessionId(other.getSessionId());
            isWarmInstance(other.getIsWarmInstance());
            awsTaskId(other.getAwsTaskId());
            language(other.getLanguage());
            status(other.getStatus());
            return this;
        }

        /**
         * <p>The auto-generated session id. Formatted as a uuid.</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("sessionId")
        public IsWarmInstanceStage sessionId(@NotNull String sessionId) {
            this.sessionId = sessionId;
            return this;
        }

        @java.lang.Override
        @JsonSetter("isWarmInstance")
        public LanguageStage isWarmInstance(boolean isWarmInstance) {
            this.isWarmInstance = Objects.requireNonNull(isWarmInstance, "isWarmInstance must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("language")
        public StatusStage language(@NotNull Language language) {
            this.language = language;
            return this;
        }

        @java.lang.Override
        @JsonSetter("status")
        public _FinalStage status(@NotNull ExecutionSessionStatus status) {
            this.status = status;
            return this;
        }

        @java.lang.Override
        public _FinalStage awsTaskId(String awsTaskId) {
            this.awsTaskId = Optional.ofNullable(awsTaskId);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "awsTaskId", nulls = Nulls.SKIP)
        public _FinalStage awsTaskId(Optional<String> awsTaskId) {
            this.awsTaskId = awsTaskId;
            return this;
        }

        @java.lang.Override
        public _FinalStage lastTimeContacted(String lastTimeContacted) {
            this.lastTimeContacted = Optional.ofNullable(lastTimeContacted);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "lastTimeContacted", nulls = Nulls.SKIP)
        public _FinalStage lastTimeContacted(Optional<String> lastTimeContacted) {
            this.lastTimeContacted = lastTimeContacted;
            return this;
        }

        @java.lang.Override
        public ExecutionSessionState build() {
            return new ExecutionSessionState(
                    lastTimeContacted, sessionId, isWarmInstance, awsTaskId, language, status, additionalProperties);
        }
    }
}
