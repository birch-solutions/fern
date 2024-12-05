import { TypeReference } from "@fern-fern/ir-sdk/api";
import { TypeReferenceNode } from "@fern-typescript/commons";
import { ts } from "ts-morph";
import { ConvertTypeReferenceParams } from "./AbstractTypeReferenceConverter";
import { AbstractTypeReferenceToTypeNodeConverter } from "./AbstractTypeReferenceToTypeNodeConverter";

export declare namespace TypeReferenceToParsedTypeNodeConverter {
    export interface Init extends AbstractTypeReferenceToTypeNodeConverter.Init {}
}

export class TypeReferenceToParsedTypeNodeConverter extends AbstractTypeReferenceToTypeNodeConverter {
    protected override set(
        itemType: TypeReference,
        inlineType: ConvertTypeReferenceParams.InlineType | undefined
    ): TypeReferenceNode {
        if (this.includeSerdeLayer && this.isTypeReferencePrimitive(itemType)) {
            const itemTypeNode = this.convert({ typeReference: itemType, inlineType }).typeNode;
            return this.generateNonOptionalTypeReferenceNode(ts.factory.createTypeReferenceNode("Set", [itemTypeNode]));
        } else {
            return this.list(itemType, inlineType);
        }
    }

    protected override dateTime(): TypeReferenceNode {
        return this.includeSerdeLayer
            ? this.generateNonOptionalTypeReferenceNode(ts.factory.createTypeReferenceNode("Date"))
            : this.string();
    }
}
