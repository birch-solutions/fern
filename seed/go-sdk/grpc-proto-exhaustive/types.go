// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/grpc-proto-exhaustive/fern/core"
)

type Column struct {
	Id          string       `json:"id" url:"id"`
	Values      []float64    `json:"values,omitempty" url:"values,omitempty"`
	Metadata    *Metadata    `json:"metadata,omitempty" url:"metadata,omitempty"`
	IndexedData *IndexedData `json:"indexedData,omitempty" url:"indexedData,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (c *Column) GetExtraProperties() map[string]interface{} {
	return c.extraProperties
}

func (c *Column) UnmarshalJSON(data []byte) error {
	type unmarshaler Column
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = Column(value)

	extraProperties, err := core.ExtractExtraProperties(data, *c)
	if err != nil {
		return err
	}
	c.extraProperties = extraProperties

	c._rawJSON = json.RawMessage(data)
	return nil
}

func (c *Column) String() string {
	if len(c._rawJSON) > 0 {
		if value, err := core.StringifyJSON(c._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}

type DeleteResponse struct {
	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (d *DeleteResponse) GetExtraProperties() map[string]interface{} {
	return d.extraProperties
}

func (d *DeleteResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler DeleteResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*d = DeleteResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *d)
	if err != nil {
		return err
	}
	d.extraProperties = extraProperties

	d._rawJSON = json.RawMessage(data)
	return nil
}

func (d *DeleteResponse) String() string {
	if len(d._rawJSON) > 0 {
		if value, err := core.StringifyJSON(d._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(d); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", d)
}

type DescribeResponse struct {
	Namespaces map[string]*NamespaceSummary `json:"namespaces,omitempty" url:"namespaces,omitempty"`
	Dimension  *int                         `json:"dimension,omitempty" url:"dimension,omitempty"`
	Fullness   *float64                     `json:"fullness,omitempty" url:"fullness,omitempty"`
	TotalCount *int                         `json:"totalCount,omitempty" url:"totalCount,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (d *DescribeResponse) GetExtraProperties() map[string]interface{} {
	return d.extraProperties
}

func (d *DescribeResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler DescribeResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*d = DescribeResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *d)
	if err != nil {
		return err
	}
	d.extraProperties = extraProperties

	d._rawJSON = json.RawMessage(data)
	return nil
}

func (d *DescribeResponse) String() string {
	if len(d._rawJSON) > 0 {
		if value, err := core.StringifyJSON(d._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(d); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", d)
}

type FetchResponse struct {
	Columns   map[string]*Column `json:"columns,omitempty" url:"columns,omitempty"`
	Namespace *string            `json:"namespace,omitempty" url:"namespace,omitempty"`
	Usage     *Usage             `json:"usage,omitempty" url:"usage,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (f *FetchResponse) GetExtraProperties() map[string]interface{} {
	return f.extraProperties
}

func (f *FetchResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler FetchResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*f = FetchResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *f)
	if err != nil {
		return err
	}
	f.extraProperties = extraProperties

	f._rawJSON = json.RawMessage(data)
	return nil
}

func (f *FetchResponse) String() string {
	if len(f._rawJSON) > 0 {
		if value, err := core.StringifyJSON(f._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(f); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", f)
}

type IndexedData struct {
	Indices []int     `json:"indices,omitempty" url:"indices,omitempty"`
	Values  []float64 `json:"values,omitempty" url:"values,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (i *IndexedData) GetExtraProperties() map[string]interface{} {
	return i.extraProperties
}

func (i *IndexedData) UnmarshalJSON(data []byte) error {
	type unmarshaler IndexedData
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*i = IndexedData(value)

	extraProperties, err := core.ExtractExtraProperties(data, *i)
	if err != nil {
		return err
	}
	i.extraProperties = extraProperties

	i._rawJSON = json.RawMessage(data)
	return nil
}

func (i *IndexedData) String() string {
	if len(i._rawJSON) > 0 {
		if value, err := core.StringifyJSON(i._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(i); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", i)
}

type ListElement struct {
	Id *string `json:"id,omitempty" url:"id,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (l *ListElement) GetExtraProperties() map[string]interface{} {
	return l.extraProperties
}

func (l *ListElement) UnmarshalJSON(data []byte) error {
	type unmarshaler ListElement
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*l = ListElement(value)

	extraProperties, err := core.ExtractExtraProperties(data, *l)
	if err != nil {
		return err
	}
	l.extraProperties = extraProperties

	l._rawJSON = json.RawMessage(data)
	return nil
}

func (l *ListElement) String() string {
	if len(l._rawJSON) > 0 {
		if value, err := core.StringifyJSON(l._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(l); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", l)
}

type ListResponse struct {
	Columns    []*ListElement `json:"columns,omitempty" url:"columns,omitempty"`
	Pagination *Pagination    `json:"pagination,omitempty" url:"pagination,omitempty"`
	Namespace  *string        `json:"namespace,omitempty" url:"namespace,omitempty"`
	Usage      *Usage         `json:"usage,omitempty" url:"usage,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (l *ListResponse) GetExtraProperties() map[string]interface{} {
	return l.extraProperties
}

func (l *ListResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler ListResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*l = ListResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *l)
	if err != nil {
		return err
	}
	l.extraProperties = extraProperties

	l._rawJSON = json.RawMessage(data)
	return nil
}

func (l *ListResponse) String() string {
	if len(l._rawJSON) > 0 {
		if value, err := core.StringifyJSON(l._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(l); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", l)
}

type Metadata struct {
	StringMetadataValueMap map[string]*MetadataValue
	StringUnknownMap       map[string]interface{}

	typ string
}

func NewMetadataFromStringMetadataValueMap(value map[string]*MetadataValue) *Metadata {
	return &Metadata{typ: "StringMetadataValueMap", StringMetadataValueMap: value}
}

func NewMetadataFromStringUnknownMap(value map[string]interface{}) *Metadata {
	return &Metadata{typ: "StringUnknownMap", StringUnknownMap: value}
}

func (m *Metadata) UnmarshalJSON(data []byte) error {
	var valueStringMetadataValueMap map[string]*MetadataValue
	if err := json.Unmarshal(data, &valueStringMetadataValueMap); err == nil {
		m.typ = "StringMetadataValueMap"
		m.StringMetadataValueMap = valueStringMetadataValueMap
		return nil
	}
	var valueStringUnknownMap map[string]interface{}
	if err := json.Unmarshal(data, &valueStringUnknownMap); err == nil {
		m.typ = "StringUnknownMap"
		m.StringUnknownMap = valueStringUnknownMap
		return nil
	}
	return fmt.Errorf("%s cannot be deserialized as a %T", data, m)
}

func (m Metadata) MarshalJSON() ([]byte, error) {
	if m.typ == "StringMetadataValueMap" || m.StringMetadataValueMap != nil {
		return json.Marshal(m.StringMetadataValueMap)
	}
	if m.typ == "StringUnknownMap" || m.StringUnknownMap != nil {
		return json.Marshal(m.StringUnknownMap)
	}
	return nil, fmt.Errorf("type %T does not include a non-empty union type", m)
}

type MetadataVisitor interface {
	VisitStringMetadataValueMap(map[string]*MetadataValue) error
	VisitStringUnknownMap(map[string]interface{}) error
}

func (m *Metadata) Accept(visitor MetadataVisitor) error {
	if m.typ == "StringMetadataValueMap" || m.StringMetadataValueMap != nil {
		return visitor.VisitStringMetadataValueMap(m.StringMetadataValueMap)
	}
	if m.typ == "StringUnknownMap" || m.StringUnknownMap != nil {
		return visitor.VisitStringUnknownMap(m.StringUnknownMap)
	}
	return fmt.Errorf("type %T does not include a non-empty union type", m)
}

type MetadataValue struct {
	Double  float64
	String  string
	Boolean bool

	typ string
}

func NewMetadataValueFromDouble(value float64) *MetadataValue {
	return &MetadataValue{typ: "Double", Double: value}
}

func NewMetadataValueFromString(value string) *MetadataValue {
	return &MetadataValue{typ: "String", String: value}
}

func NewMetadataValueFromBoolean(value bool) *MetadataValue {
	return &MetadataValue{typ: "Boolean", Boolean: value}
}

func (m *MetadataValue) UnmarshalJSON(data []byte) error {
	var valueDouble float64
	if err := json.Unmarshal(data, &valueDouble); err == nil {
		m.typ = "Double"
		m.Double = valueDouble
		return nil
	}
	var valueString string
	if err := json.Unmarshal(data, &valueString); err == nil {
		m.typ = "String"
		m.String = valueString
		return nil
	}
	var valueBoolean bool
	if err := json.Unmarshal(data, &valueBoolean); err == nil {
		m.typ = "Boolean"
		m.Boolean = valueBoolean
		return nil
	}
	return fmt.Errorf("%s cannot be deserialized as a %T", data, m)
}

func (m MetadataValue) MarshalJSON() ([]byte, error) {
	if m.typ == "Double" || m.Double != 0 {
		return json.Marshal(m.Double)
	}
	if m.typ == "String" || m.String != "" {
		return json.Marshal(m.String)
	}
	if m.typ == "Boolean" || m.Boolean != false {
		return json.Marshal(m.Boolean)
	}
	return nil, fmt.Errorf("type %T does not include a non-empty union type", m)
}

type MetadataValueVisitor interface {
	VisitDouble(float64) error
	VisitString(string) error
	VisitBoolean(bool) error
}

func (m *MetadataValue) Accept(visitor MetadataValueVisitor) error {
	if m.typ == "Double" || m.Double != 0 {
		return visitor.VisitDouble(m.Double)
	}
	if m.typ == "String" || m.String != "" {
		return visitor.VisitString(m.String)
	}
	if m.typ == "Boolean" || m.Boolean != false {
		return visitor.VisitBoolean(m.Boolean)
	}
	return fmt.Errorf("type %T does not include a non-empty union type", m)
}

type NamespaceSummary struct {
	Count *int `json:"count,omitempty" url:"count,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (n *NamespaceSummary) GetExtraProperties() map[string]interface{} {
	return n.extraProperties
}

func (n *NamespaceSummary) UnmarshalJSON(data []byte) error {
	type unmarshaler NamespaceSummary
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*n = NamespaceSummary(value)

	extraProperties, err := core.ExtractExtraProperties(data, *n)
	if err != nil {
		return err
	}
	n.extraProperties = extraProperties

	n._rawJSON = json.RawMessage(data)
	return nil
}

func (n *NamespaceSummary) String() string {
	if len(n._rawJSON) > 0 {
		if value, err := core.StringifyJSON(n._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}

type Pagination struct {
	Next *string `json:"next,omitempty" url:"next,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (p *Pagination) GetExtraProperties() map[string]interface{} {
	return p.extraProperties
}

func (p *Pagination) UnmarshalJSON(data []byte) error {
	type unmarshaler Pagination
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*p = Pagination(value)

	extraProperties, err := core.ExtractExtraProperties(data, *p)
	if err != nil {
		return err
	}
	p.extraProperties = extraProperties

	p._rawJSON = json.RawMessage(data)
	return nil
}

func (p *Pagination) String() string {
	if len(p._rawJSON) > 0 {
		if value, err := core.StringifyJSON(p._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(p); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", p)
}

type QueryColumn struct {
	Values      []float64    `json:"values,omitempty" url:"values,omitempty"`
	TopK        *int         `json:"topK,omitempty" url:"topK,omitempty"`
	Namespace   *string      `json:"namespace,omitempty" url:"namespace,omitempty"`
	Filter      *Metadata    `json:"filter,omitempty" url:"filter,omitempty"`
	IndexedData *IndexedData `json:"indexedData,omitempty" url:"indexedData,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (q *QueryColumn) GetExtraProperties() map[string]interface{} {
	return q.extraProperties
}

func (q *QueryColumn) UnmarshalJSON(data []byte) error {
	type unmarshaler QueryColumn
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*q = QueryColumn(value)

	extraProperties, err := core.ExtractExtraProperties(data, *q)
	if err != nil {
		return err
	}
	q.extraProperties = extraProperties

	q._rawJSON = json.RawMessage(data)
	return nil
}

func (q *QueryColumn) String() string {
	if len(q._rawJSON) > 0 {
		if value, err := core.StringifyJSON(q._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(q); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", q)
}

type QueryResponse struct {
	Results   []*QueryResult  `json:"results,omitempty" url:"results,omitempty"`
	Matches   []*ScoredColumn `json:"matches,omitempty" url:"matches,omitempty"`
	Namespace *string         `json:"namespace,omitempty" url:"namespace,omitempty"`
	Usage     *Usage          `json:"usage,omitempty" url:"usage,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (q *QueryResponse) GetExtraProperties() map[string]interface{} {
	return q.extraProperties
}

func (q *QueryResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler QueryResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*q = QueryResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *q)
	if err != nil {
		return err
	}
	q.extraProperties = extraProperties

	q._rawJSON = json.RawMessage(data)
	return nil
}

func (q *QueryResponse) String() string {
	if len(q._rawJSON) > 0 {
		if value, err := core.StringifyJSON(q._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(q); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", q)
}

type QueryResult struct {
	Matches   []*ScoredColumn `json:"matches,omitempty" url:"matches,omitempty"`
	Namespace *string         `json:"namespace,omitempty" url:"namespace,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (q *QueryResult) GetExtraProperties() map[string]interface{} {
	return q.extraProperties
}

func (q *QueryResult) UnmarshalJSON(data []byte) error {
	type unmarshaler QueryResult
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*q = QueryResult(value)

	extraProperties, err := core.ExtractExtraProperties(data, *q)
	if err != nil {
		return err
	}
	q.extraProperties = extraProperties

	q._rawJSON = json.RawMessage(data)
	return nil
}

func (q *QueryResult) String() string {
	if len(q._rawJSON) > 0 {
		if value, err := core.StringifyJSON(q._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(q); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", q)
}

type ScoredColumn struct {
	Id          string       `json:"id" url:"id"`
	Score       *float64     `json:"score,omitempty" url:"score,omitempty"`
	Values      []float64    `json:"values,omitempty" url:"values,omitempty"`
	Metadata    *Metadata    `json:"metadata,omitempty" url:"metadata,omitempty"`
	IndexedData *IndexedData `json:"indexedData,omitempty" url:"indexedData,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (s *ScoredColumn) GetExtraProperties() map[string]interface{} {
	return s.extraProperties
}

func (s *ScoredColumn) UnmarshalJSON(data []byte) error {
	type unmarshaler ScoredColumn
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*s = ScoredColumn(value)

	extraProperties, err := core.ExtractExtraProperties(data, *s)
	if err != nil {
		return err
	}
	s.extraProperties = extraProperties

	s._rawJSON = json.RawMessage(data)
	return nil
}

func (s *ScoredColumn) String() string {
	if len(s._rawJSON) > 0 {
		if value, err := core.StringifyJSON(s._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}

type UpdateResponse struct {
	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (u *UpdateResponse) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *UpdateResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler UpdateResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UpdateResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties

	u._rawJSON = json.RawMessage(data)
	return nil
}

func (u *UpdateResponse) String() string {
	if len(u._rawJSON) > 0 {
		if value, err := core.StringifyJSON(u._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}

type UploadResponse struct {
	Count *int `json:"count,omitempty" url:"count,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (u *UploadResponse) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *UploadResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler UploadResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UploadResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties

	u._rawJSON = json.RawMessage(data)
	return nil
}

func (u *UploadResponse) String() string {
	if len(u._rawJSON) > 0 {
		if value, err := core.StringifyJSON(u._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}

type Usage struct {
	Units *int `json:"units,omitempty" url:"units,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (u *Usage) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *Usage) UnmarshalJSON(data []byte) error {
	type unmarshaler Usage
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = Usage(value)

	extraProperties, err := core.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties

	u._rawJSON = json.RawMessage(data)
	return nil
}

func (u *Usage) String() string {
	if len(u._rawJSON) > 0 {
		if value, err := core.StringifyJSON(u._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}
