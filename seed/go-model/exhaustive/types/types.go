// This file was auto-generated by Fern from our API Definition.

package types

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/exhaustive/fern/core"
	uuid "github.com/google/uuid"
	time "time"
)

type WeatherReport string

const (
	WeatherReportSunny   WeatherReport = "SUNNY"
	WeatherReportCloudy  WeatherReport = "CLOUDY"
	WeatherReportRaining WeatherReport = "RAINING"
	WeatherReportSnowing WeatherReport = "SNOWING"
)

func NewWeatherReportFromString(s string) (WeatherReport, error) {
	switch s {
	case "SUNNY":
		return WeatherReportSunny, nil
	case "CLOUDY":
		return WeatherReportCloudy, nil
	case "RAINING":
		return WeatherReportRaining, nil
	case "SNOWING":
		return WeatherReportSnowing, nil
	}
	var t WeatherReport
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (w WeatherReport) Ptr() *WeatherReport {
	return &w
}

type NestedObjectWithOptionalField struct {
	String       *string                  `json:"string,omitempty" url:"string,omitempty"`
	NestedObject *ObjectWithOptionalField `json:"NestedObject,omitempty" url:"NestedObject,omitempty"`
}

func (n *NestedObjectWithOptionalField) String() string {
	if value, err := core.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}

type NestedObjectWithRequiredField struct {
	String       string                   `json:"string" url:"string"`
	NestedObject *ObjectWithOptionalField `json:"NestedObject,omitempty" url:"NestedObject,omitempty"`
}

func (n *NestedObjectWithRequiredField) String() string {
	if value, err := core.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}

type ObjectWithMapOfMap struct {
	Map map[string]map[string]string `json:"map,omitempty" url:"map,omitempty"`
}

func (o *ObjectWithMapOfMap) String() string {
	if value, err := core.StringifyJSON(o); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", o)
}

type ObjectWithOptionalField struct {
	String   *string        `json:"string,omitempty" url:"string,omitempty"`
	Integer  *int           `json:"integer,omitempty" url:"integer,omitempty"`
	Long     *int64         `json:"long,omitempty" url:"long,omitempty"`
	Double   *float64       `json:"double,omitempty" url:"double,omitempty"`
	Bool     *bool          `json:"bool,omitempty" url:"bool,omitempty"`
	Datetime *time.Time     `json:"datetime,omitempty" url:"datetime,omitempty"`
	Date     *time.Time     `json:"date,omitempty" url:"date,omitempty" format:"date"`
	Uuid     *uuid.UUID     `json:"uuid,omitempty" url:"uuid,omitempty"`
	Base64   *[]byte        `json:"base64,omitempty" url:"base64,omitempty"`
	List     []string       `json:"list,omitempty" url:"list,omitempty"`
	Set      []string       `json:"set,omitempty" url:"set,omitempty"`
	Map      map[int]string `json:"map,omitempty" url:"map,omitempty"`
}

func (o *ObjectWithOptionalField) UnmarshalJSON(data []byte) error {
	type embed ObjectWithOptionalField
	var unmarshaler = struct {
		embed
		Datetime *core.DateTime `json:"datetime,omitempty"`
		Date     *core.Date     `json:"date,omitempty"`
	}{
		embed: embed(*o),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*o = ObjectWithOptionalField(unmarshaler.embed)
	o.Datetime = unmarshaler.Datetime.TimePtr()
	o.Date = unmarshaler.Date.TimePtr()
	return nil
}

func (o *ObjectWithOptionalField) MarshalJSON() ([]byte, error) {
	type embed ObjectWithOptionalField
	var marshaler = struct {
		embed
		Datetime *core.DateTime `json:"datetime,omitempty"`
		Date     *core.Date     `json:"date,omitempty"`
	}{
		embed:    embed(*o),
		Datetime: core.NewOptionalDateTime(o.Datetime),
		Date:     core.NewOptionalDate(o.Date),
	}
	return json.Marshal(marshaler)
}

func (o *ObjectWithOptionalField) String() string {
	if value, err := core.StringifyJSON(o); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", o)
}

type ObjectWithRequiredField struct {
	String string `json:"string" url:"string"`
}

func (o *ObjectWithRequiredField) String() string {
	if value, err := core.StringifyJSON(o); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", o)
}

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

func (a *Animal) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Animal string `json:"animal"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	a.Animal = unmarshaler.Animal
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
}

func (d *Dog) String() string {
	if value, err := core.StringifyJSON(d); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", d)
}
