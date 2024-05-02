// This file was auto-generated by Fern from our API Definition.

package multilinedocs

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/multi-line-docs/fern/core"
)

type CreateUserRequest struct {
	// The name of the user to create.
	// This name is unique to each user.
	Name string `json:"name" url:"name"`
	// The age of the user.
	// This propery is not required.
	Age *int `json:"age,omitempty" url:"age,omitempty"`
}

// A user object. This type is used throughout the following APIs:
//
// - createUser
// - getUser
type User struct {
	Id string `json:"id" url:"id"`
	// The user's name. This name is unique to each user. A few examples are included below:
	//
	// - Alice
	// - Bob
	// - Charlie
	Name string `json:"name" url:"name"`
	// The user's age.
	Age *int `json:"age,omitempty" url:"age,omitempty"`

	_rawJSON json.RawMessage
}

func (u *User) UnmarshalJSON(data []byte) error {
	type unmarshaler User
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = User(value)
	u._rawJSON = json.RawMessage(data)
	return nil
}

func (u *User) String() string {
	if len(u._rawJSON) > 0 {
		if value, err := core.StringifyJSON(u._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}
