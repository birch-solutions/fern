import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { createMigrationTester } from "../../../__test__/utils/createMigrationTester";
import { V28_TO_V27_MIGRATION } from "../migrateFromV28ToV27";

const runMigration = createMigrationTester(V28_TO_V27_MIGRATION);

describe("migrateFromV28ToV27", () => {
    it("maps boolean literals to boolean types", async () => {
        const migrated = await runMigration({
            pathToFixture: join(AbsoluteFilePath.of(__dirname), RelativeFilePath.of("./fixtures/literal")),
        });
        expect(migrated).not.toBe(null);
    });
});
