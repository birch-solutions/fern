// This file was auto-generated by Fern from our API Definition.

package client

import (
	context "context"
	fern "github.com/package-yml/fern"
	core "github.com/package-yml/fern/core"
	internal "github.com/package-yml/fern/internal"
	option "github.com/package-yml/fern/option"
	service "github.com/package-yml/fern/service"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *internal.Caller
	header  http.Header

	Service *service.Client
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
		header:  options.ToHeader(),
		Service: service.NewClient(opts...),
	}
}

func (c *Client) Echo(
	ctx context.Context,
	id string,
	request *fern.EchoRequest,
	opts ...option.RequestOption,
) (string, error) {
	options := core.NewRequestOptions(opts...)

	baseURL := ""
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	if options.BaseURL != "" {
		baseURL = options.BaseURL
	}
	endpointURL := internal.EncodeURL(baseURL+"/%v/", id)

	headers := internal.MergeHeaders(c.header.Clone(), options.ToHeader())

	var response string
	if err := c.caller.Call(
		ctx,
		&internal.CallParams{
			URL:             endpointURL,
			Method:          http.MethodPost,
			MaxAttempts:     options.MaxAttempts,
			Headers:         headers,
			BodyProperties:  options.BodyProperties,
			QueryParameters: options.QueryParameters,
			Client:          options.HTTPClient,
			Request:         request,
			Response:        &response,
		},
	); err != nil {
		return "", err
	}
	return response, nil
}
