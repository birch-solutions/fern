// This file was auto-generated by Fern from our API Definition.

package unions

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/unions/fern/core"
	time "time"
)

type Bar struct {
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (b *Bar) GetExtraProperties() map[string]interface{} {
	return b.extraProperties
}

func (b *Bar) UnmarshalJSON(data []byte) error {
	type unmarshaler Bar
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*b = Bar(value)

	extraProperties, err := core.ExtractExtraProperties(data, *b)
	if err != nil {
		return err
	}
	b.extraProperties = extraProperties

	return nil
}

func (b *Bar) String() string {
	if value, err := core.StringifyJSON(b); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", b)
}

type Foo struct {
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (f *Foo) GetExtraProperties() map[string]interface{} {
	return f.extraProperties
}

func (f *Foo) UnmarshalJSON(data []byte) error {
	type unmarshaler Foo
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*f = Foo(value)

	extraProperties, err := core.ExtractExtraProperties(data, *f)
	if err != nil {
		return err
	}
	f.extraProperties = extraProperties

	return nil
}

func (f *Foo) String() string {
	if value, err := core.StringifyJSON(f); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", f)
}

// This is a simple union.
type Union struct {
	Type string
	Foo  *Foo
	Bar  *Bar
}

func NewUnionFromFoo(value *Foo) *Union {
	return &Union{Type: "foo", Foo: value}
}

func NewUnionFromBar(value *Bar) *Union {
	return &Union{Type: "bar", Bar: value}
}

func (u *Union) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	switch unmarshaler.Type {
	case "foo":
		var valueUnmarshaler struct {
			Foo *Foo `json:"foo,omitempty"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.Foo = valueUnmarshaler.Foo
	case "bar":
		var valueUnmarshaler struct {
			Bar *Bar `json:"bar,omitempty"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.Bar = valueUnmarshaler.Bar
	}
	return nil
}

func (u Union) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "foo":
		var marshaler = struct {
			Type string `json:"type"`
			Foo  *Foo   `json:"foo,omitempty"`
		}{
			Type: "foo",
			Foo:  u.Foo,
		}
		return json.Marshal(marshaler)
	case "bar":
		var marshaler = struct {
			Type string `json:"type"`
			Bar  *Bar   `json:"bar,omitempty"`
		}{
			Type: "bar",
			Bar:  u.Bar,
		}
		return json.Marshal(marshaler)
	}
}

type UnionVisitor interface {
	VisitFoo(*Foo) error
	VisitBar(*Bar) error
}

func (u *Union) Accept(visitor UnionVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "foo":
		return visitor.VisitFoo(u.Foo)
	case "bar":
		return visitor.VisitBar(u.Bar)
	}
}

type UnionWithBaseProperties struct {
	Type    string
	Id      string
	Integer int
	String  string
	Foo     *Foo
}

func NewUnionWithBasePropertiesFromInteger(value int) *UnionWithBaseProperties {
	return &UnionWithBaseProperties{Type: "integer", Integer: value}
}

func NewUnionWithBasePropertiesFromString(value string) *UnionWithBaseProperties {
	return &UnionWithBaseProperties{Type: "string", String: value}
}

func NewUnionWithBasePropertiesFromFoo(value *Foo) *UnionWithBaseProperties {
	return &UnionWithBaseProperties{Type: "foo", Foo: value}
}

func (u *UnionWithBaseProperties) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
		Id   string `json:"id"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	u.Id = unmarshaler.Id
	switch unmarshaler.Type {
	case "integer":
		var valueUnmarshaler struct {
			Integer int `json:"value"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.Integer = valueUnmarshaler.Integer
	case "string":
		var valueUnmarshaler struct {
			String string `json:"value"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.String = valueUnmarshaler.String
	case "foo":
		value := new(Foo)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		u.Foo = value
	}
	return nil
}

func (u UnionWithBaseProperties) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "integer":
		var marshaler = struct {
			Type    string `json:"type"`
			Id      string `json:"id"`
			Integer int    `json:"value"`
		}{
			Type:    "integer",
			Id:      u.Id,
			Integer: u.Integer,
		}
		return json.Marshal(marshaler)
	case "string":
		var marshaler = struct {
			Type   string `json:"type"`
			Id     string `json:"id"`
			String string `json:"value"`
		}{
			Type:   "string",
			Id:     u.Id,
			String: u.String,
		}
		return json.Marshal(marshaler)
	case "foo":
		return core.MarshalJSONWithExtraProperty(u.Foo, "type", "foo")
	}
}

type UnionWithBasePropertiesVisitor interface {
	VisitInteger(int) error
	VisitString(string) error
	VisitFoo(*Foo) error
}

func (u *UnionWithBaseProperties) Accept(visitor UnionWithBasePropertiesVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "integer":
		return visitor.VisitInteger(u.Integer)
	case "string":
		return visitor.VisitString(u.String)
	case "foo":
		return visitor.VisitFoo(u.Foo)
	}
}

type UnionWithDiscriminant struct {
	Type string
	// This is a Foo field.
	Foo *Foo
	Bar *Bar
}

func NewUnionWithDiscriminantFromFoo(value *Foo) *UnionWithDiscriminant {
	return &UnionWithDiscriminant{Type: "foo", Foo: value}
}

func NewUnionWithDiscriminantFromBar(value *Bar) *UnionWithDiscriminant {
	return &UnionWithDiscriminant{Type: "bar", Bar: value}
}

func (u *UnionWithDiscriminant) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"_type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	switch unmarshaler.Type {
	case "foo":
		var valueUnmarshaler struct {
			Foo *Foo `json:"foo,omitempty"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.Foo = valueUnmarshaler.Foo
	case "bar":
		var valueUnmarshaler struct {
			Bar *Bar `json:"bar,omitempty"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.Bar = valueUnmarshaler.Bar
	}
	return nil
}

func (u UnionWithDiscriminant) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "foo":
		var marshaler = struct {
			Type string `json:"_type"`
			Foo  *Foo   `json:"foo,omitempty"`
		}{
			Type: "foo",
			Foo:  u.Foo,
		}
		return json.Marshal(marshaler)
	case "bar":
		var marshaler = struct {
			Type string `json:"_type"`
			Bar  *Bar   `json:"bar,omitempty"`
		}{
			Type: "bar",
			Bar:  u.Bar,
		}
		return json.Marshal(marshaler)
	}
}

type UnionWithDiscriminantVisitor interface {
	VisitFoo(*Foo) error
	VisitBar(*Bar) error
}

func (u *UnionWithDiscriminant) Accept(visitor UnionWithDiscriminantVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "foo":
		return visitor.VisitFoo(u.Foo)
	case "bar":
		return visitor.VisitBar(u.Bar)
	}
}

type UnionWithLiteral struct {
	Type string
	fern string
	base string
}

func NewUnionWithLiteralWithFern() *UnionWithLiteral {
	return &UnionWithLiteral{Type: "fern", fern: "fern"}
}

func (u *UnionWithLiteral) Base() string {
	return u.base
}

func (u *UnionWithLiteral) Fern() string {
	return u.fern
}

func (u *UnionWithLiteral) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	u.base = "base"
	switch unmarshaler.Type {
	case "fern":
		u.fern = "fern"
	}
	return nil
}

func (u UnionWithLiteral) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "fern":
		var marshaler = struct {
			Type string `json:"type"`
			Base string `json:"base"`
			Fern string `json:"value,omitempty"`
		}{
			Type: "fern",
			Base: "base",
			Fern: "fern",
		}
		return json.Marshal(marshaler)
	}
}

type UnionWithLiteralVisitor interface {
	VisitFern(string) error
}

func (u *UnionWithLiteral) Accept(visitor UnionWithLiteralVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "fern":
		return visitor.VisitFern(u.fern)
	}
}

type UnionWithOptionalTime struct {
	Type     string
	Date     *time.Time
	Dateimte *time.Time
}

func NewUnionWithOptionalTimeFromDate(value *time.Time) *UnionWithOptionalTime {
	return &UnionWithOptionalTime{Type: "date", Date: value}
}

func NewUnionWithOptionalTimeFromDateimte(value *time.Time) *UnionWithOptionalTime {
	return &UnionWithOptionalTime{Type: "dateimte", Dateimte: value}
}

func (u *UnionWithOptionalTime) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	switch unmarshaler.Type {
	case "date":
		var valueUnmarshaler struct {
			Date *core.Date `json:"value,omitempty" format:"date"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.Date = valueUnmarshaler.Date.TimePtr()
	case "dateimte":
		var valueUnmarshaler struct {
			Dateimte *core.DateTime `json:"value,omitempty"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.Dateimte = valueUnmarshaler.Dateimte.TimePtr()
	}
	return nil
}

func (u UnionWithOptionalTime) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "date":
		var marshaler = struct {
			Type string     `json:"type"`
			Date *core.Date `json:"value,omitempty" format:"date"`
		}{
			Type: "date",
			Date: core.NewOptionalDate(u.Date),
		}
		return json.Marshal(marshaler)
	case "dateimte":
		var marshaler = struct {
			Type     string         `json:"type"`
			Dateimte *core.DateTime `json:"value,omitempty"`
		}{
			Type:     "dateimte",
			Dateimte: core.NewOptionalDateTime(u.Dateimte),
		}
		return json.Marshal(marshaler)
	}
}

type UnionWithOptionalTimeVisitor interface {
	VisitDate(*time.Time) error
	VisitDateimte(*time.Time) error
}

func (u *UnionWithOptionalTime) Accept(visitor UnionWithOptionalTimeVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "date":
		return visitor.VisitDate(u.Date)
	case "dateimte":
		return visitor.VisitDateimte(u.Dateimte)
	}
}

type UnionWithPrimitive struct {
	Type    string
	Integer int
	String  string
}

func NewUnionWithPrimitiveFromInteger(value int) *UnionWithPrimitive {
	return &UnionWithPrimitive{Type: "integer", Integer: value}
}

func NewUnionWithPrimitiveFromString(value string) *UnionWithPrimitive {
	return &UnionWithPrimitive{Type: "string", String: value}
}

func (u *UnionWithPrimitive) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	switch unmarshaler.Type {
	case "integer":
		var valueUnmarshaler struct {
			Integer int `json:"value"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.Integer = valueUnmarshaler.Integer
	case "string":
		var valueUnmarshaler struct {
			String string `json:"value"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.String = valueUnmarshaler.String
	}
	return nil
}

func (u UnionWithPrimitive) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "integer":
		var marshaler = struct {
			Type    string `json:"type"`
			Integer int    `json:"value"`
		}{
			Type:    "integer",
			Integer: u.Integer,
		}
		return json.Marshal(marshaler)
	case "string":
		var marshaler = struct {
			Type   string `json:"type"`
			String string `json:"value"`
		}{
			Type:   "string",
			String: u.String,
		}
		return json.Marshal(marshaler)
	}
}

type UnionWithPrimitiveVisitor interface {
	VisitInteger(int) error
	VisitString(string) error
}

func (u *UnionWithPrimitive) Accept(visitor UnionWithPrimitiveVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "integer":
		return visitor.VisitInteger(u.Integer)
	case "string":
		return visitor.VisitString(u.String)
	}
}

type UnionWithSingleElement struct {
	Type string
	Foo  *Foo
}

func NewUnionWithSingleElementFromFoo(value *Foo) *UnionWithSingleElement {
	return &UnionWithSingleElement{Type: "foo", Foo: value}
}

func (u *UnionWithSingleElement) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	switch unmarshaler.Type {
	case "foo":
		value := new(Foo)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		u.Foo = value
	}
	return nil
}

func (u UnionWithSingleElement) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "foo":
		return core.MarshalJSONWithExtraProperty(u.Foo, "type", "foo")
	}
}

type UnionWithSingleElementVisitor interface {
	VisitFoo(*Foo) error
}

func (u *UnionWithSingleElement) Accept(visitor UnionWithSingleElementVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "foo":
		return visitor.VisitFoo(u.Foo)
	}
}

type UnionWithTime struct {
	Type     string
	Value    int
	Date     time.Time
	Datetime time.Time
}

func NewUnionWithTimeFromValue(value int) *UnionWithTime {
	return &UnionWithTime{Type: "value", Value: value}
}

func NewUnionWithTimeFromDate(value time.Time) *UnionWithTime {
	return &UnionWithTime{Type: "date", Date: value}
}

func NewUnionWithTimeFromDatetime(value time.Time) *UnionWithTime {
	return &UnionWithTime{Type: "datetime", Datetime: value}
}

func (u *UnionWithTime) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	switch unmarshaler.Type {
	case "value":
		var valueUnmarshaler struct {
			Value int `json:"value"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.Value = valueUnmarshaler.Value
	case "date":
		var valueUnmarshaler struct {
			Date *core.Date `json:"value" format:"date"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.Date = valueUnmarshaler.Date.Time()
	case "datetime":
		var valueUnmarshaler struct {
			Datetime *core.DateTime `json:"value"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		u.Datetime = valueUnmarshaler.Datetime.Time()
	}
	return nil
}

func (u UnionWithTime) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "value":
		var marshaler = struct {
			Type  string `json:"type"`
			Value int    `json:"value"`
		}{
			Type:  "value",
			Value: u.Value,
		}
		return json.Marshal(marshaler)
	case "date":
		var marshaler = struct {
			Type string     `json:"type"`
			Date *core.Date `json:"value" format:"date"`
		}{
			Type: "date",
			Date: core.NewDate(u.Date),
		}
		return json.Marshal(marshaler)
	case "datetime":
		var marshaler = struct {
			Type     string         `json:"type"`
			Datetime *core.DateTime `json:"value"`
		}{
			Type:     "datetime",
			Datetime: core.NewDateTime(u.Datetime),
		}
		return json.Marshal(marshaler)
	}
}

type UnionWithTimeVisitor interface {
	VisitValue(int) error
	VisitDate(time.Time) error
	VisitDatetime(time.Time) error
}

func (u *UnionWithTime) Accept(visitor UnionWithTimeVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "value":
		return visitor.VisitValue(u.Value)
	case "date":
		return visitor.VisitDate(u.Date)
	case "datetime":
		return visitor.VisitDatetime(u.Datetime)
	}
}

type UnionWithUnknown struct {
	Type    string
	Foo     *Foo
	Unknown interface{}
}

func NewUnionWithUnknownFromFoo(value *Foo) *UnionWithUnknown {
	return &UnionWithUnknown{Type: "foo", Foo: value}
}

func NewUnionWithUnknownFromUnknown(value interface{}) *UnionWithUnknown {
	return &UnionWithUnknown{Type: "unknown", Unknown: value}
}

func (u *UnionWithUnknown) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	switch unmarshaler.Type {
	case "foo":
		value := new(Foo)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		u.Foo = value
	case "unknown":
		value := make(map[string]interface{})
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		u.Unknown = value
	}
	return nil
}

func (u UnionWithUnknown) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "foo":
		return core.MarshalJSONWithExtraProperty(u.Foo, "type", "foo")
	case "unknown":
		var marshaler = struct {
			Type    string      `json:"type"`
			Unknown interface{} `json:"unknown,omitempty"`
		}{
			Type:    "unknown",
			Unknown: u.Unknown,
		}
		return json.Marshal(marshaler)
	}
}

type UnionWithUnknownVisitor interface {
	VisitFoo(*Foo) error
	VisitUnknown(interface{}) error
}

func (u *UnionWithUnknown) Accept(visitor UnionWithUnknownVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "foo":
		return visitor.VisitFoo(u.Foo)
	case "unknown":
		return visitor.VisitUnknown(u.Unknown)
	}
}

type UnionWithoutKey struct {
	Type string
	Foo  *Foo
	// This is a bar field.
	Bar *Bar
}

func NewUnionWithoutKeyFromFoo(value *Foo) *UnionWithoutKey {
	return &UnionWithoutKey{Type: "foo", Foo: value}
}

func NewUnionWithoutKeyFromBar(value *Bar) *UnionWithoutKey {
	return &UnionWithoutKey{Type: "bar", Bar: value}
}

func (u *UnionWithoutKey) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	u.Type = unmarshaler.Type
	switch unmarshaler.Type {
	case "foo":
		value := new(Foo)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		u.Foo = value
	case "bar":
		value := new(Bar)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		u.Bar = value
	}
	return nil
}

func (u UnionWithoutKey) MarshalJSON() ([]byte, error) {
	switch u.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "foo":
		return core.MarshalJSONWithExtraProperty(u.Foo, "type", "foo")
	case "bar":
		return core.MarshalJSONWithExtraProperty(u.Bar, "type", "bar")
	}
}

type UnionWithoutKeyVisitor interface {
	VisitFoo(*Foo) error
	VisitBar(*Bar) error
}

func (u *UnionWithoutKey) Accept(visitor UnionWithoutKeyVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "foo":
		return visitor.VisitFoo(u.Foo)
	case "bar":
		return visitor.VisitBar(u.Bar)
	}
}

type Circle struct {
	Radius float64 `json:"radius" url:"radius"`

	extraProperties map[string]interface{}
}

func (c *Circle) GetExtraProperties() map[string]interface{} {
	return c.extraProperties
}

func (c *Circle) UnmarshalJSON(data []byte) error {
	type unmarshaler Circle
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = Circle(value)

	extraProperties, err := core.ExtractExtraProperties(data, *c)
	if err != nil {
		return err
	}
	c.extraProperties = extraProperties

	return nil
}

func (c *Circle) String() string {
	if value, err := core.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}

type GetShapeRequest struct {
	Id string `json:"id" url:"id"`

	extraProperties map[string]interface{}
}

func (g *GetShapeRequest) GetExtraProperties() map[string]interface{} {
	return g.extraProperties
}

func (g *GetShapeRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler GetShapeRequest
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*g = GetShapeRequest(value)

	extraProperties, err := core.ExtractExtraProperties(data, *g)
	if err != nil {
		return err
	}
	g.extraProperties = extraProperties

	return nil
}

func (g *GetShapeRequest) String() string {
	if value, err := core.StringifyJSON(g); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", g)
}

type Square struct {
	Length float64 `json:"length" url:"length"`

	extraProperties map[string]interface{}
}

func (s *Square) GetExtraProperties() map[string]interface{} {
	return s.extraProperties
}

func (s *Square) UnmarshalJSON(data []byte) error {
	type unmarshaler Square
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*s = Square(value)

	extraProperties, err := core.ExtractExtraProperties(data, *s)
	if err != nil {
		return err
	}
	s.extraProperties = extraProperties

	return nil
}

func (s *Square) String() string {
	if value, err := core.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}
