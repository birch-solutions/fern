// This file was auto-generated by Fern from our API Definition.

package license

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/license/fern/core"
)

// A simple type with just a name.
type Type struct {
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (t *Type) GetName() string {
	if t == nil {
		return ""
	}
	return t.Name
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

	extraProperties, err := core.ExtractExtraProperties(data, *t)
	if err != nil {
		return err
	}
	t.extraProperties = extraProperties

	t._rawJSON = json.RawMessage(data)
	return nil
}

func (t *Type) String() string {
	if len(t._rawJSON) > 0 {
		if value, err := core.StringifyJSON(t._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(t); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", t)
}
