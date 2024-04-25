// This file was auto-generated by Fern from our API Definition.

package pagination

import (
	json "encoding/json"
	fmt "fmt"
	uuid "github.com/google/uuid"
	core "github.com/pagination/fern/core"
)

type ListUsernamesRequest struct {
	// The cursor used for pagination in order to fetch
	// the next page of results.
	StartingAfter *string `json:"-" url:"starting_after,omitempty"`
}

type ListUsersCursorPaginationRequest struct {
	// Defaults to first page
	Page *int `json:"-" url:"page,omitempty"`
	// Defaults to per page
	PerPage *int   `json:"-" url:"per_page,omitempty"`
	Order   *Order `json:"-" url:"order,omitempty"`
	// The cursor used for pagination in order to fetch
	// the next page of results.
	StartingAfter *string `json:"-" url:"starting_after,omitempty"`
}

type ListUsersExtendedRequest struct {
	Cursor *uuid.UUID `json:"-" url:"cursor,omitempty"`
}

type ListWithGlobalConfigRequest struct {
	Offset *int `json:"-" url:"offset,omitempty"`
}

type ListUsersOffsetPaginationRequest struct {
	// Defaults to first page
	Page *int `json:"-" url:"page,omitempty"`
	// Defaults to per page
	PerPage *int   `json:"-" url:"per_page,omitempty"`
	Order   *Order `json:"-" url:"order,omitempty"`
	// The cursor used for pagination in order to fetch
	// the next page of results.
	StartingAfter *string `json:"-" url:"starting_after,omitempty"`
}

type UsernameCursor struct {
	Cursor *UsernamePage `json:"cursor,omitempty" url:"cursor,omitempty"`

	_rawJSON json.RawMessage
}

func (u *UsernameCursor) UnmarshalJSON(data []byte) error {
	type unmarshaler UsernameCursor
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UsernameCursor(value)
	u._rawJSON = json.RawMessage(data)
	return nil
}

func (u *UsernameCursor) String() string {
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

type ListUsersExtendedResponse struct {
	Data *UserListContainer `json:"data,omitempty" url:"data,omitempty"`
	Next *uuid.UUID         `json:"next,omitempty" url:"next,omitempty"`
	// The totall number of /users
	TotalCount int `json:"total_count" url:"total_count"`

	_rawJSON json.RawMessage
}

func (l *ListUsersExtendedResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler ListUsersExtendedResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*l = ListUsersExtendedResponse(value)
	l._rawJSON = json.RawMessage(data)
	return nil
}

func (l *ListUsersExtendedResponse) String() string {
	if len(l._rawJSON) > 0 {
		if value, err := core.StringifyJSON(l._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(l); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", l)
}

type ListUsersPaginationResponse struct {
	Page *Page `json:"page,omitempty" url:"page,omitempty"`
	// The totall number of /users
	TotalCount int     `json:"total_count" url:"total_count"`
	Data       []*User `json:"data,omitempty" url:"data,omitempty"`

	_rawJSON json.RawMessage
}

func (l *ListUsersPaginationResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler ListUsersPaginationResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*l = ListUsersPaginationResponse(value)
	l._rawJSON = json.RawMessage(data)
	return nil
}

func (l *ListUsersPaginationResponse) String() string {
	if len(l._rawJSON) > 0 {
		if value, err := core.StringifyJSON(l._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(l); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", l)
}

type Order string

const (
	OrderAsc  Order = "asc"
	OrderDesc Order = "desc"
)

func NewOrderFromString(s string) (Order, error) {
	switch s {
	case "asc":
		return OrderAsc, nil
	case "desc":
		return OrderDesc, nil
	}
	var t Order
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (o Order) Ptr() *Order {
	return &o
}

type UsernameContainer struct {
	Results []string `json:"results,omitempty" url:"results,omitempty"`

	_rawJSON json.RawMessage
}

func (u *UsernameContainer) UnmarshalJSON(data []byte) error {
	type unmarshaler UsernameContainer
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UsernameContainer(value)
	u._rawJSON = json.RawMessage(data)
	return nil
}

func (u *UsernameContainer) String() string {
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
