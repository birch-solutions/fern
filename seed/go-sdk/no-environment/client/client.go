// This file was auto-generated by Fern from our API Definition.

package client

import (
	core "github.com/no-environment/fern/core"
	dummy "github.com/no-environment/fern/dummy"
	option "github.com/no-environment/fern/option"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header

	Dummy *dummy.Client
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
		Dummy:  dummy.NewClient(opts...),
	}
}
