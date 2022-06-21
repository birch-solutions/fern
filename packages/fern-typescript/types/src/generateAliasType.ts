import { AliasTypeDefinition, PrimitiveType } from "@fern-api/api";
import {
    addBrandedTypeAlias,
    getTextOfTsNode,
    ImportStrategy,
    maybeAddDocs,
    ModelContext,
} from "@fern-typescript/commons";
import { SourceFile, ts, VariableDeclarationKind, Writers } from "ts-morph";

export const ALIAS_UTILS_OF_KEY = "of";

export function generateAliasType({
    file,
    typeName,
    docs,
    shape,
    modelContext,
}: {
    file: SourceFile;
    typeName: string;
    docs: string | null | undefined;
    shape: AliasTypeDefinition;
    modelContext: ModelContext;
}): void {
    if (shouldUseBrandedTypeForAlias(shape)) {
        generateStringAlias({ file, typeName, docs });
    } else {
        const typeAlias = file.addTypeAlias({
            name: typeName,
            type: getTextOfTsNode(
                modelContext.getReferenceToType({
                    reference: shape.aliasOf,
                    referencedIn: file,
                    importStrategy: ImportStrategy.NAMED_IMPORT,
                })
            ),
            isExported: true,
        });
        maybeAddDocs(typeAlias, docs);
    }
}

export function shouldUseBrandedTypeForAlias(shape: AliasTypeDefinition): boolean {
    return shape.aliasOf._type === "primitive" && shape.aliasOf.primitive === PrimitiveType.String;
}

function generateStringAlias({
    file,
    typeName,
    docs,
}: {
    file: SourceFile;
    typeName: string;
    docs: string | null | undefined;
}) {
    addBrandedTypeAlias({ node: file, typeName, docs });

    file.addVariableStatement({
        declarationKind: VariableDeclarationKind.Const,
        declarations: [
            {
                name: typeName,
                initializer: Writers.object({
                    [ALIAS_UTILS_OF_KEY]: getTextOfTsNode(getOf(typeName)),
                }),
            },
        ],
        isExported: true,
    });
}

function getOf(typeName: string): ts.ArrowFunction {
    const VALUE_PARAMETER_NAME = "value";

    return ts.factory.createArrowFunction(
        undefined,
        undefined,
        [
            ts.factory.createParameterDeclaration(
                undefined,
                undefined,
                undefined,
                VALUE_PARAMETER_NAME,
                undefined,
                ts.factory.createKeywordTypeNode(ts.SyntaxKind.StringKeyword)
            ),
        ],
        ts.factory.createTypeReferenceNode(typeName),
        undefined,
        ts.factory.createAsExpression(
            ts.factory.createIdentifier(VALUE_PARAMETER_NAME),
            ts.factory.createTypeReferenceNode(typeName)
        )
    );
}
