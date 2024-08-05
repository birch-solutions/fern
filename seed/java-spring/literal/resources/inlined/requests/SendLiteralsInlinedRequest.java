/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.inlined.requests;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Boolean;
import java.lang.Double;
import java.lang.Object;
import java.lang.String;
import java.util.Objects;
import java.util.Optional;
import resources.inlined.types.SomeAliasedLiteral;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = SendLiteralsInlinedRequest.Builder.class
)
public final class SendLiteralsInlinedRequest {
  private final Optional<String> context;

  private final String query;

  private final Optional<Double> temperature;

  private final SomeAliasedLiteral aliasedContext;

  private final Optional<SomeAliasedLiteral> maybeContext;

  private SendLiteralsInlinedRequest(Optional<String> context, String query,
      Optional<Double> temperature, SomeAliasedLiteral aliasedContext,
      Optional<SomeAliasedLiteral> maybeContext) {
    this.context = context;
    this.query = query;
    this.temperature = temperature;
    this.aliasedContext = aliasedContext;
    this.maybeContext = maybeContext;
  }

  @JsonProperty("prompt")
  public String getPrompt() {
    return "You are a helpful assistant";
  }

  @JsonProperty("context")
  public Optional<String> getContext() {
    return context;
  }

  @JsonProperty("query")
  public String getQuery() {
    return query;
  }

  @JsonProperty("temperature")
  public Optional<Double> getTemperature() {
    return temperature;
  }

  @JsonProperty("stream")
  public Boolean getStream() {
    return false;
  }

  @JsonProperty("aliasedContext")
  public SomeAliasedLiteral getAliasedContext() {
    return aliasedContext;
  }

  @JsonProperty("maybeContext")
  public Optional<SomeAliasedLiteral> getMaybeContext() {
    return maybeContext;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof SendLiteralsInlinedRequest && equalTo((SendLiteralsInlinedRequest) other);
  }

  private boolean equalTo(SendLiteralsInlinedRequest other) {
    return context.equals(other.context) && query.equals(other.query) && temperature.equals(other.temperature) && aliasedContext.equals(other.aliasedContext) && maybeContext.equals(other.maybeContext);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.context, this.query, this.temperature, this.aliasedContext, this.maybeContext);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static QueryStage builder() {
    return new Builder();
  }

  public interface QueryStage {
    AliasedContextStage query(String query);

    Builder from(SendLiteralsInlinedRequest other);
  }

  public interface AliasedContextStage {
    _FinalStage aliasedContext(SomeAliasedLiteral aliasedContext);
  }

  public interface _FinalStage {
    SendLiteralsInlinedRequest build();

    _FinalStage context(Optional<String> context);

    _FinalStage context(String context);

    _FinalStage temperature(Optional<Double> temperature);

    _FinalStage temperature(Double temperature);

    _FinalStage maybeContext(Optional<SomeAliasedLiteral> maybeContext);

    _FinalStage maybeContext(SomeAliasedLiteral maybeContext);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements QueryStage, AliasedContextStage, _FinalStage {
    private String query;

    private SomeAliasedLiteral aliasedContext;

    private Optional<SomeAliasedLiteral> maybeContext = Optional.empty();

    private Optional<Double> temperature = Optional.empty();

    private Optional<String> context = Optional.empty();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(SendLiteralsInlinedRequest other) {
      context(other.getContext());
      query(other.getQuery());
      temperature(other.getTemperature());
      aliasedContext(other.getAliasedContext());
      maybeContext(other.getMaybeContext());
      return this;
    }

    @java.lang.Override
    @JsonSetter("query")
    public AliasedContextStage query(String query) {
      this.query = query;
      return this;
    }

    @java.lang.Override
    @JsonSetter("aliasedContext")
    public _FinalStage aliasedContext(SomeAliasedLiteral aliasedContext) {
      this.aliasedContext = aliasedContext;
      return this;
    }

    @java.lang.Override
    public _FinalStage maybeContext(SomeAliasedLiteral maybeContext) {
      this.maybeContext = Optional.ofNullable(maybeContext);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "maybeContext",
        nulls = Nulls.SKIP
    )
    public _FinalStage maybeContext(Optional<SomeAliasedLiteral> maybeContext) {
      this.maybeContext = maybeContext;
      return this;
    }

    @java.lang.Override
    public _FinalStage temperature(Double temperature) {
      this.temperature = Optional.ofNullable(temperature);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "temperature",
        nulls = Nulls.SKIP
    )
    public _FinalStage temperature(Optional<Double> temperature) {
      this.temperature = temperature;
      return this;
    }

    @java.lang.Override
    public _FinalStage context(String context) {
      this.context = Optional.ofNullable(context);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "context",
        nulls = Nulls.SKIP
    )
    public _FinalStage context(Optional<String> context) {
      this.context = context;
      return this;
    }

    @java.lang.Override
    public SendLiteralsInlinedRequest build() {
      return new SendLiteralsInlinedRequest(context, query, temperature, aliasedContext, maybeContext);
    }
  }
}
