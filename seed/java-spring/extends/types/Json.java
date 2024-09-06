/**
 * This file was auto-generated by Fern from our API Definition.
 */

package types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = Json.Builder.class
)
public final class Json implements IJson, IDocs {
  private final String raw;

  private final String docs;

  private Json(String raw, String docs) {
    this.raw = raw;
    this.docs = docs;
  }

  @JsonProperty("raw")
  @java.lang.Override
  public String getRaw() {
    return raw;
  }

  @JsonProperty("docs")
  @java.lang.Override
  public String getDocs() {
    return docs;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof Json && equalTo((Json) other);
  }

  private boolean equalTo(Json other) {
    return raw.equals(other.raw) && docs.equals(other.docs);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.raw, this.docs);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static RawStage builder() {
    return new Builder();
  }

  public interface RawStage {
    DocsStage raw(@NotNull String raw);

    Builder from(Json other);
  }

  public interface DocsStage {
    _FinalStage docs(@NotNull String docs);
  }

  public interface _FinalStage {
    Json build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements RawStage, DocsStage, _FinalStage {
    private String raw;

    private String docs;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(Json other) {
      raw(other.getRaw());
      docs(other.getDocs());
      return this;
    }

    @java.lang.Override
    @JsonSetter("raw")
    public DocsStage raw(@NotNull String raw) {
      this.raw = Objects.requireNonNull(raw, "raw must not be null");
      return this;
    }

    @java.lang.Override
    @JsonSetter("docs")
    public _FinalStage docs(@NotNull String docs) {
      this.docs = Objects.requireNonNull(docs, "docs must not be null");
      return this;
    }

    @java.lang.Override
    public Json build() {
      return new Json(raw, docs);
    }
  }
}
