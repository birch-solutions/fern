/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.examples.resources.types.types;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.examples.core.ObjectMappers;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = Movie.Builder.class)
public final class Movie implements IMovie {
    private final String id;

    private final Optional<String> prequel;

    private final String title;

    private final String from;

    private final double rating;

    private final String tag;

    private final Optional<String> book;

    private final Map<String, Object> metadata;

    private final Map<String, Object> additionalProperties;

    private Movie(
            String id,
            Optional<String> prequel,
            String title,
            String from,
            double rating,
            String tag,
            Optional<String> book,
            Map<String, Object> metadata,
            Map<String, Object> additionalProperties) {
        this.id = id;
        this.prequel = prequel;
        this.title = title;
        this.from = from;
        this.rating = rating;
        this.tag = tag;
        this.book = book;
        this.metadata = metadata;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("id")
    @java.lang.Override
    public String getId() {
        return id;
    }

    @JsonProperty("prequel")
    @java.lang.Override
    public Optional<String> getPrequel() {
        return prequel;
    }

    @JsonProperty("title")
    @java.lang.Override
    public String getTitle() {
        return title;
    }

    @JsonProperty("from")
    @java.lang.Override
    public String getFrom() {
        return from;
    }

    /**
     * @return The rating scale is one to five stars
     */
    @JsonProperty("rating")
    @java.lang.Override
    public double getRating() {
        return rating;
    }

    @JsonProperty("type")
    @java.lang.Override
    public String getType() {
        return "movie";
    }

    @JsonProperty("tag")
    @java.lang.Override
    public String getTag() {
        return tag;
    }

    @JsonProperty("book")
    @java.lang.Override
    public Optional<String> getBook() {
        return book;
    }

    @JsonProperty("metadata")
    @java.lang.Override
    public Map<String, Object> getMetadata() {
        return metadata;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Movie && equalTo((Movie) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(Movie other) {
        return id.equals(other.id)
                && prequel.equals(other.prequel)
                && title.equals(other.title)
                && from.equals(other.from)
                && rating == other.rating
                && tag.equals(other.tag)
                && book.equals(other.book)
                && metadata.equals(other.metadata);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(
                this.id, this.prequel, this.title, this.from, this.rating, this.tag, this.book, this.metadata);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static IdStage builder() {
        return new Builder();
    }

    public interface IdStage {
        TitleStage id(@NotNull String id);

        Builder from(Movie other);
    }

    public interface TitleStage {
        FromStage title(@NotNull String title);
    }

    public interface FromStage {
        RatingStage from(@NotNull String from);
    }

    public interface RatingStage {
        TagStage rating(double rating);
    }

    public interface TagStage {
        _FinalStage tag(@NotNull String tag);
    }

    public interface _FinalStage {
        Movie build();

        _FinalStage prequel(Optional<String> prequel);

        _FinalStage prequel(String prequel);

        _FinalStage book(Optional<String> book);

        _FinalStage book(String book);

        _FinalStage metadata(Map<String, Object> metadata);

        _FinalStage putAllMetadata(Map<String, Object> metadata);

        _FinalStage metadata(String key, Object value);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements IdStage, TitleStage, FromStage, RatingStage, TagStage, _FinalStage {
        private String id;

        private String title;

        private String from;

        private double rating;

        private String tag;

        private Map<String, Object> metadata = new LinkedHashMap<>();

        private Optional<String> book = Optional.empty();

        private Optional<String> prequel = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(Movie other) {
            id(other.getId());
            prequel(other.getPrequel());
            title(other.getTitle());
            from(other.getFrom());
            rating(other.getRating());
            tag(other.getTag());
            book(other.getBook());
            metadata(other.getMetadata());
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public TitleStage id(@NotNull String id) {
            this.id = Objects.requireNonNull(id, "id must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("title")
        public FromStage title(@NotNull String title) {
            this.title = Objects.requireNonNull(title, "title must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("from")
        public RatingStage from(@NotNull String from) {
            this.from = Objects.requireNonNull(from, "from must not be null");
            return this;
        }

        /**
         * <p>The rating scale is one to five stars</p>
         * @return Reference to {@code this} so that method calls can be chained together.
         */
        @java.lang.Override
        @JsonSetter("rating")
        public TagStage rating(double rating) {
            this.rating = rating;
            return this;
        }

        @java.lang.Override
        @JsonSetter("tag")
        public _FinalStage tag(@NotNull String tag) {
            this.tag = Objects.requireNonNull(tag, "tag must not be null");
            return this;
        }

        @java.lang.Override
        public _FinalStage metadata(String key, Object value) {
            this.metadata.put(key, value);
            return this;
        }

        @java.lang.Override
        public _FinalStage putAllMetadata(Map<String, Object> metadata) {
            this.metadata.putAll(metadata);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "metadata", nulls = Nulls.SKIP)
        public _FinalStage metadata(Map<String, Object> metadata) {
            this.metadata.clear();
            this.metadata.putAll(metadata);
            return this;
        }

        @java.lang.Override
        public _FinalStage book(String book) {
            this.book = Optional.ofNullable(book);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "book", nulls = Nulls.SKIP)
        public _FinalStage book(Optional<String> book) {
            this.book = book;
            return this;
        }

        @java.lang.Override
        public _FinalStage prequel(String prequel) {
            this.prequel = Optional.ofNullable(prequel);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "prequel", nulls = Nulls.SKIP)
        public _FinalStage prequel(Optional<String> prequel) {
            this.prequel = prequel;
            return this;
        }

        @java.lang.Override
        public Movie build() {
            return new Movie(id, prequel, title, from, rating, tag, book, metadata, additionalProperties);
        }
    }
}
