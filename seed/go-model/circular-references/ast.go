// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/circular-references/fern/core"
)

type ContainerValue struct {
	Type     string
	List     []*FieldValue
	Optional *FieldValue
}

func NewContainerValueFromList(value []*FieldValue) *ContainerValue {
	return &ContainerValue{Type: "list", List: value}
}

func NewContainerValueFromOptional(value *FieldValue) *ContainerValue {
	return &ContainerValue{Type: "optional", Optional: value}
}

func (c *ContainerValue) GetType() string {
	if c == nil {
		return ""
	}
	return c.Type
}

func (c *ContainerValue) GetList() []*FieldValue {
	if c == nil {
		return nil
	}
	return c.List
}

func (c *ContainerValue) GetOptional() *FieldValue {
	if c == nil {
		return nil
	}
	return c.Optional
}

func (c *ContainerValue) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	c.Type = unmarshaler.Type
	if unmarshaler.Type == "" {
		return fmt.Errorf("%T did not include discriminant type", c)
	}
	switch unmarshaler.Type {
	case "list":
		var valueUnmarshaler struct {
			List []*FieldValue `json:"value,omitempty"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		c.List = valueUnmarshaler.List
	case "optional":
		var valueUnmarshaler struct {
			Optional *FieldValue `json:"value,omitempty"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		c.Optional = valueUnmarshaler.Optional
	}
	return nil
}

func (c ContainerValue) MarshalJSON() ([]byte, error) {
	switch c.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", c.Type, c)
	case "list":
		var marshaler = struct {
			Type string        `json:"type"`
			List []*FieldValue `json:"value,omitempty"`
		}{
			Type: "list",
			List: c.List,
		}
		return json.Marshal(marshaler)
	case "optional":
		var marshaler = struct {
			Type     string      `json:"type"`
			Optional *FieldValue `json:"value,omitempty"`
		}{
			Type:     "optional",
			Optional: c.Optional,
		}
		return json.Marshal(marshaler)
	}
}

type ContainerValueVisitor interface {
	VisitList([]*FieldValue) error
	VisitOptional(*FieldValue) error
}

func (c *ContainerValue) Accept(visitor ContainerValueVisitor) error {
	switch c.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", c.Type, c)
	case "list":
		return visitor.VisitList(c.List)
	case "optional":
		return visitor.VisitOptional(c.Optional)
	}
}

type FieldValue struct {
	Type           string
	PrimitiveValue PrimitiveValue
	ObjectValue    *ObjectValue
	ContainerValue *ContainerValue
}

func NewFieldValueFromPrimitiveValue(value PrimitiveValue) *FieldValue {
	return &FieldValue{Type: "primitive_value", PrimitiveValue: value}
}

func NewFieldValueFromObjectValue(value *ObjectValue) *FieldValue {
	return &FieldValue{Type: "object_value", ObjectValue: value}
}

func NewFieldValueFromContainerValue(value *ContainerValue) *FieldValue {
	return &FieldValue{Type: "container_value", ContainerValue: value}
}

func (f *FieldValue) GetType() string {
	if f == nil {
		return ""
	}
	return f.Type
}

func (f *FieldValue) GetPrimitiveValue() PrimitiveValue {
	if f == nil {
		return ""
	}
	return f.PrimitiveValue
}

func (f *FieldValue) GetObjectValue() *ObjectValue {
	if f == nil {
		return nil
	}
	return f.ObjectValue
}

func (f *FieldValue) GetContainerValue() *ContainerValue {
	if f == nil {
		return nil
	}
	return f.ContainerValue
}

func (f *FieldValue) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	f.Type = unmarshaler.Type
	if unmarshaler.Type == "" {
		return fmt.Errorf("%T did not include discriminant type", f)
	}
	switch unmarshaler.Type {
	case "primitive_value":
		var valueUnmarshaler struct {
			PrimitiveValue PrimitiveValue `json:"value"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		f.PrimitiveValue = valueUnmarshaler.PrimitiveValue
	case "object_value":
		value := new(ObjectValue)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		f.ObjectValue = value
	case "container_value":
		var valueUnmarshaler struct {
			ContainerValue *ContainerValue `json:"value,omitempty"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		f.ContainerValue = valueUnmarshaler.ContainerValue
	}
	return nil
}

func (f FieldValue) MarshalJSON() ([]byte, error) {
	switch f.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", f.Type, f)
	case "primitive_value":
		var marshaler = struct {
			Type           string         `json:"type"`
			PrimitiveValue PrimitiveValue `json:"value"`
		}{
			Type:           "primitive_value",
			PrimitiveValue: f.PrimitiveValue,
		}
		return json.Marshal(marshaler)
	case "object_value":
		return core.MarshalJSONWithExtraProperty(f.ObjectValue, "type", "object_value")
	case "container_value":
		var marshaler = struct {
			Type           string          `json:"type"`
			ContainerValue *ContainerValue `json:"value,omitempty"`
		}{
			Type:           "container_value",
			ContainerValue: f.ContainerValue,
		}
		return json.Marshal(marshaler)
	}
}

type FieldValueVisitor interface {
	VisitPrimitiveValue(PrimitiveValue) error
	VisitObjectValue(*ObjectValue) error
	VisitContainerValue(*ContainerValue) error
}

func (f *FieldValue) Accept(visitor FieldValueVisitor) error {
	switch f.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", f.Type, f)
	case "primitive_value":
		return visitor.VisitPrimitiveValue(f.PrimitiveValue)
	case "object_value":
		return visitor.VisitObjectValue(f.ObjectValue)
	case "container_value":
		return visitor.VisitContainerValue(f.ContainerValue)
	}
}

type JsonLike struct {
	JsonLikeList      []*JsonLike
	StringJsonLikeMap map[string]*JsonLike
	String            string
	Integer           int
	Boolean           bool

	typ string
}

func NewJsonLikeFromJsonLikeList(value []*JsonLike) *JsonLike {
	return &JsonLike{typ: "JsonLikeList", JsonLikeList: value}
}

func NewJsonLikeFromStringJsonLikeMap(value map[string]*JsonLike) *JsonLike {
	return &JsonLike{typ: "StringJsonLikeMap", StringJsonLikeMap: value}
}

func NewJsonLikeFromString(value string) *JsonLike {
	return &JsonLike{typ: "String", String: value}
}

func NewJsonLikeFromInteger(value int) *JsonLike {
	return &JsonLike{typ: "Integer", Integer: value}
}

func NewJsonLikeFromBoolean(value bool) *JsonLike {
	return &JsonLike{typ: "Boolean", Boolean: value}
}

func (j *JsonLike) GetJsonLikeList() []*JsonLike {
	if j == nil {
		return nil
	}
	return j.JsonLikeList
}

func (j *JsonLike) GetStringJsonLikeMap() map[string]*JsonLike {
	if j == nil {
		return nil
	}
	return j.StringJsonLikeMap
}

func (j *JsonLike) GetString() string {
	if j == nil {
		return ""
	}
	return j.String
}

func (j *JsonLike) GetInteger() int {
	if j == nil {
		return 0
	}
	return j.Integer
}

func (j *JsonLike) GetBoolean() bool {
	if j == nil {
		return false
	}
	return j.Boolean
}

func (j *JsonLike) UnmarshalJSON(data []byte) error {
	var valueJsonLikeList []*JsonLike
	if err := json.Unmarshal(data, &valueJsonLikeList); err == nil {
		j.typ = "JsonLikeList"
		j.JsonLikeList = valueJsonLikeList
		return nil
	}
	var valueStringJsonLikeMap map[string]*JsonLike
	if err := json.Unmarshal(data, &valueStringJsonLikeMap); err == nil {
		j.typ = "StringJsonLikeMap"
		j.StringJsonLikeMap = valueStringJsonLikeMap
		return nil
	}
	var valueString string
	if err := json.Unmarshal(data, &valueString); err == nil {
		j.typ = "String"
		j.String = valueString
		return nil
	}
	var valueInteger int
	if err := json.Unmarshal(data, &valueInteger); err == nil {
		j.typ = "Integer"
		j.Integer = valueInteger
		return nil
	}
	var valueBoolean bool
	if err := json.Unmarshal(data, &valueBoolean); err == nil {
		j.typ = "Boolean"
		j.Boolean = valueBoolean
		return nil
	}
	return fmt.Errorf("%s cannot be deserialized as a %T", data, j)
}

func (j JsonLike) MarshalJSON() ([]byte, error) {
	if j.typ == "JsonLikeList" || j.JsonLikeList != nil {
		return json.Marshal(j.JsonLikeList)
	}
	if j.typ == "StringJsonLikeMap" || j.StringJsonLikeMap != nil {
		return json.Marshal(j.StringJsonLikeMap)
	}
	if j.typ == "String" || j.String != "" {
		return json.Marshal(j.String)
	}
	if j.typ == "Integer" || j.Integer != 0 {
		return json.Marshal(j.Integer)
	}
	if j.typ == "Boolean" || j.Boolean != false {
		return json.Marshal(j.Boolean)
	}
	return nil, fmt.Errorf("type %T does not include a non-empty union type", j)
}

type JsonLikeVisitor interface {
	VisitJsonLikeList([]*JsonLike) error
	VisitStringJsonLikeMap(map[string]*JsonLike) error
	VisitString(string) error
	VisitInteger(int) error
	VisitBoolean(bool) error
}

func (j *JsonLike) Accept(visitor JsonLikeVisitor) error {
	if j.typ == "JsonLikeList" || j.JsonLikeList != nil {
		return visitor.VisitJsonLikeList(j.JsonLikeList)
	}
	if j.typ == "StringJsonLikeMap" || j.StringJsonLikeMap != nil {
		return visitor.VisitStringJsonLikeMap(j.StringJsonLikeMap)
	}
	if j.typ == "String" || j.String != "" {
		return visitor.VisitString(j.String)
	}
	if j.typ == "Integer" || j.Integer != 0 {
		return visitor.VisitInteger(j.Integer)
	}
	if j.typ == "Boolean" || j.Boolean != false {
		return visitor.VisitBoolean(j.Boolean)
	}
	return fmt.Errorf("type %T does not include a non-empty union type", j)
}

type ObjectValue struct {
	extraProperties map[string]interface{}
}

func (o *ObjectValue) GetExtraProperties() map[string]interface{} {
	return o.extraProperties
}

func (o *ObjectValue) UnmarshalJSON(data []byte) error {
	type unmarshaler ObjectValue
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*o = ObjectValue(value)

	extraProperties, err := core.ExtractExtraProperties(data, *o)
	if err != nil {
		return err
	}
	o.extraProperties = extraProperties

	return nil
}

func (o *ObjectValue) String() string {
	if value, err := core.StringifyJSON(o); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", o)
}

type PrimitiveValue string

const (
	PrimitiveValueString PrimitiveValue = "STRING"
	PrimitiveValueNumber PrimitiveValue = "NUMBER"
)

func NewPrimitiveValueFromString(s string) (PrimitiveValue, error) {
	switch s {
	case "STRING":
		return PrimitiveValueString, nil
	case "NUMBER":
		return PrimitiveValueNumber, nil
	}
	var t PrimitiveValue
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (p PrimitiveValue) Ptr() *PrimitiveValue {
	return &p
}
