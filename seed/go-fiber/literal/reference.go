// This file was auto-generated by Fern from our API Definition.

package literal

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/literal/fern/core"
)

type SendRequest struct {
	Query        string       `json:"query" url:"query"`
	Context      SomeLiteral  `json:"context,omitempty" url:"context,omitempty"`
	MaybeContext *SomeLiteral `json:"maybeContext,omitempty" url:"maybeContext,omitempty"`
	prompt       string
	stream       bool

	extraProperties map[string]interface{}
}

func (s *SendRequest) GetExtraProperties() map[string]interface{} {
	return s.extraProperties
}

func (s *SendRequest) Prompt() string {
	return s.prompt
}

func (s *SendRequest) Stream() bool {
	return s.stream
}

func (s *SendRequest) UnmarshalJSON(data []byte) error {
	type embed SendRequest
	var unmarshaler = struct {
		embed
	}{
		embed: embed(*s),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*s = SendRequest(unmarshaler.embed)
	s.prompt = "You are a helpful assistant"
	s.stream = false

	extraProperties, err := core.ExtractExtraProperties(data, *s, "prompt", "stream")
	if err != nil {
		return err
	}
	s.extraProperties = extraProperties

	return nil
}

func (s *SendRequest) MarshalJSON() ([]byte, error) {
	type embed SendRequest
	var marshaler = struct {
		embed
		Prompt string `json:"prompt"`
		Stream bool   `json:"stream"`
	}{
		embed:  embed(*s),
		Prompt: "You are a helpful assistant",
		Stream: false,
	}
	return json.Marshal(marshaler)
}

func (s *SendRequest) String() string {
	if value, err := core.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}
