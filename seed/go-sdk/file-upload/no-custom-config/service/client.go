// This file was auto-generated by Fern from our API Definition.

package service

import (
	context "context"
	fmt "fmt"
	fern "github.com/file-upload/fern"
	core "github.com/file-upload/fern/core"
	internal "github.com/file-upload/fern/internal"
	option "github.com/file-upload/fern/option"
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

func (c *Client) Post(
	ctx context.Context,
	file io.Reader,
	fileList []io.Reader,
	maybeFile io.Reader,
	maybeFileList []io.Reader,
	request *fern.MyRequest,
	opts ...option.RequestOption,
) error {
	options := core.NewRequestOptions(opts...)
	baseURL := internal.ResolveBaseURL(
		options.BaseURL,
		c.baseURL,
		"",
	)
	endpointURL := baseURL
	headers := internal.MergeHeaders(
		c.header.Clone(),
		options.ToHeader(),
	)
	writer := internal.NewMultipartWriter()
	if err := writer.WriteFile("file", file); err != nil {
		return err
	}
	for _, f := range fileList {
		if err := writer.WriteFile("fileList", f); err != nil {
			return err
		}
	}
	if maybeFile != nil {
		if err := writer.WriteFile("maybeFile", maybeFile); err != nil {
			return err
		}
	}
	for _, f := range maybeFileList {
		if err := writer.WriteFile("maybeFileList", f); err != nil {
			return err
		}
	}
	if request.MaybeString != nil {
		if err := writer.WriteField("maybeString", fmt.Sprintf("%v", *request.MaybeString)); err != nil {
			return err
		}
	}
	if err := writer.WriteField("integer", fmt.Sprintf("%v", request.Integer)); err != nil {
		return err
	}
	if request.MaybeInteger != nil {
		if err := writer.WriteField("maybeInteger", fmt.Sprintf("%v", *request.MaybeInteger)); err != nil {
			return err
		}
	}
	for _, part := range request.OptionalListOfStrings {
		if err := writer.WriteField("optionalListOfStrings", fmt.Sprintf("%v", part)); err != nil {
			return err
		}
	}
	for _, part := range request.ListOfObjects {
		if err := writer.WriteJSON("listOfObjects", part); err != nil {
			return err
		}
	}
	if request.OptionalMetadata != nil {
		if err := writer.WriteJSON("optionalMetadata", request.OptionalMetadata); err != nil {
			return err
		}
	}
	if request.OptionalObjectType != nil {
		if err := writer.WriteJSON("optionalObjectType", *request.OptionalObjectType); err != nil {
			return err
		}
	}
	if request.OptionalId != nil {
		if err := writer.WriteJSON("optionalId", *request.OptionalId); err != nil {
			return err
		}
	}
	if err := writer.Close(); err != nil {
		return err
	}
	headers.Set("Content-Type", writer.ContentType())

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
			Request:         writer.Buffer(),
		},
	); err != nil {
		return err
	}
	return nil
}

func (c *Client) JustFile(
	ctx context.Context,
	file io.Reader,
	opts ...option.RequestOption,
) error {
	options := core.NewRequestOptions(opts...)
	baseURL := internal.ResolveBaseURL(
		options.BaseURL,
		c.baseURL,
		"",
	)
	endpointURL := baseURL + "/just-file"
	headers := internal.MergeHeaders(
		c.header.Clone(),
		options.ToHeader(),
	)
	writer := internal.NewMultipartWriter()
	if err := writer.WriteFile("file", file); err != nil {
		return err
	}
	if err := writer.Close(); err != nil {
		return err
	}
	headers.Set("Content-Type", writer.ContentType())

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
			Request:         writer.Buffer(),
		},
	); err != nil {
		return err
	}
	return nil
}

func (c *Client) JustFileWithQueryParams(
	ctx context.Context,
	file io.Reader,
	request *fern.JustFileWithQueryParamsRequet,
	opts ...option.RequestOption,
) error {
	options := core.NewRequestOptions(opts...)
	baseURL := internal.ResolveBaseURL(
		options.BaseURL,
		c.baseURL,
		"",
	)
	endpointURL := baseURL + "/just-file-with-query-params"
	queryParams, err := internal.QueryValues(request)
	if err != nil {
		return err
	}
	if len(queryParams) > 0 {
		endpointURL += "?" + queryParams.Encode()
	}
	headers := internal.MergeHeaders(
		c.header.Clone(),
		options.ToHeader(),
	)
	writer := internal.NewMultipartWriter()
	if err := writer.WriteFile("file", file); err != nil {
		return err
	}
	if err := writer.Close(); err != nil {
		return err
	}
	headers.Set("Content-Type", writer.ContentType())

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
			Request:         writer.Buffer(),
		},
	); err != nil {
		return err
	}
	return nil
}

func (c *Client) WithContentType(
	ctx context.Context,
	file io.Reader,
	request *fern.WithContentTypeRequest,
	opts ...option.RequestOption,
) error {
	options := core.NewRequestOptions(opts...)
	baseURL := internal.ResolveBaseURL(
		options.BaseURL,
		c.baseURL,
		"",
	)
	endpointURL := baseURL + "/with-content-type"
	headers := internal.MergeHeaders(
		c.header.Clone(),
		options.ToHeader(),
	)
	writer := internal.NewMultipartWriter()
	if err := writer.WriteFile("file", file, internal.WithDefaultContentType("application/octet-stream")); err != nil {
		return err
	}
	if err := writer.WriteField("foo", fmt.Sprintf("%v", request.Foo)); err != nil {
		return err
	}
	if err := writer.WriteJSON("bar", request.Bar, internal.WithDefaultContentType("application/json")); err != nil {
		return err
	}
	if request.Foobar != nil {
		if err := writer.WriteJSON("foobar", request.Foobar, internal.WithDefaultContentType("application/json")); err != nil {
			return err
		}
	}
	if err := writer.Close(); err != nil {
		return err
	}
	headers.Set("Content-Type", writer.ContentType())

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
			Request:         writer.Buffer(),
		},
	); err != nil {
		return err
	}
	return nil
}
