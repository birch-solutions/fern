// This file was auto-generated by Fern from our API Definition.

package unions

import (
	json "encoding/json"
	fmt "fmt"
)

type Shape struct {
	Type   string
	Id     string
	Circle *Circle
	Square *Square
}

func NewShapeFromCircle(value *Circle) *Shape {
	return &Shape{Type: "circle", Circle: value}
}

func NewShapeFromSquare(value *Square) *Shape {
	return &Shape{Type: "square", Square: value}
}

func (s *Shape) UnmarshalJSON(data []byte) error {
	var unmarshaler struct {
		Type string `json:"type"`
		Id   string `json:"id"`
	}
	if err := json.Unmarshal(data, &unmarshaler); err != nil {
		return err
	}
	s.Type = unmarshaler.Type
	s.Id = unmarshaler.Id
	switch unmarshaler.Type {
	case "circle":
		value := new(Circle)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		s.Circle = value
	case "square":
		value := new(Square)
		if err := json.Unmarshal(data, &value); err != nil {
			return err
		}
		s.Square = value
	}
	return nil
}

func (s Shape) MarshalJSON() ([]byte, error) {
	switch s.Type {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", s.Type, s)
	case "circle":
		var marshaler = struct {
			Type string `json:"type"`
			Id   string `json:"id"`
			*Circle
		}{
			Type:   "circle",
			Id:     s.Id,
			Circle: s.Circle,
		}
		return json.Marshal(marshaler)
	case "square":
		var marshaler = struct {
			Type string `json:"type"`
			Id   string `json:"id"`
			*Square
		}{
			Type:   "square",
			Id:     s.Id,
			Square: s.Square,
		}
		return json.Marshal(marshaler)
	}
}

type ShapeVisitor interface {
	VisitCircle(*Circle) error
	VisitSquare(*Square) error
}

func (s *Shape) Accept(visitor ShapeVisitor) error {
	switch s.Type {
	default:
		return fmt.Errorf("invalid type %s in %T", s.Type, s)
	case "circle":
		return visitor.VisitCircle(s.Circle)
	case "square":
		return visitor.VisitSquare(s.Square)
	}
}
