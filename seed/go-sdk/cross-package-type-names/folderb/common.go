// This file was auto-generated by Fern from our API Definition.

package folderb

import (
	json "encoding/json"
	fmt "fmt"
	folderc "github.com/cross-package-type-names/fern/folderc"
	internal "github.com/cross-package-type-names/fern/internal"
)

type Foo struct {
	Foo *folderc.Foo `json:"foo,omitempty" url:"foo,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (f *Foo) GetFoo() *folderc.Foo {
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

	extraProperties, err := internal.ExtractExtraProperties(data, *f)
	if err != nil {
		return err
	}
	f.extraProperties = extraProperties

	f._rawJSON = json.RawMessage(data)
	return nil
}

func (f *Foo) String() string {
	if len(f._rawJSON) > 0 {
		if value, err := internal.StringifyJSON(f._rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(f); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", f)
}
