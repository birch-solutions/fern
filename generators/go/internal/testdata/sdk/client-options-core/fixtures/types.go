// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/client-options-core/fixtures/core"
)

type WithAuthToken struct {
	Value string `json:"value" url:"value"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (w *WithAuthToken) GetValue() string {
	if w == nil {
		return ""
	}
	return w.Value
}

func (w *WithAuthToken) GetExtraProperties() map[string]interface{} {
	return w.extraProperties
}

func (w *WithAuthToken) UnmarshalJSON(data []byte) error {
	type unmarshaler WithAuthToken
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*w = WithAuthToken(value)

	extraProperties, err := core.ExtractExtraProperties(data, *w)
	if err != nil {
		return err
	}
	w.extraProperties = extraProperties

	w._rawJSON = json.RawMessage(data)
	return nil
}

func (w *WithAuthToken) String() string {
	if len(w._rawJSON) > 0 {
		if value, err := core.StringifyJSON(w._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(w); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", w)
}
