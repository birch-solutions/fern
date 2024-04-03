/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.pagination.model.users;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.pagination.core.ObjectMappers;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = UserPage.Builder.class)
public final class UserPage implements IUserPage {
    private final UserListContainer data;

    private final Optional<UUID> next;

    private UserPage(UserListContainer data, Optional<UUID> next) {
        this.data = data;
        this.next = next;
    }

    @JsonProperty("data")
    @java.lang.Override
    public UserListContainer getData() {
        return data;
    }

    @JsonProperty("next")
    @java.lang.Override
    public Optional<UUID> getNext() {
        return next;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof UserPage && equalTo((UserPage) other);
    }

    private boolean equalTo(UserPage other) {
        return data.equals(other.data) && next.equals(other.next);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.data, this.next);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static DataStage builder() {
        return new Builder();
    }

    public interface DataStage {
        _FinalStage data(UserListContainer data);

        Builder from(UserPage other);
    }

    public interface _FinalStage {
        UserPage build();

        _FinalStage next(Optional<UUID> next);

        _FinalStage next(UUID next);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements DataStage, _FinalStage {
        private UserListContainer data;

        private Optional<UUID> next = Optional.empty();

        private Builder() {}

        @java.lang.Override
        public Builder from(UserPage other) {
            data(other.getData());
            next(other.getNext());
            return this;
        }

        @java.lang.Override
        @JsonSetter("data")
        public _FinalStage data(UserListContainer data) {
            this.data = data;
            return this;
        }

        @java.lang.Override
        public _FinalStage next(UUID next) {
            this.next = Optional.of(next);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "next", nulls = Nulls.SKIP)
        public _FinalStage next(Optional<UUID> next) {
            this.next = next;
            return this;
        }

        @java.lang.Override
        public UserPage build() {
            return new UserPage(data, next);
        }
    }
}
