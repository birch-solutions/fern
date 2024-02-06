/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.queryparam;

import java.util.Optional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import types.Operand;

@RequestMapping(
    path = "/"
)
public interface QueryParamService {
  @PostMapping("/query")
  void send(@RequestParam("value") Optional<Operand> value);

  @PostMapping("/query-list")
  void sendList(@RequestParam("value") Optional<Operand> value);
}
