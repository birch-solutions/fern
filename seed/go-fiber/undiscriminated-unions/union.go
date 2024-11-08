// This file was auto-generated by Fern from our API Definition.

package undiscriminatedunions

import (
	json "encoding/json"
	fmt "fmt"
)

// Undiscriminated unions can act as a map key
// as long as all of their values are valid keys
// (i.e. do they have a valid string representation).
type Metadata = map[*Key]string

// Several different types are accepted.
type MyUnion struct {
	String          string
	StringList      []string
	Integer         int
	IntegerList     []int
	IntegerListList [][]int
	StringSet       []string

	typ string
}

func NewMyUnionFromString(value string) *MyUnion {
	return &MyUnion{typ: "String", String: value}
}

func NewMyUnionFromStringList(value []string) *MyUnion {
	return &MyUnion{typ: "StringList", StringList: value}
}

func NewMyUnionFromInteger(value int) *MyUnion {
	return &MyUnion{typ: "Integer", Integer: value}
}

func NewMyUnionFromIntegerList(value []int) *MyUnion {
	return &MyUnion{typ: "IntegerList", IntegerList: value}
}

func NewMyUnionFromIntegerListList(value [][]int) *MyUnion {
	return &MyUnion{typ: "IntegerListList", IntegerListList: value}
}

func NewMyUnionFromStringSet(value []string) *MyUnion {
	return &MyUnion{typ: "StringSet", StringSet: value}
}

func (m *MyUnion) GetString() string {
	if m == nil {
		return ""
	}
	return m.String
}

func (m *MyUnion) GetStringList() []string {
	if m == nil {
		return nil
	}
	return m.StringList
}

func (m *MyUnion) GetInteger() int {
	if m == nil {
		return 0
	}
	return m.Integer
}

func (m *MyUnion) GetIntegerList() []int {
	if m == nil {
		return nil
	}
	return m.IntegerList
}

func (m *MyUnion) GetIntegerListList() [][]int {
	if m == nil {
		return nil
	}
	return m.IntegerListList
}

func (m *MyUnion) GetStringSet() []string {
	if m == nil {
		return nil
	}
	return m.StringSet
}

func (m *MyUnion) UnmarshalJSON(data []byte) error {
	var valueString string
	if err := json.Unmarshal(data, &valueString); err == nil {
		m.typ = "String"
		m.String = valueString
		return nil
	}
	var valueStringList []string
	if err := json.Unmarshal(data, &valueStringList); err == nil {
		m.typ = "StringList"
		m.StringList = valueStringList
		return nil
	}
	var valueInteger int
	if err := json.Unmarshal(data, &valueInteger); err == nil {
		m.typ = "Integer"
		m.Integer = valueInteger
		return nil
	}
	var valueIntegerList []int
	if err := json.Unmarshal(data, &valueIntegerList); err == nil {
		m.typ = "IntegerList"
		m.IntegerList = valueIntegerList
		return nil
	}
	var valueIntegerListList [][]int
	if err := json.Unmarshal(data, &valueIntegerListList); err == nil {
		m.typ = "IntegerListList"
		m.IntegerListList = valueIntegerListList
		return nil
	}
	var valueStringSet []string
	if err := json.Unmarshal(data, &valueStringSet); err == nil {
		m.typ = "StringSet"
		m.StringSet = valueStringSet
		return nil
	}
	return fmt.Errorf("%s cannot be deserialized as a %T", data, m)
}

func (m MyUnion) MarshalJSON() ([]byte, error) {
	if m.typ == "String" || m.String != "" {
		return json.Marshal(m.String)
	}
	if m.typ == "StringList" || m.StringList != nil {
		return json.Marshal(m.StringList)
	}
	if m.typ == "Integer" || m.Integer != 0 {
		return json.Marshal(m.Integer)
	}
	if m.typ == "IntegerList" || m.IntegerList != nil {
		return json.Marshal(m.IntegerList)
	}
	if m.typ == "IntegerListList" || m.IntegerListList != nil {
		return json.Marshal(m.IntegerListList)
	}
	if m.typ == "StringSet" || m.StringSet != nil {
		return json.Marshal(m.StringSet)
	}
	return nil, fmt.Errorf("type %T does not include a non-empty union type", m)
}

type MyUnionVisitor interface {
	VisitString(string) error
	VisitStringList([]string) error
	VisitInteger(int) error
	VisitIntegerList([]int) error
	VisitIntegerListList([][]int) error
	VisitStringSet([]string) error
}

func (m *MyUnion) Accept(visitor MyUnionVisitor) error {
	if m.typ == "String" || m.String != "" {
		return visitor.VisitString(m.String)
	}
	if m.typ == "StringList" || m.StringList != nil {
		return visitor.VisitStringList(m.StringList)
	}
	if m.typ == "Integer" || m.Integer != 0 {
		return visitor.VisitInteger(m.Integer)
	}
	if m.typ == "IntegerList" || m.IntegerList != nil {
		return visitor.VisitIntegerList(m.IntegerList)
	}
	if m.typ == "IntegerListList" || m.IntegerListList != nil {
		return visitor.VisitIntegerListList(m.IntegerListList)
	}
	if m.typ == "StringSet" || m.StringSet != nil {
		return visitor.VisitStringSet(m.StringSet)
	}
	return fmt.Errorf("type %T does not include a non-empty union type", m)
}
