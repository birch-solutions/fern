// This file was auto-generated by Fern from our API Definition.

package oauthclientcredentials

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/oauth-client-credentials/fern/core"
)

type GetTokenRequest struct {
	ClientId     string  `json:"client_id" url:"-"`
	ClientSecret string  `json:"client_secret" url:"-"`
	Scope        *string `json:"scope,omitempty" url:"-"`
	audience     string
	grantType    string
}

func (g *GetTokenRequest) Audience() string {
	return g.audience
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
	g.audience = "https://api.example.com"
	g.grantType = "client_credentials"
	return nil
}

func (g *GetTokenRequest) MarshalJSON() ([]byte, error) {
	type embed GetTokenRequest
	var marshaler = struct {
		embed
		Audience  string `json:"audience"`
		GrantType string `json:"grant_type"`
	}{
		embed:     embed(*g),
		Audience:  "https://api.example.com",
		GrantType: "client_credentials",
	}
	return json.Marshal(marshaler)
}

type RefreshTokenRequest struct {
	ClientId     string  `json:"client_id" url:"-"`
	ClientSecret string  `json:"client_secret" url:"-"`
	RefreshToken string  `json:"refresh_token" url:"-"`
	Scope        *string `json:"scope,omitempty" url:"-"`
	audience     string
	grantType    string
}

func (r *RefreshTokenRequest) Audience() string {
	return r.audience
}

func (r *RefreshTokenRequest) GrantType() string {
	return r.grantType
}

func (r *RefreshTokenRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler RefreshTokenRequest
	var body unmarshaler
	if err := json.Unmarshal(data, &body); err != nil {
		return err
	}
	*r = RefreshTokenRequest(body)
	r.audience = "https://api.example.com"
	r.grantType = "refresh_token"
	return nil
}

func (r *RefreshTokenRequest) MarshalJSON() ([]byte, error) {
	type embed RefreshTokenRequest
	var marshaler = struct {
		embed
		Audience  string `json:"audience"`
		GrantType string `json:"grant_type"`
	}{
		embed:     embed(*r),
		Audience:  "https://api.example.com",
		GrantType: "refresh_token",
	}
	return json.Marshal(marshaler)
}

// An OAuth token response.
type TokenResponse struct {
	AccessToken  string  `json:"access_token" url:"access_token"`
	ExpiresIn    int     `json:"expires_in" url:"expires_in"`
	RefreshToken *string `json:"refresh_token,omitempty" url:"refresh_token,omitempty"`

	extraProperties map[string]interface{}
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

	extraProperties, err := core.ExtractExtraProperties(data, *t)
	if err != nil {
		return err
	}
	t.extraProperties = extraProperties

	return nil
}

func (t *TokenResponse) String() string {
	if value, err := core.StringifyJSON(t); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", t)
}
