import { AbsoluteFilePath } from "@fern-api/fs-utils";
import { createMockTaskContext } from "@fern-api/task-context";
import { getIntermediateRepresentationMigrator } from "../../IntermediateRepresentationMigrator";
import { IrMigrationContext } from "../../IrMigrationContext";
import { IrMigration } from "../../types/IrMigration";
import { getIrForApi } from "./getIrForApi";

export interface MigrationTesterArgs {
    pathToFixture: AbsoluteFilePath;
    context?: Partial<IrMigrationContext>;
}

export function createMigrationTester<LaterVersion, EarlierVersion>(
    migration: IrMigration<LaterVersion, EarlierVersion>
): (args: MigrationTesterArgs) => Promise<EarlierVersion> {
    return (args) => runFixtureThroughMigration(migration, args);
}

export async function runFixtureThroughMigration<LaterVersion, EarlierVersion>(
    migration: IrMigration<LaterVersion, EarlierVersion>,
    { pathToFixture, context }: MigrationTesterArgs
): Promise<EarlierVersion> {
    return getIntermediateRepresentationMigrator().migrateThroughMigration({
        migration,
        intermediateRepresentation: await getIrForApi(pathToFixture),
        context: context?.taskContext ?? createMockTaskContext(),
        targetGenerator: context?.targetGenerator ?? {
            name: "",
            version: "",
        },
    });
}
