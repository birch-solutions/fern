/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.v2.problem;

import java.lang.Integer;
import java.lang.String;
import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import resources.commons.types.ProblemId;
import resources.v2.problem.types.LightweightProblemInfoV2;
import resources.v2.problem.types.ProblemInfoV2;

@RequestMapping(
    path = "/problems-v2"
)
public interface ProblemService {
  @GetMapping(
      value = "/lightweight-problem-info",
      produces = "application/json"
  )
  List<LightweightProblemInfoV2> getLightweightProblems(
      @RequestHeader("X-Random-Header") Optional<String> xRandomHeader);

  @GetMapping(
      value = "/problem-info",
      produces = "application/json"
  )
  List<ProblemInfoV2> getProblems(@RequestHeader("X-Random-Header") Optional<String> xRandomHeader);

  @GetMapping(
      value = "/problem-info/{problemId}",
      produces = "application/json"
  )
  ProblemInfoV2 getLatestProblem(@RequestHeader("X-Random-Header") Optional<String> xRandomHeader,
      @PathVariable("problemId") ProblemId problemId);

  @GetMapping(
      value = "/problem-info/{problemId}/version/{problemVersion}",
      produces = "application/json"
  )
  ProblemInfoV2 getProblemVersion(@RequestHeader("X-Random-Header") Optional<String> xRandomHeader,
      @PathVariable("problemId") ProblemId problemId,
      @PathVariable("problemVersion") Integer problemVersion);
}
