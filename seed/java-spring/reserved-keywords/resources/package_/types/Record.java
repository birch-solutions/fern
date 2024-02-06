/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.package_.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = Record.Builder.class
)
public final class Record {
  private final Map<String, String> foo;

  private final int _3D;

  private Record(Map<String, String> foo, int _3D) {
    this.foo = foo;
    this._3D = _3D;
  }

  @JsonProperty("foo")
  public Map<String, String> getFoo() {
    return foo;
  }

  @JsonProperty("3d")
  public int get_3D() {
    return _3D;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof Record && equalTo((Record) other);
  }

  private boolean equalTo(Record other) {
    return foo.equals(other.foo) && _3D == other._3D;
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.foo, this._3D);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static _3DStage builder() {
    return new Builder();
  }

  public interface _3DStage {
    _FinalStage _3D(int _3D);

    Builder from(Record other);
  }

  public interface _FinalStage {
    Record build();

    _FinalStage foo(Map<String, String> foo);

    _FinalStage putAllFoo(Map<String, String> foo);

    _FinalStage foo(String key, String value);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements _3DStage, _FinalStage {
    private int _3D;

    private Map<String, String> foo = new LinkedHashMap<>();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(Record other) {
      foo(other.getFoo());
      _3D(other.get_3D());
      return this;
    }

    @java.lang.Override
    @JsonSetter("3d")
    public _FinalStage _3D(int _3D) {
      this._3D = _3D;
      return this;
    }

    @java.lang.Override
    public _FinalStage foo(String key, String value) {
      this.foo.put(key, value);
      return this;
    }

    @java.lang.Override
    public _FinalStage putAllFoo(Map<String, String> foo) {
      this.foo.putAll(foo);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "foo",
        nulls = Nulls.SKIP
    )
    public _FinalStage foo(Map<String, String> foo) {
      this.foo.clear();
      this.foo.putAll(foo);
      return this;
    }

    @java.lang.Override
    public Record build() {
      return new Record(foo, _3D);
    }
  }
}
