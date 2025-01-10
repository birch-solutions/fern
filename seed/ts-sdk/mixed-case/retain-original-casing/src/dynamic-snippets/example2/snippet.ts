import { SeedMixedCaseClient } from "../..";

async function main(): Promise<void> {
    const client = new SeedMixedCaseClient({
        environment: "https://api.fern.com",
    });
    
    await client.service.listResources({
        page_limit: 10,
        beforeDate: "2023-01-01",
    });
}
main();
