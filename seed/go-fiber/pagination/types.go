// This file was auto-generated by Fern from our API Definition.

package pagination

import (
	fmt "fmt"
	uuid "github.com/google/uuid"
	core "github.com/pagination/fern/core"
)

type UsernamePage struct {
	After *string  `json:"after,omitempty" url:"after,omitempty"`
	Data  []string `json:"data,omitempty" url:"data,omitempty"`
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
}

func (u *User) String() string {
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}

type UserListContainer struct {
	Users []*User `json:"users,omitempty" url:"users,omitempty"`
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
}

func (u *UserPage) String() string {
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}
