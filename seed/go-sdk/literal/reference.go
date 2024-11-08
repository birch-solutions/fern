// This file was auto-generated by Fern from our API Definition.

package literal

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/literal/fern/core"
)

type SendRequest struct {
	Query           string           `json:"query" url:"query"`
	Context         SomeLiteral      `json:"context,omitempty" url:"context,omitempty"`
	MaybeContext    *SomeLiteral     `json:"maybeContext,omitempty" url:"maybeContext,omitempty"`
	ContainerObject *ContainerObject `json:"containerObject,omitempty" url:"containerObject,omitempty"`
	prompt          string
	stream          bool

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (s *SendRequest) GetQuery() string {
	if s == nil {
		return ""
	}
	return s.Query
}

func (s *SendRequest) GetContainerObject() *ContainerObject {
	if s == nil {
		return nil
	}
	return s.ContainerObject
}

func (s *SendRequest) Prompt() string {
	return s.prompt
}

func (s *SendRequest) Stream() bool {
	return s.stream
}

func (s *SendRequest) GetExtraProperties() map[string]interface{} {
	return s.extraProperties
}

func (s *SendRequest) UnmarshalJSON(data []byte) error {
	type embed SendRequest
	var unmarshaler = struct {
		embed
		Prompt string `json:"prompt"`
		Stream bool   `json:"stream"`
	}{
		embed: embed(*s),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*s = SendRequest(unmarshaler.embed)
	if unmarshaler.Prompt != "You are a helpful assistant" {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", s, "You are a helpful assistant", unmarshaler.Prompt)
	}
	s.prompt = unmarshaler.Prompt
	if unmarshaler.Stream != false {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", s, false, unmarshaler.Stream)
	}
	s.stream = unmarshaler.Stream

	extraProperties, err := core.ExtractExtraProperties(data, *s, "prompt", "stream")
	if err != nil {
		return err
	}
	s.extraProperties = extraProperties

	s._rawJSON = json.RawMessage(data)
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
