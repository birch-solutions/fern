/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.folder;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping(
    path = "/"
)
public interface FolderService {
  @PostMapping("")
  void foo();
}
