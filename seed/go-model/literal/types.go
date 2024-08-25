// This file was auto-generated by Fern from our API Definition.

package literal

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/literal/fern/core"
)

type SendResponse struct {
	Message string `json:"message" url:"message"`
	Status  int    `json:"status" url:"status"`
	success bool

	extraProperties map[string]interface{}
}

func (s *SendResponse) GetExtraProperties() map[string]interface{} {
	return s.extraProperties
}

func (s *SendResponse) Success() bool {
	return s.success
}

func (s *SendResponse) UnmarshalJSON(data []byte) error {
	type embed SendResponse
	var unmarshaler = struct {
		embed
		Success bool `json:"success"`
	}{
		embed: embed(*s),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*s = SendResponse(unmarshaler.embed)
	if unmarshaler.Success != true {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", s, true, unmarshaler.Success)
	}
	s.success = unmarshaler.Success

	extraProperties, err := core.ExtractExtraProperties(data, *s, "success")
	if err != nil {
		return err
	}
	s.extraProperties = extraProperties

	return nil
}

func (s *SendResponse) MarshalJSON() ([]byte, error) {
	type embed SendResponse
	var marshaler = struct {
		embed
		Success bool `json:"success"`
	}{
		embed:   embed(*s),
		Success: true,
	}
	return json.Marshal(marshaler)
}

func (s *SendResponse) String() string {
	if value, err := core.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}

type SomeLiteral = string
