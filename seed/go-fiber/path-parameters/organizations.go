// This file was auto-generated by Fern from our API Definition.

package pathparameters

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/path-parameters/fern/internal"
)

type SearchOrganizationsRequest struct {
	Limit *int `query:"limit"`
}

type Organization struct {
	Name string   `json:"name" url:"name"`
	Tags []string `json:"tags,omitempty" url:"tags,omitempty"`

	extraProperties map[string]interface{}
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
	return nil
}

func (o *Organization) String() string {
	if value, err := internal.StringifyJSON(o); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", o)
}
