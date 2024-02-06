/**
 * This file was auto-generated by Fern from our API Definition.
 */

package resources.types.object.exceptions;

import com.fasterxml.jackson.annotation.JsonValue;
import core.APIException;
import resources.types.object.types.NestedObjectWithRequiredField;

public final class NestedObjectWithRequiredFieldError extends APIException {
  public static final int STATUS_CODE = 400;

  private final NestedObjectWithRequiredField body;

  public NestedObjectWithRequiredFieldError(NestedObjectWithRequiredField body) {
    this.body = body;
  }

  @JsonValue
  public NestedObjectWithRequiredField getBody() {
    return this.body;
  }
}
