// This file was auto-generated by Fern from our API Definition.

package optional

import (
	context "context"
	core "github.com/optional/fern/core"
	internal "github.com/optional/fern/internal"
	option "github.com/optional/fern/option"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *internal.Caller
	header  http.Header
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
		header: options.ToHeader(),
	}
}

func (c *Client) SendOptionalBody(
	ctx context.Context,
	request map[string]interface{},
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
	endpointURL := baseURL + "/send-optional-body"

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
