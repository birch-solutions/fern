// This file was auto-generated by Fern from our API Definition.

package pagination

import (
	json "encoding/json"
	fmt "fmt"
	uuid "github.com/google/uuid"
	core "github.com/pagination/fern/core"
)

type UsernameCursor struct {
	Cursor *UsernamePage `json:"cursor" url:"cursor"`

	extraProperties map[string]interface{}
}

func (u *UsernameCursor) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *UsernameCursor) UnmarshalJSON(data []byte) error {
	type unmarshaler UsernameCursor
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UsernameCursor(value)

	extraProperties, err := core.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties

	return nil
}

func (u *UsernameCursor) String() string {
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}

type ListUsersExtendedResponse struct {
	Data *UserListContainer `json:"data" url:"data"`
	Next *uuid.UUID         `json:"next,omitempty" url:"next,omitempty"`
	// The totall number of /users
	TotalCount int `json:"total_count" url:"total_count"`

	extraProperties map[string]interface{}
}

func (l *ListUsersExtendedResponse) GetExtraProperties() map[string]interface{} {
	return l.extraProperties
}

func (l *ListUsersExtendedResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler ListUsersExtendedResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*l = ListUsersExtendedResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *l)
	if err != nil {
		return err
	}
	l.extraProperties = extraProperties

	return nil
}

func (l *ListUsersExtendedResponse) String() string {
	if value, err := core.StringifyJSON(l); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", l)
}

type ListUsersPaginationResponse struct {
	Page *Page `json:"page,omitempty" url:"page,omitempty"`
	// The totall number of /users
	TotalCount int     `json:"total_count" url:"total_count"`
	Data       []*User `json:"data" url:"data"`

	extraProperties map[string]interface{}
}

func (l *ListUsersPaginationResponse) GetExtraProperties() map[string]interface{} {
	return l.extraProperties
}

func (l *ListUsersPaginationResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler ListUsersPaginationResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*l = ListUsersPaginationResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *l)
	if err != nil {
		return err
	}
	l.extraProperties = extraProperties

	return nil
}

func (l *ListUsersPaginationResponse) String() string {
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
	Results []string `json:"results" url:"results"`

	extraProperties map[string]interface{}
}

func (u *UsernameContainer) GetExtraProperties() map[string]interface{} {
	return u.extraProperties
}

func (u *UsernameContainer) UnmarshalJSON(data []byte) error {
	type unmarshaler UsernameContainer
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*u = UsernameContainer(value)

	extraProperties, err := core.ExtractExtraProperties(data, *u)
	if err != nil {
		return err
	}
	u.extraProperties = extraProperties

	return nil
}

func (u *UsernameContainer) String() string {
	if value, err := core.StringifyJSON(u); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", u)
}

type WithCursor struct {
	Cursor *string `json:"cursor,omitempty" url:"cursor,omitempty"`

	extraProperties map[string]interface{}
}

func (w *WithCursor) GetExtraProperties() map[string]interface{} {
	return w.extraProperties
}

func (w *WithCursor) UnmarshalJSON(data []byte) error {
	type unmarshaler WithCursor
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*w = WithCursor(value)

	extraProperties, err := core.ExtractExtraProperties(data, *w)
	if err != nil {
		return err
	}
	w.extraProperties = extraProperties

	return nil
}

func (w *WithCursor) String() string {
	if value, err := core.StringifyJSON(w); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", w)
}

type WithPage struct {
	Page *int `json:"page,omitempty" url:"page,omitempty"`

	extraProperties map[string]interface{}
}

func (w *WithPage) GetExtraProperties() map[string]interface{} {
	return w.extraProperties
}

func (w *WithPage) UnmarshalJSON(data []byte) error {
	type unmarshaler WithPage
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*w = WithPage(value)

	extraProperties, err := core.ExtractExtraProperties(data, *w)
	if err != nil {
		return err
	}
	w.extraProperties = extraProperties

	return nil
}

func (w *WithPage) String() string {
	if value, err := core.StringifyJSON(w); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", w)
}
