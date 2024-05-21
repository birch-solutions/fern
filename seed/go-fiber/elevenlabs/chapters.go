// This file was auto-generated by Fern from our API Definition.

package elevenlabs

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/elevenlabs/fern/core"
)

type BodyStreamChapterAudioV1ProjectsProjectIdChaptersChapterIdSnapshotsChapterSnapshotIdStreamPost struct {
	// Whether to convert the audio to mpeg format.
	ConvertToMpeg *bool `json:"convert_to_mpeg,omitempty" url:"-"`
}

type ChapterResponse struct {
	ChapterId              string                     `json:"chapter_id" url:"chapter_id"`
	Name                   string                     `json:"name" url:"name"`
	LastConversionDateUnix int                        `json:"last_conversion_date_unix" url:"last_conversion_date_unix"`
	ConversionProgress     float64                    `json:"conversion_progress" url:"conversion_progress"`
	CanBeDownloaded        bool                       `json:"can_be_downloaded" url:"can_be_downloaded"`
	State                  ChapterState               `json:"state" url:"state"`
	Statistics             *ChapterStatisticsResponse `json:"statistics,omitempty" url:"statistics,omitempty"`

	extraProperties map[string]interface{}
}

func (c *ChapterResponse) GetExtraProperties() map[string]interface{} {
	return c.extraProperties
}

func (c *ChapterResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler ChapterResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = ChapterResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *c)
	if err != nil {
		return err
	}
	c.extraProperties = extraProperties

	return nil
}

func (c *ChapterResponse) String() string {
	if value, err := core.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}

type ChapterSnapshotsResponse struct {
	Snapshots []*ChapterSnapshotResponse `json:"snapshots,omitempty" url:"snapshots,omitempty"`

	extraProperties map[string]interface{}
}

func (c *ChapterSnapshotsResponse) GetExtraProperties() map[string]interface{} {
	return c.extraProperties
}

func (c *ChapterSnapshotsResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler ChapterSnapshotsResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*c = ChapterSnapshotsResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *c)
	if err != nil {
		return err
	}
	c.extraProperties = extraProperties

	return nil
}

func (c *ChapterSnapshotsResponse) String() string {
	if value, err := core.StringifyJSON(c); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", c)
}

type GetChaptersResponse struct {
	Chapters []*ChapterResponse `json:"chapters,omitempty" url:"chapters,omitempty"`

	extraProperties map[string]interface{}
}

func (g *GetChaptersResponse) GetExtraProperties() map[string]interface{} {
	return g.extraProperties
}

func (g *GetChaptersResponse) UnmarshalJSON(data []byte) error {
	type unmarshaler GetChaptersResponse
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*g = GetChaptersResponse(value)

	extraProperties, err := core.ExtractExtraProperties(data, *g)
	if err != nil {
		return err
	}
	g.extraProperties = extraProperties

	return nil
}

func (g *GetChaptersResponse) String() string {
	if value, err := core.StringifyJSON(g); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", g)
}
