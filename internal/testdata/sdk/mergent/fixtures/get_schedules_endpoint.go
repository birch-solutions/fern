// Generated by Fern. Do not edit.

package api

import (
	context "context"
	errors "errors"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/mergent/fixtures/core"
	io "io"
	http "net/http"
)

type getSchedulesEndpoint struct {
	url        string
	httpClient core.HTTPClient
	header     http.Header
}

func newGetSchedulesEndpoint(url string, httpClient core.HTTPClient, clientOptions *core.ClientOptions) *getSchedulesEndpoint {
	return &getSchedulesEndpoint{
		url:        url,
		httpClient: httpClient,
		header:     clientOptions.ToHeader(),
	}
}

func (g *getSchedulesEndpoint) decodeError(statusCode int, body io.Reader) error {
	bytes, err := io.ReadAll(body)
	if err != nil {
		return err
	}
	return errors.New(string(bytes))
}

func (g *getSchedulesEndpoint) Call(ctx context.Context) ([]*Schedule, error) {
	endpointURL := g.url
	var response []*Schedule
	if err := core.DoRequest(
		ctx,
		g.httpClient,
		endpointURL,
		http.MethodGet,
		nil,
		response,
		g.header,
		g.decodeError,
	); err != nil {
		return response, err
	}
	return response, nil
}
