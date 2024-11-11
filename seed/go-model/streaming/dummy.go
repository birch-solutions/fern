// This file was auto-generated by Fern from our API Definition.

package stream

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/fern-api/stream-go/v2/core"
)

type StreamResponse struct {
	Id   string  `json:"id" url:"id"`
	Name *string `json:"name,omitempty" url:"name,omitempty"`

	extraProperties map[string]interface{}
}

func (s *StreamResponse) GetId() string {
	if s == nil {
		return ""
	}
	return s.Id
}

func (s *StreamResponse) GetName() *string {
	if s == nil {
		return nil
	}
	return s.Name
}

func (s *StreamResponse) GetExtraProperties() map[string]interface{} {
	return s.extraProperties
}

func (s *StreamResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler StreamResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*s = StreamResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *s)
	if err != nil {
		return err
	}
	s.extraProperties = extraProperties

	return nil
}

func (s *StreamResponse) String() string {
	if value, err := core.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}
