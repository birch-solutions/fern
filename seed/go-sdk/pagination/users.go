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

type ListUsersBodyCursorPaginationRequest struct {
	// The object that contains the cursor used for pagination
	// in order to fetch the next page of results.
	Pagination *WithCursor `json:"pagination,omitempty" url:"-"`
}

type ListUsersBodyOffsetPaginationRequest struct {
	// The object that contains the offset used for pagination
	// in order to fetch the next page of results.
	Pagination *WithPage `json:"pagination,omitempty" url:"-"`
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

type ListUsersExtendedRequestForOptionalData struct {
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

type ListWithOffsetPaginationHasNextPageRequest struct {
	// Defaults to first page
	Page *int `json:"-" url:"page,omitempty"`
	// The maxiumum number of elements to return.
	// This is also used as the step size in this
	// paginated endpoint.
	Limit *int   `json:"-" url:"limit,omitempty"`
	Order *Order `json:"-" url:"order,omitempty"`
}

type ListUsersOffsetStepPaginationRequest struct {
	// Defaults to first page
	Page *int `json:"-" url:"page,omitempty"`
	// The maxiumum number of elements to return.
	// This is also used as the step size in this
	// paginated endpoint.
	Limit *int   `json:"-" url:"limit,omitempty"`
	Order *Order `json:"-" url:"order,omitempty"`
}

type UsernameCursor struct {
	Cursor *UsernamePage `json:"cursor,omitempty" url:"cursor,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (u *UsernameCursor) GetCursor() *UsernamePage {
	if u == nil {
		return nil
	}
	return u.Cursor
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

type ListUsersExtendedOptionalListResponse struct {
	Data *UserOptionalListContainer `json:"data,omitempty" url:"data,omitempty"`
	Next *uuid.UUID                 `json:"next,omitempty" url:"next,omitempty"`
	// The totall number of /users
	TotalCount int `json:"total_count" url:"total_count"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (l *ListUsersExtendedOptionalListResponse) GetData() *UserOptionalListContainer {
	if l == nil {
		return nil
	}
	return l.Data
}

func (l *ListUsersExtendedOptionalListResponse) GetNext() *uuid.UUID {
	if l == nil {
		return nil
	}
	return l.Next
}

func (l *ListUsersExtendedOptionalListResponse) GetTotalCount() int {
	if l == nil {
		return 0
	}
	return l.TotalCount
}

func (l *ListUsersExtendedOptionalListResponse) GetExtraProperties() map[string]interface{} {
	return l.extraProperties
}

func (l *ListUsersExtendedOptionalListResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler ListUsersExtendedOptionalListResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*l = ListUsersExtendedOptionalListResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *l)
	if err != nil {
		return err
	}
	l.extraProperties = extraProperties

	l._rawJSON = json.RawMessage(data)
	return nil
}

func (l *ListUsersExtendedOptionalListResponse) String() string {
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

type ListUsersExtendedResponse struct {
	Data *UserListContainer `json:"data,omitempty" url:"data,omitempty"`
	Next *uuid.UUID         `json:"next,omitempty" url:"next,omitempty"`
	// The totall number of /users
	TotalCount int `json:"total_count" url:"total_count"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (l *ListUsersExtendedResponse) GetData() *UserListContainer {
	if l == nil {
		return nil
	}
	return l.Data
}

func (l *ListUsersExtendedResponse) GetNext() *uuid.UUID {
	if l == nil {
		return nil
	}
	return l.Next
}

func (l *ListUsersExtendedResponse) GetTotalCount() int {
	if l == nil {
		return 0
	}
	return l.TotalCount
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
	HasNextPage *bool `json:"hasNextPage,omitempty" url:"hasNextPage,omitempty"`
	Page        *Page `json:"page,omitempty" url:"page,omitempty"`
	// The totall number of /users
	TotalCount int     `json:"total_count" url:"total_count"`
	Data       []*User `json:"data,omitempty" url:"data,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (l *ListUsersPaginationResponse) GetHasNextPage() *bool {
	if l == nil {
		return nil
	}
	return l.HasNextPage
}

func (l *ListUsersPaginationResponse) GetPage() *Page {
	if l == nil {
		return nil
	}
	return l.Page
}

func (l *ListUsersPaginationResponse) GetTotalCount() int {
	if l == nil {
		return 0
	}
	return l.TotalCount
}

func (l *ListUsersPaginationResponse) GetData() []*User {
	if l == nil {
		return nil
	}
	return l.Data
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

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (u *UsernameContainer) GetResults() []string {
	if u == nil {
		return nil
	}
	return u.Results
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

type WithCursor struct {
	Cursor *string `json:"cursor,omitempty" url:"cursor,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (w *WithCursor) GetCursor() *string {
	if w == nil {
		return nil
	}
	return w.Cursor
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

	w._rawJSON = json.RawMessage(data)
	return nil
}

func (w *WithCursor) String() string {
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

type WithPage struct {
	Page *int `json:"page,omitempty" url:"page,omitempty"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
}

func (w *WithPage) GetPage() *int {
	if w == nil {
		return nil
	}
	return w.Page
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

	w._rawJSON = json.RawMessage(data)
	return nil
}

func (w *WithPage) String() string {
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
