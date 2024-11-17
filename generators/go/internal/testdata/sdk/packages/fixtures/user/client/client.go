// This file was auto-generated by Fern from our API Definition.

package client

import (
	context "context"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/packages/fixtures/core"
	internal "github.com/fern-api/fern-go/internal/testdata/sdk/packages/fixtures/internal"
	option "github.com/fern-api/fern-go/internal/testdata/sdk/packages/fixtures/option"
	fixturesuser "github.com/fern-api/fern-go/internal/testdata/sdk/packages/fixtures/user"
	notificationclient "github.com/fern-api/fern-go/internal/testdata/sdk/packages/fixtures/user/notification/client"
	useruser "github.com/fern-api/fern-go/internal/testdata/sdk/packages/fixtures/user/user"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *internal.Caller
	header  http.Header

	Notification *notificationclient.Client
	User         *useruser.Client
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
		header:       options.ToHeader(),
		Notification: notificationclient.NewClient(opts...),
		User:         useruser.NewClient(opts...),
	}
}

func (c *Client) GetUser(
	ctx context.Context,
	user string,
	opts ...option.RequestOption,
) (*fixturesuser.User, error) {
	options := core.NewRequestOptions(opts...)

	baseURL := "https://api.foo.io/v1"
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	if options.BaseURL != "" {
		baseURL = options.BaseURL
	}
	endpointURL := internal.EncodeURL(baseURL+"/users/%v", user)

	headers := internal.MergeHeaders(c.header.Clone(), options.ToHeader())

	var response *fixturesuser.User
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
