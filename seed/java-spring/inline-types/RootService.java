/**
 * This file was auto-generated by Fern from our API Definition.
 */

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import requests.GetDiscriminatedUnionRequest;
import requests.GetUndiscriminatedUnionRequest;
import requests.PostRootRequest;
import types.RootType1;

@RequestMapping(
    path = "/root"
)
public interface RootService {
  @PostMapping(
      value = "/root",
      produces = "application/json",
      consumes = "application/json"
  )
  RootType1 getRoot(@RequestBody PostRootRequest body);

  @PostMapping(
      value = "/discriminated-union",
      produces = "application/json",
      consumes = "application/json"
  )
  void getDiscriminatedUnion(@RequestBody GetDiscriminatedUnionRequest body);

  @PostMapping(
      value = "/undiscriminated-union",
      produces = "application/json",
      consumes = "application/json"
  )
  void getUndiscriminatedUnion(@RequestBody GetUndiscriminatedUnionRequest body);
}
