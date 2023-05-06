import { FernRegistry } from "@fern-fern/registry";
import React from "react";
import { JsonPropertyPath } from "../../examples/json-example/contexts/JsonPropertyPath";
import { TypeDefinitionContextProvider } from "../context/TypeDefinitionContextProvider";
import { InternalTypeDefinition } from "./InternalTypeDefinition";

export declare namespace TypeDefinition {
    export interface Props {
        typeShape: FernRegistry.TypeShape;
        isCollapsible: boolean;
        onHoverProperty?: (path: JsonPropertyPath, opts: { isHovering: boolean }) => void;
    }
}

export const TypeDefinition: React.FC<TypeDefinition.Props> = ({ typeShape, isCollapsible, onHoverProperty }) => {
    return (
        <TypeDefinitionContextProvider onHoverProperty={onHoverProperty}>
            <InternalTypeDefinition typeShape={typeShape} isCollapsible={isCollapsible} />
        </TypeDefinitionContextProvider>
    );
};
