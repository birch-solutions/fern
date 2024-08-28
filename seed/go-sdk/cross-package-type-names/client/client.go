// This file was auto-generated by Fern from our API Definition.

package client

import (
	core "github.com/cross-package-type-names/fern/core"
	folderaclient "github.com/cross-package-type-names/fern/foldera/client"
	folderdclient "github.com/cross-package-type-names/fern/folderd/client"
	foo "github.com/cross-package-type-names/fern/foo"
	option "github.com/cross-package-type-names/fern/option"
	http "net/http"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header

	FolderA *folderaclient.Client
	FolderD *folderdclient.Client
	Foo     *foo.Client
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
		header:  options.ToHeader(),
		FolderA: folderaclient.NewClient(opts...),
		FolderD: folderdclient.NewClient(opts...),
		Foo:     foo.NewClient(opts...),
	}
}
