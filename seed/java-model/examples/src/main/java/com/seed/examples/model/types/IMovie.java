/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.model.types;

import java.util.Optional;

public interface IMovie {
    String getId();

    Optional<String> getPrequel();

    String getTitle();

    String getFrom();

    double getRating();

    String getType();

    String getTag();

    Optional<String> getBook();
}
