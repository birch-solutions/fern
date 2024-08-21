// This file was auto-generated by Fern from our API Definition.

package folderb

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/cross-package-type-names/fern/core"
	folderc "github.com/cross-package-type-names/fern/folderc"
)

type Foo struct {
	Foo *folderc.Foo `json:"foo,omitempty" url:"foo,omitempty"`

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
