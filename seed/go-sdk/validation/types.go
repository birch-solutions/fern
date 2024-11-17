// This file was auto-generated by Fern from our API Definition.

package validation

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/validation/fern/internal"
)

type CreateRequest struct {
	Decimal float64 `json:"decimal" url:"-"`
	Even    int     `json:"even" url:"-"`
	Name    string  `json:"name" url:"-"`
	Shape   Shape   `json:"shape" url:"-"`
}

type GetRequest struct {
	Decimal float64 `json:"-" url:"decimal"`
	Even    int     `json:"-" url:"even"`
	Name    string  `json:"-" url:"name"`
}

type Double = float64

type LargeInteger = int

type Sentence = string

type Shape string

const (
	ShapeSquare   Shape = "SQUARE"
	ShapeCircle   Shape = "CIRCLE"
	ShapeTriangle Shape = "TRIANGLE"
)

func NewShapeFromString(s string) (Shape, error) {
	switch s {
	case "SQUARE":
		return ShapeSquare, nil
	case "CIRCLE":
		return ShapeCircle, nil
	case "TRIANGLE":
		return ShapeTriangle, nil
	}
	var t Shape
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (s Shape) Ptr() *Shape {
	return &s
}

type SmallInteger = int

// Defines properties with default values and validation rules.
type Type struct {
	Decimal float64 `json:"decimal" url:"decimal"`
	Even    int     `json:"even" url:"even"`
	Name    string  `json:"name" url:"name"`
	Shape   Shape   `json:"shape" url:"shape"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (t *Type) GetDecimal() float64 {
	if t == nil {
		return 0
	}
	return t.Decimal
}

func (t *Type) GetEven() int {
	if t == nil {
		return 0
	}
	return t.Even
}

func (t *Type) GetName() string {
	if t == nil {
		return ""
	}
	return t.Name
}

func (t *Type) GetShape() Shape {
	if t == nil {
		return ""
	}
	return t.Shape
}

func (t *Type) GetExtraProperties() map[string]interface{} {
	return t.extraProperties
}

func (t *Type) UnmarshalJSON(data []byte) error {
	type unmarshaler Type
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*t = Type(value)

	extraProperties, err := internal.ExtractExtraProperties(data, *t)
	if err != nil {
		return err
	}
	t.extraProperties = extraProperties

	t._rawJSON = json.RawMessage(data)
	return nil
}

func (t *Type) String() string {
	if len(t._rawJSON) > 0 {
		if value, err := internal.StringifyJSON(t._rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(t); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", t)
}

type Word = string
