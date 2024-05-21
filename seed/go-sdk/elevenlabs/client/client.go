// This file was auto-generated by Fern from our API Definition.

package client

import (
	audionative "github.com/elevenlabs/fern/audionative"
	chapters "github.com/elevenlabs/fern/chapters"
	core "github.com/elevenlabs/fern/core"
	dubbing "github.com/elevenlabs/fern/dubbing"
	history "github.com/elevenlabs/fern/history"
	models "github.com/elevenlabs/fern/models"
	option "github.com/elevenlabs/fern/option"
	projects "github.com/elevenlabs/fern/projects"
	pronunciationdictionary "github.com/elevenlabs/fern/pronunciationdictionary"
	samples "github.com/elevenlabs/fern/samples"
	speechtospeech "github.com/elevenlabs/fern/speechtospeech"
	texttospeech "github.com/elevenlabs/fern/texttospeech"
	user "github.com/elevenlabs/fern/user"
	voicegeneration "github.com/elevenlabs/fern/voicegeneration"
	voices "github.com/elevenlabs/fern/voices"
	http "net/http"
	os "os"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header

	AudioNative             *audionative.Client
	Chapters                *chapters.Client
	Dubbing                 *dubbing.Client
	History                 *history.Client
	Models                  *models.Client
	Projects                *projects.Client
	PronunciationDictionary *pronunciationdictionary.Client
	Samples                 *samples.Client
	SpeechToSpeech          *speechtospeech.Client
	TextToSpeech            *texttospeech.Client
	User                    *user.Client
	VoiceGeneration         *voicegeneration.Client
	Voices                  *voices.Client
}

func NewClient(opts ...option.RequestOption) *Client {
	options := core.NewRequestOptions(opts...)
	if options.ApiKey == "" {
		options.ApiKey = os.Getenv("ELEVEN_API_KEY")
	}
	return &Client{
		baseURL: options.BaseURL,
		caller: core.NewCaller(
			&core.CallerParams{
				Client:      options.HTTPClient,
				MaxAttempts: options.MaxAttempts,
			},
		),
		header:                  options.ToHeader(),
		AudioNative:             audionative.NewClient(opts...),
		Chapters:                chapters.NewClient(opts...),
		Dubbing:                 dubbing.NewClient(opts...),
		History:                 history.NewClient(opts...),
		Models:                  models.NewClient(opts...),
		Projects:                projects.NewClient(opts...),
		PronunciationDictionary: pronunciationdictionary.NewClient(opts...),
		Samples:                 samples.NewClient(opts...),
		SpeechToSpeech:          speechtospeech.NewClient(opts...),
		TextToSpeech:            texttospeech.NewClient(opts...),
		User:                    user.NewClient(opts...),
		VoiceGeneration:         voicegeneration.NewClient(opts...),
		Voices:                  voices.NewClient(opts...),
	}
}
