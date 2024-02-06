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
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = RecordingResponseNotification.Builder.class
)
public final class RecordingResponseNotification {
  private final SubmissionId submissionId;

  private final Optional<String> testCaseId;

  private final int lineNumber;

  private final LightweightStackframeInformation lightweightStackInfo;

  private final Optional<TracedFile> tracedFile;

  private RecordingResponseNotification(SubmissionId submissionId, Optional<String> testCaseId,
      int lineNumber, LightweightStackframeInformation lightweightStackInfo,
      Optional<TracedFile> tracedFile) {
    this.submissionId = submissionId;
    this.testCaseId = testCaseId;
    this.lineNumber = lineNumber;
    this.lightweightStackInfo = lightweightStackInfo;
    this.tracedFile = tracedFile;
  }

  @JsonProperty("submissionId")
  public SubmissionId getSubmissionId() {
    return submissionId;
  }

  @JsonProperty("testCaseId")
  public Optional<String> getTestCaseId() {
    return testCaseId;
  }

  @JsonProperty("lineNumber")
  public int getLineNumber() {
    return lineNumber;
  }

  @JsonProperty("lightweightStackInfo")
  public LightweightStackframeInformation getLightweightStackInfo() {
    return lightweightStackInfo;
  }

  @JsonProperty("tracedFile")
  public Optional<TracedFile> getTracedFile() {
    return tracedFile;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof RecordingResponseNotification && equalTo((RecordingResponseNotification) other);
  }

  private boolean equalTo(RecordingResponseNotification other) {
    return submissionId.equals(other.submissionId) && testCaseId.equals(other.testCaseId) && lineNumber == other.lineNumber && lightweightStackInfo.equals(other.lightweightStackInfo) && tracedFile.equals(other.tracedFile);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.submissionId, this.testCaseId, this.lineNumber, this.lightweightStackInfo, this.tracedFile);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static SubmissionIdStage builder() {
    return new Builder();
  }

  public interface SubmissionIdStage {
    LineNumberStage submissionId(SubmissionId submissionId);

    Builder from(RecordingResponseNotification other);
  }

  public interface LineNumberStage {
    LightweightStackInfoStage lineNumber(int lineNumber);
  }

  public interface LightweightStackInfoStage {
    _FinalStage lightweightStackInfo(LightweightStackframeInformation lightweightStackInfo);
  }

  public interface _FinalStage {
    RecordingResponseNotification build();

    _FinalStage testCaseId(Optional<String> testCaseId);

    _FinalStage testCaseId(String testCaseId);

    _FinalStage tracedFile(Optional<TracedFile> tracedFile);

    _FinalStage tracedFile(TracedFile tracedFile);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements SubmissionIdStage, LineNumberStage, LightweightStackInfoStage, _FinalStage {
    private SubmissionId submissionId;

    private int lineNumber;

    private LightweightStackframeInformation lightweightStackInfo;

    private Optional<TracedFile> tracedFile = Optional.empty();

    private Optional<String> testCaseId = Optional.empty();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(RecordingResponseNotification other) {
      submissionId(other.getSubmissionId());
      testCaseId(other.getTestCaseId());
      lineNumber(other.getLineNumber());
      lightweightStackInfo(other.getLightweightStackInfo());
      tracedFile(other.getTracedFile());
      return this;
    }

    @java.lang.Override
    @JsonSetter("submissionId")
    public LineNumberStage submissionId(SubmissionId submissionId) {
      this.submissionId = submissionId;
      return this;
    }

    @java.lang.Override
    @JsonSetter("lineNumber")
    public LightweightStackInfoStage lineNumber(int lineNumber) {
      this.lineNumber = lineNumber;
      return this;
    }

    @java.lang.Override
    @JsonSetter("lightweightStackInfo")
    public _FinalStage lightweightStackInfo(LightweightStackframeInformation lightweightStackInfo) {
      this.lightweightStackInfo = lightweightStackInfo;
      return this;
    }

    @java.lang.Override
    public _FinalStage tracedFile(TracedFile tracedFile) {
      this.tracedFile = Optional.of(tracedFile);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "tracedFile",
        nulls = Nulls.SKIP
    )
    public _FinalStage tracedFile(Optional<TracedFile> tracedFile) {
      this.tracedFile = tracedFile;
      return this;
    }

    @java.lang.Override
    public _FinalStage testCaseId(String testCaseId) {
      this.testCaseId = Optional.of(testCaseId);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "testCaseId",
        nulls = Nulls.SKIP
    )
    public _FinalStage testCaseId(Optional<String> testCaseId) {
      this.testCaseId = testCaseId;
      return this;
    }

    @java.lang.Override
    public RecordingResponseNotification build() {
      return new RecordingResponseNotification(submissionId, testCaseId, lineNumber, lightweightStackInfo, tracedFile);
    }
  }
}
