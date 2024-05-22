// This file was auto-generated by Fern from our API Definition.

package pagination

import (
	json "encoding/json"
	fmt "fmt"
	uuid "github.com/google/uuid"
	core "github.com/pagination/fern/core"
)

type UsernamePage struct {
	After *string  `json:"after,omitempty" url:"after,omitempty"`
	Data  []string `json:"data,omitempty" url:"data,omitempty"`

	extraProperties map[string]interface{}
}

func (u *UsernamePage) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *UsernamePage) UnmarshalJSON(data []byte) error {
	type unmarshaler UsernamePage
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UsernamePage(value)

	extraProperties, err := core.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties

	return nil
}

func (u *UsernamePage) String() string {
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}

type NextPage struct {
	Page          int    `json:"page" url:"page"`
	StartingAfter string `json:"starting_after" url:"starting_after"`

	extraProperties map[string]interface{}
}

func (n *NextPage) GetExtraProperties() map[string]interface{} {
	return n.extraProperties
}

func (n *NextPage) UnmarshalJSON(data []byte) error {
	type unmarshaler NextPage
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*n = NextPage(value)

	extraProperties, err := core.ExtractExtraProperties(data, *n)
	if err != nil {
		return err
	}
	n.extraProperties = extraProperties

	return nil
}

func (n *NextPage) String() string {
	if value, err := core.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}

type Page struct {
	// The current page
	Page      int       `json:"page" url:"page"`
	Next      *NextPage `json:"next,omitempty" url:"next,omitempty"`
	PerPage   int       `json:"per_page" url:"per_page"`
	TotalPage int       `json:"total_page" url:"total_page"`

	extraProperties map[string]interface{}
}

func (p *Page) GetExtraProperties() map[string]interface{} {
	return p.extraProperties
}

func (p *Page) UnmarshalJSON(data []byte) error {
	type unmarshaler Page
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*p = Page(value)

	extraProperties, err := core.ExtractExtraProperties(data, *p)
	if err != nil {
		return err
	}
	p.extraProperties = extraProperties

	return nil
}

func (p *Page) String() string {
	if value, err := core.StringifyJSON(p); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", p)
}

type User struct {
	Name string `json:"name" url:"name"`
	Id   int    `json:"id" url:"id"`

	extraProperties map[string]interface{}
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

	extraProperties, err := core.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties

	return nil
}

func (u *User) String() string {
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}

type UserListContainer struct {
	Users []*User `json:"users,omitempty" url:"users,omitempty"`

	extraProperties map[string]interface{}
}

func (u *UserListContainer) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *UserListContainer) UnmarshalJSON(data []byte) error {
	type unmarshaler UserListContainer
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UserListContainer(value)

	extraProperties, err := core.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties

	return nil
}

func (u *UserListContainer) String() string {
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}

type UserPage struct {
	Data *UserListContainer `json:"data,omitempty" url:"data,omitempty"`
	Next *uuid.UUID         `json:"next,omitempty" url:"next,omitempty"`

	extraProperties map[string]interface{}
}

func (u *UserPage) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *UserPage) UnmarshalJSON(data []byte) error {
	type unmarshaler UserPage
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UserPage(value)

	extraProperties, err := core.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties

	return nil
}

func (u *UserPage) String() string {
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}
