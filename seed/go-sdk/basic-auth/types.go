// This file was auto-generated by Fern from our API Definition.

package basicauth

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/basic-auth/fern/internal"
)

type UnauthorizedRequestErrorBody struct {
	Message string `json:"message" url:"message"`

	extraProperties map[string]interface{}
	rawJSON         json.RawMessage
}

func (u *UnauthorizedRequestErrorBody) GetMessage() string {
	if u == nil {
		return ""
	}
	return u.Message
}

func (u *UnauthorizedRequestErrorBody) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *UnauthorizedRequestErrorBody) UnmarshalJSON(data []byte) error {
	type unmarshaler UnauthorizedRequestErrorBody
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UnauthorizedRequestErrorBody(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties
	u.rawJSON = json.RawMessage(data)
	return nil
}

func (u *UnauthorizedRequestErrorBody) String() string {
	if len(u.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(u.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}
