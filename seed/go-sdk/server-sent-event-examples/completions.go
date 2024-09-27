// This file was auto-generated by Fern from our API Definition.

package serversentevents

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/server-sent-event-examples/fern/core"
)

type StreamCompletionRequest struct {
	Query string `json:"query" url:"-"`
}

type StreamedCompletion struct {
	Delta  string `json:"delta" url:"delta"`
	Tokens *int   `json:"tokens,omitempty" url:"tokens,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (s *StreamedCompletion) GetExtraProperties() map[string]interface{} {
	return s.extraProperties
}

func (s *StreamedCompletion) UnmarshalJSON(data []byte) error {
	type unmarshaler StreamedCompletion
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*s = StreamedCompletion(value)

	extraProperties, err := core.ExtractExtraProperties(data, *s)
	if err != nil {
		return err
	}
	s.extraProperties = extraProperties

	s._rawJSON = json.RawMessage(data)
	return nil
}

func (s *StreamedCompletion) String() string {
	if len(s._rawJSON) > 0 {
		if value, err := core.StringifyJSON(s._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}
