import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { GeneratorName } from "@fern-api/generators-configuration";
import { isVersionAhead } from "@fern-api/semver-utils";
import { createMockTaskContext } from "@fern-api/task-context";
import { IntermediateRepresentation } from "@fern-fern/ir-model/ir";
import { isString } from "lodash-es";
import { getIntermediateRepresentationMigrator } from "../IntermediateRepresentationMigrator";
import { IrVersions } from "../ir-versions";
import { migrateIntermediateRepresentationForGenerator } from "../migrateIntermediateRepresentationForGenerator";
import { getIrForApi } from "./utils/getIrForApi";

describe("migrateIntermediateRepresentation", () => {
    describe("migrations are in order", () => {
        const migrations = getIntermediateRepresentationMigrator().migrations;
        for (const generatorName of Object.values(GeneratorName)) {
            // eslint-disable-next-line jest/valid-title
            it(generatorName, () => {
                const versions = migrations
                    .map((migration) => migration.minGeneratorVersionsToExclude[generatorName])
                    // filter out symbols
                    .filter(isString);
                const expectedVersions = [...versions].sort((a, b) => (isVersionAhead(a, b) ? -1 : 1));

                expect(versions).toEqual(expectedVersions);
            });
        }
    });

    it("does not run migration if generator version is equal to migration's 'minVersiontoExclude'", async () => {
        const migrated = migrateIntermediateRepresentationForGenerator({
            intermediateRepresentation: await getIrForSimpleApi(),
            context: createMockTaskContext(),
            targetGenerator: {
                name: "fernapi/fern-typescript-sdk",
                version: "0.0.246",
            },
        });
        expect(
            // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
            (migrated as IrVersions.V1.ir.IntermediateRepresentation)?.errors?.[0]?.discriminantValue
        ).toBeUndefined();
    });

    it("runs migration if generator (dev) version is less than migration's 'minVersiontoExclude'", async () => {
        const migrated = migrateIntermediateRepresentationForGenerator({
            intermediateRepresentation: await getIrForSimpleApi(),
            context: createMockTaskContext(),
            targetGenerator: {
                name: "fernapi/fern-typescript-sdk",
                version: "0.0.245-1-ga1ce47f",
            },
        });
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        expect((migrated as IrVersions.V1.ir.IntermediateRepresentation)?.errors?.[0]?.discriminantValue).toEqual({
            camelCase: "blogNotFoundError",
            originalValue: "BlogNotFoundError",
            pascalCase: "BlogNotFoundError",
            screamingSnakeCase: "BLOG_NOT_FOUND_ERROR",
            snakeCase: "blog_not_found_error",
            wireValue: "BlogNotFoundError",
        });
    });

    it("runs migration if generator (release) version is less than migration's 'minVersiontoExclude'", async () => {
        const migrated = migrateIntermediateRepresentationForGenerator({
            intermediateRepresentation: await getIrForSimpleApi(),
            context: createMockTaskContext(),
            targetGenerator: {
                name: "fernapi/fern-typescript-sdk",
                version: "0.0.245",
            },
        });
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        expect((migrated as IrVersions.V1.ir.IntermediateRepresentation)?.errors?.[0]?.discriminantValue).toEqual({
            camelCase: "blogNotFoundError",
            originalValue: "BlogNotFoundError",
            pascalCase: "BlogNotFoundError",
            screamingSnakeCase: "BLOG_NOT_FOUND_ERROR",
            snakeCase: "blog_not_found_error",
            wireValue: "BlogNotFoundError",
        });
    });

    it("does not run migration if generator (dev) version is greater than migration's 'minVersiontoExclude'", async () => {
        const migrated = migrateIntermediateRepresentationForGenerator({
            intermediateRepresentation: await getIrForSimpleApi(),
            context: createMockTaskContext(),
            targetGenerator: {
                name: "fernapi/fern-typescript-sdk",
                version: "0.0.246-1-ga1ce47f",
            },
        });

        expect((migrated as IrVersions.V1.ir.IntermediateRepresentation).errors[0]?.discriminantValue).toBeUndefined();
    });

    it("does not run migration if generator (release) version is greater than migration's 'minVersiontoExclude'", async () => {
        const migrated = migrateIntermediateRepresentationForGenerator({
            intermediateRepresentation: await getIrForSimpleApi(),
            context: createMockTaskContext(),
            targetGenerator: {
                name: "fernapi/fern-typescript-sdk",
                version: "0.0.247",
            },
        });

        expect((migrated as IrVersions.V1.ir.IntermediateRepresentation).errors[0]?.discriminantValue).toBeUndefined();
    });
});

function getIrForSimpleApi(): Promise<IntermediateRepresentation> {
    return getIrForApi(join(AbsoluteFilePath.of(__dirname), RelativeFilePath.of("./fixtures/simple")));
}
