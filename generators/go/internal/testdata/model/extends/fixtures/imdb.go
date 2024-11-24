// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	internal "sdk/internal"
)

type Docs struct {
	Docs string `json:"docs" url:"docs"`

	extraProperties map[string]interface{}
}

func (d *Docs) GetDocs() string {
	if d == nil {
		return ""
	}
	return d.Docs
}

func (d *Docs) GetExtraProperties() map[string]interface{} {
	return d.extraProperties
}

func (d *Docs) UnmarshalJSON(data []byte) error {
	type unmarshaler Docs
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*d = Docs(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *d)
	if err != nil {
		return err
	}
	d.extraProperties = extraProperties
	return nil
}

func (d *Docs) String() string {
	if value, err := internal.StringifyJSON(d); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", d)
}

type ExampleType struct {
	Docs string `json:"docs" url:"docs"`
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (e *ExampleType) GetDocs() string {
	if e == nil {
		return ""
	}
	return e.Docs
}

func (e *ExampleType) GetName() string {
	if e == nil {
		return ""
	}
	return e.Name
}

func (e *ExampleType) GetExtraProperties() map[string]interface{} {
	return e.extraProperties
}

func (e *ExampleType) UnmarshalJSON(data []byte) error {
	type unmarshaler ExampleType
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*e = ExampleType(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *e)
	if err != nil {
		return err
	}
	e.extraProperties = extraProperties
	return nil
}

func (e *ExampleType) String() string {
	if value, err := internal.StringifyJSON(e); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", e)
}

type Json struct {
	Docs string `json:"docs" url:"docs"`
	Raw  string `json:"raw" url:"raw"`

	extraProperties map[string]interface{}
}

func (j *Json) GetDocs() string {
	if j == nil {
		return ""
	}
	return j.Docs
}

func (j *Json) GetRaw() string {
	if j == nil {
		return ""
	}
	return j.Raw
}

func (j *Json) GetExtraProperties() map[string]interface{} {
	return j.extraProperties
}

func (j *Json) UnmarshalJSON(data []byte) error {
	type unmarshaler Json
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*j = Json(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *j)
	if err != nil {
		return err
	}
	j.extraProperties = extraProperties
	return nil
}

func (j *Json) String() string {
	if value, err := internal.StringifyJSON(j); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", j)
}

type NestedType struct {
	Docs string `json:"docs" url:"docs"`
	Raw  string `json:"raw" url:"raw"`
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (n *NestedType) GetDocs() string {
	if n == nil {
		return ""
	}
	return n.Docs
}

func (n *NestedType) GetRaw() string {
	if n == nil {
		return ""
	}
	return n.Raw
}

func (n *NestedType) GetName() string {
	if n == nil {
		return ""
	}
	return n.Name
}

func (n *NestedType) GetExtraProperties() map[string]interface{} {
	return n.extraProperties
}

func (n *NestedType) UnmarshalJSON(data []byte) error {
	type unmarshaler NestedType
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*n = NestedType(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *n)
	if err != nil {
		return err
	}
	n.extraProperties = extraProperties
	return nil
}

func (n *NestedType) String() string {
	if value, err := internal.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}

type NestedUnion struct {
	Type string
	Docs string
	Raw  string
	One  *ExampleType
}

func NewNestedUnionFromOne(value *ExampleType) *NestedUnion {
	return &NestedUnion{Type: "one", One: value}
}

func (n *NestedUnion) GetType() string {
	if n == nil {
		return ""
	}
	return n.Type
}

func (n *NestedUnion) GetDocs() string {
	if n == nil {
		return ""
	}
	return n.Docs
}

func (n *NestedUnion) GetRaw() string {
	if n == nil {
		return ""
	}
	return n.Raw
}

func (n *NestedUnion) GetOne() *ExampleType {
	if n == nil {
		return nil
	}
	return n.One
}

func (n *NestedUnion) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
		Docs string `json:"docs" url:"docs"`
		Raw  string `json:"raw" url:"raw"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	n.Type = unmarshaler.Type
	n.Docs = unmarshaler.Docs
	n.Raw = unmarshaler.Raw
	if unmarshaler.Type == "" {
		return fmt.Errorf("%T did not include discriminant type", n)
	}
	switch unmarshaler.Type {
	case "one":
		value := new(ExampleType)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		n.One = value
	}
	return nil
}

func (n NestedUnion) MarshalJSON() ([]byte, error) {
	switch n.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", n.Type, n)
	case "one":
		return internal.MarshalJSONWithExtraProperty(n.One, "type", "one")
	}
}

type NestedUnionVisitor interface {
	VisitOne(*ExampleType) error
}

func (n *NestedUnion) Accept(visitor NestedUnionVisitor) error {
	switch n.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", n.Type, n)
	case "one":
		return visitor.VisitOne(n.One)
	}
}

type Union struct {
	Type string
	Docs string
	One  *ExampleType
}

func NewUnionFromOne(value *ExampleType) *Union {
	return &Union{Type: "one", One: value}
}

func (u *Union) GetType() string {
	if u == nil {
		return ""
	}
	return u.Type
}

func (u *Union) GetDocs() string {
	if u == nil {
		return ""
	}
	return u.Docs
}

func (u *Union) GetOne() *ExampleType {
	if u == nil {
		return nil
	}
	return u.One
}

func (u *Union) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
		Docs string `json:"docs" url:"docs"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	u.Docs = unmarshaler.Docs
	if unmarshaler.Type == "" {
		return fmt.Errorf("%T did not include discriminant type", u)
	}
	switch unmarshaler.Type {
	case "one":
		value := new(ExampleType)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		u.One = value
	}
	return nil
}

func (u Union) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "one":
		return internal.MarshalJSONWithExtraProperty(u.One, "type", "one")
	}
}

type UnionVisitor interface {
	VisitOne(*ExampleType) error
}

func (u *Union) Accept(visitor UnionVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "one":
		return visitor.VisitOne(u.One)
	}
}
