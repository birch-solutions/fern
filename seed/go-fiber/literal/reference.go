// This file was auto-generated by Fern from our API Definition.

package literal

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/literal/fern/core"
)

type ContainerObject struct {
	NestedObjects []*NestedObjectWithLiterals `json:"nestedObjects,omitempty" url:"nestedObjects,omitempty"`

	extraProperties map[string]interface{}
}

func (c *ContainerObject) GetNestedObjects() []*NestedObjectWithLiterals {
	if c == nil {
		return nil
	}
	return c.NestedObjects
}

func (c *ContainerObject) GetExtraProperties() map[string]interface{} {
	return c.extraProperties
}

func (c *ContainerObject) UnmarshalJSON(data []byte) error {
	type unmarshaler ContainerObject
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = ContainerObject(value)

	extraProperties, err := core.ExtractExtraProperties(data, *c)
	if err != nil {
		return err
	}
	c.extraProperties = extraProperties

	return nil
}

func (c *ContainerObject) String() string {
	if value, err := core.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}

type NestedObjectWithLiterals struct {
	StrProp  string `json:"strProp" url:"strProp"`
	literal1 string
	literal2 string

	extraProperties map[string]interface{}
}

func (n *NestedObjectWithLiterals) GetStrProp() string {
	if n == nil {
		return ""
	}
	return n.StrProp
}

func (n *NestedObjectWithLiterals) Literal1() string {
	return n.literal1
}

func (n *NestedObjectWithLiterals) Literal2() string {
	return n.literal2
}

func (n *NestedObjectWithLiterals) GetExtraProperties() map[string]interface{} {
	return n.extraProperties
}

func (n *NestedObjectWithLiterals) UnmarshalJSON(data []byte) error {
	type embed NestedObjectWithLiterals
	var unmarshaler = struct {
		embed
		Literal1 string `json:"literal1"`
		Literal2 string `json:"literal2"`
	}{
		embed: embed(*n),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*n = NestedObjectWithLiterals(unmarshaler.embed)
	if unmarshaler.Literal1 != "literal1" {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", n, "literal1", unmarshaler.Literal1)
	}
	n.literal1 = unmarshaler.Literal1
	if unmarshaler.Literal2 != "literal2" {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", n, "literal2", unmarshaler.Literal2)
	}
	n.literal2 = unmarshaler.Literal2

	extraProperties, err := core.ExtractExtraProperties(data, *n, "literal1", "literal2")
	if err != nil {
		return err
	}
	n.extraProperties = extraProperties

	return nil
}

func (n *NestedObjectWithLiterals) MarshalJSON() ([]byte, error) {
	type embed NestedObjectWithLiterals
	var marshaler = struct {
		embed
		Literal1 string `json:"literal1"`
		Literal2 string `json:"literal2"`
	}{
		embed:    embed(*n),
		Literal1: "literal1",
		Literal2: "literal2",
	}
	return json.Marshal(marshaler)
}

func (n *NestedObjectWithLiterals) String() string {
	if value, err := core.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}

type SendRequest struct {
	Query           string           `json:"query" url:"query"`
	Context         SomeLiteral      `json:"context,omitempty" url:"context,omitempty"`
	MaybeContext    *SomeLiteral     `json:"maybeContext,omitempty" url:"maybeContext,omitempty"`
	ContainerObject *ContainerObject `json:"containerObject,omitempty" url:"containerObject,omitempty"`
	prompt          string
	stream          bool

	extraProperties map[string]interface{}
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

type SomeLiteral = string
