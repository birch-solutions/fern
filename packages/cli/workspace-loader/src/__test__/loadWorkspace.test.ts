import { AbsoluteFilePath, join, RelativeFilePath } from "@fern-api/fs-utils";
import { createMockTaskContext } from "@fern-api/task-context";
import assert from "assert";
import { loadAPIWorkspace } from "../loadAPIWorkspace";

describe("loadWorkspace", () => {
    it("fern definition", async () => {
        const workspace = await loadAPIWorkspace({
            absolutePathToWorkspace: join(AbsoluteFilePath.of(__dirname), RelativeFilePath.of("fixtures/simple")),
            context: createMockTaskContext(),
            cliVersion: "0.0.0",
            workspaceName: undefined,
        });
        expect(workspace.didSucceed).toBe(true);
        assert(workspace.didSucceed);
        assert(workspace.workspace.type === "fern");

        const simpleYaml = workspace.workspace.definition.namedDefinitionFiles[RelativeFilePath.of("simple.yml")];
        const exampleDateTime = (simpleYaml?.contents.types?.MyDateTime as RawSchemas.BaseTypeDeclarationSchema)
            .examples?.[0]?.value;
        expect(typeof exampleDateTime).toBe("string");
    });

    it("open api", async () => {
        const workspace = await loadAPIWorkspace({
            absolutePathToWorkspace: join(AbsoluteFilePath.of(__dirname), RelativeFilePath.of("fixtures/openapi-path")),
            context: createMockTaskContext(),
            cliVersion: "0.0.0",
            workspaceName: undefined,
        });
        expect(workspace.didSucceed).toBe(true);
        assert(workspace.didSucceed);
        assert(workspace.workspace.type === "openapi");
        assert(workspace.workspace.openapi.contents.includes("Swagger Petstore"));
    });

    it("open api split", async () => {
        const workspace = await loadAPIWorkspace({
            absolutePathToWorkspace: join(
                AbsoluteFilePath.of(__dirname),
                RelativeFilePath.of("fixtures/openapi-split")
            ),
            context: createMockTaskContext(),
            cliVersion: "0.0.0",
            workspaceName: undefined,
        });
        expect(workspace.didSucceed).toBe(true);
        assert(workspace.didSucceed);
        assert(workspace.workspace.type === "openapi");
    });

    it("cohere", async () => {
        const workspace = await loadAPIWorkspace({
            absolutePathToWorkspace: join(AbsoluteFilePath.of(__dirname), RelativeFilePath.of("fixtures/cohere")),
            context: createMockTaskContext(),
            cliVersion: "0.0.0",
            workspaceName: undefined,
        });
        expect(workspace.didSucceed).toBe(true);
        assert(workspace.didSucceed);
        assert(workspace.workspace.type === "openapi");
        expect(workspace.workspace.openapi.contents).toMatchSnapshot();
    });
});
