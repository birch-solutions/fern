// This file was auto-generated by Fern from our API Definition.

package folderc

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/cross-package-type-names/fern/internal"
	uuid "github.com/google/uuid"
)

type Foo struct {
	BarProperty uuid.UUID `json:"bar_property" url:"bar_property"`

	extraProperties map[string]interface{}
	rawJSON         json.RawMessage
}

func (f *Foo) GetBarProperty() uuid.UUID {
	if f == nil {
		return uuid.UUID{}
	}
	return f.BarProperty
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
	f.rawJSON = json.RawMessage(data)
	return nil
}

func (f *Foo) String() string {
	if len(f.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(f.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(f); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", f)
}
