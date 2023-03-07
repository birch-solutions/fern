import { RelativeFilePath } from "@fern-api/fs-utils";
import { RawSchemas } from "@fern-api/yaml-schema";
import { DeclaredTypeName, Literal as IrLiteral, PrimitiveType, TypeReference } from "@fern-fern/ir-model/types";
import { FernFileContext } from "../FernFileContext";

export declare type ResolvedType =
    | ResolvedType.Container
    | ResolvedType.Named
    | ResolvedType.Primitive
    | ResolvedType.File
    | ResolvedType.Unknown;

export declare namespace ResolvedType {
    interface Container {
        _type: "container";
        container: ResolvedContainerType;
        originalTypeReference: TypeReference.Container;
    }

    interface Named {
        _type: "named";
        rawName: string;
        name: DeclaredTypeName;
        declaration: RawSchemas.ObjectSchema | RawSchemas.UnionSchema | RawSchemas.EnumSchema;
        filepath: RelativeFilePath;
        file: FernFileContext;
        // this is the breadcrumbs path to the final declaration, including intermediate aliases
        objectPath: string[];
        originalTypeReference: TypeReference.Named;
    }

    interface Primitive {
        _type: "primitive";
        primitive: PrimitiveType;
        originalTypeReference: TypeReference.Primitive;
    }

    interface File {
        _type: "file";
    }

    interface Unknown {
        _type: "unknown";
        originalTypeReference: TypeReference.Unknown;
    }
}

export declare type ResolvedContainerType =
    | ResolvedContainerType.Map
    | ResolvedContainerType.List
    | ResolvedContainerType.Optional
    | ResolvedContainerType.Set
    | ResolvedContainerType.Literal;

export declare namespace ResolvedContainerType {
    interface Map {
        _type: "map";
        keyType: ResolvedType;
        valueType: ResolvedType;
    }

    interface List {
        _type: "list";
        itemType: ResolvedType;
    }

    interface Optional {
        _type: "optional";
        itemType: ResolvedType;
    }

    interface Set {
        _type: "set";
        itemType: ResolvedType;
    }

    interface Literal {
        _type: "literal";
        literal: IrLiteral;
    }
}
