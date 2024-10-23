/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.users.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = UserOptionalListContainer.Builder.class
)
public final class UserOptionalListContainer {
  private final Optional<List<User>> users;

  private UserOptionalListContainer(Optional<List<User>> users) {
    this.users = users;
  }

  @JsonProperty("users")
  public Optional<List<User>> getUsers() {
    return users;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof UserOptionalListContainer && equalTo((UserOptionalListContainer) other);
  }

  private boolean equalTo(UserOptionalListContainer other) {
    return users.equals(other.users);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.users);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static Builder builder() {
    return new Builder();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder {
    private Optional<List<User>> users = Optional.empty();

    private Builder() {
    }

    public Builder from(UserOptionalListContainer other) {
      users(other.getUsers());
      return this;
    }

    @JsonSetter(
        value = "users",
        nulls = Nulls.SKIP
    )
    public Builder users(Optional<List<User>> users) {
      this.users = users;
      return this;
    }

    public Builder users(List<User> users) {
      this.users = Optional.ofNullable(users);
      return this;
    }

    public UserOptionalListContainer build() {
      return new UserOptionalListContainer(users);
    }
  }
}
