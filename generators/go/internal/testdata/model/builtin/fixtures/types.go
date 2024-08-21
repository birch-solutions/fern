// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/fern-api/fern-go/internal/testdata/model/builtin/fixtures/core"
	uuid "github.com/google/uuid"
	time "time"
)

type Type struct {
	One       int              `json:"one" url:"one"`
	Two       float64          `json:"two" url:"two"`
	Three     string           `json:"three" url:"three"`
	Four      bool             `json:"four" url:"four"`
	Five      int64            `json:"five" url:"five"`
	Six       time.Time        `json:"six" url:"six"`
	Seven     time.Time        `json:"seven" url:"seven" format:"date"`
	Eight     uuid.UUID        `json:"eight" url:"eight"`
	Nine      []byte           `json:"nine" url:"nine"`
	Ten       []int            `json:"ten,omitempty" url:"ten,omitempty"`
	Eleven    []float64        `json:"eleven,omitempty" url:"eleven,omitempty"`
	Twelve    map[string]bool  `json:"twelve,omitempty" url:"twelve,omitempty"`
	Thirteen  *int64           `json:"thirteen,omitempty" url:"thirteen,omitempty"`
	Fourteen  interface{}      `json:"fourteen,omitempty" url:"fourteen,omitempty"`
	Fifteen   [][]int          `json:"fifteen,omitempty" url:"fifteen,omitempty"`
	Sixteen   []map[string]int `json:"sixteen,omitempty" url:"sixteen,omitempty"`
	Seventeen []*uuid.UUID     `json:"seventeen,omitempty" url:"seventeen,omitempty"`
	Nineteen  *time.Time       `json:"nineteen,omitempty" url:"nineteen,omitempty"`
	Twenty    *time.Time       `json:"twenty,omitempty" url:"twenty,omitempty" format:"date"`
	eighteen  string

	extraProperties map[string]interface{}
}

func (t *Type) GetExtraProperties() map[string]interface{} {
	return t.extraProperties
}

func (t *Type) Eighteen() string {
	return t.eighteen
}

func (t *Type) UnmarshalJSON(data []byte) error {
	type embed Type
	var unmarshaler = struct {
		embed
		Six      *core.DateTime `json:"six"`
		Seven    *core.Date     `json:"seven"`
		Nineteen *core.DateTime `json:"nineteen,omitempty"`
		Twenty   *core.Date     `json:"twenty,omitempty"`
		Eighteen string         `json:"eighteen"`
	}{
		embed: embed(*t),
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	*t = Type(unmarshaler.embed)
	t.Six = unmarshaler.Six.Time()
	t.Seven = unmarshaler.Seven.Time()
	t.Nineteen = unmarshaler.Nineteen.TimePtr()
	t.Twenty = unmarshaler.Twenty.TimePtr()
	if unmarshaler.Eighteen != "fern" {
		return fmt.Errorf("unexpected value for literal on type %T; expected %v got %v", t, "fern", unmarshaler.Eighteen)
	}
	t.eighteen = unmarshaler.Eighteen

	extraProperties, err := core.ExtractExtraProperties(data, *t, "eighteen")
	if err != nil {
		return err
	}
	t.extraProperties = extraProperties

	return nil
}

func (t *Type) MarshalJSON() ([]byte, error) {
	type embed Type
	var marshaler = struct {
		embed
		Six      *core.DateTime `json:"six"`
		Seven    *core.Date     `json:"seven"`
		Nineteen *core.DateTime `json:"nineteen,omitempty"`
		Twenty   *core.Date     `json:"twenty,omitempty"`
		Eighteen string         `json:"eighteen"`
	}{
		embed:    embed(*t),
		Six:      core.NewDateTime(t.Six),
		Seven:    core.NewDate(t.Seven),
		Nineteen: core.NewOptionalDateTime(t.Nineteen),
		Twenty:   core.NewOptionalDate(t.Twenty),
		Eighteen: "fern",
	}
	return json.Marshal(marshaler)
}

func (t *Type) String() string {
	if value, err := core.StringifyJSON(t); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", t)
}
