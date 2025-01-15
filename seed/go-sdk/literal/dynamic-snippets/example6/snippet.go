package example

import (
    client "github.com/literal/fern/client"
    option "github.com/literal/fern/option"
    context "context"
    fern "github.com/literal/fern"
)

func do() () {
    client := client.NewClient(
        option.WithBaseURL(
            "https://api.fern.com",
        ),
    )
    client.Query.Send(
        context.TODO(),
        &fern.SendLiteralsInQueryRequest{
            Query: "What is the weather today",
        },
    )
}
