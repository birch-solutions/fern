/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.commons.types.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = Metadata.Builder.class
)
public final class Metadata {
  private final String id;

  private final Optional<Map<String, String>> data;

  private final Optional<String> jsonString;

  private Metadata(String id, Optional<Map<String, String>> data, Optional<String> jsonString) {
    this.id = id;
    this.data = data;
    this.jsonString = jsonString;
  }

  @JsonProperty("id")
  public String getId() {
    return id;
  }

  @JsonProperty("data")
  public Optional<Map<String, String>> getData() {
    return data;
  }

  @JsonProperty("jsonString")
  public Optional<String> getJsonString() {
    return jsonString;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof Metadata && equalTo((Metadata) other);
  }

  private boolean equalTo(Metadata other) {
    return id.equals(other.id) && data.equals(other.data) && jsonString.equals(other.jsonString);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.id, this.data, this.jsonString);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static IdStage builder() {
    return new Builder();
  }

  public interface IdStage {
    _FinalStage id(@NotNull String id);

    Builder from(Metadata other);
  }

  public interface _FinalStage {
    Metadata build();

    _FinalStage data(Optional<Map<String, String>> data);

    _FinalStage data(Map<String, String> data);

    _FinalStage jsonString(Optional<String> jsonString);

    _FinalStage jsonString(String jsonString);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements IdStage, _FinalStage {
    private String id;

    private Optional<String> jsonString = Optional.empty();

    private Optional<Map<String, String>> data = Optional.empty();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(Metadata other) {
      id(other.getId());
      data(other.getData());
      jsonString(other.getJsonString());
      return this;
    }

    @java.lang.Override
    @JsonSetter("id")
    public _FinalStage id(@NotNull String id) {
      this.id = Objects.requireNonNull(id, "id must not be null");
      return this;
    }

    @java.lang.Override
    public _FinalStage jsonString(String jsonString) {
      this.jsonString = Optional.ofNullable(jsonString);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "jsonString",
        nulls = Nulls.SKIP
    )
    public _FinalStage jsonString(Optional<String> jsonString) {
      this.jsonString = jsonString;
      return this;
    }

    @java.lang.Override
    public _FinalStage data(Map<String, String> data) {
      this.data = Optional.ofNullable(data);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "data",
        nulls = Nulls.SKIP
    )
    public _FinalStage data(Optional<Map<String, String>> data) {
      this.data = data;
      return this;
    }

    @java.lang.Override
    public Metadata build() {
      return new Metadata(id, data, jsonString);
    }
  }
}
