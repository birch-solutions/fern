// This file was auto-generated by Fern from our API Definition.

package ir

import (
	json "encoding/json"
	fmt "fmt"
	internal "sdk/internal"
)

type VariableDeclaration struct {
	Docs *string        `json:"docs,omitempty" url:"docs,omitempty"`
	Id   VariableId     `json:"id" url:"id"`
	Name *Name          `json:"name,omitempty" url:"name,omitempty"`
	Type *TypeReference `json:"type,omitempty" url:"type,omitempty"`

	extraProperties map[string]interface{}
}

func (v *VariableDeclaration) GetDocs() *string {
	if v == nil {
		return nil
	}
	return v.Docs
}

func (v *VariableDeclaration) GetId() VariableId {
	if v == nil {
		return ""
	}
	return v.Id
}

func (v *VariableDeclaration) GetName() *Name {
	if v == nil {
		return nil
	}
	return v.Name
}

func (v *VariableDeclaration) GetType() *TypeReference {
	if v == nil {
		return nil
	}
	return v.Type
}

func (v *VariableDeclaration) GetExtraProperties() map[string]interface{} {
	return v.extraProperties
}

func (v *VariableDeclaration) UnmarshalJSON(data []byte) error {
	type unmarshaler VariableDeclaration
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*v = VariableDeclaration(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *v)
	if err != nil {
		return err
	}
	v.extraProperties = extraProperties
	return nil
}

func (v *VariableDeclaration) String() string {
	if value, err := internal.StringifyJSON(v); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", v)
}

type VariableId = string
