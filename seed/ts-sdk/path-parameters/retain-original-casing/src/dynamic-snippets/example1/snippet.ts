import { SeedPathParametersClient } from "../..";

async function main(): Promise<void> {
    const client = new SeedPathParametersClient({
        environment: "https://api.fern.com",
    });
    
    await client.organizations.getOrganizationUser("tenant_id", "organization_id", "user_id");
}
main();
