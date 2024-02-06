/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.onlyliteralheaders;

import java.lang.Boolean;
import java.lang.String;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(
    path = "/only-literal-headers"
)
public interface OnlyLiteralHeadersService {
  @PostMapping("")
  void get(@RequestHeader("X-API-Header") String apiHeader,
      @RequestHeader("X-API-Test") Boolean apiTest,
      @RequestHeader("literalServiceHeader") String literalServiceHeader,
      @RequestHeader("literalEndpointHeader") String literalEndpointHeader,
      @RequestHeader("falseEndpointHeader") Boolean falseEndpointHeader);
}
