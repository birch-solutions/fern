/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.queryParameters.resources.user.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.queryParameters.core.ObjectMappers;
import com.seed.queryParameters.resources.user.types.NestedUser;
import com.seed.queryParameters.resources.user.types.User;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = GetUsersRequest.Builder.class)
public final class GetUsersRequest {
    private final int limit;

    private final UUID id;

    private final String date;

    private final OffsetDateTime deadline;

    private final byte[] bytes;

    private final User user;

    private final List<User> userList;

    private final Optional<OffsetDateTime> optionalDeadline;

    private final Map<String, String> keyValue;

    private final Optional<String> optionalString;

    private final NestedUser nestedUser;

    private final Optional<User> optionalUser;

    private final User excludeUser;

    private final String filter;

    private final Map<String, Object> additionalProperties;

    private GetUsersRequest(
            int limit,
            UUID id,
            String date,
            OffsetDateTime deadline,
            byte[] bytes,
            User user,
            List<User> userList,
            Optional<OffsetDateTime> optionalDeadline,
            Map<String, String> keyValue,
            Optional<String> optionalString,
            NestedUser nestedUser,
            Optional<User> optionalUser,
            User excludeUser,
            String filter,
            Map<String, Object> additionalProperties) {
        this.limit = limit;
        this.id = id;
        this.date = date;
        this.deadline = deadline;
        this.bytes = bytes;
        this.user = user;
        this.userList = userList;
        this.optionalDeadline = optionalDeadline;
        this.keyValue = keyValue;
        this.optionalString = optionalString;
        this.nestedUser = nestedUser;
        this.optionalUser = optionalUser;
        this.excludeUser = excludeUser;
        this.filter = filter;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("limit")
    public int getLimit() {
        return limit;
    }

    @JsonProperty("id")
    public UUID getId() {
        return id;
    }

    @JsonProperty("date")
    public String getDate() {
        return date;
    }

    @JsonProperty("deadline")
    public OffsetDateTime getDeadline() {
        return deadline;
    }

    @JsonProperty("bytes")
    public byte[] getBytes() {
        return bytes;
    }

    @JsonProperty("user")
    public User getUser() {
        return user;
    }

    @JsonProperty("userList")
    public List<User> getUserList() {
        return userList;
    }

    @JsonProperty("optionalDeadline")
    public Optional<OffsetDateTime> getOptionalDeadline() {
        return optionalDeadline;
    }

    @JsonProperty("keyValue")
    public Map<String, String> getKeyValue() {
        return keyValue;
    }

    @JsonProperty("optionalString")
    public Optional<String> getOptionalString() {
        return optionalString;
    }

    @JsonProperty("nestedUser")
    public NestedUser getNestedUser() {
        return nestedUser;
    }

    @JsonProperty("optionalUser")
    public Optional<User> getOptionalUser() {
        return optionalUser;
    }

    @JsonProperty("excludeUser")
    public User getExcludeUser() {
        return excludeUser;
    }

    @JsonProperty("filter")
    public String getFilter() {
        return filter;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof GetUsersRequest && equalTo((GetUsersRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(GetUsersRequest other) {
        return limit == other.limit
                && id.equals(other.id)
                && date.equals(other.date)
                && deadline.equals(other.deadline)
                && bytes.equals(other.bytes)
                && user.equals(other.user)
                && userList.equals(other.userList)
                && optionalDeadline.equals(other.optionalDeadline)
                && keyValue.equals(other.keyValue)
                && optionalString.equals(other.optionalString)
                && nestedUser.equals(other.nestedUser)
                && optionalUser.equals(other.optionalUser)
                && excludeUser.equals(other.excludeUser)
                && filter.equals(other.filter);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(
                this.limit,
                this.id,
                this.date,
                this.deadline,
                this.bytes,
                this.user,
                this.userList,
                this.optionalDeadline,
                this.keyValue,
                this.optionalString,
                this.nestedUser,
                this.optionalUser,
                this.excludeUser,
                this.filter);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static LimitStage builder() {
        return new Builder();
    }

    public interface LimitStage {
        IdStage limit(int limit);

        Builder from(GetUsersRequest other);
    }

    public interface IdStage {
        DateStage id(@NotNull UUID id);
    }

    public interface DateStage {
        DeadlineStage date(@NotNull String date);
    }

    public interface DeadlineStage {
        BytesStage deadline(@NotNull OffsetDateTime deadline);
    }

    public interface BytesStage {
        UserStage bytes(@NotNull byte[] bytes);
    }

    public interface UserStage {
        NestedUserStage user(@NotNull User user);
    }

    public interface NestedUserStage {
        ExcludeUserStage nestedUser(@NotNull NestedUser nestedUser);
    }

    public interface ExcludeUserStage {
        FilterStage excludeUser(@NotNull User excludeUser);
    }

    public interface FilterStage {
        _FinalStage filter(@NotNull String filter);
    }

    public interface _FinalStage {
        GetUsersRequest build();

        _FinalStage userList(List<User> userList);

        _FinalStage addUserList(User userList);

        _FinalStage addAllUserList(List<User> userList);

        _FinalStage optionalDeadline(Optional<OffsetDateTime> optionalDeadline);

        _FinalStage optionalDeadline(OffsetDateTime optionalDeadline);

        _FinalStage keyValue(Map<String, String> keyValue);

        _FinalStage putAllKeyValue(Map<String, String> keyValue);

        _FinalStage keyValue(String key, String value);

        _FinalStage optionalString(Optional<String> optionalString);

        _FinalStage optionalString(String optionalString);

        _FinalStage optionalUser(Optional<User> optionalUser);

        _FinalStage optionalUser(User optionalUser);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder
            implements LimitStage,
                    IdStage,
                    DateStage,
                    DeadlineStage,
                    BytesStage,
                    UserStage,
                    NestedUserStage,
                    ExcludeUserStage,
                    FilterStage,
                    _FinalStage {
        private int limit;

        private UUID id;

        private String date;

        private OffsetDateTime deadline;

        private byte[] bytes;

        private User user;

        private NestedUser nestedUser;

        private User excludeUser;

        private String filter;

        private Optional<User> optionalUser = Optional.empty();

        private Optional<String> optionalString = Optional.empty();

        private Map<String, String> keyValue = new LinkedHashMap<>();

        private Optional<OffsetDateTime> optionalDeadline = Optional.empty();

        private List<User> userList = new ArrayList<>();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(GetUsersRequest other) {
            limit(other.getLimit());
            id(other.getId());
            date(other.getDate());
            deadline(other.getDeadline());
            bytes(other.getBytes());
            user(other.getUser());
            userList(other.getUserList());
            optionalDeadline(other.getOptionalDeadline());
            keyValue(other.getKeyValue());
            optionalString(other.getOptionalString());
            nestedUser(other.getNestedUser());
            optionalUser(other.getOptionalUser());
            excludeUser(other.getExcludeUser());
            filter(other.getFilter());
            return this;
        }

        @java.lang.Override
        @JsonSetter("limit")
        public IdStage limit(int limit) {
            this.limit = Objects.requireNonNull(limit, "limit must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public DateStage id(@NotNull UUID id) {
            this.id = id;
            return this;
        }

        @java.lang.Override
        @JsonSetter("date")
        public DeadlineStage date(@NotNull String date) {
            this.date = date;
            return this;
        }

        @java.lang.Override
        @JsonSetter("deadline")
        public BytesStage deadline(@NotNull OffsetDateTime deadline) {
            this.deadline = deadline;
            return this;
        }

        @java.lang.Override
        @JsonSetter("bytes")
        public UserStage bytes(@NotNull byte[] bytes) {
            this.bytes = bytes;
            return this;
        }

        @java.lang.Override
        @JsonSetter("user")
        public NestedUserStage user(@NotNull User user) {
            this.user = user;
            return this;
        }

        @java.lang.Override
        @JsonSetter("nestedUser")
        public ExcludeUserStage nestedUser(@NotNull NestedUser nestedUser) {
            this.nestedUser = nestedUser;
            return this;
        }

        @java.lang.Override
        @JsonSetter("excludeUser")
        public FilterStage excludeUser(@NotNull User excludeUser) {
            this.excludeUser = excludeUser;
            return this;
        }

        @java.lang.Override
        @JsonSetter("filter")
        public _FinalStage filter(@NotNull String filter) {
            this.filter = filter;
            return this;
        }

        @java.lang.Override
        public _FinalStage optionalUser(User optionalUser) {
            this.optionalUser = Optional.ofNullable(optionalUser);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "optionalUser", nulls = Nulls.SKIP)
        public _FinalStage optionalUser(Optional<User> optionalUser) {
            this.optionalUser = optionalUser;
            return this;
        }

        @java.lang.Override
        public _FinalStage optionalString(String optionalString) {
            this.optionalString = Optional.ofNullable(optionalString);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "optionalString", nulls = Nulls.SKIP)
        public _FinalStage optionalString(Optional<String> optionalString) {
            this.optionalString = optionalString;
            return this;
        }

        @java.lang.Override
        public _FinalStage keyValue(String key, String value) {
            this.keyValue.put(key, value);
            return this;
        }

        @java.lang.Override
        public _FinalStage putAllKeyValue(Map<String, String> keyValue) {
            this.keyValue.putAll(keyValue);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "keyValue", nulls = Nulls.SKIP)
        public _FinalStage keyValue(Map<String, String> keyValue) {
            this.keyValue.clear();
            this.keyValue.putAll(keyValue);
            return this;
        }

        @java.lang.Override
        public _FinalStage optionalDeadline(OffsetDateTime optionalDeadline) {
            this.optionalDeadline = Optional.ofNullable(optionalDeadline);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "optionalDeadline", nulls = Nulls.SKIP)
        public _FinalStage optionalDeadline(Optional<OffsetDateTime> optionalDeadline) {
            this.optionalDeadline = optionalDeadline;
            return this;
        }

        @java.lang.Override
        public _FinalStage addAllUserList(List<User> userList) {
            this.userList.addAll(userList);
            return this;
        }

        @java.lang.Override
        public _FinalStage addUserList(User userList) {
            this.userList.add(userList);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "userList", nulls = Nulls.SKIP)
        public _FinalStage userList(List<User> userList) {
            this.userList.clear();
            this.userList.addAll(userList);
            return this;
        }

        @java.lang.Override
        public GetUsersRequest build() {
            return new GetUsersRequest(
                    limit,
                    id,
                    date,
                    deadline,
                    bytes,
                    user,
                    userList,
                    optionalDeadline,
                    keyValue,
                    optionalString,
                    nestedUser,
                    optionalUser,
                    excludeUser,
                    filter,
                    additionalProperties);
        }
    }
}
