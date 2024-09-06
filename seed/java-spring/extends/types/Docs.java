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
    builder = Docs.Builder.class
)
public final class Docs implements IDocs {
  private final String docs;

  private Docs(String docs) {
    this.docs = docs;
  }

  @JsonProperty("docs")
  @java.lang.Override
  public String getDocs() {
    return docs;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof Docs && equalTo((Docs) other);
  }

  private boolean equalTo(Docs other) {
    return docs.equals(other.docs);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.docs);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static DocsStage builder() {
    return new Builder();
  }

  public interface DocsStage {
    _FinalStage docs(@NotNull String docs);

    Builder from(Docs other);
  }

  public interface _FinalStage {
    Docs build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements DocsStage, _FinalStage {
    private String docs;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(Docs other) {
      docs(other.getDocs());
      return this;
    }

    @java.lang.Override
    @JsonSetter("docs")
    public _FinalStage docs(@NotNull String docs) {
      this.docs = Objects.requireNonNull(docs, "docs must not be null");
      return this;
    }

    @java.lang.Override
    public Docs build() {
      return new Docs(docs);
    }
  }
}
