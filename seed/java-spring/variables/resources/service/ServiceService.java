/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.service;

import java.lang.String;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(
    path = "/"
)
public interface ServiceService {
  @PostMapping(
      value = "/{endpointParam}",
      produces = "application/json"
  )
  void post(@PathVariable("endpointParam") String endpointParam);
}
