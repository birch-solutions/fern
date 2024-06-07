/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.fern.sdk.resources.types.enum_.errors;

import com.fern.sdk.core.SeedExhaustiveApiError;
import com.fern.sdk.resources.types.enum_.types.WeatherReport;

public final class SeedExhaustiveErrorWithEnumBody extends SeedExhaustiveApiError {
  /**
   * The body of the response that triggered the exception.
   */
  private final WeatherReport body;

  public SeedExhaustiveErrorWithEnumBody(WeatherReport body) {
    super("ErrorWithEnumBody", 400, body);
    this.body = body;
  }

  /**
   * @return the body
   */
  @java.lang.Override
  public WeatherReport body() {
    return this.body;
  }
}
