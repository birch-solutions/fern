// This file was auto-generated by Fern from our API Definition.

package serversentevents

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/server-sent-events/fern/internal"
)

type StreamCompletionRequest struct {
	Query string `json:"query" url:"-"`
}

type StreamedCompletion struct {
	Delta  string `json:"delta" url:"delta"`
	Tokens *int   `json:"tokens,omitempty" url:"tokens,omitempty"`

	extraProperties map[string]interface{}
}

func (s *StreamedCompletion) GetDelta() string {
	if s == nil {
		return ""
	}
	return s.Delta
}

func (s *StreamedCompletion) GetTokens() *int {
	if s == nil {
		return nil
	}
	return s.Tokens
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
	extraProperties, err := internal.ExtractExtraProperties(data, *s)
	if err != nil {
		return err
	}
	s.extraProperties = extraProperties
	return nil
}

func (s *StreamedCompletion) String() string {
	if value, err := internal.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}
