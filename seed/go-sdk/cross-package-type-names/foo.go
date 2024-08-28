// This file was auto-generated by Fern from our API Definition.

package crosspackagetypenames

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/cross-package-type-names/fern/core"
)

type FindRequest struct {
	OptionalString  OptionalString `json:"-" url:"optionalString,omitempty"`
	PublicProperty  *string        `json:"publicProperty,omitempty" url:"-"`
	PrivateProperty *int           `json:"privateProperty,omitempty" url:"-"`
}

type ImportingType struct {
	Imported Imported `json:"imported" url:"imported"`

	extraProperties map[string]interface{}
	_rawJSON        json.RawMessage
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

	i._rawJSON = json.RawMessage(data)
	return nil
}

func (i *ImportingType) String() string {
	if len(i._rawJSON) > 0 {
		if value, err := core.StringifyJSON(i._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(i); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", i)
}

type OptionalString = *string
