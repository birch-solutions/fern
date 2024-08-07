// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	uuid "github.com/google/uuid"
	core "sdk/core"
	time "time"
)

type Bar struct {
	Foo *Foo `json:"foo,omitempty" url:"foo,omitempty"`

	extraProperties map[string]interface{}
}

func (b *Bar) GetExtraProperties() map[string]interface{} {
	return b.extraProperties
}

func (b *Bar) UnmarshalJSON(data []byte) error {
	type unmarshaler Bar
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*b = Bar(value)

	extraProperties, err := core.ExtractExtraProperties(data, *b)
	if err != nil {
		return err
	}
	b.extraProperties = extraProperties

	return nil
}

func (b *Bar) String() string {
	if value, err := core.StringifyJSON(b); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", b)
}

type BarAlias = *Bar

type Base64 = []byte

type Boolean = bool

type Date = time.Time

type DateTime = time.Time

type Double = float64

type DoubleSet = []float64

type Foo struct {
	Id          uuid.UUID `json:"id" url:"id"`
	Name        string    `json:"name" url:"name"`
	StringAlias String    `json:"stringAlias" url:"stringAlias"`

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

type FooAlias = *Foo

type Integer = int

type IntegerList = []int

type ListListInteger = [][]int

type ListOptionalUuid = []*uuid.UUID

type ListStringIntegerMap = []map[string]int

type Long = int64

type OptionalLong = *int64

type String = string

type StringBooleanMap = map[string]bool

type Union struct {
	Type        string
	FooAlias    *Foo
	BarAlias    BarAlias
	DoubleAlias Double
}

func NewUnionFromFooAlias(value *Foo) *Union {
	return &Union{Type: "fooAlias", FooAlias: value}
}

func NewUnionFromBarAlias(value BarAlias) *Union {
	return &Union{Type: "barAlias", BarAlias: value}
}

func NewUnionFromDoubleAlias(value Double) *Union {
	return &Union{Type: "doubleAlias", DoubleAlias: value}
}

func (u *Union) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	switch unmarshaler.Type {
	case "fooAlias":
		value := new(Foo)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		u.FooAlias = value
	case "barAlias":
		var valueUnmarshaler struct {
			BarAlias BarAlias `json:"barAlias,omitempty"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.BarAlias = valueUnmarshaler.BarAlias
	case "doubleAlias":
		var valueUnmarshaler struct {
			DoubleAlias Double `json:"doubleAlias"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.DoubleAlias = valueUnmarshaler.DoubleAlias
	}
	return nil
}

func (u Union) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "fooAlias":
		return core.MarshalJSONWithExtraProperty(u.FooAlias, "type", "fooAlias")
	case "barAlias":
		var marshaler = struct {
			Type     string   `json:"type"`
			BarAlias BarAlias `json:"barAlias,omitempty"`
		}{
			Type:     "barAlias",
			BarAlias: u.BarAlias,
		}
		return json.Marshal(marshaler)
	case "doubleAlias":
		var marshaler = struct {
			Type        string `json:"type"`
			DoubleAlias Double `json:"doubleAlias"`
		}{
			Type:        "doubleAlias",
			DoubleAlias: u.DoubleAlias,
		}
		return json.Marshal(marshaler)
	}
}

type UnionVisitor interface {
	VisitFooAlias(*Foo) error
	VisitBarAlias(BarAlias) error
	VisitDoubleAlias(Double) error
}

func (u *Union) Accept(visitor UnionVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "fooAlias":
		return visitor.VisitFooAlias(u.FooAlias)
	case "barAlias":
		return visitor.VisitBarAlias(u.BarAlias)
	case "doubleAlias":
		return visitor.VisitDoubleAlias(u.DoubleAlias)
	}
}

type Unknown = interface{}

type Uuid = uuid.UUID
