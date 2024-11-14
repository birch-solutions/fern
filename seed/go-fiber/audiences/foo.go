// This file was auto-generated by Fern from our API Definition.

package audiences

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/audiences/fern/core"
)

type FindRequest struct {
	OptionalString  OptionalString `query:"optionalString"`
	PublicProperty  *string        `json:"publicProperty,omitempty" url:"-"`
	PrivateProperty *int           `json:"privateProperty,omitempty" url:"-"`
}

type FilteredType struct {
	PublicProperty  *string `json:"public_property,omitempty" url:"public_property,omitempty"`
	PrivateProperty int     `json:"private_property" url:"private_property"`

	extraProperties map[string]interface{}
}

func (f *FilteredType) GetPublicProperty() *string {
	if f == nil {
		return nil
	}
	return f.PublicProperty
}

func (f *FilteredType) GetPrivateProperty() int {
	if f == nil {
		return 0
	}
	return f.PrivateProperty
}

func (f *FilteredType) GetExtraProperties() map[string]interface{} {
	return f.extraProperties
}

func (f *FilteredType) UnmarshalJSON(data []byte) error {
	type unmarshaler FilteredType
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*f = FilteredType(value)

	extraProperties, err := core.ExtractExtraProperties(data, *f)
	if err != nil {
		return err
	}
	f.extraProperties = extraProperties

	return nil
}

func (f *FilteredType) String() string {
	if value, err := core.StringifyJSON(f); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", f)
}

type ImportingType struct {
	Imported Imported `json:"imported" url:"imported"`

	extraProperties map[string]interface{}
}

func (i *ImportingType) GetImported() Imported {
	if i == nil {
		return ""
	}
	return i.Imported
}

func (i *ImportingType) GetExtraProperties() map[string]interface{} {
	return i.extraProperties
}

func (i *ImportingType) UnmarshalJSON(data []byte) error {
	type unmarshaler ImportingType
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*i = ImportingType(value)

	extraProperties, err := core.ExtractExtraProperties(data, *i)
	if err != nil {
		return err
	}
	i.extraProperties = extraProperties

	return nil
}

func (i *ImportingType) String() string {
	if value, err := core.StringifyJSON(i); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", i)
}

type OptionalString = *string
