import { SeedAudiencesClient } from "../..";

async function main() {
    const client = new SeedAudiencesClient({
        environment: "https://api.fern.com",
    });
    await client.folderA.service.getDirectThread();
}
main();
