/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.api.core.ObjectMappers;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = BaseResource.Builder.class)
public final class BaseResource implements IBaseResource {
    private final String id;

    private final List<ResourceList> relatedResources;

    private final Memo memo;

    private final Map<String, Object> additionalProperties;

    private BaseResource(
            String id, List<ResourceList> relatedResources, Memo memo, Map<String, Object> additionalProperties) {
        this.id = id;
        this.relatedResources = relatedResources;
        this.memo = memo;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("id")
    @java.lang.Override
    public String getId() {
        return id;
    }

    @JsonProperty("related_resources")
    @java.lang.Override
    public List<ResourceList> getRelatedResources() {
        return relatedResources;
    }

    @JsonProperty("memo")
    @java.lang.Override
    public Memo getMemo() {
        return memo;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof BaseResource && equalTo((BaseResource) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(BaseResource other) {
        return id.equals(other.id) && relatedResources.equals(other.relatedResources) && memo.equals(other.memo);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.id, this.relatedResources, this.memo);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static IdStage builder() {
        return new Builder();
    }

    public interface IdStage {
        MemoStage id(@NotNull String id);

        Builder from(BaseResource other);
    }

    public interface MemoStage {
        _FinalStage memo(@NotNull Memo memo);
    }

    public interface _FinalStage {
        BaseResource build();

        _FinalStage relatedResources(List<ResourceList> relatedResources);

        _FinalStage addRelatedResources(ResourceList relatedResources);

        _FinalStage addAllRelatedResources(List<ResourceList> relatedResources);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements IdStage, MemoStage, _FinalStage {
        private String id;

        private Memo memo;

        private List<ResourceList> relatedResources = new ArrayList<>();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(BaseResource other) {
            id(other.getId());
            relatedResources(other.getRelatedResources());
            memo(other.getMemo());
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public MemoStage id(@NotNull String id) {
            this.id = Objects.requireNonNull(id, "id must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("memo")
        public _FinalStage memo(@NotNull Memo memo) {
            this.memo = Objects.requireNonNull(memo, "memo must not be null");
            return this;
        }

        @java.lang.Override
        public _FinalStage addAllRelatedResources(List<ResourceList> relatedResources) {
            this.relatedResources.addAll(relatedResources);
            return this;
        }

        @java.lang.Override
        public _FinalStage addRelatedResources(ResourceList relatedResources) {
            this.relatedResources.add(relatedResources);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "related_resources", nulls = Nulls.SKIP)
        public _FinalStage relatedResources(List<ResourceList> relatedResources) {
            this.relatedResources.clear();
            this.relatedResources.addAll(relatedResources);
            return this;
        }

        @java.lang.Override
        public BaseResource build() {
            return new BaseResource(id, relatedResources, memo, additionalProperties);
        }
    }
}
