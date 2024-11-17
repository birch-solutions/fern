// This file was auto-generated by Fern from our API Definition.

package client

import (
	core "github.com/custom-auth/fern/core"
	customauth "github.com/custom-auth/fern/customauth"
	internal "github.com/custom-auth/fern/internal"
	option "github.com/custom-auth/fern/option"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *internal.Caller
	header  http.Header

	CustomAuth *customauth.Client
}

func NewClient(opts ...option.RequestOption) *Client {
	options := core.NewRequestOptions(opts...)
	return &Client{
		baseURL: options.BaseURL,
		caller: internal.NewCaller(
			&internal.CallerParams{
				Client:      options.HTTPClient,
				MaxAttempts: options.MaxAttempts,
			},
		),
		header:     options.ToHeader(),
		CustomAuth: customauth.NewClient(opts...),
	}
}
