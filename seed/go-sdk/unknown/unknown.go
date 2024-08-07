// This file was auto-generated by Fern from our API Definition.

package unknownasany

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/unknown/fern/core"
)

type MyObject struct {
	Unknown interface{} `json:"unknown" url:"unknown"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (m *MyObject) GetExtraProperties() map[string]interface{} {
	return m.extraProperties
}

func (m *MyObject) UnmarshalJSON(data []byte) error {
	type unmarshaler MyObject
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*m = MyObject(value)

	extraProperties, err := core.ExtractExtraProperties(data, *m)
	if err != nil {
		return err
	}
	m.extraProperties = extraProperties

	m._rawJSON = json.RawMessage(data)
	return nil
}

func (m *MyObject) String() string {
	if len(m._rawJSON) > 0 {
		if value, err := core.StringifyJSON(m._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(m); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", m)
}
