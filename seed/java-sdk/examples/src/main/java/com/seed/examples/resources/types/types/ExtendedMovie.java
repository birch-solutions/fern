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
import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = ExtendedMovie.Builder.class)
public final class ExtendedMovie implements IMovie {
    private final String id;

    private final Optional<String> prequel;

    private final String title;

    private final String from;

    private final double rating;

    private final String tag;

    private final Optional<String> book;

    private final Map<String, Object> metadata;

    private final long revenue;

    private final List<String> cast;

    private final Map<String, Object> additionalProperties;

    private ExtendedMovie(
            String id,
            Optional<String> prequel,
            String title,
            String from,
            double rating,
            String tag,
            Optional<String> book,
            Map<String, Object> metadata,
            long revenue,
            List<String> cast,
            Map<String, Object> additionalProperties) {
        this.id = id;
        this.prequel = prequel;
        this.title = title;
        this.from = from;
        this.rating = rating;
        this.tag = tag;
        this.book = book;
        this.metadata = metadata;
        this.revenue = revenue;
        this.cast = cast;
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

    @JsonProperty("revenue")
    @java.lang.Override
    public long getRevenue() {
        return revenue;
    }

    @JsonProperty("cast")
    public List<String> getCast() {
        return cast;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof ExtendedMovie && equalTo((ExtendedMovie) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(ExtendedMovie other) {
        return id.equals(other.id)
                && prequel.equals(other.prequel)
                && title.equals(other.title)
                && from.equals(other.from)
                && rating == other.rating
                && tag.equals(other.tag)
                && book.equals(other.book)
                && metadata.equals(other.metadata)
                && revenue == other.revenue
                && cast.equals(other.cast);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(
                this.id,
                this.prequel,
                this.title,
                this.from,
                this.rating,
                this.tag,
                this.book,
                this.metadata,
                this.revenue,
                this.cast);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static IdStage builder() {
        return new Builder();
    }

    public interface IdStage {
        TitleStage id(String id);

        Builder from(ExtendedMovie other);
    }

    public interface TitleStage {
        FromStage title(String title);
    }

    public interface FromStage {
        RatingStage from(String from);
    }

    public interface RatingStage {
        TagStage rating(double rating);
    }

    public interface TagStage {
        RevenueStage tag(String tag);
    }

    public interface RevenueStage {
        _FinalStage revenue(long revenue);
    }

    public interface _FinalStage {
        ExtendedMovie build();

        _FinalStage prequel(Optional<String> prequel);

        _FinalStage prequel(String prequel);

        _FinalStage book(Optional<String> book);

        _FinalStage book(String book);

        _FinalStage metadata(Map<String, Object> metadata);

        _FinalStage putAllMetadata(Map<String, Object> metadata);

        _FinalStage metadata(String key, Object value);

        _FinalStage cast(List<String> cast);

        _FinalStage addCast(String cast);

        _FinalStage addAllCast(List<String> cast);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder
            implements IdStage, TitleStage, FromStage, RatingStage, TagStage, RevenueStage, _FinalStage {
        private String id;

        private String title;

        private String from;

        private double rating;

        private String tag;

        private long revenue;

        private List<String> cast = new ArrayList<>();

        private Map<String, Object> metadata = new LinkedHashMap<>();

        private Optional<String> book = Optional.empty();

        private Optional<String> prequel = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(ExtendedMovie other) {
            id(other.getId());
            prequel(other.getPrequel());
            title(other.getTitle());
            from(other.getFrom());
            rating(other.getRating());
            tag(other.getTag());
            book(other.getBook());
            metadata(other.getMetadata());
            revenue(other.getRevenue());
            cast(other.getCast());
            return this;
        }

        @java.lang.Override
        @JsonSetter("id")
        public TitleStage id(String id) {
            this.id = id;
            return this;
        }

        @java.lang.Override
        @JsonSetter("title")
        public FromStage title(String title) {
            this.title = title;
            return this;
        }

        @java.lang.Override
        @JsonSetter("from")
        public RatingStage from(String from) {
            this.from = from;
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
        public RevenueStage tag(String tag) {
            this.tag = tag;
            return this;
        }

        @java.lang.Override
        @JsonSetter("revenue")
        public _FinalStage revenue(long revenue) {
            this.revenue = revenue;
            return this;
        }

        @java.lang.Override
        public _FinalStage addAllCast(List<String> cast) {
            this.cast.addAll(cast);
            return this;
        }

        @java.lang.Override
        public _FinalStage addCast(String cast) {
            this.cast.add(cast);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "cast", nulls = Nulls.SKIP)
        public _FinalStage cast(List<String> cast) {
            this.cast.clear();
            this.cast.addAll(cast);
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
        public ExtendedMovie build() {
            return new ExtendedMovie(
                    id, prequel, title, from, rating, tag, book, metadata, revenue, cast, additionalProperties);
        }
    }
}
