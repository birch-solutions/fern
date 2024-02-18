// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
)

type UploadRequest struct {
	Status string `json:"status" url:"status"`
	fern   string
}

func (u *UploadRequest) Fern() string {
	return u.fern
}

func (u *UploadRequest) UnmarshalJSON(data []byte) error {
	type unmarshaler UploadRequest
	var body unmarshaler
	if err := json.Unmarshal(data, &body); err != nil {
		return err
	}
	*u = UploadRequest(body)
	u.fern = "fern"
	return nil
}

func (u *UploadRequest) MarshalJSON() ([]byte, error) {
	type embed UploadRequest
	var marshaler = struct {
		embed
		Fern string `json:"fern"`
	}{
		embed: embed(*u),
		Fern:  "fern",
	}
	return json.Marshal(marshaler)
}

type UploadMultiRequest struct {
	Status string `json:"status" url:"status"`
}
