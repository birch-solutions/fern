// This file was auto-generated by Fern from our API Definition.

package client

import (
	core "github.com/fern-api/undiscriminated-go/core"
	option "github.com/fern-api/undiscriminated-go/option"
	union "github.com/fern-api/undiscriminated-go/union"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header

	Union *union.Client
}

func NewClient(opts ...option.RequestOption) *Client {
	options := core.NewRequestOptions(opts...)
	return &Client{
		baseURL: options.BaseURL,
		caller: core.NewCaller(
			&core.CallerParams{
				Client:      options.HTTPClient,
				MaxAttempts: options.MaxAttempts,
			},
		),
		header: options.ToHeader(),
		Union:  union.NewClient(opts...),
	}
}
