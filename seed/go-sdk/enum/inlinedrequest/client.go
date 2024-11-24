// This file was auto-generated by Fern from our API Definition.

package inlinedrequest

import (
	context "context"
	fern "github.com/enum/fern"
	core "github.com/enum/fern/core"
	internal "github.com/enum/fern/internal"
	option "github.com/enum/fern/option"
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

func (c *Client) Send(
	ctx context.Context,
	request *fern.SendEnumInlinedRequest,
	opts ...option.RequestOption,
) error {
	options := core.NewRequestOptions(opts...)
	baseURL := internal.ResolveBaseURL(
		options.BaseURL,
		c.baseURL,
		"",
	)
	endpointURL := baseURL + "/inlined"
	headers := internal.MergeHeaders(
		c.header.Clone(),
		options.ToHeader(),
	)

	if err := c.caller.Call(
		ctx,
		&internal.CallParams{
			URL:             endpointURL,
			Method:          http.MethodPost,
			Headers:         headers,
			MaxAttempts:     options.MaxAttempts,
			BodyProperties:  options.BodyProperties,
			QueryParameters: options.QueryParameters,
			Client:          options.HTTPClient,
			Request:         request,
		},
	); err != nil {
		return err
	}
	return nil
}
