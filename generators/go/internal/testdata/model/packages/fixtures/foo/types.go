// This file was auto-generated by Fern from our API Definition.

package foo

import (
	json "encoding/json"
	fmt "fmt"
	fixtures "github.com/fern-api/fern-go/internal/testdata/model/packages/fixtures"
	core "github.com/fern-api/fern-go/internal/testdata/model/packages/fixtures/core"
)

type Foo struct {
	Foo *fixtures.Foo `json:"foo,omitempty" url:"foo,omitempty"`

	extraProperties map[string]interface{}
}

func (f *Foo) GetFoo() *fixtures.Foo {
	if f == nil {
		return nil
	}
	return f.Foo
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
