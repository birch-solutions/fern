// This file was auto-generated by Fern from our API Definition.

package commons

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/objects-with-imports/fern/core"
)

type Metadata struct {
	Id   string            `json:"id" url:"id"`
	Data map[string]string `json:"data,omitempty" url:"data,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (m *Metadata) GetExtraProperties() map[string]interface{} {
	return m.extraProperties
}

func (m *Metadata) UnmarshalJSON(data []byte) error {
	type unmarshaler Metadata
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*m = Metadata(value)

	extraProperties, err := core.ExtractExtraProperties(data, *m)
	if err != nil {
		return err
	}
	m.extraProperties = extraProperties

	m._rawJSON = json.RawMessage(data)
	return nil
}

func (m *Metadata) String() string {
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
