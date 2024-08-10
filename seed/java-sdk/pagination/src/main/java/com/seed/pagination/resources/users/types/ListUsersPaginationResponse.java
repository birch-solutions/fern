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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = ListUsersPaginationResponse.Builder.class)
public final class ListUsersPaginationResponse {
    private final Optional<Boolean> hasNextPage;

    private final Optional<Page> page;

    private final int totalCount;

    private final List<User> data;

    private final Map<String, Object> additionalProperties;

    private ListUsersPaginationResponse(
            Optional<Boolean> hasNextPage,
            Optional<Page> page,
            int totalCount,
            List<User> data,
            Map<String, Object> additionalProperties) {
        this.hasNextPage = hasNextPage;
        this.page = page;
        this.totalCount = totalCount;
        this.data = data;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("hasNextPage")
    public Optional<Boolean> getHasNextPage() {
        return hasNextPage;
    }

    @JsonProperty("page")
    public Optional<Page> getPage() {
        return page;
    }

    /**
     * @return The totall number of /users
     */
    @JsonProperty("total_count")
    public int getTotalCount() {
        return totalCount;
    }

    @JsonProperty("data")
    public List<User> getData() {
        return data;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ListUsersPaginationResponse && equalTo((ListUsersPaginationResponse) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ListUsersPaginationResponse other) {
        return hasNextPage.equals(other.hasNextPage)
                && page.equals(other.page)
                && totalCount == other.totalCount
                && data.equals(other.data);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.hasNextPage, this.page, this.totalCount, this.data);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static TotalCountStage builder() {
        return new Builder();
    }

    public interface TotalCountStage {
        _FinalStage totalCount(int totalCount);

        Builder from(ListUsersPaginationResponse other);
    }

    public interface _FinalStage {
        ListUsersPaginationResponse build();

        _FinalStage hasNextPage(Optional<Boolean> hasNextPage);

        _FinalStage hasNextPage(Boolean hasNextPage);

        _FinalStage page(Optional<Page> page);

        _FinalStage page(Page page);

        _FinalStage data(List<User> data);

        _FinalStage addData(User data);

        _FinalStage addAllData(List<User> data);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements TotalCountStage, _FinalStage {
        private int totalCount;

        private List<User> data = new ArrayList<>();

        private Optional<Page> page = Optional.empty();

        private Optional<Boolean> hasNextPage = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(ListUsersPaginationResponse other) {
            hasNextPage(other.getHasNextPage());
            page(other.getPage());
            totalCount(other.getTotalCount());
            data(other.getData());
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
        public _FinalStage addAllData(List<User> data) {
            this.data.addAll(data);
            return this;
        }

        @java.lang.Override
        public _FinalStage addData(User data) {
            this.data.add(data);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "data", nulls = Nulls.SKIP)
        public _FinalStage data(List<User> data) {
            this.data.clear();
            this.data.addAll(data);
            return this;
        }

        @java.lang.Override
        public _FinalStage page(Page page) {
            this.page = Optional.ofNullable(page);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "page", nulls = Nulls.SKIP)
        public _FinalStage page(Optional<Page> page) {
            this.page = page;
            return this;
        }

        @java.lang.Override
        public _FinalStage hasNextPage(Boolean hasNextPage) {
            this.hasNextPage = Optional.ofNullable(hasNextPage);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "hasNextPage", nulls = Nulls.SKIP)
        public _FinalStage hasNextPage(Optional<Boolean> hasNextPage) {
            this.hasNextPage = hasNextPage;
            return this;
        }

        @java.lang.Override
        public ListUsersPaginationResponse build() {
            return new ListUsersPaginationResponse(hasNextPage, page, totalCount, data, additionalProperties);
        }
    }
}
