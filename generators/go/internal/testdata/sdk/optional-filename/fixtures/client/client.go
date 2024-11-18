// This file was auto-generated by Fern from our API Definition.

package client

import (
	core "github.com/fern-api/fern-go/internal/testdata/sdk/optional-filename/fixtures/core"
	internal "github.com/fern-api/fern-go/internal/testdata/sdk/optional-filename/fixtures/internal"
	option "github.com/fern-api/fern-go/internal/testdata/sdk/optional-filename/fixtures/option"
	optional "github.com/fern-api/fern-go/internal/testdata/sdk/optional-filename/fixtures/optional"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *internal.Caller
	header  http.Header

	Optional *optional.Client
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
		header:   options.ToHeader(),
		Optional: optional.NewClient(opts...),
	}
}
