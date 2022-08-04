import { getFernCliUpgradeMessage } from "../upgradeNotifier";

describe("upgrade notifier test", () => {
    it("upgrade message", async () => {
        const upgradeMessage = await getFernCliUpgradeMessage({
            packageName: "fern-api",
            packageVersion: "0.0.10",
        });
        expect(upgradeMessage).toContain("Update available");
    });
});
