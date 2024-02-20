// This file was auto-generated by Fern from our API Definition.

package fileupload

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/file-upload/fern/core"
)

type MaybeList struct {
	typeName        string
	String          string
	StringList      []string
	Integer         int
	IntegerList     []int
	IntegerListList [][]int
}

func NewMaybeListFromString(value string) *MaybeList {
	return &MaybeList{typeName: "string", String: value}
}

func NewMaybeListFromStringList(value []string) *MaybeList {
	return &MaybeList{typeName: "stringList", StringList: value}
}

func NewMaybeListFromInteger(value int) *MaybeList {
	return &MaybeList{typeName: "integer", Integer: value}
}

func NewMaybeListFromIntegerList(value []int) *MaybeList {
	return &MaybeList{typeName: "integerList", IntegerList: value}
}

func NewMaybeListFromIntegerListList(value [][]int) *MaybeList {
	return &MaybeList{typeName: "integerListList", IntegerListList: value}
}

func (m *MaybeList) UnmarshalJSON(data []byte) error {
	var valueString string
	if err := json.Unmarshal(data, &valueString); err == nil {
		m.typeName = "string"
		m.String = valueString
		return nil
	}
	var valueStringList []string
	if err := json.Unmarshal(data, &valueStringList); err == nil {
		m.typeName = "stringList"
		m.StringList = valueStringList
		return nil
	}
	var valueInteger int
	if err := json.Unmarshal(data, &valueInteger); err == nil {
		m.typeName = "integer"
		m.Integer = valueInteger
		return nil
	}
	var valueIntegerList []int
	if err := json.Unmarshal(data, &valueIntegerList); err == nil {
		m.typeName = "integerList"
		m.IntegerList = valueIntegerList
		return nil
	}
	var valueIntegerListList [][]int
	if err := json.Unmarshal(data, &valueIntegerListList); err == nil {
		m.typeName = "integerListList"
		m.IntegerListList = valueIntegerListList
		return nil
	}
	return fmt.Errorf("%s cannot be deserialized as a %T", data, m)
}

func (m MaybeList) MarshalJSON() ([]byte, error) {
	switch m.typeName {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", m.typeName, m)
	case "string":
		return json.Marshal(m.String)
	case "stringList":
		return json.Marshal(m.StringList)
	case "integer":
		return json.Marshal(m.Integer)
	case "integerList":
		return json.Marshal(m.IntegerList)
	case "integerListList":
		return json.Marshal(m.IntegerListList)
	}
}

type MaybeListVisitor interface {
	VisitString(string) error
	VisitStringList([]string) error
	VisitInteger(int) error
	VisitIntegerList([]int) error
	VisitIntegerListList([][]int) error
}

func (m *MaybeList) Accept(visitor MaybeListVisitor) error {
	switch m.typeName {
	default:
		return fmt.Errorf("invalid type %s in %T", m.typeName, m)
	case "string":
		return visitor.VisitString(m.String)
	case "stringList":
		return visitor.VisitStringList(m.StringList)
	case "integer":
		return visitor.VisitInteger(m.Integer)
	case "integerList":
		return visitor.VisitIntegerList(m.IntegerList)
	case "integerListList":
		return visitor.VisitIntegerListList(m.IntegerListList)
	}
}

type MaybeListOrSet struct {
	typeName        string
	String          string
	StringList      []string
	Integer         int
	IntegerList     []int
	IntegerListList [][]int
	StringSet       []string
}

func NewMaybeListOrSetFromString(value string) *MaybeListOrSet {
	return &MaybeListOrSet{typeName: "string", String: value}
}

func NewMaybeListOrSetFromStringList(value []string) *MaybeListOrSet {
	return &MaybeListOrSet{typeName: "stringList", StringList: value}
}

func NewMaybeListOrSetFromInteger(value int) *MaybeListOrSet {
	return &MaybeListOrSet{typeName: "integer", Integer: value}
}

func NewMaybeListOrSetFromIntegerList(value []int) *MaybeListOrSet {
	return &MaybeListOrSet{typeName: "integerList", IntegerList: value}
}

func NewMaybeListOrSetFromIntegerListList(value [][]int) *MaybeListOrSet {
	return &MaybeListOrSet{typeName: "integerListList", IntegerListList: value}
}

func NewMaybeListOrSetFromStringSet(value []string) *MaybeListOrSet {
	return &MaybeListOrSet{typeName: "stringSet", StringSet: value}
}

func (m *MaybeListOrSet) UnmarshalJSON(data []byte) error {
	var valueString string
	if err := json.Unmarshal(data, &valueString); err == nil {
		m.typeName = "string"
		m.String = valueString
		return nil
	}
	var valueStringList []string
	if err := json.Unmarshal(data, &valueStringList); err == nil {
		m.typeName = "stringList"
		m.StringList = valueStringList
		return nil
	}
	var valueInteger int
	if err := json.Unmarshal(data, &valueInteger); err == nil {
		m.typeName = "integer"
		m.Integer = valueInteger
		return nil
	}
	var valueIntegerList []int
	if err := json.Unmarshal(data, &valueIntegerList); err == nil {
		m.typeName = "integerList"
		m.IntegerList = valueIntegerList
		return nil
	}
	var valueIntegerListList [][]int
	if err := json.Unmarshal(data, &valueIntegerListList); err == nil {
		m.typeName = "integerListList"
		m.IntegerListList = valueIntegerListList
		return nil
	}
	var valueStringSet []string
	if err := json.Unmarshal(data, &valueStringSet); err == nil {
		m.typeName = "stringSet"
		m.StringSet = valueStringSet
		return nil
	}
	return fmt.Errorf("%s cannot be deserialized as a %T", data, m)
}

func (m MaybeListOrSet) MarshalJSON() ([]byte, error) {
	switch m.typeName {
	default:
		return nil, fmt.Errorf("invalid type %s in %T", m.typeName, m)
	case "string":
		return json.Marshal(m.String)
	case "stringList":
		return json.Marshal(m.StringList)
	case "integer":
		return json.Marshal(m.Integer)
	case "integerList":
		return json.Marshal(m.IntegerList)
	case "integerListList":
		return json.Marshal(m.IntegerListList)
	case "stringSet":
		return json.Marshal(m.StringSet)
	}
}

type MaybeListOrSetVisitor interface {
	VisitString(string) error
	VisitStringList([]string) error
	VisitInteger(int) error
	VisitIntegerList([]int) error
	VisitIntegerListList([][]int) error
	VisitStringSet([]string) error
}

func (m *MaybeListOrSet) Accept(visitor MaybeListOrSetVisitor) error {
	switch m.typeName {
	default:
		return fmt.Errorf("invalid type %s in %T", m.typeName, m)
	case "string":
		return visitor.VisitString(m.String)
	case "stringList":
		return visitor.VisitStringList(m.StringList)
	case "integer":
		return visitor.VisitInteger(m.Integer)
	case "integerList":
		return visitor.VisitIntegerList(m.IntegerList)
	case "integerListList":
		return visitor.VisitIntegerListList(m.IntegerListList)
	case "stringSet":
		return visitor.VisitStringSet(m.StringSet)
	}
}

type MyObject struct {
	Foo string `json:"foo" url:"foo"`
}

func (m *MyObject) String() string {
	if value, err := core.StringifyJSON(m); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", m)
}
