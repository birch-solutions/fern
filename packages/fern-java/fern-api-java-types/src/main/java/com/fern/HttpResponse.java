package com.fern;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fern.immutables.StagedBuilderStyle;
import org.immutables.value.Value;

@Value.Immutable
@StagedBuilderStyle
@JsonDeserialize(as = ImmutableHttpResponse.class)
@JsonIgnoreProperties({"type"})
public interface HttpResponse {

    TypeReference bodyType();

    static ImmutableHttpResponse.BodyTypeBuildStage builder() {
        return ImmutableHttpResponse.builder();
    }
}
