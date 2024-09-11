/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.api.resources.dataservice.requests;

import com.fasterxml.jackson.annotation.JsonAnyGetter;
import com.fasterxml.jackson.annotation.JsonAnySetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.api.core.ObjectMappers;
import com.seed.api.types.IndexedData;
import com.seed.api.types.Metadata;
import com.seed.api.types.QueryColumn;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = QueryRequest.Builder.class)
public final class QueryRequest {
    private final Optional<String> namespace;

    private final int topK;

    private final Optional<Metadata> filter;

    private final Optional<Boolean> includeValues;

    private final Optional<Boolean> includeMetadata;

    private final Optional<List<QueryColumn>> queries;

    private final Optional<List<Double>> column;

    private final Optional<String> id;

    private final Optional<IndexedData> indexedData;

    private final Map<String, Object> additionalProperties;

    private QueryRequest(
            Optional<String> namespace,
            int topK,
            Optional<Metadata> filter,
            Optional<Boolean> includeValues,
            Optional<Boolean> includeMetadata,
            Optional<List<QueryColumn>> queries,
            Optional<List<Double>> column,
            Optional<String> id,
            Optional<IndexedData> indexedData,
            Map<String, Object> additionalProperties) {
        this.namespace = namespace;
        this.topK = topK;
        this.filter = filter;
        this.includeValues = includeValues;
        this.includeMetadata = includeMetadata;
        this.queries = queries;
        this.column = column;
        this.id = id;
        this.indexedData = indexedData;
        this.additionalProperties = additionalProperties;
    }

    @JsonProperty("namespace")
    public Optional<String> getNamespace() {
        return namespace;
    }

    @JsonProperty("topK")
    public int getTopK() {
        return topK;
    }

    @JsonProperty("filter")
    public Optional<Metadata> getFilter() {
        return filter;
    }

    @JsonProperty("includeValues")
    public Optional<Boolean> getIncludeValues() {
        return includeValues;
    }

    @JsonProperty("includeMetadata")
    public Optional<Boolean> getIncludeMetadata() {
        return includeMetadata;
    }

    @JsonProperty("queries")
    public Optional<List<QueryColumn>> getQueries() {
        return queries;
    }

    @JsonProperty("column")
    public Optional<List<Double>> getColumn() {
        return column;
    }

    @JsonProperty("id")
    public Optional<String> getId() {
        return id;
    }

    @JsonProperty("indexedData")
    public Optional<IndexedData> getIndexedData() {
        return indexedData;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof QueryRequest && equalTo((QueryRequest) other);
    }

    @JsonAnyGetter
    public Map<String, Object> getAdditionalProperties() {
        return this.additionalProperties;
    }

    private boolean equalTo(QueryRequest other) {
        return namespace.equals(other.namespace)
                && topK == other.topK
                && filter.equals(other.filter)
                && includeValues.equals(other.includeValues)
                && includeMetadata.equals(other.includeMetadata)
                && queries.equals(other.queries)
                && column.equals(other.column)
                && id.equals(other.id)
                && indexedData.equals(other.indexedData);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(
                this.namespace,
                this.topK,
                this.filter,
                this.includeValues,
                this.includeMetadata,
                this.queries,
                this.column,
                this.id,
                this.indexedData);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static TopKStage builder() {
        return new Builder();
    }

    public interface TopKStage {
        _FinalStage topK(int topK);

        Builder from(QueryRequest other);
    }

    public interface _FinalStage {
        QueryRequest build();

        _FinalStage namespace(Optional<String> namespace);

        _FinalStage namespace(String namespace);

        _FinalStage filter(Optional<Metadata> filter);

        _FinalStage filter(Metadata filter);

        _FinalStage includeValues(Optional<Boolean> includeValues);

        _FinalStage includeValues(Boolean includeValues);

        _FinalStage includeMetadata(Optional<Boolean> includeMetadata);

        _FinalStage includeMetadata(Boolean includeMetadata);

        _FinalStage queries(Optional<List<QueryColumn>> queries);

        _FinalStage queries(List<QueryColumn> queries);

        _FinalStage column(Optional<List<Double>> column);

        _FinalStage column(List<Double> column);

        _FinalStage id(Optional<String> id);

        _FinalStage id(String id);

        _FinalStage indexedData(Optional<IndexedData> indexedData);

        _FinalStage indexedData(IndexedData indexedData);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder implements TopKStage, _FinalStage {
        private int topK;

        private Optional<IndexedData> indexedData = Optional.empty();

        private Optional<String> id = Optional.empty();

        private Optional<List<Double>> column = Optional.empty();

        private Optional<List<QueryColumn>> queries = Optional.empty();

        private Optional<Boolean> includeMetadata = Optional.empty();

        private Optional<Boolean> includeValues = Optional.empty();

        private Optional<Metadata> filter = Optional.empty();

        private Optional<String> namespace = Optional.empty();

        @JsonAnySetter
        private Map<String, Object> additionalProperties = new HashMap<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(QueryRequest other) {
            namespace(other.getNamespace());
            topK(other.getTopK());
            filter(other.getFilter());
            includeValues(other.getIncludeValues());
            includeMetadata(other.getIncludeMetadata());
            queries(other.getQueries());
            column(other.getColumn());
            id(other.getId());
            indexedData(other.getIndexedData());
            return this;
        }

        @java.lang.Override
        @JsonSetter("topK")
        public _FinalStage topK(int topK) {
            this.topK = topK;
            return this;
        }

        @java.lang.Override
        public _FinalStage indexedData(IndexedData indexedData) {
            this.indexedData = Optional.ofNullable(indexedData);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "indexedData", nulls = Nulls.SKIP)
        public _FinalStage indexedData(Optional<IndexedData> indexedData) {
            this.indexedData = indexedData;
            return this;
        }

        @java.lang.Override
        public _FinalStage id(String id) {
            this.id = Optional.ofNullable(id);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "id", nulls = Nulls.SKIP)
        public _FinalStage id(Optional<String> id) {
            this.id = id;
            return this;
        }

        @java.lang.Override
        public _FinalStage column(List<Double> column) {
            this.column = Optional.ofNullable(column);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "column", nulls = Nulls.SKIP)
        public _FinalStage column(Optional<List<Double>> column) {
            this.column = column;
            return this;
        }

        @java.lang.Override
        public _FinalStage queries(List<QueryColumn> queries) {
            this.queries = Optional.ofNullable(queries);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "queries", nulls = Nulls.SKIP)
        public _FinalStage queries(Optional<List<QueryColumn>> queries) {
            this.queries = queries;
            return this;
        }

        @java.lang.Override
        public _FinalStage includeMetadata(Boolean includeMetadata) {
            this.includeMetadata = Optional.ofNullable(includeMetadata);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "includeMetadata", nulls = Nulls.SKIP)
        public _FinalStage includeMetadata(Optional<Boolean> includeMetadata) {
            this.includeMetadata = includeMetadata;
            return this;
        }

        @java.lang.Override
        public _FinalStage includeValues(Boolean includeValues) {
            this.includeValues = Optional.ofNullable(includeValues);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "includeValues", nulls = Nulls.SKIP)
        public _FinalStage includeValues(Optional<Boolean> includeValues) {
            this.includeValues = includeValues;
            return this;
        }

        @java.lang.Override
        public _FinalStage filter(Metadata filter) {
            this.filter = Optional.ofNullable(filter);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "filter", nulls = Nulls.SKIP)
        public _FinalStage filter(Optional<Metadata> filter) {
            this.filter = filter;
            return this;
        }

        @java.lang.Override
        public _FinalStage namespace(String namespace) {
            this.namespace = Optional.ofNullable(namespace);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "namespace", nulls = Nulls.SKIP)
        public _FinalStage namespace(Optional<String> namespace) {
            this.namespace = namespace;
            return this;
        }

        @java.lang.Override
        public QueryRequest build() {
            return new QueryRequest(
                    namespace,
                    topK,
                    filter,
                    includeValues,
                    includeMetadata,
                    queries,
                    column,
                    id,
                    indexedData,
                    additionalProperties);
        }
    }
}
