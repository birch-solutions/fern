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
import java.lang.Integer;
import java.lang.Object;
import java.lang.String;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import resources.commons.types.Language;
import resources.commons.types.ProblemId;

@JsonInclude(JsonInclude.Include.NON_EMPTY)
@JsonDeserialize(
    builder = SubmitRequestV2.Builder.class
)
public final class SubmitRequestV2 {
  private final SubmissionId submissionId;

  private final Language language;

  private final List<SubmissionFileInfo> submissionFiles;

  private final ProblemId problemId;

  private final Optional<Integer> problemVersion;

  private final Optional<String> userId;

  private SubmitRequestV2(SubmissionId submissionId, Language language,
      List<SubmissionFileInfo> submissionFiles, ProblemId problemId,
      Optional<Integer> problemVersion, Optional<String> userId) {
    this.submissionId = submissionId;
    this.language = language;
    this.submissionFiles = submissionFiles;
    this.problemId = problemId;
    this.problemVersion = problemVersion;
    this.userId = userId;
  }

  @JsonProperty("submissionId")
  public SubmissionId getSubmissionId() {
    return submissionId;
  }

  @JsonProperty("language")
  public Language getLanguage() {
    return language;
  }

  @JsonProperty("submissionFiles")
  public List<SubmissionFileInfo> getSubmissionFiles() {
    return submissionFiles;
  }

  @JsonProperty("problemId")
  public ProblemId getProblemId() {
    return problemId;
  }

  @JsonProperty("problemVersion")
  public Optional<Integer> getProblemVersion() {
    return problemVersion;
  }

  @JsonProperty("userId")
  public Optional<String> getUserId() {
    return userId;
  }

  @java.lang.Override
  public boolean equals(Object other) {
    if (this == other) return true;
    return other instanceof SubmitRequestV2 && equalTo((SubmitRequestV2) other);
  }

  private boolean equalTo(SubmitRequestV2 other) {
    return submissionId.equals(other.submissionId) && language.equals(other.language) && submissionFiles.equals(other.submissionFiles) && problemId.equals(other.problemId) && problemVersion.equals(other.problemVersion) && userId.equals(other.userId);
  }

  @java.lang.Override
  public int hashCode() {
    return Objects.hash(this.submissionId, this.language, this.submissionFiles, this.problemId, this.problemVersion, this.userId);
  }

  @java.lang.Override
  public String toString() {
    return ObjectMappers.stringify(this);
  }

  public static SubmissionIdStage builder() {
    return new Builder();
  }

  public interface SubmissionIdStage {
    LanguageStage submissionId(SubmissionId submissionId);

    Builder from(SubmitRequestV2 other);
  }

  public interface LanguageStage {
    ProblemIdStage language(Language language);
  }

  public interface ProblemIdStage {
    _FinalStage problemId(ProblemId problemId);
  }

  public interface _FinalStage {
    SubmitRequestV2 build();

    _FinalStage submissionFiles(List<SubmissionFileInfo> submissionFiles);

    _FinalStage addSubmissionFiles(SubmissionFileInfo submissionFiles);

    _FinalStage addAllSubmissionFiles(List<SubmissionFileInfo> submissionFiles);

    _FinalStage problemVersion(Optional<Integer> problemVersion);

    _FinalStage problemVersion(Integer problemVersion);

    _FinalStage userId(Optional<String> userId);

    _FinalStage userId(String userId);
  }

  @JsonIgnoreProperties(
      ignoreUnknown = true
  )
  public static final class Builder implements SubmissionIdStage, LanguageStage, ProblemIdStage, _FinalStage {
    private SubmissionId submissionId;

    private Language language;

    private ProblemId problemId;

    private Optional<String> userId = Optional.empty();

    private Optional<Integer> problemVersion = Optional.empty();

    private List<SubmissionFileInfo> submissionFiles = new ArrayList<>();

    private Builder() {
    }

    @java.lang.Override
    public Builder from(SubmitRequestV2 other) {
      submissionId(other.getSubmissionId());
      language(other.getLanguage());
      submissionFiles(other.getSubmissionFiles());
      problemId(other.getProblemId());
      problemVersion(other.getProblemVersion());
      userId(other.getUserId());
      return this;
    }

    @java.lang.Override
    @JsonSetter("submissionId")
    public LanguageStage submissionId(SubmissionId submissionId) {
      this.submissionId = submissionId;
      return this;
    }

    @java.lang.Override
    @JsonSetter("language")
    public ProblemIdStage language(Language language) {
      this.language = language;
      return this;
    }

    @java.lang.Override
    @JsonSetter("problemId")
    public _FinalStage problemId(ProblemId problemId) {
      this.problemId = problemId;
      return this;
    }

    @java.lang.Override
    public _FinalStage userId(String userId) {
      this.userId = Optional.of(userId);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "userId",
        nulls = Nulls.SKIP
    )
    public _FinalStage userId(Optional<String> userId) {
      this.userId = userId;
      return this;
    }

    @java.lang.Override
    public _FinalStage problemVersion(Integer problemVersion) {
      this.problemVersion = Optional.of(problemVersion);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "problemVersion",
        nulls = Nulls.SKIP
    )
    public _FinalStage problemVersion(Optional<Integer> problemVersion) {
      this.problemVersion = problemVersion;
      return this;
    }

    @java.lang.Override
    public _FinalStage addAllSubmissionFiles(List<SubmissionFileInfo> submissionFiles) {
      this.submissionFiles.addAll(submissionFiles);
      return this;
    }

    @java.lang.Override
    public _FinalStage addSubmissionFiles(SubmissionFileInfo submissionFiles) {
      this.submissionFiles.add(submissionFiles);
      return this;
    }

    @java.lang.Override
    @JsonSetter(
        value = "submissionFiles",
        nulls = Nulls.SKIP
    )
    public _FinalStage submissionFiles(List<SubmissionFileInfo> submissionFiles) {
      this.submissionFiles.clear();
      this.submissionFiles.addAll(submissionFiles);
      return this;
    }

    @java.lang.Override
    public SubmitRequestV2 build() {
      return new SubmitRequestV2(submissionId, language, submissionFiles, problemId, problemVersion, userId);
    }
  }
}
