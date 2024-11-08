// This file was auto-generated by Fern from our API Definition.

package mixedcase

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/mixed-case/fern/core"
)

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

func (r *Resource) GetResourceType() string {
	if r == nil {
		return ""
	}
	return r.ResourceType
}

func (r *Resource) GetStatus() ResourceStatus {
	if r == nil {
		return ""
	}
	return r.Status
}

func (r *Resource) GetUser() *User {
	if r == nil {
		return nil
	}
	return r.User
}

func (r *Resource) GetOrganization() *Organization {
	if r == nil {
		return nil
	}
	return r.Organization
}

func (r *Resource) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		ResourceType string         `json:"resource_type"`
		Status       ResourceStatus `json:"status"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	r.ResourceType = unmarshaler.ResourceType
	r.Status = unmarshaler.Status
	if unmarshaler.ResourceType == "" {
		return fmt.Errorf("%T did not include discriminant resource_type", r)
	}
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
		return core.MarshalJSONWithExtraProperty(r.User, "resource_type", "user")
	case "Organization":
		return core.MarshalJSONWithExtraProperty(r.Organization, "resource_type", "Organization")
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
