// This file was auto-generated by Fern from our API Definition.

package events

import (
	json "encoding/json"
	fmt "fmt"
	fern "github.com/mixed-file-directory/fern"
	core "github.com/mixed-file-directory/fern/core"
)

type GetEventMetadataRequest struct {
	Id fern.Id `json:"-" url:"id"`
}

type Metadata struct {
	Id    fern.Id     `json:"id" url:"id"`
	Value interface{} `json:"value,omitempty" url:"value,omitempty"`

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
