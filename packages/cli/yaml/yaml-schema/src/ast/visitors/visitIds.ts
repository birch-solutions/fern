import { visitObject } from "@fern-api/core-utils";
import { IdSchema } from "../../schemas";
import { RawPrimitiveType } from "../../utils/RawPrimitiveType";
import { FernAstVisitor } from "../FernAstVisitor";
import { NodePath } from "../NodePath";
import { createDocsVisitor } from "./utils/createDocsVisitor";

export const RAW_DEFAULT_ID_TYPE = RawPrimitiveType.string;

export async function visitIds({
    ids,
    visitor,
    nodePath,
}: {
    ids: IdSchema[] | undefined;
    visitor: Partial<FernAstVisitor>;
    nodePath: NodePath;
}): Promise<void> {
    if (ids == null) {
        return;
    }

    for (const id of ids) {
        const nodePathForId = [...nodePath, typeof id === "string" ? id : id.name];
        await visitor.id?.(id, nodePathForId);
        if (typeof id !== "string") {
            await visitor.typeDeclaration?.(
                {
                    typeName: id.name,
                    declaration: id.type ?? RAW_DEFAULT_ID_TYPE,
                },
                nodePathForId
            );
        }

        if (typeof id === "string") {
            await visitor.typeName?.(id, nodePathForId);
        } else {
            await visitObject(id, {
                name: async (name) => {
                    await visitor.typeName?.(name, [...nodePathForId, "name"]);
                },
                docs: createDocsVisitor(visitor, nodePathForId),
                type: async (type) => {
                    if (type != null) {
                        await visitor.typeReference?.(type, [...nodePathForId, "type"]);
                    }
                },
            });
        }
    }
}
