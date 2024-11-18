// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/fern-api/fern-go/internal/testdata/sdk/optional-core/fixtures/internal"
)

type Optional struct {
	Value string `json:"value" url:"value"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (o *Optional) GetValue() string {
	if o == nil {
		return ""
	}
	return o.Value
}

func (o *Optional) GetExtraProperties() map[string]interface{} {
	return o.extraProperties
}

func (o *Optional) UnmarshalJSON(data []byte) error {
	type unmarshaler Optional
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*o = Optional(value)

	extraProperties, err := internal.ExtractExtraProperties(data, *o)
	if err != nil {
		return err
	}
	o.extraProperties = extraProperties

	o._rawJSON = json.RawMessage(data)
	return nil
}

func (o *Optional) String() string {
	if len(o._rawJSON) > 0 {
		if value, err := internal.StringifyJSON(o._rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(o); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", o)
}
