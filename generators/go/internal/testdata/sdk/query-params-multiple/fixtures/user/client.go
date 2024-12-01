// This file was auto-generated by Fern from our API Definition.

package user

import (
	context "context"
	fmt "fmt"
	fixtures "github.com/fern-api/fern-go/internal/testdata/sdk/query-params-multiple/fixtures"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/query-params-multiple/fixtures/core"
	internal "github.com/fern-api/fern-go/internal/testdata/sdk/query-params-multiple/fixtures/internal"
	option "github.com/fern-api/fern-go/internal/testdata/sdk/query-params-multiple/fixtures/option"
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

func (c *Client) GetAllUsers(
	ctx context.Context,
	request *fixtures.GetAllUsersRequest,
	opts ...option.RequestOption,
) (string, error) {
	options := core.NewRequestOptions(opts...)
	baseURL := internal.ResolveBaseURL(
		options.BaseURL,
		c.baseURL,
		"",
	)
	endpointURL := baseURL + "/users/all"
	queryParams, err := internal.QueryValues(request)
	if err != nil {
		return "", err
	}
	if len(queryParams) > 0 {
		endpointURL += "?" + queryParams.Encode()
	}
	headers := internal.MergeHeaders(
		c.header.Clone(),
		options.ToHeader(),
	)
	headers.Add("X-Endpoint-Header", fmt.Sprintf("%v", request.XEndpointHeader))

	var response string
	if err := c.caller.Call(
		ctx,
		&internal.CallParams{
			URL:             endpointURL,
			Method:          http.MethodGet,
			Headers:         headers,
			MaxAttempts:     options.MaxAttempts,
			BodyProperties:  options.BodyProperties,
			QueryParameters: options.QueryParameters,
			Client:          options.HTTPClient,
			Response:        &response,
		},
	); err != nil {
		return "", err
	}
	return response, nil
}
