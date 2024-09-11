/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.trace.resources.v2.v3.problem.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.trace.core.ObjectMappers;
import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = GetGeneratedTestCaseTemplateFileRequest.Builder.class)
public final class GetGeneratedTestCaseTemplateFileRequest {
    private final TestCaseTemplate template;

    private final Map<String, Object> additionalProperties;

    private GetGeneratedTestCaseTemplateFileRequest(
            TestCaseTemplate template, Map<String, Object> additionalProperties) {
        this.template = template;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("template")
    public TestCaseTemplate getTemplate() {
        return template;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof GetGeneratedTestCaseTemplateFileRequest
                && equalTo((GetGeneratedTestCaseTemplateFileRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(GetGeneratedTestCaseTemplateFileRequest other) {
        return template.equals(other.template);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.template);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static TemplateStage builder() {
        return new Builder();
    }

    public interface TemplateStage {
        _FinalStage template(@NotNull TestCaseTemplate template);

        Builder from(GetGeneratedTestCaseTemplateFileRequest other);
    }

    public interface _FinalStage {
        GetGeneratedTestCaseTemplateFileRequest build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements TemplateStage, _FinalStage {
        private TestCaseTemplate template;

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(GetGeneratedTestCaseTemplateFileRequest other) {
            template(other.getTemplate());
            return this;
        }

        @java.lang.Override
        @JsonSetter("template")
        public _FinalStage template(@NotNull TestCaseTemplate template) {
            this.template = template;
            return this;
        }

        @java.lang.Override
        public GetGeneratedTestCaseTemplateFileRequest build() {
            return new GetGeneratedTestCaseTemplateFileRequest(template, additionalProperties);
        }
    }
}
