// This file was auto-generated by Fern from our API Definition.

package service

import (
	bytes "bytes"
	context "context"
	fmt "fmt"
	fern "github.com/file-upload/fern"
	core "github.com/file-upload/fern/core"
	option "github.com/file-upload/fern/option"
	io "io"
	multipart "mime/multipart"
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

	baseURL := ""
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	if options.BaseURL != "" {
		baseURL = options.BaseURL
	}
	endpointURL := baseURL

	headers := core.MergeHeaders(c.header.Clone(), options.ToHeader())

	requestBuffer := bytes.NewBuffer(nil)
	writer := multipart.NewWriter(requestBuffer)
	fileFilename := "file_filename"
	if named, ok := file.(interface{ Name() string }); ok {
		fileFilename = named.Name()
	}
	filePart, err := writer.CreateFormFile("file", fileFilename)
	if err != nil {
		return err
	}
	if _, err := io.Copy(filePart, file); err != nil {
		return err
	}
	for i, f := range fileList {
		fileListFilename := fmt.Sprintf("fileList_filename_%d", i)
		if named, ok := f.(interface{ Name() string }); ok {
			fileListFilename = named.Name()
		}
		fileListPart, err := writer.CreateFormFile("fileList", fileListFilename)
		if err != nil {
			return err
		}
		if _, err := io.Copy(fileListPart, f); err != nil {
			return err
		}
	}
	if maybeFile != nil {
		maybeFileFilename := "maybeFile_filename"
		if named, ok := maybeFile.(interface{ Name() string }); ok {
			maybeFileFilename = named.Name()
		}
		maybeFilePart, err := writer.CreateFormFile("maybeFile", maybeFileFilename)
		if err != nil {
			return err
		}
		if _, err := io.Copy(maybeFilePart, maybeFile); err != nil {
			return err
		}
	}
	for i, f := range maybeFileList {
		maybeFileListFilename := fmt.Sprintf("maybeFileList_filename_%d", i)
		if named, ok := f.(interface{ Name() string }); ok {
			maybeFileListFilename = named.Name()
		}
		maybeFileListPart, err := writer.CreateFormFile("maybeFileList", maybeFileListFilename)
		if err != nil {
			return err
		}
		if _, err := io.Copy(maybeFileListPart, f); err != nil {
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
	if request.OptionalListOfStrings != nil {
		if err := core.WriteMultipartJSON(writer, "optionalListOfStrings", request.OptionalListOfStrings); err != nil {
			return err
		}
	}
	if err := core.WriteMultipartJSON(writer, "listOfObjects", request.ListOfObjects); err != nil {
		return err
	}
	if request.OptionalMetadata != nil {
		if err := core.WriteMultipartJSON(writer, "optionalMetadata", request.OptionalMetadata); err != nil {
			return err
		}
	}
	if request.OptionalObjectType != nil {
		if err := core.WriteMultipartJSON(writer, "optionalObjectType", *request.OptionalObjectType); err != nil {
			return err
		}
	}
	if request.OptionalId != nil {
		if err := core.WriteMultipartJSON(writer, "optionalId", *request.OptionalId); err != nil {
			return err
		}
	}
	if err := writer.Close(); err != nil {
		return err
	}
	headers.Set("Content-Type", writer.FormDataContentType())

	if err := c.caller.Call(
		ctx,
		&core.CallParams{
			URL:         endpointURL,
			Method:      http.MethodPost,
			MaxAttempts: options.MaxAttempts,
			Headers:     headers,
			Client:      options.HTTPClient,
			Request:     requestBuffer,
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

	baseURL := ""
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	if options.BaseURL != "" {
		baseURL = options.BaseURL
	}
	endpointURL := baseURL + "/just-file"

	headers := core.MergeHeaders(c.header.Clone(), options.ToHeader())

	requestBuffer := bytes.NewBuffer(nil)
	writer := multipart.NewWriter(requestBuffer)
	fileFilename := "file_filename"
	if named, ok := file.(interface{ Name() string }); ok {
		fileFilename = named.Name()
	}
	filePart, err := writer.CreateFormFile("file", fileFilename)
	if err != nil {
		return err
	}
	if _, err := io.Copy(filePart, file); err != nil {
		return err
	}
	if err := writer.Close(); err != nil {
		return err
	}
	headers.Set("Content-Type", writer.FormDataContentType())

	if err := c.caller.Call(
		ctx,
		&core.CallParams{
			URL:         endpointURL,
			Method:      http.MethodPost,
			MaxAttempts: options.MaxAttempts,
			Headers:     headers,
			Client:      options.HTTPClient,
			Request:     requestBuffer,
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

	baseURL := ""
	if c.baseURL != "" {
		baseURL = c.baseURL
	}
	if options.BaseURL != "" {
		baseURL = options.BaseURL
	}
	endpointURL := baseURL + "/just-file-with-query-params"

	queryParams, err := core.QueryValues(request)
	if err != nil {
		return err
	}
	if len(queryParams) > 0 {
		endpointURL += "?" + queryParams.Encode()
	}

	headers := core.MergeHeaders(c.header.Clone(), options.ToHeader())

	requestBuffer := bytes.NewBuffer(nil)
	writer := multipart.NewWriter(requestBuffer)
	fileFilename := "file_filename"
	if named, ok := file.(interface{ Name() string }); ok {
		fileFilename = named.Name()
	}
	filePart, err := writer.CreateFormFile("file", fileFilename)
	if err != nil {
		return err
	}
	if _, err := io.Copy(filePart, file); err != nil {
		return err
	}
	if err := writer.Close(); err != nil {
		return err
	}
	headers.Set("Content-Type", writer.FormDataContentType())

	if err := c.caller.Call(
		ctx,
		&core.CallParams{
			URL:         endpointURL,
			Method:      http.MethodPost,
			MaxAttempts: options.MaxAttempts,
			Headers:     headers,
			Client:      options.HTTPClient,
			Request:     requestBuffer,
		},
	); err != nil {
		return err
	}
	return nil
}
