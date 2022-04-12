package com.fern;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fern.immutables.StagedBuilderStyle;
import org.immutables.value.Value;

import java.util.List;

@Value.Immutable
@StagedBuilderStyle
@JsonDeserialize(as = ImmutableServices.class)
@JsonIgnoreProperties({"type"})
public interface Services {

    List<HttpService> http();

    List<WebSocketService> webSocket();

    static ImmutableServices.Builder builder() {
        return ImmutableServices.builder();
    }
}
