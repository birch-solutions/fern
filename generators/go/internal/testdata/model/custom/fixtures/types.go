// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/fern-api/fern-go/internal/testdata/model/custom/fixtures/core"
	uuid "github.com/google/uuid"
)

type Bar struct {
	// This is a Foo field.
	Foo *Foo `json:"foo,omitempty" url:"foo,omitempty"`

	extraProperties map[string]interface{}
}

func (b *Bar) GetFoo() *Foo {
	if b == nil {
		return nil
	}
	return b.Foo
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

// This is a Foo.
type Foo struct {
	Id   uuid.UUID `json:"id" url:"id"`
	Name string    `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (f *Foo) GetId() uuid.UUID {
	if f == nil {
		return uuid.UUID{}
	}
	return f.Id
}

func (f *Foo) GetName() string {
	if f == nil {
		return ""
	}
	return f.Name
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
