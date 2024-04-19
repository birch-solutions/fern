// This file was auto-generated by Fern from our API Definition.

package serversentevents

import (
	fmt "fmt"
	core "github.com/server-sent-events/fern/core"
)

type StreamedCompletion struct {
	Delta  string `json:"delta" url:"delta"`
	Tokens *int   `json:"tokens,omitempty" url:"tokens,omitempty"`
}

func (s *StreamedCompletion) String() string {
	if value, err := core.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}
