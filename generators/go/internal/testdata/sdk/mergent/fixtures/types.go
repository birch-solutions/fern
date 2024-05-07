// This file was auto-generated by Fern from our API Definition.

package api

import (
	json "encoding/json"
	fmt "fmt"
	core "github.com/fern-api/fern-go/internal/testdata/sdk/mergent/fixtures/core"
)

type ScheduleNew struct {
	Id *Id `json:"id,omitempty" url:"-"`
	// An optional name of the Schedule. This string must not contain more than 100 characters.
	Name *string `json:"name,omitempty" url:"-"`
	// The name of the of the queue to schedule the Task on. This string must not contain more than 100 characters.
	Queue *string `json:"queue,omitempty" url:"-"`
	// An optional description of the Schedule. This string must not contain more than 500 characters.
	Description *string `json:"description,omitempty" url:"-"`
	// A [cron expression](https://crontab.guru/examples.html) describing the
	// Schedule on which Tasks will run (UTC).
	// Note: execution n + 1 of a Task will not begin until execution n has
	// completed successfully.
	// You must pass either `cron` or `rrule` when creating a new Schedule.
	Cron *string `json:"cron,omitempty" url:"-"`
	// An [iCal RRule expression](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) describing the Schedule on which Tasks will run (UTC). The time of Schedule creation will be used as the start of the recurrence interval (i.e. `DTSTART`). Note: execution n + 1 of a Task will not begin until execution n has completed successfully. You must pass either `cron` or `rrule` when creating a new Schedule.
	Rrule *string `json:"rrule,omitempty" url:"-"`
	// The [ISO 8601 timestamp](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) denoting the start of an RRULE schedule. Example: "2021-10-01T15:53:05Z". When not set, it will be set to the current time, and the first Task will be scheduled immediately. Ignored for `cron`-type Schedules.
	Dtstart *string `json:"dtstart,omitempty" url:"-"`
	// If `true`, the Schedule will be paused immediately. If `false`, a paused Schedule will be resumed.
	Paused    *bool      `json:"paused,omitempty" url:"-"`
	Request   *Request   `json:"request,omitempty" url:"-"`
	CreatedAt *CreatedAt `json:"created_at,omitempty" url:"-"`
}

type Error struct {
	// A human-readable message providing more details about the error(s).
	Message *string `json:"message,omitempty" url:"message,omitempty"`
	// If the error is parameter-specific, the parameter related to the error.
	Param *string `json:"param,omitempty" url:"param,omitempty"`
	// If multiple errors occured (e.g., with param validation), the list of errors that occured.
	Errors []*Error `json:"errors,omitempty" url:"errors,omitempty"`

	_rawJSON json.RawMessage
}

func (e *Error) UnmarshalJSON(data []byte) error {
	type unmarshaler Error
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*e = Error(value)
	e._rawJSON = json.RawMessage(data)
	return nil
}

func (e *Error) String() string {
	if len(e._rawJSON) > 0 {
		if value, err := core.StringifyJSON(e._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(e); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", e)
}

type Request struct {
	// The URL that the POST request will be sent to.
	// For localhost development, use something like ngrok to get a publicly
	// accessible URL for your local service. See https://docs.mergent.co for
	// more info.
	Url string `json:"url" url:"url"`
	// The headers that will accompany any Task's HTTP request. For
	// example, you can use this to set Content-Type to "application/json"
	// or "application/octet-stream".
	Headers map[string]interface{} `json:"headers,omitempty" url:"headers,omitempty"`
	// The HTTP request body as a string.
	Body *string `json:"body,omitempty" url:"body,omitempty"`

	_rawJSON json.RawMessage
}

func (r *Request) UnmarshalJSON(data []byte) error {
	type unmarshaler Request
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*r = Request(value)
	r._rawJSON = json.RawMessage(data)
	return nil
}

func (r *Request) String() string {
	if len(r._rawJSON) > 0 {
		if value, err := core.StringifyJSON(r._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(r); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", r)
}

type Schedule struct {
	Id *Id `json:"id,omitempty" url:"id,omitempty"`
	// An optional name of the Schedule. This string must not contain more than 100 characters.
	Name *string `json:"name,omitempty" url:"name,omitempty"`
	// The name of the of the queue to schedule the Task on. This string must not contain more than 100 characters.
	Queue *string `json:"queue,omitempty" url:"queue,omitempty"`
	// An optional description of the Schedule. This string must not contain more than 500 characters.
	Description *string `json:"description,omitempty" url:"description,omitempty"`
	// A [cron expression](https://crontab.guru/examples.html) describing the
	// Schedule on which Tasks will run (UTC).
	// Note: execution n + 1 of a Task will not begin until execution n has
	// completed successfully.
	// You must pass either `cron` or `rrule` when creating a new Schedule.
	Cron *string `json:"cron,omitempty" url:"cron,omitempty"`
	// An [iCal RRule expression](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html) describing the Schedule on which Tasks will run (UTC). The time of Schedule creation will be used as the start of the recurrence interval (i.e. `DTSTART`). Note: execution n + 1 of a Task will not begin until execution n has completed successfully. You must pass either `cron` or `rrule` when creating a new Schedule.
	Rrule *string `json:"rrule,omitempty" url:"rrule,omitempty"`
	// The [ISO 8601 timestamp](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) denoting the start of an RRULE schedule. Example: "2021-10-01T15:53:05Z". When not set, it will be set to the current time, and the first Task will be scheduled immediately. Ignored for `cron`-type Schedules.
	Dtstart *string `json:"dtstart,omitempty" url:"dtstart,omitempty"`
	// If `true`, the Schedule will be paused immediately. If `false`, a paused Schedule will be resumed.
	Paused    *bool      `json:"paused,omitempty" url:"paused,omitempty"`
	Request   *Request   `json:"request,omitempty" url:"request,omitempty"`
	CreatedAt *CreatedAt `json:"created_at,omitempty" url:"created_at,omitempty"`

	_rawJSON json.RawMessage
}

func (s *Schedule) UnmarshalJSON(data []byte) error {
	type unmarshaler Schedule
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*s = Schedule(value)
	s._rawJSON = json.RawMessage(data)
	return nil
}

func (s *Schedule) String() string {
	if len(s._rawJSON) > 0 {
		if value, err := core.StringifyJSON(s._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(s); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", s)
}

type Task struct {
	Id *Id `json:"id,omitempty" url:"id,omitempty"`
	// An optional name of the Task. This string must not contain more than 100 characters.
	Name *string `json:"name,omitempty" url:"name,omitempty"`
	// The name of the of the Task queue. This string must not contain more than 100 characters.
	Queue *string `json:"queue,omitempty" url:"queue,omitempty"`
	// The status of this Task.
	Status  *TaskStatus `json:"status,omitempty" url:"status,omitempty"`
	Request *Request    `json:"request,omitempty" url:"request,omitempty"`
	// The [ISO 8601 timestamp](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) for when the Task is scheduled to be executed. Example: "2021-10-01T15:53:05Z". When not present, the Task will be scheduled for immediate execution.
	ScheduledFor *string `json:"scheduled_for,omitempty" url:"scheduled_for,omitempty"`
	// A duration string containing numbers and a unit suffix of "s" for seconds, "m" for minutes, and "h" for hours. Examples: "5s"; "1.5h"; "2h45m" When both `delay` and `scheduled_for` are present, `delay` will be added to `scheduled_for`.
	Delay     *string    `json:"delay,omitempty" url:"delay,omitempty"`
	CreatedAt *CreatedAt `json:"created_at,omitempty" url:"created_at,omitempty"`

	_rawJSON json.RawMessage
}

func (t *Task) UnmarshalJSON(data []byte) error {
	type unmarshaler Task
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*t = Task(value)
	t._rawJSON = json.RawMessage(data)
	return nil
}

func (t *Task) String() string {
	if len(t._rawJSON) > 0 {
		if value, err := core.StringifyJSON(t._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(t); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", t)
}

type TaskNew struct {
	Id *Id `json:"id,omitempty" url:"id,omitempty"`
	// An optional name of the Task. This string must not contain more than 100 characters.
	Name *string `json:"name,omitempty" url:"name,omitempty"`
	// The name of the of the Task queue. This string must not contain more than 100 characters.
	Queue *string `json:"queue,omitempty" url:"queue,omitempty"`
	// The status of this Task.
	Status  *TaskStatus `json:"status,omitempty" url:"status,omitempty"`
	Request *Request    `json:"request,omitempty" url:"request,omitempty"`
	// The [ISO 8601 timestamp](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) for when the Task is scheduled to be executed. Example: "2021-10-01T15:53:05Z". When not present, the Task will be scheduled for immediate execution.
	ScheduledFor *string `json:"scheduled_for,omitempty" url:"scheduled_for,omitempty"`
	// A duration string containing numbers and a unit suffix of "s" for seconds, "m" for minutes, and "h" for hours. Examples: "5s"; "1.5h"; "2h45m" When both `delay` and `scheduled_for` are present, `delay` will be added to `scheduled_for`.
	Delay     *string    `json:"delay,omitempty" url:"delay,omitempty"`
	CreatedAt *CreatedAt `json:"created_at,omitempty" url:"created_at,omitempty"`

	_rawJSON json.RawMessage
}

func (t *TaskNew) UnmarshalJSON(data []byte) error {
	type unmarshaler TaskNew
	var value unmarshaler
	if err := json.Unmarshal(data, &value); err != nil {
		return err
	}
	*t = TaskNew(value)
	t._rawJSON = json.RawMessage(data)
	return nil
}

func (t *TaskNew) String() string {
	if len(t._rawJSON) > 0 {
		if value, err := core.StringifyJSON(t._rawJSON); err == nil {
			return value
		}
	}
	if value, err := core.StringifyJSON(t); err == nil {
		return value
	}
	return fmt.Sprintf("%#v", t)
}

// The status of this Task.
type TaskStatus string

const (
	TaskStatusQueued  TaskStatus = "queued"
	TaskStatusWorking TaskStatus = "working"
	TaskStatusSuccess TaskStatus = "success"
	TaskStatusFailure TaskStatus = "failure"
)

func NewTaskStatusFromString(s string) (TaskStatus, error) {
	switch s {
	case "queued":
		return TaskStatusQueued, nil
	case "working":
		return TaskStatusWorking, nil
	case "success":
		return TaskStatusSuccess, nil
	case "failure":
		return TaskStatusFailure, nil
	}
	var t TaskStatus
	return "", fmt.Errorf("%s is not a valid %T", s, t)
}

func (t TaskStatus) Ptr() *TaskStatus {
	return &t
}

// The [ISO 8601 timestamp](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) representing when the object was created.
type CreatedAt = string

// A unique ID assigned upon creation.
type Id = string
