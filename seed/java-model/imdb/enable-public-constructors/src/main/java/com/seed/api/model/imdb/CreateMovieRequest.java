/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.model.imdb;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.api.core.ObjectMappers;
import java.util.Objects;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = CreateMovieRequest.Builder.class)
public final class CreateMovieRequest {
    private final String title;

    private final double rating;

    public CreateMovieRequest(String title, double rating) {
        this.title = title;
        this.rating = rating;
    }

    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @JsonProperty("rating")
    public double getRating() {
        return rating;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof CreateMovieRequest && equalTo((CreateMovieRequest) other);
    }

    private boolean equalTo(CreateMovieRequest other) {
        return title.equals(other.title) && rating == other.rating;
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(this.title, this.rating);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static TitleStage builder() {
        return new Builder();
    }

    public interface TitleStage {
        RatingStage title(String title);

        Builder from(CreateMovieRequest other);
    }

    public interface RatingStage {
        _FinalStage rating(double rating);
    }

    public interface _FinalStage {
        CreateMovieRequest build();
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements TitleStage, RatingStage, _FinalStage {
        private String title;

        private double rating;

        private Builder() {}

        @java.lang.Override
        public Builder from(CreateMovieRequest other) {
            title(other.getTitle());
            rating(other.getRating());
            return this;
        }

        @java.lang.Override
        @JsonSetter("title")
        public RatingStage title(String title) {
            this.title = Objects.requireNonNull(title, "title must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("rating")
        public _FinalStage rating(double rating) {
            this.rating = rating;
            return this;
        }

        @java.lang.Override
        public CreateMovieRequest build() {
            return new CreateMovieRequest(title, rating);
        }
    }
}
