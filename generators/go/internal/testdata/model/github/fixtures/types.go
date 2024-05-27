// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	bar "github.com/example/repository/bar"
	core "github.com/example/repository/core"
	uuid "github.com/google/uuid"
)

type Foo struct {
	Name string    `json:"name" url:"name"`
	Bar  *bar.Bar  `json:"bar,omitempty" url:"bar,omitempty"`
	Uuid uuid.UUID `json:"uuid" url:"uuid"`

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
