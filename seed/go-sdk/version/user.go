// This file was auto-generated by Fern from our API Definition.

package version

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/version/fern/internal"
)

type User struct {
	Id   UserId `json:"id" url:"id"`
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (u *User) GetId() UserId {
	if u == nil {
		return ""
	}
	return u.Id
}

func (u *User) GetName() string {
	if u == nil {
		return ""
	}
	return u.Name
}

func (u *User) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *User) UnmarshalJSON(data []byte) error {
	type unmarshaler User
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = User(value)

	extraProperties, err := internal.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties

	u._rawJSON = json.RawMessage(data)
	return nil
}

func (u *User) String() string {
	if len(u._rawJSON) > 0 {
		if value, err := internal.StringifyJSON(u._rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}

type UserId = string
