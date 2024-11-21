// This file was auto-generated by Fern from our API Definition.

package events

import (
	json "encoding/json"
	fmt "fmt"
	fern "github.com/mixed-file-directory/fern"
	internal "github.com/mixed-file-directory/fern/internal"
)

type GetEventMetadataRequest struct {
	Id fern.Id `json:"-" url:"id"`
}

type Metadata struct {
	Id    fern.Id     `json:"id" url:"id"`
	Value interface{} `json:"value,omitempty" url:"value,omitempty"`

	extraProperties map[string]interface{}
	rawJSON         json.RawMessage
}

func (m *Metadata) GetId() fern.Id {
	if m == nil {
		return ""
	}
	return m.Id
}

func (m *Metadata) GetValue() interface{} {
	if m == nil {
		return nil
	}
	return m.Value
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
	extraProperties, err := internal.ExtractExtraProperties(data, *m)
	if err != nil {
		return err
	}
	m.extraProperties = extraProperties
	m.rawJSON = json.RawMessage(data)
	return nil
}

func (m *Metadata) String() string {
	if len(m.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(m.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(m); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", m)
}
