// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/fern-api/fern-go/internal/testdata/sdk/client-options-filename/fixtures/internal"
)

type ClientOptions struct {
	Value string `json:"value" url:"value"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (c *ClientOptions) GetValue() string {
	if c == nil {
		return ""
	}
	return c.Value
}

func (c *ClientOptions) GetExtraProperties() map[string]interface{} {
	return c.extraProperties
}

func (c *ClientOptions) UnmarshalJSON(data []byte) error {
	type unmarshaler ClientOptions
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = ClientOptions(value)

	extraProperties, err := internal.ExtractExtraProperties(data, *c)
	if err != nil {
		return err
	}
	c.extraProperties = extraProperties

	c._rawJSON = json.RawMessage(data)
	return nil
}

func (c *ClientOptions) String() string {
	if len(c._rawJSON) > 0 {
		if value, err := internal.StringifyJSON(c._rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}
