/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.audiences.resources.folderc.common.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.audiences.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = FolderCFoo.Builder.class)
public final class FolderCFoo {
    private final UUID barProperty;

    private final Map<String, Object> additionalProperties;

    private FolderCFoo(UUID barProperty, Map<String, Object> additionalProperties) {
        this.barProperty = barProperty;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("bar_property")
    public UUID getBarProperty() {
        return barProperty;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof FolderCFoo && equalTo((FolderCFoo) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(FolderCFoo other) {
        return barProperty.equals(other.barProperty);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.barProperty);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static BarPropertyStage builder() {
        return new Builder();
    }

    public interface BarPropertyStage {
        _FinalStage barProperty(@NotNull UUID barProperty);

        Builder from(FolderCFoo other);
    }

    public interface _FinalStage {
        FolderCFoo build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements BarPropertyStage, _FinalStage {
        private UUID barProperty;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(FolderCFoo other) {
            barProperty(other.getBarProperty());
            return this;
        }

        @java.lang.Override
        @JsonSetter("bar_property")
        public _FinalStage barProperty(@NotNull UUID barProperty) {
            this.barProperty = barProperty;
            return this;
        }

        @java.lang.Override
        public FolderCFoo build() {
            return new FolderCFoo(barProperty, additionalProperties);
        }
    }
}
