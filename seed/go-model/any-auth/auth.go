// This file was auto-generated by Fern from our API Definition.

package anyauth

import (
	json "encoding/json"
	fmt "fmt"
	internal "github.com/any-auth/fern/internal"
)

// An OAuth token response.
type TokenResponse struct {
	AccessToken  string  `json:"access_token" url:"access_token"`
	ExpiresIn    int     `json:"expires_in" url:"expires_in"`
	RefreshToken *string `json:"refresh_token,omitempty" url:"refresh_token,omitempty"`

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

func (t *TokenResponse) GetRefreshToken() *string {
	if t == nil {
		return nil
	}
	return t.RefreshToken
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
