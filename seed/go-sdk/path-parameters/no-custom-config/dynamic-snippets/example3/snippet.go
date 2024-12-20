package example

import (
    client "github.com/path-parameters/fern/client"
    context "context"
    fern "github.com/path-parameters/fern"
)

func do() () {
    client := client.NewClient()
    client.Organizations.DeleteOrganization(
        context.TODO(),
        "tenant_id",
        "organization_id",
        &fern.DeleteOrganizationRequest{
            Limit: fern.Int(
                1,
            ),
            Soft: fern.Bool(
                true,
            ),
        },
    )
}
