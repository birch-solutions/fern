/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.pagination.resources.users.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.pagination.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(builder = ListUsersExtendedResponse.Builder.class)
public final class ListUsersExtendedResponse implements IUserPage {
    private final UserListContainer data;

    private final Optional<UUID> next;

    private final int totalCount;

    private final Map<String, Object> additionalProperties;

    private ListUsersExtendedResponse(
            UserListContainer data, Optional<UUID> next, int totalCount, Map<String, Object> additionalProperties) {
        this.data = data;
        this.next = next;
        this.totalCount = totalCount;
        this.additionalProperties = additionalProperties;
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

    /**
     * @return The totall number of /users
     */
    @JsonProperty("total_count")
    public int getTotalCount() {
        return totalCount;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ListUsersExtendedResponse && equalTo((ListUsersExtendedResponse) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ListUsersExtendedResponse other) {
        return data.equals(other.data) && next.equals(other.next) && totalCount == other.totalCount;
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.data, this.next, this.totalCount);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static DataStage builder() {
        return new Builder();
    }

    public interface DataStage {
        TotalCountStage data(UserListContainer data);

        Builder from(ListUsersExtendedResponse other);
    }

    public interface TotalCountStage {
        _FinalStage totalCount(int totalCount);
    }

    public interface _FinalStage {
        ListUsersExtendedResponse build();

        _FinalStage next(Optional<UUID> next);

        _FinalStage next(UUID next);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements DataStage, TotalCountStage, _FinalStage {
        private UserListContainer data;

        private int totalCount;

        private Optional<UUID> next = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(ListUsersExtendedResponse other) {
            data(other.getData());
            next(other.getNext());
            totalCount(other.getTotalCount());
            return this;
        }

        @java.lang.Override
        @JsonSetter("data")
        public TotalCountStage data(UserListContainer data) {
            this.data = data;
            return this;
        }

        /**
         * <p>The totall number of /users</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("total_count")
        public _FinalStage totalCount(int totalCount) {
            this.totalCount = totalCount;
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
        public ListUsersExtendedResponse build() {
            return new ListUsersExtendedResponse(data, next, totalCount, additionalProperties);
        }
    }
}
