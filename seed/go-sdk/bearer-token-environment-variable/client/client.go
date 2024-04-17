// This file was auto-generated by Fern from our API Definition.

package client

import (
	core "github.com/bearer-token-environment-variable/fern/core"
	option "github.com/bearer-token-environment-variable/fern/option"
	service "github.com/bearer-token-environment-variable/fern/service"
	http "net/http"
	os "os"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header

	Service *service.Client
}

func NewClient(opts ...option.RequestOption) *Client {
	options := core.NewRequestOptions(opts...)
	if options.ApiKey == "" {
		options.ApiKey = os.Getenv("COURIER_API_KEY")
	}
	return &Client{
		baseURL: options.BaseURL,
		caller: core.NewCaller(
			&core.CallerParams{
				Client:      options.HTTPClient,
				MaxAttempts: options.MaxAttempts,
			},
		),
		header:  options.ToHeader(),
		Service: service.NewClient(opts...),
	}
}
