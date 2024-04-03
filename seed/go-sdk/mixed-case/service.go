// This file was auto-generated by Fern from our API Definition.

package mixedcase

import (
	json "encoding/json"
	fmt "fmt"
	time "time"
)

type ListResourcesRequest struct {
	PageLimit  int       `json:"-" url:"page_limit"`
	BeforeDate time.Time `json:"-" url:"beforeDate" format:"date"`
}

type Resource struct {
	ResourceType string
	Status       ResourceStatus
	User         *User
	Organization *Organization
}

func NewResourceFromUser(value *User) *Resource {
	return &Resource{ResourceType: "user", User: value}
}

func NewResourceFromOrganization(value *Organization) *Resource {
	return &Resource{ResourceType: "Organization", Organization: value}
}

func (r *Resource) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		ResourceType string         `json:"resource_type"`
		Status       ResourceStatus `json:"status,omitempty"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	r.ResourceType = unmarshaler.ResourceType
	r.Status = unmarshaler.Status
	switch unmarshaler.ResourceType {
	case "user":
		value := new(User)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		r.User = value
	case "Organization":
		value := new(Organization)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		r.Organization = value
	}
	return nil
}

func (r Resource) MarshalJSON() ([]byte, error) {
	switch r.ResourceType {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", r.ResourceType, r)
	case "user":
		var marshaler = struct {
			ResourceType string         `json:"resource_type"`
			Status       ResourceStatus `json:"status,omitempty"`
			*User
		}{
			ResourceType: "user",
			Status:       r.Status,
			User:         r.User,
		}
		return json.Marshal(marshaler)
	case "Organization":
		var marshaler = struct {
			ResourceType string         `json:"resource_type"`
			Status       ResourceStatus `json:"status,omitempty"`
			*Organization
		}{
			ResourceType: "Organization",
			Status:       r.Status,
			Organization: r.Organization,
		}
		return json.Marshal(marshaler)
	}
}

type ResourceVisitor interface {
	VisitUser(*User) error
	VisitOrganization(*Organization) error
}

func (r *Resource) Accept(visitor ResourceVisitor) error {
	switch r.ResourceType {
	default:
		return fmt.Errorf("invalid type %s in %T", r.ResourceType, r)
	case "user":
		return visitor.VisitUser(r.User)
	case "Organization":
		return visitor.VisitOrganization(r.Organization)
	}
}
