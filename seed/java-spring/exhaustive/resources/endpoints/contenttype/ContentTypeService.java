/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.endpoints.contenttype;

import core.BearerAuth;
import java.security.Principal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import resources.types.object.types.ObjectWithOptionalField;

@RequestMapping(
    path = "/foo"
)
public interface ContentTypeService {
  @PostMapping(
      value = "/bar",
      produces = "application/json",
      consumes = "application/json"
  )
  void postJsonPatchContentType(@RequestHeader("Authorization") BearerAuth auth,
      Principal principal, @RequestBody ObjectWithOptionalField body);

  @PostMapping(
      value = "/baz",
      produces = "application/json",
      consumes = "application/json"
  )
  void postJsonPatchContentWithCharsetType(@RequestHeader("Authorization") BearerAuth auth,
      Principal principal, @RequestBody ObjectWithOptionalField body);
}
