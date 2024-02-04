/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.fern.sdk;

import com.fern.sdk.core.ClientOptions;
import com.fern.sdk.core.Environment;
import java.lang.String;

public final class SeedExhaustiveClientBuilder {
  private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

  private String token = null;

  private Environment environment;

  /**
   * Sets token
   */
  public SeedExhaustiveClientBuilder token(String token) {
    this.token = token;
    return this;
  }

  public SeedExhaustiveClientBuilder url(String url) {
    this.environment = Environment.custom(url);
    return this;
  }

  public SeedExhaustiveClient build() {
    this.clientOptionsBuilder.addHeader("Authorization", "Bearer " + this.token);
    clientOptionsBuilder.environment(this.environment);
    return new SeedExhaustiveClient(clientOptionsBuilder.build());
  }
}
