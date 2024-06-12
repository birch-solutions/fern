/**
 * This file was auto-generated by Fern from our API Definition.
 */

package com.seed.pagination;

import com.seed.pagination.core.ClientOptions;
import com.seed.pagination.core.Environment;
import java.lang.String;

public final class SeedPaginationClientBuilder {
  private ClientOptions.Builder clientOptionsBuilder = ClientOptions.builder();

  private String token = null;

  private Environment environment;

  /**
   * Sets token
   */
  public SeedPaginationClientBuilder token(String token) {
    this.token = token;
    return this;
  }

  public SeedPaginationClientBuilder url(String url) {
    this.environment = Environment.custom(url);
    return this;
  }

  public SeedPaginationClient build() {
    this.clientOptionsBuilder.addHeader("Authorization", "Bearer " + this.token);
    clientOptionsBuilder.environment(this.environment);
    return new SeedPaginationClient(clientOptionsBuilder.build());
  }
}
