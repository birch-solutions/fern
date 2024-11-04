package example

import (
    client "github.com/grpc-proto-exhaustive/fern/client"
    option "github.com/grpc-proto-exhaustive/fern/option"
    context "context"
    fern "github.com/grpc-proto-exhaustive/fern"
)

func do() () {
    client := client.NewClient(
        option.WithApiKey(
            "<value>",
        ),
    )
    client.Dataservice.Upload(
        context.TODO(),
        &fern.UploadRequest{
            Columns: []*fern.Column{
                &fern.Column{
                    Id: "id",
                    Values: []float64{
                        1.1,
                    },
                },
            },
        },
    )
}
