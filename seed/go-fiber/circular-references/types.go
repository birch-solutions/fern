// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/circular-references/fern/internal"
)

type ImportingA struct {
	A *A `json:"a,omitempty" url:"a,omitempty"`

	extraProperties map[string]interface{}
}

func (i *ImportingA) GetA() *A {
	if i == nil {
		return nil
	}
	return i.A
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

	extraProperties, err := internal.ExtractExtraProperties(data, *i)
	if err != nil {
		return err
	}
	i.extraProperties = extraProperties

	return nil
}

func (i *ImportingA) String() string {
	if value, err := internal.StringifyJSON(i); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", i)
}

type RootType struct {
	S string `json:"s" url:"s"`

	extraProperties map[string]interface{}
}

func (r *RootType) GetS() string {
	if r == nil {
		return ""
	}
	return r.S
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

	extraProperties, err := internal.ExtractExtraProperties(data, *r)
	if err != nil {
		return err
	}
	r.extraProperties = extraProperties

	return nil
}

func (r *RootType) String() string {
	if value, err := internal.StringifyJSON(r); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", r)
}
