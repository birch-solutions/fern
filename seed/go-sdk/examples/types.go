// This file was auto-generated by Fern from our API Definition.

package examples

import (
	json "encoding/json"
	fmt "fmt"
	commons "github.com/examples/fern/commons"
	core "github.com/examples/fern/core"
	uuid "github.com/google/uuid"
	time "time"
)

type Actor struct {
	Name string `json:"name" url:"name"`
	Id   string `json:"id" url:"id"`

	_rawJSON json.RawMessage
}

func (a *Actor) UnmarshalJSON(data []byte) error {
	type unmarshaler Actor
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*a = Actor(value)
	a._rawJSON = json.RawMessage(data)
	return nil
}

func (a *Actor) String() string {
	if len(a._rawJSON) > 0 {
		if value, err := core.StringifyJSON(a._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(a); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", a)
}

type Actress struct {
	Name string `json:"name" url:"name"`
	Id   string `json:"id" url:"id"`

	_rawJSON json.RawMessage
}

func (a *Actress) UnmarshalJSON(data []byte) error {
	type unmarshaler Actress
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*a = Actress(value)
	a._rawJSON = json.RawMessage(data)
	return nil
}

func (a *Actress) String() string {
	if len(a._rawJSON) > 0 {
		if value, err := core.StringifyJSON(a._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(a); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", a)
}

type CastMember struct {
	Actor       *Actor
	Actress     *Actress
	StuntDouble *StuntDouble
}

func NewCastMemberFromActor(value *Actor) *CastMember {
	return &CastMember{Actor: value}
}

func NewCastMemberFromActress(value *Actress) *CastMember {
	return &CastMember{Actress: value}
}

func NewCastMemberFromStuntDouble(value *StuntDouble) *CastMember {
	return &CastMember{StuntDouble: value}
}

func (c *CastMember) UnmarshalJSON(data []byte) error {
	valueActor := new(Actor)
	if err := json.Unmarshal(data, &valueActor); err == nil {
		c.Actor = valueActor
		return nil
	}
	valueActress := new(Actress)
	if err := json.Unmarshal(data, &valueActress); err == nil {
		c.Actress = valueActress
		return nil
	}
	valueStuntDouble := new(StuntDouble)
	if err := json.Unmarshal(data, &valueStuntDouble); err == nil {
		c.StuntDouble = valueStuntDouble
		return nil
	}
	return fmt.Errorf("%s cannot be deserialized as a %T", data, c)
}

func (c CastMember) MarshalJSON() ([]byte, error) {
	if c.Actor != nil {
		return json.Marshal(c.Actor)
	}
	if c.Actress != nil {
		return json.Marshal(c.Actress)
	}
	if c.StuntDouble != nil {
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
	if c.Actor != nil {
		return visitor.VisitActor(c.Actor)
	}
	if c.Actress != nil {
		return visitor.VisitActress(c.Actress)
	}
	if c.StuntDouble != nil {
		return visitor.VisitStuntDouble(c.StuntDouble)
	}
	return fmt.Errorf("type %T does not include a non-empty union type", c)
}

type Directory struct {
	Name        string       `json:"name" url:"name"`
	Files       []*File      `json:"files,omitempty" url:"files,omitempty"`
	Directories []*Directory `json:"directories,omitempty" url:"directories,omitempty"`

	_rawJSON json.RawMessage
}

func (d *Directory) UnmarshalJSON(data []byte) error {
	type unmarshaler Directory
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*d = Directory(value)
	d._rawJSON = json.RawMessage(data)
	return nil
}

func (d *Directory) String() string {
	if len(d._rawJSON) > 0 {
		if value, err := core.StringifyJSON(d._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(d); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", d)
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

func (e *Exception) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	e.Type = unmarshaler.Type
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
	switch e.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", e.Type, e)
	case "generic":
		var marshaler = struct {
			Type string `json:"type"`
			*ExceptionInfo
		}{
			Type:          "generic",
			ExceptionInfo: e.Generic,
		}
		return json.Marshal(marshaler)
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

type ExceptionInfo struct {
	ExceptionType       string `json:"exceptionType" url:"exceptionType"`
	ExceptionMessage    string `json:"exceptionMessage" url:"exceptionMessage"`
	ExceptionStacktrace string `json:"exceptionStacktrace" url:"exceptionStacktrace"`

	_rawJSON json.RawMessage
}

func (e *ExceptionInfo) UnmarshalJSON(data []byte) error {
	type unmarshaler ExceptionInfo
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*e = ExceptionInfo(value)
	e._rawJSON = json.RawMessage(data)
	return nil
}

func (e *ExceptionInfo) String() string {
	if len(e._rawJSON) > 0 {
		if value, err := core.StringifyJSON(e._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(e); err == nil {
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
	Cast     []string               `json:"cast,omitempty" url:"cast,omitempty"`
	type_    string

	_rawJSON json.RawMessage
}

func (e *ExtendedMovie) Type() string {
	return e.type_
}

func (e *ExtendedMovie) UnmarshalJSON(data []byte) error {
	type embed ExtendedMovie
	var unmarshaler = struct {
		embed
	}{
		embed: embed(*e),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*e = ExtendedMovie(unmarshaler.embed)
	e.type_ = "movie"

	e._rawJSON = json.RawMessage(data)
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
	if len(e._rawJSON) > 0 {
		if value, err := core.StringifyJSON(e._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(e); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", e)
}

type File struct {
	Name     string `json:"name" url:"name"`
	Contents string `json:"contents" url:"contents"`

	_rawJSON json.RawMessage
}

func (f *File) UnmarshalJSON(data []byte) error {
	type unmarshaler File
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*f = File(value)
	f._rawJSON = json.RawMessage(data)
	return nil
}

func (f *File) String() string {
	if len(f._rawJSON) > 0 {
		if value, err := core.StringifyJSON(f._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(f); err == nil {
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

type Migration struct {
	Name   string          `json:"name" url:"name"`
	Status MigrationStatus `json:"status,omitempty" url:"status,omitempty"`

	_rawJSON json.RawMessage
}

func (m *Migration) UnmarshalJSON(data []byte) error {
	type unmarshaler Migration
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*m = Migration(value)
	m._rawJSON = json.RawMessage(data)
	return nil
}

func (m *Migration) String() string {
	if len(m._rawJSON) > 0 {
		if value, err := core.StringifyJSON(m._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(m); err == nil {
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

	_rawJSON json.RawMessage
}

func (m *Moment) UnmarshalJSON(data []byte) error {
	type embed Moment
	var unmarshaler = struct {
		embed
		Date     *core.Date     `json:"date"`
		Datetime *core.DateTime `json:"datetime"`
	}{
		embed: embed(*m),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*m = Moment(unmarshaler.embed)
	m.Date = unmarshaler.Date.Time()
	m.Datetime = unmarshaler.Datetime.Time()

	m._rawJSON = json.RawMessage(data)
	return nil
}

func (m *Moment) MarshalJSON() ([]byte, error) {
	type embed Moment
	var marshaler = struct {
		embed
		Date     *core.Date     `json:"date"`
		Datetime *core.DateTime `json:"datetime"`
	}{
		embed:    embed(*m),
		Date:     core.NewDate(m.Date),
		Datetime: core.NewDateTime(m.Datetime),
	}
	return json.Marshal(marshaler)
}

func (m *Moment) String() string {
	if len(m._rawJSON) > 0 {
		if value, err := core.StringifyJSON(m._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(m); err == nil {
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
	type_    string

	_rawJSON json.RawMessage
}

func (m *Movie) Type() string {
	return m.type_
}

func (m *Movie) UnmarshalJSON(data []byte) error {
	type embed Movie
	var unmarshaler = struct {
		embed
	}{
		embed: embed(*m),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*m = Movie(unmarshaler.embed)
	m.type_ = "movie"

	m._rawJSON = json.RawMessage(data)
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
	if len(m._rawJSON) > 0 {
		if value, err := core.StringifyJSON(m._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(m); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", m)
}

type MovieId = string

type Node struct {
	Name  string  `json:"name" url:"name"`
	Nodes []*Node `json:"nodes,omitempty" url:"nodes,omitempty"`
	Trees []*Tree `json:"trees,omitempty" url:"trees,omitempty"`

	_rawJSON json.RawMessage
}

func (n *Node) UnmarshalJSON(data []byte) error {
	type unmarshaler Node
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*n = Node(value)
	n._rawJSON = json.RawMessage(data)
	return nil
}

func (n *Node) String() string {
	if len(n._rawJSON) > 0 {
		if value, err := core.StringifyJSON(n._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(n); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", n)
}

type Request struct {
	Request interface{} `json:"request,omitempty" url:"request,omitempty"`

	_rawJSON json.RawMessage
}

func (r *Request) UnmarshalJSON(data []byte) error {
	type unmarshaler Request
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*r = Request(value)
	r._rawJSON = json.RawMessage(data)
	return nil
}

func (r *Request) String() string {
	if len(r._rawJSON) > 0 {
		if value, err := core.StringifyJSON(r._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(r); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", r)
}

type Response struct {
	Response interface{} `json:"response,omitempty" url:"response,omitempty"`

	_rawJSON json.RawMessage
}

func (r *Response) UnmarshalJSON(data []byte) error {
	type unmarshaler Response
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*r = Response(value)
	r._rawJSON = json.RawMessage(data)
	return nil
}

func (r *Response) String() string {
	if len(r._rawJSON) > 0 {
		if value, err := core.StringifyJSON(r._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(r); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", r)
}

type StuntDouble struct {
	Name             string `json:"name" url:"name"`
	ActorOrActressId string `json:"actorOrActressId" url:"actorOrActressId"`

	_rawJSON json.RawMessage
}

func (s *StuntDouble) UnmarshalJSON(data []byte) error {
	type unmarshaler StuntDouble
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*s = StuntDouble(value)
	s._rawJSON = json.RawMessage(data)
	return nil
}

func (s *StuntDouble) String() string {
	if len(s._rawJSON) > 0 {
		if value, err := core.StringifyJSON(s._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(s); err == nil {
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

func (t *Test) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	t.Type = unmarshaler.Type
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

type Tree struct {
	Nodes []*Node `json:"nodes,omitempty" url:"nodes,omitempty"`

	_rawJSON json.RawMessage
}

func (t *Tree) UnmarshalJSON(data []byte) error {
	type unmarshaler Tree
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*t = Tree(value)
	t._rawJSON = json.RawMessage(data)
	return nil
}

func (t *Tree) String() string {
	if len(t._rawJSON) > 0 {
		if value, err := core.StringifyJSON(t._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(t); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", t)
}
