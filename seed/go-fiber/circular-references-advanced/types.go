// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/circular-references-advanced/fern/core"
)

type ImportingA struct {
	A *A `json:"a,omitempty" url:"a,omitempty"`

	extraProperties map[string]interface{}
}

func (i *ImportingA) GetExtraProperties() map[string]interface{} {
	return i.extraProperties
}

func (i *ImportingA) UnmarshalJSON(data []byte) error {
	type unmarshaler ImportingA
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*i = ImportingA(value)

	extraProperties, err := core.ExtractExtraProperties(data, *i)
	if err != nil {
		return err
	}
	i.extraProperties = extraProperties

	return nil
}

func (i *ImportingA) String() string {
	if value, err := core.StringifyJSON(i); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", i)
}

type RootType struct {
	S string `json:"s" url:"s"`

	extraProperties map[string]interface{}
}

func (r *RootType) GetExtraProperties() map[string]interface{} {
	return r.extraProperties
}

func (r *RootType) UnmarshalJSON(data []byte) error {
	type unmarshaler RootType
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*r = RootType(value)

	extraProperties, err := core.ExtractExtraProperties(data, *r)
	if err != nil {
		return err
	}
	r.extraProperties = extraProperties

	return nil
}

func (r *RootType) String() string {
	if value, err := core.StringifyJSON(r); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", r)
}

type A struct {
	S string `json:"s" url:"s"`

	extraProperties map[string]interface{}
}

func (a *A) GetExtraProperties() map[string]interface{} {
	return a.extraProperties
}

func (a *A) UnmarshalJSON(data []byte) error {
	type unmarshaler A
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*a = A(value)

	extraProperties, err := core.ExtractExtraProperties(data, *a)
	if err != nil {
		return err
	}
	a.extraProperties = extraProperties

	return nil
}

func (a *A) String() string {
	if value, err := core.StringifyJSON(a); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", a)
}

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

func (c *ContainerValue) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	c.Type = unmarshaler.Type
	switch unmarshaler.Type {
	case "list":
		var valueUnmarshaler struct {
			List []*FieldValue `json:"value"`
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
			List []*FieldValue `json:"value"`
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

type FieldName = string

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

func (f *FieldValue) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	f.Type = unmarshaler.Type
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
			ContainerValue *ContainerValue `json:"value"`
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
			ContainerValue *ContainerValue `json:"value"`
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

// This type allows us to test a circular reference with a union type (see FieldValue).
type ObjectFieldValue struct {
	Name  FieldName   `json:"name" url:"name"`
	Value *FieldValue `json:"value" url:"value"`

	extraProperties map[string]interface{}
}

func (o *ObjectFieldValue) GetExtraProperties() map[string]interface{} {
	return o.extraProperties
}

func (o *ObjectFieldValue) UnmarshalJSON(data []byte) error {
	type unmarshaler ObjectFieldValue
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*o = ObjectFieldValue(value)

	extraProperties, err := core.ExtractExtraProperties(data, *o)
	if err != nil {
		return err
	}
	o.extraProperties = extraProperties

	return nil
}

func (o *ObjectFieldValue) String() string {
	if value, err := core.StringifyJSON(o); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", o)
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
