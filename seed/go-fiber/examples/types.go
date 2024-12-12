// This file was auto-generated by Fern from our API Definition.

package examples

import (
	json "encoding/json"
	fmt "fmt"
	commons "github.com/examples/fern/commons"
	internal "github.com/examples/fern/internal"
	uuid "github.com/google/uuid"
	time "time"
)

type BasicType string

const (
	BasicTypePrimitive BasicType = "primitive"
	BasicTypeLiteral   BasicType = "literal"
)

func NewBasicTypeFromString(s string) (BasicType, error) {
	switch s {
	case "primitive":
		return BasicTypePrimitive, nil
	case "literal":
		return BasicTypeLiteral, nil
	}
	var t BasicType
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (b BasicType) Ptr() *BasicType {
	return &b
}

type ComplexType string

const (
	ComplexTypeObject  ComplexType = "object"
	ComplexTypeUnion   ComplexType = "union"
	ComplexTypeUnknown ComplexType = "unknown"
)

func NewComplexTypeFromString(s string) (ComplexType, error) {
	switch s {
	case "object":
		return ComplexTypeObject, nil
	case "union":
		return ComplexTypeUnion, nil
	case "unknown":
		return ComplexTypeUnknown, nil
	}
	var t ComplexType
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (c ComplexType) Ptr() *ComplexType {
	return &c
}

type Identifier struct {
	Type  *Type  `json:"type,omitempty" url:"type,omitempty"`
	Value string `json:"value" url:"value"`
	Label string `json:"label" url:"label"`

	extraProperties map[string]interface{}
}

func (i *Identifier) GetType() *Type {
	if i == nil {
		return nil
	}
	return i.Type
}

func (i *Identifier) GetValue() string {
	if i == nil {
		return ""
	}
	return i.Value
}

func (i *Identifier) GetLabel() string {
	if i == nil {
		return ""
	}
	return i.Label
}

func (i *Identifier) GetExtraProperties() map[string]interface{} {
	return i.extraProperties
}

func (i *Identifier) UnmarshalJSON(data []byte) error {
	type unmarshaler Identifier
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*i = Identifier(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *i)
	if err != nil {
		return err
	}
	i.extraProperties = extraProperties
	return nil
}

func (i *Identifier) String() string {
	if value, err := internal.StringifyJSON(i); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", i)
}

type Type struct {
	BasicType   BasicType
	ComplexType ComplexType

	typ string
}

func NewTypeFromBasicType(value BasicType) *Type {
	return &Type{typ: "BasicType", BasicType: value}
}

func NewTypeFromComplexType(value ComplexType) *Type {
	return &Type{typ: "ComplexType", ComplexType: value}
}

func (t *Type) GetBasicType() BasicType {
	if t == nil {
		return ""
	}
	return t.BasicType
}

func (t *Type) GetComplexType() ComplexType {
	if t == nil {
		return ""
	}
	return t.ComplexType
}

func (t *Type) UnmarshalJSON(data []byte) error {
	var valueBasicType BasicType
	if err := json.Unmarshal(data, &valueBasicType); err == nil {
		t.typ = "BasicType"
		t.BasicType = valueBasicType
		return nil
	}
	var valueComplexType ComplexType
	if err := json.Unmarshal(data, &valueComplexType); err == nil {
		t.typ = "ComplexType"
		t.ComplexType = valueComplexType
		return nil
	}
	return fmt.Errorf("%s cannot be deserialized as a %T", data, t)
}

func (t Type) MarshalJSON() ([]byte, error) {
	if t.typ == "BasicType" || t.BasicType != "" {
		return json.Marshal(t.BasicType)
	}
	if t.typ == "ComplexType" || t.ComplexType != "" {
		return json.Marshal(t.ComplexType)
	}
	return nil, fmt.Errorf("type %T does not include a non-empty union type", t)
}

type TypeVisitor interface {
	VisitBasicType(BasicType) error
	VisitComplexType(ComplexType) error
}

func (t *Type) Accept(visitor TypeVisitor) error {
	if t.typ == "BasicType" || t.BasicType != "" {
		return visitor.VisitBasicType(t.BasicType)
	}
	if t.typ == "ComplexType" || t.ComplexType != "" {
		return visitor.VisitComplexType(t.ComplexType)
	}
	return fmt.Errorf("type %T does not include a non-empty union type", t)
}

type Actor struct {
	Name string `json:"name" url:"name"`
	Id   string `json:"id" url:"id"`

	extraProperties map[string]interface{}
}

func (a *Actor) GetName() string {
	if a == nil {
		return ""
	}
	return a.Name
}

func (a *Actor) GetId() string {
	if a == nil {
		return ""
	}
	return a.Id
}

func (a *Actor) GetExtraProperties() map[string]interface{} {
	return a.extraProperties
}

func (a *Actor) UnmarshalJSON(data []byte) error {
	type unmarshaler Actor
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*a = Actor(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *a)
	if err != nil {
		return err
	}
	a.extraProperties = extraProperties
	return nil
}

func (a *Actor) String() string {
	if value, err := internal.StringifyJSON(a); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", a)
}

type Actress struct {
	Name string `json:"name" url:"name"`
	Id   string `json:"id" url:"id"`

	extraProperties map[string]interface{}
}

func (a *Actress) GetName() string {
	if a == nil {
		return ""
	}
	return a.Name
}

func (a *Actress) GetId() string {
	if a == nil {
		return ""
	}
	return a.Id
}

func (a *Actress) GetExtraProperties() map[string]interface{} {
	return a.extraProperties
}

func (a *Actress) UnmarshalJSON(data []byte) error {
	type unmarshaler Actress
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*a = Actress(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *a)
	if err != nil {
		return err
	}
	a.extraProperties = extraProperties
	return nil
}

func (a *Actress) String() string {
	if value, err := internal.StringifyJSON(a); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", a)
}

type BigEntity struct {
	CastMember     *CastMember        `json:"castMember,omitempty" url:"castMember,omitempty"`
	ExtendedMovie  *ExtendedMovie     `json:"extendedMovie,omitempty" url:"extendedMovie,omitempty"`
	Entity         *Entity            `json:"entity,omitempty" url:"entity,omitempty"`
	Metadata       *Metadata          `json:"metadata,omitempty" url:"metadata,omitempty"`
	CommonMetadata *commons.Metadata  `json:"commonMetadata,omitempty" url:"commonMetadata,omitempty"`
	EventInfo      *commons.EventInfo `json:"eventInfo,omitempty" url:"eventInfo,omitempty"`
	Data           *commons.Data      `json:"data,omitempty" url:"data,omitempty"`
	Migration      *Migration         `json:"migration,omitempty" url:"migration,omitempty"`
	Exception      *Exception         `json:"exception,omitempty" url:"exception,omitempty"`
	Test           *Test              `json:"test,omitempty" url:"test,omitempty"`
	Node           *Node              `json:"node,omitempty" url:"node,omitempty"`
	Directory      *Directory         `json:"directory,omitempty" url:"directory,omitempty"`
	Moment         *Moment            `json:"moment,omitempty" url:"moment,omitempty"`

	extraProperties map[string]interface{}
}

func (b *BigEntity) GetCastMember() *CastMember {
	if b == nil {
		return nil
	}
	return b.CastMember
}

func (b *BigEntity) GetExtendedMovie() *ExtendedMovie {
	if b == nil {
		return nil
	}
	return b.ExtendedMovie
}

func (b *BigEntity) GetEntity() *Entity {
	if b == nil {
		return nil
	}
	return b.Entity
}

func (b *BigEntity) GetMetadata() *Metadata {
	if b == nil {
		return nil
	}
	return b.Metadata
}

func (b *BigEntity) GetCommonMetadata() *commons.Metadata {
	if b == nil {
		return nil
	}
	return b.CommonMetadata
}

func (b *BigEntity) GetEventInfo() *commons.EventInfo {
	if b == nil {
		return nil
	}
	return b.EventInfo
}

func (b *BigEntity) GetData() *commons.Data {
	if b == nil {
		return nil
	}
	return b.Data
}

func (b *BigEntity) GetMigration() *Migration {
	if b == nil {
		return nil
	}
	return b.Migration
}

func (b *BigEntity) GetException() *Exception {
	if b == nil {
		return nil
	}
	return b.Exception
}

func (b *BigEntity) GetTest() *Test {
	if b == nil {
		return nil
	}
	return b.Test
}

func (b *BigEntity) GetNode() *Node {
	if b == nil {
		return nil
	}
	return b.Node
}

func (b *BigEntity) GetDirectory() *Directory {
	if b == nil {
		return nil
	}
	return b.Directory
}

func (b *BigEntity) GetMoment() *Moment {
	if b == nil {
		return nil
	}
	return b.Moment
}

func (b *BigEntity) GetExtraProperties() map[string]interface{} {
	return b.extraProperties
}

func (b *BigEntity) UnmarshalJSON(data []byte) error {
	type unmarshaler BigEntity
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*b = BigEntity(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *b)
	if err != nil {
		return err
	}
	b.extraProperties = extraProperties
	return nil
}

func (b *BigEntity) String() string {
	if value, err := internal.StringifyJSON(b); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", b)
}

type CastMember struct {
	Actor       *Actor
	Actress     *Actress
	StuntDouble *StuntDouble

	typ string
}

func NewCastMemberFromActor(value *Actor) *CastMember {
	return &CastMember{typ: "Actor", Actor: value}
}

func NewCastMemberFromActress(value *Actress) *CastMember {
	return &CastMember{typ: "Actress", Actress: value}
}

func NewCastMemberFromStuntDouble(value *StuntDouble) *CastMember {
	return &CastMember{typ: "StuntDouble", StuntDouble: value}
}

func (c *CastMember) GetActor() *Actor {
	if c == nil {
		return nil
	}
	return c.Actor
}

func (c *CastMember) GetActress() *Actress {
	if c == nil {
		return nil
	}
	return c.Actress
}

func (c *CastMember) GetStuntDouble() *StuntDouble {
	if c == nil {
		return nil
	}
	return c.StuntDouble
}

func (c *CastMember) UnmarshalJSON(data []byte) error {
	valueActor := new(Actor)
	if err := json.Unmarshal(data, &valueActor); err == nil {
		c.typ = "Actor"
		c.Actor = valueActor
		return nil
	}
	valueActress := new(Actress)
	if err := json.Unmarshal(data, &valueActress); err == nil {
		c.typ = "Actress"
		c.Actress = valueActress
		return nil
	}
	valueStuntDouble := new(StuntDouble)
	if err := json.Unmarshal(data, &valueStuntDouble); err == nil {
		c.typ = "StuntDouble"
		c.StuntDouble = valueStuntDouble
		return nil
	}
	return fmt.Errorf("%s cannot be deserialized as a %T", data, c)
}

func (c CastMember) MarshalJSON() ([]byte, error) {
	if c.typ == "Actor" || c.Actor != nil {
		return json.Marshal(c.Actor)
	}
	if c.typ == "Actress" || c.Actress != nil {
		return json.Marshal(c.Actress)
	}
	if c.typ == "StuntDouble" || c.StuntDouble != nil {
		return json.Marshal(c.StuntDouble)
	}
	return nil, fmt.Errorf("type %T does not include a non-empty union type", c)
}

type CastMemberVisitor interface {
	VisitActor(*Actor) error
	VisitActress(*Actress) error
	VisitStuntDouble(*StuntDouble) error
}

func (c *CastMember) Accept(visitor CastMemberVisitor) error {
	if c.typ == "Actor" || c.Actor != nil {
		return visitor.VisitActor(c.Actor)
	}
	if c.typ == "Actress" || c.Actress != nil {
		return visitor.VisitActress(c.Actress)
	}
	if c.typ == "StuntDouble" || c.StuntDouble != nil {
		return visitor.VisitStuntDouble(c.StuntDouble)
	}
	return fmt.Errorf("type %T does not include a non-empty union type", c)
}

type Directory struct {
	Name        string       `json:"name" url:"name"`
	Files       []*File      `json:"files,omitempty" url:"files,omitempty"`
	Directories []*Directory `json:"directories,omitempty" url:"directories,omitempty"`

	extraProperties map[string]interface{}
}

func (d *Directory) GetName() string {
	if d == nil {
		return ""
	}
	return d.Name
}

func (d *Directory) GetFiles() []*File {
	if d == nil {
		return nil
	}
	return d.Files
}

func (d *Directory) GetDirectories() []*Directory {
	if d == nil {
		return nil
	}
	return d.Directories
}

func (d *Directory) GetExtraProperties() map[string]interface{} {
	return d.extraProperties
}

func (d *Directory) UnmarshalJSON(data []byte) error {
	type unmarshaler Directory
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*d = Directory(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *d)
	if err != nil {
		return err
	}
	d.extraProperties = extraProperties
	return nil
}

func (d *Directory) String() string {
	if value, err := internal.StringifyJSON(d); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", d)
}

type Entity struct {
	Type *Type  `json:"type,omitempty" url:"type,omitempty"`
	Name string `json:"name" url:"name"`

	extraProperties map[string]interface{}
}

func (e *Entity) GetType() *Type {
	if e == nil {
		return nil
	}
	return e.Type
}

func (e *Entity) GetName() string {
	if e == nil {
		return ""
	}
	return e.Name
}

func (e *Entity) GetExtraProperties() map[string]interface{} {
	return e.extraProperties
}

func (e *Entity) UnmarshalJSON(data []byte) error {
	type unmarshaler Entity
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*e = Entity(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *e)
	if err != nil {
		return err
	}
	e.extraProperties = extraProperties
	return nil
}

func (e *Entity) String() string {
	if value, err := internal.StringifyJSON(e); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", e)
}

type Exception struct {
	Type    string
	Generic *ExceptionInfo
	Timeout interface{}
}

func NewExceptionFromGeneric(value *ExceptionInfo) *Exception {
	return &Exception{Type: "generic", Generic: value}
}

func NewExceptionFromTimeout(value interface{}) *Exception {
	return &Exception{Type: "timeout", Timeout: value}
}

func (e *Exception) GetType() string {
	if e == nil {
		return ""
	}
	return e.Type
}

func (e *Exception) GetGeneric() *ExceptionInfo {
	if e == nil {
		return nil
	}
	return e.Generic
}

func (e *Exception) GetTimeout() interface{} {
	if e == nil {
		return nil
	}
	return e.Timeout
}

func (e *Exception) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	e.Type = unmarshaler.Type
	if unmarshaler.Type == "" {
		return fmt.Errorf("%T did not include discriminant type", e)
	}
	switch unmarshaler.Type {
	case "generic":
		value := new(ExceptionInfo)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		e.Generic = value
	case "timeout":
		value := make(map[string]interface{})
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		e.Timeout = value
	}
	return nil
}

func (e Exception) MarshalJSON() ([]byte, error) {
	if err := e.validate(); err != nil {
		return nil, err
	}
	switch e.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", e.Type, e)
	case "generic":
		return internal.MarshalJSONWithExtraProperty(e.Generic, "type", "generic")
	case "timeout":
		var marshaler = struct {
			Type    string      `json:"type"`
			Timeout interface{} `json:"timeout,omitempty"`
		}{
			Type:    "timeout",
			Timeout: e.Timeout,
		}
		return json.Marshal(marshaler)
	}
}

type ExceptionVisitor interface {
	VisitGeneric(*ExceptionInfo) error
	VisitTimeout(interface{}) error
}

func (e *Exception) Accept(visitor ExceptionVisitor) error {
	switch e.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", e.Type, e)
	case "generic":
		return visitor.VisitGeneric(e.Generic)
	case "timeout":
		return visitor.VisitTimeout(e.Timeout)
	}
}

func (e *Exception) validate() error {
	if e == nil {
		return fmt.Errorf("type %T is nil", e)
	}
	var fields []string
	if e.Generic != nil {
		fields = append(fields, "generic")
	}
	if e.Timeout != nil {
		fields = append(fields, "timeout")
	}
	if len(fields) == 0 {
		if e.Type != "" {
			return fmt.Errorf("type %T defines a discriminant set to %q but the field is not set", e, e.Type)
		}
		return fmt.Errorf("type %T is empty", e)
	}
	if len(fields) > 1 {
		return fmt.Errorf("type %T defines values for %s, but only one value is allowed", e, fields)
	}
	if e.Type != "" {
		field := fields[0]
		if e.Type != field {
			return fmt.Errorf(
				"type %T defines a discriminant set to %q, but it does not match the %T field; either remove or update the discriminant to match",
				e,
				e.Type,
				e,
			)
		}
	}
	return nil
}

type ExceptionInfo struct {
	ExceptionType       string `json:"exceptionType" url:"exceptionType"`
	ExceptionMessage    string `json:"exceptionMessage" url:"exceptionMessage"`
	ExceptionStacktrace string `json:"exceptionStacktrace" url:"exceptionStacktrace"`

	extraProperties map[string]interface{}
}

func (e *ExceptionInfo) GetExceptionType() string {
	if e == nil {
		return ""
	}
	return e.ExceptionType
}

func (e *ExceptionInfo) GetExceptionMessage() string {
	if e == nil {
		return ""
	}
	return e.ExceptionMessage
}

func (e *ExceptionInfo) GetExceptionStacktrace() string {
	if e == nil {
		return ""
	}
	return e.ExceptionStacktrace
}

func (e *ExceptionInfo) GetExtraProperties() map[string]interface{} {
	return e.extraProperties
}

func (e *ExceptionInfo) UnmarshalJSON(data []byte) error {
	type unmarshaler ExceptionInfo
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*e = ExceptionInfo(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *e)
	if err != nil {
		return err
	}
	e.extraProperties = extraProperties
	return nil
}

func (e *ExceptionInfo) String() string {
	if value, err := internal.StringifyJSON(e); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", e)
}

type ExtendedMovie struct {
	Id      MovieId  `json:"id" url:"id"`
	Prequel *MovieId `json:"prequel,omitempty" url:"prequel,omitempty"`
	Title   string   `json:"title" url:"title"`
	From    string   `json:"from" url:"from"`
	// The rating scale is one to five stars
	Rating   float64                `json:"rating" url:"rating"`
	Tag      commons.Tag            `json:"tag" url:"tag"`
	Book     *string                `json:"book,omitempty" url:"book,omitempty"`
	Metadata map[string]interface{} `json:"metadata,omitempty" url:"metadata,omitempty"`
	Revenue  int64                  `json:"revenue" url:"revenue"`
	Cast     []string               `json:"cast,omitempty" url:"cast,omitempty"`
	type_    string

	extraProperties map[string]interface{}
}

func (e *ExtendedMovie) GetId() MovieId {
	if e == nil {
		return ""
	}
	return e.Id
}

func (e *ExtendedMovie) GetPrequel() *MovieId {
	if e == nil {
		return nil
	}
	return e.Prequel
}

func (e *ExtendedMovie) GetTitle() string {
	if e == nil {
		return ""
	}
	return e.Title
}

func (e *ExtendedMovie) GetFrom() string {
	if e == nil {
		return ""
	}
	return e.From
}

func (e *ExtendedMovie) GetRating() float64 {
	if e == nil {
		return 0
	}
	return e.Rating
}

func (e *ExtendedMovie) GetTag() commons.Tag {
	if e == nil {
		return ""
	}
	return e.Tag
}

func (e *ExtendedMovie) GetBook() *string {
	if e == nil {
		return nil
	}
	return e.Book
}

func (e *ExtendedMovie) GetMetadata() map[string]interface{} {
	if e == nil {
		return nil
	}
	return e.Metadata
}

func (e *ExtendedMovie) GetRevenue() int64 {
	if e == nil {
		return 0
	}
	return e.Revenue
}

func (e *ExtendedMovie) GetCast() []string {
	if e == nil {
		return nil
	}
	return e.Cast
}

func (e *ExtendedMovie) Type() string {
	return e.type_
}

func (e *ExtendedMovie) GetExtraProperties() map[string]interface{} {
	return e.extraProperties
}

func (e *ExtendedMovie) UnmarshalJSON(data []byte) error {
	type embed ExtendedMovie
	var unmarshaler = struct {
		embed
		Type string `json:"type"`
	}{
		embed: embed(*e),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*e = ExtendedMovie(unmarshaler.embed)
	if unmarshaler.Type != "movie" {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", e, "movie", unmarshaler.Type)
	}
	e.type_ = unmarshaler.Type
	extraProperties, err := internal.ExtractExtraProperties(data, *e, "type")
	if err != nil {
		return err
	}
	e.extraProperties = extraProperties
	return nil
}

func (e *ExtendedMovie) MarshalJSON() ([]byte, error) {
	type embed ExtendedMovie
	var marshaler = struct {
		embed
		Type string `json:"type"`
	}{
		embed: embed(*e),
		Type:  "movie",
	}
	return json.Marshal(marshaler)
}

func (e *ExtendedMovie) String() string {
	if value, err := internal.StringifyJSON(e); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", e)
}

type File struct {
	Name     string `json:"name" url:"name"`
	Contents string `json:"contents" url:"contents"`

	extraProperties map[string]interface{}
}

func (f *File) GetName() string {
	if f == nil {
		return ""
	}
	return f.Name
}

func (f *File) GetContents() string {
	if f == nil {
		return ""
	}
	return f.Contents
}

func (f *File) GetExtraProperties() map[string]interface{} {
	return f.extraProperties
}

func (f *File) UnmarshalJSON(data []byte) error {
	type unmarshaler File
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*f = File(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *f)
	if err != nil {
		return err
	}
	f.extraProperties = extraProperties
	return nil
}

func (f *File) String() string {
	if value, err := internal.StringifyJSON(f); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", f)
}

type Metadata struct {
	Type     string
	Extra    map[string]string
	Tags     []string
	Html     string
	Markdown string
}

func NewMetadataFromHtml(value string) *Metadata {
	return &Metadata{Type: "html", Html: value}
}

func NewMetadataFromMarkdown(value string) *Metadata {
	return &Metadata{Type: "markdown", Markdown: value}
}

func (m *Metadata) GetType() string {
	if m == nil {
		return ""
	}
	return m.Type
}

func (m *Metadata) GetExtra() map[string]string {
	if m == nil {
		return nil
	}
	return m.Extra
}

func (m *Metadata) GetTags() []string {
	if m == nil {
		return nil
	}
	return m.Tags
}

func (m *Metadata) GetHtml() string {
	if m == nil {
		return ""
	}
	return m.Html
}

func (m *Metadata) GetMarkdown() string {
	if m == nil {
		return ""
	}
	return m.Markdown
}

func (m *Metadata) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type  string            `json:"type"`
		Extra map[string]string `json:"extra,omitempty"`
		Tags  []string          `json:"tags,omitempty"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	m.Type = unmarshaler.Type
	m.Extra = unmarshaler.Extra
	m.Tags = unmarshaler.Tags
	if unmarshaler.Type == "" {
		return fmt.Errorf("%T did not include discriminant type", m)
	}
	switch unmarshaler.Type {
	case "html":
		var valueUnmarshaler struct {
			Html string `json:"value"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		m.Html = valueUnmarshaler.Html
	case "markdown":
		var valueUnmarshaler struct {
			Markdown string `json:"value"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		m.Markdown = valueUnmarshaler.Markdown
	}
	return nil
}

func (m Metadata) MarshalJSON() ([]byte, error) {
	if err := m.validate(); err != nil {
		return nil, err
	}
	switch m.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", m.Type, m)
	case "html":
		var marshaler = struct {
			Type  string            `json:"type"`
			Extra map[string]string `json:"extra,omitempty"`
			Tags  []string          `json:"tags,omitempty"`
			Html  string            `json:"value"`
		}{
			Type:  "html",
			Extra: m.Extra,
			Tags:  m.Tags,
			Html:  m.Html,
		}
		return json.Marshal(marshaler)
	case "markdown":
		var marshaler = struct {
			Type     string            `json:"type"`
			Extra    map[string]string `json:"extra,omitempty"`
			Tags     []string          `json:"tags,omitempty"`
			Markdown string            `json:"value"`
		}{
			Type:     "markdown",
			Extra:    m.Extra,
			Tags:     m.Tags,
			Markdown: m.Markdown,
		}
		return json.Marshal(marshaler)
	}
}

type MetadataVisitor interface {
	VisitHtml(string) error
	VisitMarkdown(string) error
}

func (m *Metadata) Accept(visitor MetadataVisitor) error {
	switch m.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", m.Type, m)
	case "html":
		return visitor.VisitHtml(m.Html)
	case "markdown":
		return visitor.VisitMarkdown(m.Markdown)
	}
}

func (m *Metadata) validate() error {
	if m == nil {
		return fmt.Errorf("type %T is nil", m)
	}
	var fields []string
	if m.Html != "" {
		fields = append(fields, "html")
	}
	if m.Markdown != "" {
		fields = append(fields, "markdown")
	}
	if len(fields) == 0 {
		if m.Type != "" {
			return fmt.Errorf("type %T defines a discriminant set to %q but the field is not set", m, m.Type)
		}
		return fmt.Errorf("type %T is empty", m)
	}
	if len(fields) > 1 {
		return fmt.Errorf("type %T defines values for %s, but only one value is allowed", m, fields)
	}
	if m.Type != "" {
		field := fields[0]
		if m.Type != field {
			return fmt.Errorf(
				"type %T defines a discriminant set to %q, but it does not match the %T field; either remove or update the discriminant to match",
				m,
				m.Type,
				m,
			)
		}
	}
	return nil
}

type Migration struct {
	Name   string          `json:"name" url:"name"`
	Status MigrationStatus `json:"status" url:"status"`

	extraProperties map[string]interface{}
}

func (m *Migration) GetName() string {
	if m == nil {
		return ""
	}
	return m.Name
}

func (m *Migration) GetStatus() MigrationStatus {
	if m == nil {
		return ""
	}
	return m.Status
}

func (m *Migration) GetExtraProperties() map[string]interface{} {
	return m.extraProperties
}

func (m *Migration) UnmarshalJSON(data []byte) error {
	type unmarshaler Migration
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*m = Migration(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *m)
	if err != nil {
		return err
	}
	m.extraProperties = extraProperties
	return nil
}

func (m *Migration) String() string {
	if value, err := internal.StringifyJSON(m); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", m)
}

type MigrationStatus string

const (
	// The migration is running.
	MigrationStatusRunning MigrationStatus = "RUNNING"
	// The migration failed.
	MigrationStatusFailed   MigrationStatus = "FAILED"
	MigrationStatusFinished MigrationStatus = "FINISHED"
)

func NewMigrationStatusFromString(s string) (MigrationStatus, error) {
	switch s {
	case "RUNNING":
		return MigrationStatusRunning, nil
	case "FAILED":
		return MigrationStatusFailed, nil
	case "FINISHED":
		return MigrationStatusFinished, nil
	}
	var t MigrationStatus
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (m MigrationStatus) Ptr() *MigrationStatus {
	return &m
}

type Moment struct {
	Id       uuid.UUID `json:"id" url:"id"`
	Date     time.Time `json:"date" url:"date" format:"date"`
	Datetime time.Time `json:"datetime" url:"datetime"`

	extraProperties map[string]interface{}
}

func (m *Moment) GetId() uuid.UUID {
	if m == nil {
		return uuid.Nil
	}
	return m.Id
}

func (m *Moment) GetDate() time.Time {
	if m == nil {
		return time.Time{}
	}
	return m.Date
}

func (m *Moment) GetDatetime() time.Time {
	if m == nil {
		return time.Time{}
	}
	return m.Datetime
}

func (m *Moment) GetExtraProperties() map[string]interface{} {
	return m.extraProperties
}

func (m *Moment) UnmarshalJSON(data []byte) error {
	type embed Moment
	var unmarshaler = struct {
		embed
		Date     *internal.Date     `json:"date"`
		Datetime *internal.DateTime `json:"datetime"`
	}{
		embed: embed(*m),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*m = Moment(unmarshaler.embed)
	m.Date = unmarshaler.Date.Time()
	m.Datetime = unmarshaler.Datetime.Time()
	extraProperties, err := internal.ExtractExtraProperties(data, *m)
	if err != nil {
		return err
	}
	m.extraProperties = extraProperties
	return nil
}

func (m *Moment) MarshalJSON() ([]byte, error) {
	type embed Moment
	var marshaler = struct {
		embed
		Date     *internal.Date     `json:"date"`
		Datetime *internal.DateTime `json:"datetime"`
	}{
		embed:    embed(*m),
		Date:     internal.NewDate(m.Date),
		Datetime: internal.NewDateTime(m.Datetime),
	}
	return json.Marshal(marshaler)
}

func (m *Moment) String() string {
	if value, err := internal.StringifyJSON(m); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", m)
}

type Movie struct {
	Id      MovieId  `json:"id" url:"id"`
	Prequel *MovieId `json:"prequel,omitempty" url:"prequel,omitempty"`
	Title   string   `json:"title" url:"title"`
	From    string   `json:"from" url:"from"`
	// The rating scale is one to five stars
	Rating   float64                `json:"rating" url:"rating"`
	Tag      commons.Tag            `json:"tag" url:"tag"`
	Book     *string                `json:"book,omitempty" url:"book,omitempty"`
	Metadata map[string]interface{} `json:"metadata,omitempty" url:"metadata,omitempty"`
	Revenue  int64                  `json:"revenue" url:"revenue"`
	type_    string

	extraProperties map[string]interface{}
}

func (m *Movie) GetId() MovieId {
	if m == nil {
		return ""
	}
	return m.Id
}

func (m *Movie) GetPrequel() *MovieId {
	if m == nil {
		return nil
	}
	return m.Prequel
}

func (m *Movie) GetTitle() string {
	if m == nil {
		return ""
	}
	return m.Title
}

func (m *Movie) GetFrom() string {
	if m == nil {
		return ""
	}
	return m.From
}

func (m *Movie) GetRating() float64 {
	if m == nil {
		return 0
	}
	return m.Rating
}

func (m *Movie) GetTag() commons.Tag {
	if m == nil {
		return ""
	}
	return m.Tag
}

func (m *Movie) GetBook() *string {
	if m == nil {
		return nil
	}
	return m.Book
}

func (m *Movie) GetMetadata() map[string]interface{} {
	if m == nil {
		return nil
	}
	return m.Metadata
}

func (m *Movie) GetRevenue() int64 {
	if m == nil {
		return 0
	}
	return m.Revenue
}

func (m *Movie) Type() string {
	return m.type_
}

func (m *Movie) GetExtraProperties() map[string]interface{} {
	return m.extraProperties
}

func (m *Movie) UnmarshalJSON(data []byte) error {
	type embed Movie
	var unmarshaler = struct {
		embed
		Type string `json:"type"`
	}{
		embed: embed(*m),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*m = Movie(unmarshaler.embed)
	if unmarshaler.Type != "movie" {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", m, "movie", unmarshaler.Type)
	}
	m.type_ = unmarshaler.Type
	extraProperties, err := internal.ExtractExtraProperties(data, *m, "type")
	if err != nil {
		return err
	}
	m.extraProperties = extraProperties
	return nil
}

func (m *Movie) MarshalJSON() ([]byte, error) {
	type embed Movie
	var marshaler = struct {
		embed
		Type string `json:"type"`
	}{
		embed: embed(*m),
		Type:  "movie",
	}
	return json.Marshal(marshaler)
}

func (m *Movie) String() string {
	if value, err := internal.StringifyJSON(m); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", m)
}

type MovieId = string

type Node struct {
	Name  string  `json:"name" url:"name"`
	Nodes []*Node `json:"nodes,omitempty" url:"nodes,omitempty"`
	Trees []*Tree `json:"trees,omitempty" url:"trees,omitempty"`

	extraProperties map[string]interface{}
}

func (n *Node) GetName() string {
	if n == nil {
		return ""
	}
	return n.Name
}

func (n *Node) GetNodes() []*Node {
	if n == nil {
		return nil
	}
	return n.Nodes
}

func (n *Node) GetTrees() []*Tree {
	if n == nil {
		return nil
	}
	return n.Trees
}

func (n *Node) GetExtraProperties() map[string]interface{} {
	return n.extraProperties
}

func (n *Node) UnmarshalJSON(data []byte) error {
	type unmarshaler Node
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*n = Node(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *n)
	if err != nil {
		return err
	}
	n.extraProperties = extraProperties
	return nil
}

func (n *Node) String() string {
	if value, err := internal.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}

type Request struct {
	Request interface{} `json:"request,omitempty" url:"request,omitempty"`

	extraProperties map[string]interface{}
}

func (r *Request) GetRequest() interface{} {
	if r == nil {
		return nil
	}
	return r.Request
}

func (r *Request) GetExtraProperties() map[string]interface{} {
	return r.extraProperties
}

func (r *Request) UnmarshalJSON(data []byte) error {
	type unmarshaler Request
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*r = Request(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *r)
	if err != nil {
		return err
	}
	r.extraProperties = extraProperties
	return nil
}

func (r *Request) String() string {
	if value, err := internal.StringifyJSON(r); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", r)
}

type Response struct {
	Response    interface{}   `json:"response,omitempty" url:"response,omitempty"`
	Identifiers []*Identifier `json:"identifiers,omitempty" url:"identifiers,omitempty"`

	extraProperties map[string]interface{}
}

func (r *Response) GetResponse() interface{} {
	if r == nil {
		return nil
	}
	return r.Response
}

func (r *Response) GetIdentifiers() []*Identifier {
	if r == nil {
		return nil
	}
	return r.Identifiers
}

func (r *Response) GetExtraProperties() map[string]interface{} {
	return r.extraProperties
}

func (r *Response) UnmarshalJSON(data []byte) error {
	type unmarshaler Response
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*r = Response(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *r)
	if err != nil {
		return err
	}
	r.extraProperties = extraProperties
	return nil
}

func (r *Response) String() string {
	if value, err := internal.StringifyJSON(r); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", r)
}

type ResponseType struct {
	Type *Type `json:"type,omitempty" url:"type,omitempty"`

	extraProperties map[string]interface{}
}

func (r *ResponseType) GetType() *Type {
	if r == nil {
		return nil
	}
	return r.Type
}

func (r *ResponseType) GetExtraProperties() map[string]interface{} {
	return r.extraProperties
}

func (r *ResponseType) UnmarshalJSON(data []byte) error {
	type unmarshaler ResponseType
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*r = ResponseType(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *r)
	if err != nil {
		return err
	}
	r.extraProperties = extraProperties
	return nil
}

func (r *ResponseType) String() string {
	if value, err := internal.StringifyJSON(r); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", r)
}

type StuntDouble struct {
	Name             string `json:"name" url:"name"`
	ActorOrActressId string `json:"actorOrActressId" url:"actorOrActressId"`

	extraProperties map[string]interface{}
}

func (s *StuntDouble) GetName() string {
	if s == nil {
		return ""
	}
	return s.Name
}

func (s *StuntDouble) GetActorOrActressId() string {
	if s == nil {
		return ""
	}
	return s.ActorOrActressId
}

func (s *StuntDouble) GetExtraProperties() map[string]interface{} {
	return s.extraProperties
}

func (s *StuntDouble) UnmarshalJSON(data []byte) error {
	type unmarshaler StuntDouble
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*s = StuntDouble(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *s)
	if err != nil {
		return err
	}
	s.extraProperties = extraProperties
	return nil
}

func (s *StuntDouble) String() string {
	if value, err := internal.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}

type Test struct {
	Type string
	And  bool
	Or   bool
}

func NewTestFromAnd(value bool) *Test {
	return &Test{Type: "and", And: value}
}

func NewTestFromOr(value bool) *Test {
	return &Test{Type: "or", Or: value}
}

func (t *Test) GetType() string {
	if t == nil {
		return ""
	}
	return t.Type
}

func (t *Test) GetAnd() bool {
	if t == nil {
		return false
	}
	return t.And
}

func (t *Test) GetOr() bool {
	if t == nil {
		return false
	}
	return t.Or
}

func (t *Test) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	t.Type = unmarshaler.Type
	if unmarshaler.Type == "" {
		return fmt.Errorf("%T did not include discriminant type", t)
	}
	switch unmarshaler.Type {
	case "and":
		var valueUnmarshaler struct {
			And bool `json:"value"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		t.And = valueUnmarshaler.And
	case "or":
		var valueUnmarshaler struct {
			Or bool `json:"value"`
		}
		if err := json.Unmarshal(data, &valueUnmarshaler); err != nil {
			return err
		}
		t.Or = valueUnmarshaler.Or
	}
	return nil
}

func (t Test) MarshalJSON() ([]byte, error) {
	if err := t.validate(); err != nil {
		return nil, err
	}
	switch t.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", t.Type, t)
	case "and":
		var marshaler = struct {
			Type string `json:"type"`
			And  bool   `json:"value"`
		}{
			Type: "and",
			And:  t.And,
		}
		return json.Marshal(marshaler)
	case "or":
		var marshaler = struct {
			Type string `json:"type"`
			Or   bool   `json:"value"`
		}{
			Type: "or",
			Or:   t.Or,
		}
		return json.Marshal(marshaler)
	}
}

type TestVisitor interface {
	VisitAnd(bool) error
	VisitOr(bool) error
}

func (t *Test) Accept(visitor TestVisitor) error {
	switch t.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", t.Type, t)
	case "and":
		return visitor.VisitAnd(t.And)
	case "or":
		return visitor.VisitOr(t.Or)
	}
}

func (t *Test) validate() error {
	if t == nil {
		return fmt.Errorf("type %T is nil", t)
	}
	var fields []string
	if t.And != false {
		fields = append(fields, "and")
	}
	if t.Or != false {
		fields = append(fields, "or")
	}
	if len(fields) == 0 {
		if t.Type != "" {
			return fmt.Errorf("type %T defines a discriminant set to %q but the field is not set", t, t.Type)
		}
		return fmt.Errorf("type %T is empty", t)
	}
	if len(fields) > 1 {
		return fmt.Errorf("type %T defines values for %s, but only one value is allowed", t, fields)
	}
	if t.Type != "" {
		field := fields[0]
		if t.Type != field {
			return fmt.Errorf(
				"type %T defines a discriminant set to %q, but it does not match the %T field; either remove or update the discriminant to match",
				t,
				t.Type,
				t,
			)
		}
	}
	return nil
}

type Tree struct {
	Nodes []*Node `json:"nodes,omitempty" url:"nodes,omitempty"`

	extraProperties map[string]interface{}
}

func (t *Tree) GetNodes() []*Node {
	if t == nil {
		return nil
	}
	return t.Nodes
}

func (t *Tree) GetExtraProperties() map[string]interface{} {
	return t.extraProperties
}

func (t *Tree) UnmarshalJSON(data []byte) error {
	type unmarshaler Tree
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*t = Tree(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *t)
	if err != nil {
		return err
	}
	t.extraProperties = extraProperties
	return nil
}

func (t *Tree) String() string {
	if value, err := internal.StringifyJSON(t); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", t)
}
