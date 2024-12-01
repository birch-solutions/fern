// This file was auto-generated by Fern from our API Definition.

package stream

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/fern-api/stream-go/v2/internal"
)

type Generateequest struct {
	NumEvents int `json:"num_events" url:"-"`
	stream    bool
}

func (g *Generateequest) Stream() bool {
	return g.stream
}

func (g *Generateequest) UnmarshalJSON(data []byte) error {
	type unmarshaler Generateequest
	var body unmarshaler
	if err := json.Unmarshal(data, &body); err != nil {
		return err
	}
	*g = Generateequest(body)
	g.stream = false
	return nil
}

func (g *Generateequest) MarshalJSON() ([]byte, error) {
	type embed Generateequest
	var marshaler = struct {
		embed
		Stream bool `json:"stream"`
	}{
		embed:  embed(*g),
		Stream: false,
	}
	return json.Marshal(marshaler)
}

type GenerateStreamRequest struct {
	NumEvents int `json:"num_events" url:"-"`
	stream    bool
}

func (g *GenerateStreamRequest) Stream() bool {
	return g.stream
}

func (g *GenerateStreamRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler GenerateStreamRequest
	var body unmarshaler
	if err := json.Unmarshal(data, &body); err != nil {
		return err
	}
	*g = GenerateStreamRequest(body)
	g.stream = true
	return nil
}

func (g *GenerateStreamRequest) MarshalJSON() ([]byte, error) {
	type embed GenerateStreamRequest
	var marshaler = struct {
		embed
		Stream bool `json:"stream"`
	}{
		embed:  embed(*g),
		Stream: true,
	}
	return json.Marshal(marshaler)
}

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
	extraProperties, err := internal.ExtractExtraProperties(data, *s)
	if err != nil {
		return err
	}
	s.extraProperties = extraProperties
	return nil
}

func (s *StreamResponse) String() string {
	if value, err := internal.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}
