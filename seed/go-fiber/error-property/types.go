// This file was auto-generated by Fern from our API Definition.

package errorproperty

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/error-property/fern/core"
)

type PropertyBasedErrorTestBody struct {
	Message string `json:"message" url:"message"`

	extraProperties map[string]interface{}
}

func (p *PropertyBasedErrorTestBody) GetExtraProperties() map[string]interface{} {
	return p.extraProperties
}

func (p *PropertyBasedErrorTestBody) UnmarshalJSON(data []byte) error {
	type unmarshaler PropertyBasedErrorTestBody
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*p = PropertyBasedErrorTestBody(value)

	extraProperties, err := core.ExtractExtraProperties(data, *p)
	if err != nil {
		return err
	}
	p.extraProperties = extraProperties

	return nil
}

func (p *PropertyBasedErrorTestBody) String() string {
	if value, err := core.StringifyJSON(p); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", p)
}
