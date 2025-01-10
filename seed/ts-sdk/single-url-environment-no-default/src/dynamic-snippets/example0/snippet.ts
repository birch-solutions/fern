import { SeedSingleUrlEnvironmentNoDefaultClient } from "../..";

async function main(): Promise<void> {
    const client = new SeedSingleUrlEnvironmentNoDefaultClient({
        environment: "https://api.fern.com",
        token: "<token>",
    });
    
    await client.dummy.getDummy();
}
main();
