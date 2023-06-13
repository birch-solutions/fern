// Generated by Fern. Do not edit.

package api

import (
	json "encoding/json"
	fmt "fmt"
)

type UnionWithLiteral struct {
	Type     string
	fern     string
	extended string
	base     string
}

func NewUnionWithLiteralWithFern() *UnionWithLiteral {
	return &UnionWithLiteral{Type: "fern", fern: "fern"}
}

func (u *UnionWithLiteral) Extended() string {
	return u.extended
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
	u.extended = "extended"
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
			Type     string `json:"type"`
			Extended string `json:"extended"`
			Base     string `json:"base"`
			Fern     string `json:"value"`
		}{
			Type:     u.Type,
			Extended: "extended",
			Base:     "base",
			Fern:     "fern",
		}
		return json.Marshal(marshaler)
	}
}

type UnionWithLiteralVisitor interface {
	VisitFern(string) error
}

func (u *UnionWithLiteral) Accept(v UnionWithLiteralVisitor) error {
	switch u.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", u.Type, u)
	case "fern":
		return v.VisitFern(u.fern)
	}
}
