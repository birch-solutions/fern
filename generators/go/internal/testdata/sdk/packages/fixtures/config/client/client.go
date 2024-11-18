// This file was auto-generated by Fern from our API Definition.

package client

import (
	context "context"
	fixtures "github.com/fern-api/fern-go/internal/testdata/sdk/packages/fixtures"
	config "github.com/fern-api/fern-go/internal/testdata/sdk/packages/fixtures/config"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/packages/fixtures/core"
	internal "github.com/fern-api/fern-go/internal/testdata/sdk/packages/fixtures/internal"
	option "github.com/fern-api/fern-go/internal/testdata/sdk/packages/fixtures/option"
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

func (c *Client) CreateConfig(
	ctx context.Context,
	request *fixtures.CreateConfigRequest,
	opts ...option.RequestOption,
) (*config.Config, error) {
	options := core.NewRequestOptions(opts...)

	baseURL := "https://api.foo.io/v1"
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	if options.BaseURL != "" {
		baseURL = options.BaseURL
	}
	endpointURL := baseURL + "/config"

	headers := internal.MergeHeaders(c.header.Clone(), options.ToHeader())

	var response *config.Config
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
		return nil, err
	}
	return response, nil
}

func (c *Client) GetConfig(
	ctx context.Context,
	opts ...option.RequestOption,
) ([]*config.Config, error) {
	options := core.NewRequestOptions(opts...)

	baseURL := "https://api.foo.io/v1"
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	if options.BaseURL != "" {
		baseURL = options.BaseURL
	}
	endpointURL := baseURL + "/config"

	headers := internal.MergeHeaders(c.header.Clone(), options.ToHeader())

	var response []*config.Config
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
			Response:        &response,
		},
	); err != nil {
		return nil, err
	}
	return response, nil
}
