package com.fern.types.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fern.StagedBuilderStyle;
import java.util.List;
import org.immutables.value.Value;

@Value.Immutable
@StagedBuilderStyle
@JsonDeserialize(
    as = ImmutableObjectTypeDefinition.class
)
@JsonIgnoreProperties(
    ignoreUnknown = true
)
public interface ObjectTypeDefinition {
  @JsonProperty("extends")
  List<NamedType> _extends();

  List<ObjectProperty> properties();

  static ImmutableObjectTypeDefinition.Builder builder() {
    return ImmutableObjectTypeDefinition.builder();
  }
}
