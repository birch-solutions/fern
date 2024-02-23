// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/imdb/fern/core"
)

type CreateMovieRequest struct {
	Title  string  `json:"title" url:"title"`
	Rating float64 `json:"rating" url:"rating"`

	_rawJSON json.RawMessage
}

func (c *CreateMovieRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler CreateMovieRequest
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = CreateMovieRequest(value)
	c._rawJSON = json.RawMessage(data)
	return nil
}

func (c *CreateMovieRequest) String() string {
	if len(c._rawJSON) > 0 {
		if value, err := core.StringifyJSON(c._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}

type Movie struct {
	Id    MovieId `json:"id" url:"id"`
	Title string  `json:"title" url:"title"`
	// The rating scale is one to five stars
	Rating float64 `json:"rating" url:"rating"`

	_rawJSON json.RawMessage
}

func (m *Movie) UnmarshalJSON(data []byte) error {
	type unmarshaler Movie
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*m = Movie(value)
	m._rawJSON = json.RawMessage(data)
	return nil
}

func (m *Movie) String() string {
	if len(m._rawJSON) > 0 {
		if value, err := core.StringifyJSON(m._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(m); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", m)
}

type MovieId = string
