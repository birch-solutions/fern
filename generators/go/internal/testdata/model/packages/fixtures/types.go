// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	bar "github.com/fern-api/fern-go/internal/testdata/model/packages/fixtures/bar"
	core "github.com/fern-api/fern-go/internal/testdata/model/packages/fixtures/core"
)

type Base struct {
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (b *Base) GetExtraProperties() map[string]interface{} {
	return b.extraProperties
}

func (b *Base) UnmarshalJSON(data []byte) error {
	type unmarshaler Base
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*b = Base(value)

	extraProperties, err := core.ExtractExtraProperties(data, *b)
	if err != nil {
		return err
	}
	b.extraProperties = extraProperties

	return nil
}

func (b *Base) String() string {
	if value, err := core.StringifyJSON(b); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", b)
}

type Value struct {
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (v *Value) GetExtraProperties() map[string]interface{} {
	return v.extraProperties
}

func (v *Value) UnmarshalJSON(data []byte) error {
	type unmarshaler Value
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*v = Value(value)

	extraProperties, err := core.ExtractExtraProperties(data, *v)
	if err != nil {
		return err
	}
	v.extraProperties = extraProperties

	return nil
}

func (v *Value) String() string {
	if value, err := core.StringifyJSON(v); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", v)
}

type Foo struct {
	Name  string   `json:"name" url:"name"`
	Value *Value   `json:"value,omitempty" url:"value,omitempty"`
	Bar   *bar.Bar `json:"bar,omitempty" url:"bar,omitempty"`

	extraProperties map[string]interface{}
}

func (f *Foo) GetExtraProperties() map[string]interface{} {
	return f.extraProperties
}

func (f *Foo) UnmarshalJSON(data []byte) error {
	type unmarshaler Foo
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*f = Foo(value)

	extraProperties, err := core.ExtractExtraProperties(data, *f)
	if err != nil {
		return err
	}
	f.extraProperties = extraProperties

	return nil
}

func (f *Foo) String() string {
	if value, err := core.StringifyJSON(f); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", f)
}

type Union struct {
	Type         string
	Value        *Value
	AnotherValue *Value
	Bar          *bar.Bar
	AnotherBar   *bar.Bar
}

func NewUnionFromValue(value *Value) *Union {
	return &Union{Type: "value", Value: value}
}

func NewUnionFromAnotherValue(value *Value) *Union {
	return &Union{Type: "anotherValue", AnotherValue: value}
}

func NewUnionFromBar(value *bar.Bar) *Union {
	return &Union{Type: "bar", Bar: value}
}

func NewUnionFromAnotherBar(value *bar.Bar) *Union {
	return &Union{Type: "anotherBar", AnotherBar: value}
}

func (u *Union) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	if unmarshaler.Type == "" {
		return fmt.Errorf("%T did not include discriminant type", u)
	}
	switch unmarshaler.Type {
	case "value":
		value := new(Value)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		u.Value = value
	case "anotherValue":
		var valueUnmarshaler struct {
			AnotherValue *Value `json:"anotherValue,omitempty"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.AnotherValue = valueUnmarshaler.AnotherValue
	case "bar":
		value := new(bar.Bar)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		u.Bar = value
	case "anotherBar":
		var valueUnmarshaler struct {
			AnotherBar *bar.Bar `json:"anotherBar,omitempty"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.AnotherBar = valueUnmarshaler.AnotherBar
	}
	return nil
}

func (u Union) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "value":
		return core.MarshalJSONWithExtraProperty(u.Value, "type", "value")
	case "anotherValue":
		var marshaler = struct {
			Type         string `json:"type"`
			AnotherValue *Value `json:"anotherValue,omitempty"`
		}{
			Type:         "anotherValue",
			AnotherValue: u.AnotherValue,
		}
		return json.Marshal(marshaler)
	case "bar":
		return core.MarshalJSONWithExtraProperty(u.Bar, "type", "bar")
	case "anotherBar":
		var marshaler = struct {
			Type       string   `json:"type"`
			AnotherBar *bar.Bar `json:"anotherBar,omitempty"`
		}{
			Type:       "anotherBar",
			AnotherBar: u.AnotherBar,
		}
		return json.Marshal(marshaler)
	}
}

type UnionVisitor interface {
	VisitValue(*Value) error
	VisitAnotherValue(*Value) error
	VisitBar(*bar.Bar) error
	VisitAnotherBar(*bar.Bar) error
}

func (u *Union) Accept(visitor UnionVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "value":
		return visitor.VisitValue(u.Value)
	case "anotherValue":
		return visitor.VisitAnotherValue(u.AnotherValue)
	case "bar":
		return visitor.VisitBar(u.Bar)
	case "anotherBar":
		return visitor.VisitAnotherBar(u.AnotherBar)
	}
}
