// This file was auto-generated by Fern from our API Definition.

package path

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/fern-api/path-parameters-go/internal"
)

type DeleteOrganizationRequest struct {
	Limit *int  `json:"-" url:"limit,omitempty"`
	Soft  *bool `json:"soft,omitempty" url:"-"`
}

type GetOrganizationUserRequest struct {
	TenantId       string `json:"-" url:"-"`
	OrganizationId string `json:"-" url:"-"`
	UserId         string `json:"-" url:"-"`
}

type SearchOrganizationsRequest struct {
	Limit *int `json:"-" url:"limit,omitempty"`
}

type Organization struct {
	Name string   `json:"name" url:"name"`
	Tags []string `json:"tags,omitempty" url:"tags,omitempty"`

	extraProperties map[string]interface{}
	rawJSON         json.RawMessage
}

func (o *Organization) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *Organization) GetTags() []string {
	if o == nil {
		return nil
	}
	return o.Tags
}

func (o *Organization) GetExtraProperties() map[string]interface{} {
	return o.extraProperties
}

func (o *Organization) UnmarshalJSON(data []byte) error {
	type unmarshaler Organization
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*o = Organization(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *o)
	if err != nil {
		return err
	}
	o.extraProperties = extraProperties
	o.rawJSON = json.RawMessage(data)
	return nil
}

func (o *Organization) String() string {
	if len(o.rawJSON) > 0 {
		if value, err := internal.StringifyJSON(o.rawJSON); err == nil {
			return value
		}
	}
	if value, err := internal.StringifyJSON(o); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", o)
}
