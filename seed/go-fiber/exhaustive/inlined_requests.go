// This file was auto-generated by Fern from our API Definition.

package exhaustive

import (
	types "github.com/exhaustive/fern/types"
)

type PostWithObjectBody struct {
	String       string                         `json:"string" url:"-"`
	Integer      int                            `json:"integer" url:"-"`
	NestedObject *types.ObjectWithOptionalField `json:"NestedObject" url:"-"`
}
