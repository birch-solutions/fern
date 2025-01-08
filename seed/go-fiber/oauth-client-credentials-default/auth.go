// This file was auto-generated by Fern from our API Definition.

package oauthclientcredentialsdefault

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/oauth-client-credentials-default/fern/internal"
)

type GetTokenRequest struct {
	ClientId     string `json:"client_id" url:"-"`
	ClientSecret string `json:"client_secret" url:"-"`
	grantType    string
}

func (g *GetTokenRequest) GrantType() string {
	return g.grantType
}

func (g *GetTokenRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler GetTokenRequest
	var body unmarshaler
	if err := json.Unmarshal(data, &body); err != nil {
		return err
	}
	*g = GetTokenRequest(body)
	g.grantType = "client_credentials"
	return nil
}

func (g *GetTokenRequest) MarshalJSON() ([]byte, error) {
	type embed GetTokenRequest
	var marshaler = struct {
		embed
		GrantType string `json:"grant_type"`
	}{
		embed:     embed(*g),
		GrantType: "client_credentials",
	}
	return json.Marshal(marshaler)
}

// An OAuth token response.
type TokenResponse struct {
	AccessToken string `json:"access_token" url:"access_token"`
	ExpiresIn   int    `json:"expires_in" url:"expires_in"`

	extraProperties map[string]interface{}
}

func (t *TokenResponse) GetAccessToken() string {
	if t == nil {
		return ""
	}
	return t.AccessToken
}

func (t *TokenResponse) GetExpiresIn() int {
	if t == nil {
		return 0
	}
	return t.ExpiresIn
}

func (t *TokenResponse) GetExtraProperties() map[string]interface{} {
	return t.extraProperties
}

func (t *TokenResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler TokenResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*t = TokenResponse(value)
	extraProperties, err := internal.ExtractExtraProperties(data, *t)
	if err != nil {
		return err
	}
	t.extraProperties = extraProperties
	return nil
}

func (t *TokenResponse) String() string {
	if value, err := internal.StringifyJSON(t); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", t)
}
