/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.user.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = User.Builder.class
)
public final class User {
  private final String name;

  private final List<String> tags;

  private User(String name, List<String> tags) {
    this.name = name;
    this.tags = tags;
  }

  @JsonProperty("name")
  public String getName() {
    return name;
  }

  @JsonProperty("tags")
  public List<String> getTags() {
    return tags;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof User && equalTo((User) other);
  }

  private boolean equalTo(User other) {
    return name.equals(other.name) && tags.equals(other.tags);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.name, this.tags);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static NameStage builder() {
    return new Builder();
  }

  public interface NameStage {
    _FinalStage name(String name);

    Builder from(User other);
  }

  public interface _FinalStage {
    User build();

    _FinalStage tags(List<String> tags);

    _FinalStage addTags(String tags);

    _FinalStage addAllTags(List<String> tags);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements NameStage, _FinalStage {
    private String name;

    private List<String> tags = new ArrayList<>();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(User other) {
      name(other.getName());
      tags(other.getTags());
      return this;
    }

    @java.lang.Override
    @JsonSetter("name")
    public _FinalStage name(String name) {
      this.name = name;
      return this;
    }

    @java.lang.Override
    public _FinalStage addAllTags(List<String> tags) {
      this.tags.addAll(tags);
      return this;
    }

    @java.lang.Override
    public _FinalStage addTags(String tags) {
      this.tags.add(tags);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "tags",
        nulls = Nulls.SKIP
    )
    public _FinalStage tags(List<String> tags) {
      this.tags.clear();
      this.tags.addAll(tags);
      return this;
    }

    @java.lang.Override
    public User build() {
      return new User(name, tags);
    }
  }
}
