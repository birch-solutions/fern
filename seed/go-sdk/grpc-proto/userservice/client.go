// This file was auto-generated by Fern from our API Definition.

package userservice

import (
	context "context"
	fern "github.com/grpc-proto/fern"
	core "github.com/grpc-proto/fern/core"
	option "github.com/grpc-proto/fern/option"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header
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
	}
}

func (c *Client) Create(
	ctx context.Context,
	request *fern.CreateRequest,
	opts ...option.RequestOption,
) (*fern.CreateResponse, error) {
	options := core.NewRequestOptions(opts...)

	baseURL := ""
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	if options.BaseURL != "" {
		baseURL = options.BaseURL
	}
	endpointURL := baseURL + "/users"

	headers := core.MergeHeaders(c.header.Clone(), options.ToHeader())

	var response *fern.CreateResponse
	if err := c.caller.Call(
		ctx,
		&core.CallParams{
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
		return nil, err
	}
	return response, nil
}
