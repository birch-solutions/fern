/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.model.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.examples.core.ObjectMappers;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = Migration.Builder.class)
public final class Migration {
    private final String name;

    private final MigrationStatus status;

    private Migration(String name, MigrationStatus status) {
        this.name = name;
        this.status = status;
    }

    @JsonProperty("name")
    public String getName() {
        return name;
    }

    @JsonProperty("status")
    public MigrationStatus getStatus() {
        return status;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Migration && equalTo((Migration) other);
    }

    private boolean equalTo(Migration other) {
        return name.equals(other.name) && status.equals(other.status);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.name, this.status);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static NameStage builder() {
        return new Builder();
    }

    public interface NameStage {
        StatusStage name(@NotNull String name);

        Builder from(Migration other);
    }

    public interface StatusStage {
        _FinalStage status(@NotNull MigrationStatus status);
    }

    public interface _FinalStage {
        Migration build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements NameStage, StatusStage, _FinalStage {
        private String name;

        private MigrationStatus status;

        private Builder() {}

        @java.lang.Override
        public Builder from(Migration other) {
            name(other.getName());
            status(other.getStatus());
            return this;
        }

        @java.lang.Override
        @JsonSetter("name")
        public StatusStage name(@NotNull String name) {
            this.name = Objects.requireNonNull(name, "name must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("status")
        public _FinalStage status(@NotNull MigrationStatus status) {
            this.status = Objects.requireNonNull(status, "status must not be null");
            return this;
        }

        @java.lang.Override
        public Migration build() {
            return new Migration(name, status);
        }
    }
}
