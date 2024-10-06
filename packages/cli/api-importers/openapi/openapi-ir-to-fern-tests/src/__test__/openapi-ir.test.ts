// eslint-disable-file @typescript-eslint/no-misused-promises

import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { createMockTaskContext } from "@fern-api/task-context";
import { loadAPIWorkspace } from "@fern-api/workspace-loader";
import { readdir } from "fs/promises";
import { OSSWorkspace } from "@fern-api/lazy-fern-workspace";

const FIXTURES_DIR = join(AbsoluteFilePath.of(__dirname), RelativeFilePath.of("fixtures"));

describe("openapi-ir", async () => {
    for (const fixture of await readdir(FIXTURES_DIR, { withFileTypes: true })) {
        if (!fixture.isDirectory()) {
            continue;
        }

        it(
            fixture.name,
            async () => {
                const fixturePath = join(FIXTURES_DIR, RelativeFilePath.of(fixture.name), RelativeFilePath.of("fern"));
                const context = createMockTaskContext();
                const workspace = await loadAPIWorkspace({
                    absolutePathToWorkspace: fixturePath,
                    context,
                    cliVersion: "0.0.0",
                    workspaceName: fixture.name
                });
                if (!workspace.didSucceed) {
                    throw new Error(
                        `Failed to load OpenAPI fixture ${fixture.name}\n${JSON.stringify(workspace.failures)}`
                    );
                }

                if (workspace.workspace instanceof OSSWorkspace) {
                    const openApiIr = await (workspace.workspace as OSSWorkspace).getOpenAPIIr({ context });
                    // eslint-disable-next-line jest/no-standalone-expect
                    expect(JSON.stringify(openApiIr, undefined, 2)).toMatchFileSnapshot(
                        `./__snapshots__/openapi-ir/${fixture.name}.json`
                    );
                }
            },
            90_000
        );
    }
});
