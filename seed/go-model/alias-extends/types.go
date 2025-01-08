// This file was auto-generated by Fern from our API Definition.

package aliasextends

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/alias-extends/fern/internal"
)

type AliasType = *Parent

type Child struct {
	Parent string `json:"parent" url:"parent"`
	Child  string `json:"child" url:"child"`

	extraProperties map[string]interface{}
}

func (c *Child) GetParent() string {
	if c == nil {
		return ""
	}
	return c.Parent
}

func (c *Child) GetChild() string {
	if c == nil {
		return ""
	}
	return c.Child
}

func (c *Child) GetExtraProperties() map[string]interface{} {
	return c.extraProperties
}

func (c *Child) UnmarshalJSON(data []byte) error {
	type unmarshaler Child
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = Child(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *c)
	if err != nil {
		return err
	}
	c.extraProperties = extraProperties
	return nil
}

func (c *Child) String() string {
	if value, err := internal.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}

type Parent struct {
	Parent string `json:"parent" url:"parent"`

	extraProperties map[string]interface{}
}

func (p *Parent) GetParent() string {
	if p == nil {
		return ""
	}
	return p.Parent
}

func (p *Parent) GetExtraProperties() map[string]interface{} {
	return p.extraProperties
}

func (p *Parent) UnmarshalJSON(data []byte) error {
	type unmarshaler Parent
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*p = Parent(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *p)
	if err != nil {
		return err
	}
	p.extraProperties = extraProperties
	return nil
}

func (p *Parent) String() string {
	if value, err := internal.StringifyJSON(p); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", p)
}
