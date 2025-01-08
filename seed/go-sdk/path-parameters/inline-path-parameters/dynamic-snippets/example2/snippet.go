package example

import (
    client "github.com/fern-api/path-parameters-go/client"
    context "context"
    path "github.com/fern-api/path-parameters-go"
)

func do() () {
    client := client.NewClient()
    client.Organizations.SearchOrganizations(
        context.TODO(),
        "tenant_id",
        "organization_id",
        &path.SearchOrganizationsRequest{
            Limit: path.Int(
                1,
            ),
        },
    )
}
