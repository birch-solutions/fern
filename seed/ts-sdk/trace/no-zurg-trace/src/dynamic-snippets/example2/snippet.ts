import { SeedTraceClient } from "../..";

async function main() {
    const client = new SeedTraceClient({
        environment: "https://api.fern.com",
        token: "<token>",
    });
    await client.admin.sendTestSubmissionUpdate("d5e9c84f-c2b2-4bf4-b4b0-7ffd7a9ffc32", {
        updateTime: "2024-01-15T09:30:00Z",
        updateInfo: {
            type: "running",
        },
    });
}
main();
