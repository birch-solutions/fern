// This file was auto-generated by Fern from our API Definition.

package file

import (
	bytes "bytes"
	context "context"
	core "github.com/acme/acme-go/core"
	internal "github.com/acme/acme-go/internal"
	option "github.com/acme/acme-go/option"
	io "io"
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

func (c *Client) Download(
	ctx context.Context,
	filename string,
	opts ...option.RequestOption,
) (io.Reader, error) {
	options := core.NewRequestOptions(opts...)

	baseURL := "https://core.yoursite.com"
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	if options.BaseURL != "" {
		baseURL = options.BaseURL
	}
	endpointURL := internal.EncodeURL(baseURL+"/file/%v/download", filename)

	headers := internal.MergeHeaders(c.header.Clone(), options.ToHeader())

	response := bytes.NewBuffer(nil)
	if err := c.caller.Call(
		ctx,
		&internal.CallParams{
			URL:             endpointURL,
			Method:          http.MethodGet,
			MaxAttempts:     options.MaxAttempts,
			Headers:         headers,
			BodyProperties:  options.BodyProperties,
			QueryParameters: options.QueryParameters,
			Client:          options.HTTPClient,
			Response:        response,
		},
	); err != nil {
		return nil, err
	}
	return response, nil
}
