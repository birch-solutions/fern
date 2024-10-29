package example

import (
    client "github.com/grpc-proto-exhaustive/fern/client"
    context "context"
    fern "github.com/grpc-proto-exhaustive/fern"
)

func do() () {
    client := client.NewClient()
    client.Dataservice.Describe(
        context.TODO(),
        &fern.DescribeRequest{
            Filter: &fern.Metadata{
                StringMetadataValueMap: map[string]*fern.MetadataValue{
                    "filter": &fern.MetadataValue{
                        Double: 1.1,
                    },
                },
            },
        },
    )}
