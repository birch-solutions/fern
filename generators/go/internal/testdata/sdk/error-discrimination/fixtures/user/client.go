// This file was auto-generated by Fern from our API Definition.

package user

import (
	bytes "bytes"
	context "context"
	json "encoding/json"
	errors "errors"
	fixtures "github.com/fern-api/fern-go/internal/testdata/sdk/error-discrimination/fixtures"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/error-discrimination/fixtures/core"
	option "github.com/fern-api/fern-go/internal/testdata/sdk/error-discrimination/fixtures/option"
	io "io"
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

func (c *Client) Get(
	ctx context.Context,
	id string,
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
	endpointURL := core.EncodeURL(baseURL+"/%v", id)

	headers := core.MergeHeaders(c.header.Clone(), options.ToHeader())

	errorDecoder := func(statusCode int, body io.Reader) error {
		raw, err := io.ReadAll(body)
		if err != nil {
			return err
		}
		apiError := core.NewAPIError(statusCode, errors.New(string(raw)))
		decoder := json.NewDecoder(bytes.NewReader(raw))
		var discriminant struct {
			ErrorName string          `json:"errorName"`
			Content   json.RawMessage `json:"content"`
		}
		if err := decoder.Decode(&discriminant); err != nil {
			return apiError
		}
		switch discriminant.ErrorName {
		case "OrganizationNotFoundError":
			value := new(fixtures.OrganizationNotFoundError)
			value.APIError = apiError
			if err := json.Unmarshal(discriminant.Content, value); err != nil {
				return apiError
			}
			return value
		case "UserNotFoundError":
			value := new(fixtures.UserNotFoundError)
			value.APIError = apiError
			if err := json.Unmarshal(discriminant.Content, value); err != nil {
				return apiError
			}
			return value
		case "NotFoundError":
			value := new(fixtures.NotFoundError)
			value.APIError = apiError
			if err := json.Unmarshal(discriminant.Content, value); err != nil {
				return apiError
			}
			return value
		case "UntypedNotFoundError":
			value := new(fixtures.UntypedNotFoundError)
			value.APIError = apiError
			if err := json.Unmarshal(discriminant.Content, value); err != nil {
				return apiError
			}
			return value
		}
		return apiError
	}

	var response string
	if err := c.caller.Call(
		ctx,
		&core.CallParams{
			URL:             endpointURL,
			Method:          http.MethodGet,
			MaxAttempts:     options.MaxAttempts,
			Headers:         headers,
			BodyProperties:  options.BodyProperties,
			QueryParameters: options.QueryParameters,
			Client:          options.HTTPClient,
			Response:        &response,
			ErrorDecoder:    errorDecoder,
		},
	); err != nil {
		return "", err
	}
	return response, nil
}
