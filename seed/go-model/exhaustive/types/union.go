// This file was auto-generated by Fern from our API Definition.

package types

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/exhaustive/fern/core"
)

type Animal struct {
	Animal string
	Dog    *Dog
	Cat    *Cat
}

func NewAnimalFromDog(value *Dog) *Animal {
	return &Animal{Animal: "dog", Dog: value}
}

func NewAnimalFromCat(value *Cat) *Animal {
	return &Animal{Animal: "cat", Cat: value}
}

func (a *Animal) GetAnimal() string {
	if a == nil {
		return ""
	}
	return a.Animal
}

func (a *Animal) GetDog() *Dog {
	if a == nil {
		return nil
	}
	return a.Dog
}

func (a *Animal) GetCat() *Cat {
	if a == nil {
		return nil
	}
	return a.Cat
}

func (a *Animal) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Animal string `json:"animal"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	a.Animal = unmarshaler.Animal
	if unmarshaler.Animal == "" {
		return fmt.Errorf("%T did not include discriminant animal", a)
	}
	switch unmarshaler.Animal {
	case "dog":
		value := new(Dog)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		a.Dog = value
	case "cat":
		value := new(Cat)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		a.Cat = value
	}
	return nil
}

func (a Animal) MarshalJSON() ([]byte, error) {
	switch a.Animal {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", a.Animal, a)
	case "dog":
		return core.MarshalJSONWithExtraProperty(a.Dog, "animal", "dog")
	case "cat":
		return core.MarshalJSONWithExtraProperty(a.Cat, "animal", "cat")
	}
}

type AnimalVisitor interface {
	VisitDog(*Dog) error
	VisitCat(*Cat) error
}

func (a *Animal) Accept(visitor AnimalVisitor) error {
	switch a.Animal {
	default:
		return fmt.Errorf("invalid type %s in %T", a.Animal, a)
	case "dog":
		return visitor.VisitDog(a.Dog)
	case "cat":
		return visitor.VisitCat(a.Cat)
	}
}

type Cat struct {
	Name        string `json:"name" url:"name"`
	LikesToMeow bool   `json:"likesToMeow" url:"likesToMeow"`

	extraProperties map[string]interface{}
}

func (c *Cat) GetName() string {
	if c == nil {
		return ""
	}
	return c.Name
}

func (c *Cat) GetLikesToMeow() bool {
	if c == nil {
		return false
	}
	return c.LikesToMeow
}

func (c *Cat) GetExtraProperties() map[string]interface{} {
	return c.extraProperties
}

func (c *Cat) UnmarshalJSON(data []byte) error {
	type unmarshaler Cat
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = Cat(value)

	extraProperties, err := core.ExtractExtraProperties(data, *c)
	if err != nil {
		return err
	}
	c.extraProperties = extraProperties

	return nil
}

func (c *Cat) String() string {
	if value, err := core.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}

type Dog struct {
	Name        string `json:"name" url:"name"`
	LikesToWoof bool   `json:"likesToWoof" url:"likesToWoof"`

	extraProperties map[string]interface{}
}

func (d *Dog) GetName() string {
	if d == nil {
		return ""
	}
	return d.Name
}

func (d *Dog) GetLikesToWoof() bool {
	if d == nil {
		return false
	}
	return d.LikesToWoof
}

func (d *Dog) GetExtraProperties() map[string]interface{} {
	return d.extraProperties
}

func (d *Dog) UnmarshalJSON(data []byte) error {
	type unmarshaler Dog
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*d = Dog(value)

	extraProperties, err := core.ExtractExtraProperties(data, *d)
	if err != nil {
		return err
	}
	d.extraProperties = extraProperties

	return nil
}

func (d *Dog) String() string {
	if value, err := core.StringifyJSON(d); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", d)
}
