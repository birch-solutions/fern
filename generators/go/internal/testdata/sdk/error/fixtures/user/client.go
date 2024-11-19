// This file was auto-generated by Fern from our API Definition.

package user

import (
	bytes "bytes"
	context "context"
	json "encoding/json"
	errors "errors"
	io "io"
	http "net/http"

	fixtures "github.com/fern-api/fern-go/internal/testdata/sdk/error/fixtures"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/error/fixtures/core"
	internal "github.com/fern-api/fern-go/internal/testdata/sdk/error/fixtures/internal"
	option "github.com/fern-api/fern-go/internal/testdata/sdk/error/fixtures/option"
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

func (c *Client) Get(
	ctx context.Context,
	id string,
	opts ...option.RequestOption,
) (string, error) {
	options := core.NewRequestOptions(opts...)
	baseURL := internal.ResolveBaseURL(
		"",
		c.baseURL,
		options.BaseURL,
	)
	endpointURL := internal.EncodeURL(
		baseURL+"/%v",
		id,
	)
	headers := internal.MergeHeaders(
		c.header.Clone(),
		options.ToHeader(),
	)
	errorCodes := map[int]func() error{
		400: func() error {
			return new(fixtures.UntypedError)
		},
		404: func() error {
			return new(fixtures.UserNotFoundError)
		},
		418: func() error {
			return new(fixtures.TeapotError)
		},
		426: func() error {
			return new(fixtures.UpgradeError)
		},
		501: func() error {
			return new(fixtures.NotImplementedError)
		},
	}

	var response string
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
			ErrorDecoder:    internal.NewErrorDecoder(errorCodes),
		},
	); err != nil {
		return "", err
	}
	return response, nil
}

func (c *Client) Update(
	ctx context.Context,
	id string,
	request string,
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
	endpointURL := internal.EncodeURL(baseURL+"/%v", id)

	headers := internal.MergeHeaders(c.header.Clone(), options.ToHeader())

	errorDecoder := func(statusCode int, body io.Reader) error {
		raw, err := io.ReadAll(body)
		if err != nil {
			return err
		}
		apiError := core.NewAPIError(statusCode, errors.New(string(raw)))
		decoder := json.NewDecoder(bytes.NewReader(raw))
		switch statusCode {
		case 426:
			value := new(fixtures.UpgradeError)
			value.APIError = apiError
			if err := decoder.Decode(value); err != nil {
				return apiError
			}
			return value
		case 400:
			value := new(fixtures.UntypedError)
			value.APIError = apiError
			if err := decoder.Decode(value); err != nil {
				return apiError
			}
			return value
		}
		return apiError
	}

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
			ErrorDecoder:    errorDecoder,
		},
	); err != nil {
		return "", err
	}
	return response, nil
}
