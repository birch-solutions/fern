// This file was auto-generated by Fern from our API Definition.

package elevenlabs

type TextToSpeechRequest struct {
	// You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model.
	OptimizeStreamingLatency *OptimizeStreamingLatency `query:"optimize_streaming_latency"`
	// The output format of the generated audio.
	OutputFormat *OutputFormat `query:"output_format"`
	// The text that will get converted into speech.
	Text string `json:"text" url:"-"`
	// Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for text to speech, you can check this using the can_do_text_to_speech property.
	ModelId *string `json:"model_id,omitempty" url:"-"`
	// Voice settings overriding stored setttings for the given voice. They are applied only on the given request.
	VoiceSettings *VoiceSettings `json:"voice_settings,omitempty" url:"-"`
	// A list of pronunciation dictionary locators (id, version_id) to be applied to the text. They will be applied in order. You may have up to 3 locators per request
	PronunciationDictionaryLocators []*PronunciationDictionaryVersionLocator `json:"pronunciation_dictionary_locators,omitempty" url:"-"`
}

type TextToSpeechAsStreamRequest struct {
	// You can turn on latency optimizations at some cost of quality. The best possible final latency varies by model.
	OptimizeStreamingLatency *OptimizeStreamingLatency `query:"optimize_streaming_latency"`
	// The output format of the generated audio.
	OutputFormat *OutputFormat `query:"output_format"`
	// The text that will get converted into speech.
	Text string `json:"text" url:"-"`
	// Identifier of the model that will be used, you can query them using GET /v1/models. The model needs to have support for text to speech, you can check this using the can_do_text_to_speech property.
	ModelId *string `json:"model_id,omitempty" url:"-"`
	// Voice settings overriding stored setttings for the given voice. They are applied only on the given request.
	VoiceSettings *VoiceSettings `json:"voice_settings,omitempty" url:"-"`
	// A list of pronunciation dictionary locators (id, version_id) to be applied to the text. They will be applied in order. You may have up to 3 locators per request
	PronunciationDictionaryLocators []*PronunciationDictionaryVersionLocator `json:"pronunciation_dictionary_locators,omitempty" url:"-"`
}
