// This file was auto-generated by Fern from our API Definition.

package exhaustive

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/exhaustive/fern/core"
)

type BadObjectRequestInfo struct {
	Message string `json:"message" url:"message"`

	extraProperties map[string]interface{}
}

func (b *BadObjectRequestInfo) GetExtraProperties() map[string]interface{} {
	return b.extraProperties
}

func (b *BadObjectRequestInfo) UnmarshalJSON(data []byte) error {
	type unmarshaler BadObjectRequestInfo
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*b = BadObjectRequestInfo(value)

	extraProperties, err := core.ExtractExtraProperties(data, *b)
	if err != nil {
		return err
	}
	b.extraProperties = extraProperties

	return nil
}

func (b *BadObjectRequestInfo) String() string {
	if value, err := core.StringifyJSON(b); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", b)
}
