import { SeedExhaustiveClient } from "../..";

async function main() {
    const client = new SeedExhaustiveClient({
        environment: "https://api.fern.com",
        token: "<token>",
    });
    await client.reqWithHeaders.getWithCustomHeader({
        xTestServiceHeader: "X-TEST-SERVICE-HEADER",
        xTestEndpointHeader: "X-TEST-ENDPOINT-HEADER",
        body: "string",
    });
}
main();
