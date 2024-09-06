/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.submission.types;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import core.ObjectMappers;
import java.lang.Object;
import java.lang.String;
import java.time.OffsetDateTime;
import java.util.Objects;
import java.util.Optional;
import org.jetbrains.annotations.NotNull;
import resources.commons.types.Language;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(
    builder = GetSubmissionStateResponse.Builder.class
)
public final class GetSubmissionStateResponse {
  private final Optional<OffsetDateTime> timeSubmitted;

  private final String submission;

  private final Language language;

  private final SubmissionTypeState submissionTypeState;

  private GetSubmissionStateResponse(Optional<OffsetDateTime> timeSubmitted, String submission,
      Language language, SubmissionTypeState submissionTypeState) {
    this.timeSubmitted = timeSubmitted;
    this.submission = submission;
    this.language = language;
    this.submissionTypeState = submissionTypeState;
  }

  @JsonProperty("timeSubmitted")
  public Optional<OffsetDateTime> getTimeSubmitted() {
    return timeSubmitted;
  }

  @JsonProperty("submission")
  public String getSubmission() {
    return submission;
  }

  @JsonProperty("language")
  public Language getLanguage() {
    return language;
  }

  @JsonProperty("submissionTypeState")
  public SubmissionTypeState getSubmissionTypeState() {
    return submissionTypeState;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof GetSubmissionStateResponse && equalTo((GetSubmissionStateResponse) other);
  }

  private boolean equalTo(GetSubmissionStateResponse other) {
    return timeSubmitted.equals(other.timeSubmitted) && submission.equals(other.submission) && language.equals(other.language) && submissionTypeState.equals(other.submissionTypeState);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.timeSubmitted, this.submission, this.language, this.submissionTypeState);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static SubmissionStage builder() {
    return new Builder();
  }

  public interface SubmissionStage {
    LanguageStage submission(@NotNull String submission);

    Builder from(GetSubmissionStateResponse other);
  }

  public interface LanguageStage {
    SubmissionTypeStateStage language(@NotNull Language language);
  }

  public interface SubmissionTypeStateStage {
    _FinalStage submissionTypeState(@NotNull SubmissionTypeState submissionTypeState);
  }

  public interface _FinalStage {
    GetSubmissionStateResponse build();

    _FinalStage timeSubmitted(Optional<OffsetDateTime> timeSubmitted);

    _FinalStage timeSubmitted(OffsetDateTime timeSubmitted);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements SubmissionStage, LanguageStage, SubmissionTypeStateStage, _FinalStage {
    private String submission;

    private Language language;

    private SubmissionTypeState submissionTypeState;

    private Optional<OffsetDateTime> timeSubmitted = Optional.empty();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(GetSubmissionStateResponse other) {
      timeSubmitted(other.getTimeSubmitted());
      submission(other.getSubmission());
      language(other.getLanguage());
      submissionTypeState(other.getSubmissionTypeState());
      return this;
    }

    @java.lang.Override
    @JsonSetter("submission")
    public LanguageStage submission(@NotNull String submission) {
      this.submission = Objects.requireNonNull(submission, "submission must not be null");
      return this;
    }

    @java.lang.Override
    @JsonSetter("language")
    public SubmissionTypeStateStage language(@NotNull Language language) {
      this.language = Objects.requireNonNull(language, "language must not be null");
      return this;
    }

    @java.lang.Override
    @JsonSetter("submissionTypeState")
    public _FinalStage submissionTypeState(@NotNull SubmissionTypeState submissionTypeState) {
      this.submissionTypeState = Objects.requireNonNull(submissionTypeState, "submissionTypeState must not be null");
      return this;
    }

    @java.lang.Override
    public _FinalStage timeSubmitted(OffsetDateTime timeSubmitted) {
      this.timeSubmitted = Optional.ofNullable(timeSubmitted);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "timeSubmitted",
        nulls = Nulls.SKIP
    )
    public _FinalStage timeSubmitted(Optional<OffsetDateTime> timeSubmitted) {
      this.timeSubmitted = timeSubmitted;
      return this;
    }

    @java.lang.Override
    public GetSubmissionStateResponse build() {
      return new GetSubmissionStateResponse(timeSubmitted, submission, language, submissionTypeState);
    }
  }
}
