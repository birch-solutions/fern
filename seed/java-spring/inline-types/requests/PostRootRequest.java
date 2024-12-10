/**
 * This file was auto-generated by Fern from our API Definition.
 */

package requests;

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
import types.InlineType1;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = PostRootRequest.Builder.class
)
public final class PostRootRequest {
  private final InlineType1 bar;

  private final String foo;

  private PostRootRequest(InlineType1 bar, String foo) {
    this.bar = bar;
    this.foo = foo;
  }

  @JsonProperty("bar")
  public InlineType1 getBar() {
    return bar;
  }

  @JsonProperty("foo")
  public String getFoo() {
    return foo;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof PostRootRequest && equalTo((PostRootRequest) other);
  }

  private boolean equalTo(PostRootRequest other) {
    return bar.equals(other.bar) && foo.equals(other.foo);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.bar, this.foo);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static BarStage builder() {
    return new Builder();
  }

  public interface BarStage {
    FooStage bar(@NotNull InlineType1 bar);

    Builder from(PostRootRequest other);
  }

  public interface FooStage {
    _FinalStage foo(@NotNull String foo);
  }

  public interface _FinalStage {
    PostRootRequest build();
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements BarStage, FooStage, _FinalStage {
    private InlineType1 bar;

    private String foo;

    private Builder() {
    }

    @java.lang.Override
    public Builder from(PostRootRequest other) {
      bar(other.getBar());
      foo(other.getFoo());
      return this;
    }

    @java.lang.Override
    @JsonSetter("bar")
    public FooStage bar(@NotNull InlineType1 bar) {
      this.bar = Objects.requireNonNull(bar, "bar must not be null");
      return this;
    }

    @java.lang.Override
    @JsonSetter("foo")
    public _FinalStage foo(@NotNull String foo) {
      this.foo = Objects.requireNonNull(foo, "foo must not be null");
      return this;
    }

    @java.lang.Override
    public PostRootRequest build() {
      return new PostRootRequest(bar, foo);
    }
  }
}
