/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.crossPackageTypeNames.model.foo;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.crossPackageTypeNames.core.ObjectMappers;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = ImportingType.Builder.class)
public final class ImportingType {
    private final String imported;

    private ImportingType(String imported) {
        this.imported = imported;
    }

    @JsonProperty("imported")
    public String getImported() {
        return imported;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ImportingType && equalTo((ImportingType) other);
    }

    private boolean equalTo(ImportingType other) {
        return imported.equals(other.imported);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.imported);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static ImportedStage builder() {
        return new Builder();
    }

    public interface ImportedStage {
        _FinalStage imported(String imported);

        Builder from(ImportingType other);
    }

    public interface _FinalStage {
        ImportingType build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements ImportedStage, _FinalStage {
        private String imported;

        private Builder() {}

        @java.lang.Override
        public Builder from(ImportingType other) {
            imported(other.getImported());
            return this;
        }

        @java.lang.Override
        @JsonSetter("imported")
        public _FinalStage imported(String imported) {
            this.imported = Objects.requireNonNull(imported, "imported must not be null");
            return this;
        }

        @java.lang.Override
        public ImportingType build() {
            return new ImportingType(imported);
        }
    }
}
