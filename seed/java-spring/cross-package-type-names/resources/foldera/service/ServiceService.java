/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.foldera.service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import resources.foldera.service.types.Response;

@RequestMapping(
    path = "/"
)
public interface ServiceService {
  @GetMapping(
      value = "",
      produces = "application/json"
  )
  Response getDirectThread();
}
