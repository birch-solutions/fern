import { FernRegistry } from "@fern-fern/registry";
import { JsonPropertyPath } from "../../examples/json-example/contexts/JsonPropertyPath";
import { TypeDefinitionContextProvider } from "../context/TypeDefinitionContextProvider";
import { InternalTypeReferenceDefinitions } from "./InternalTypeReferenceDefinitions";

export declare namespace TypeReferenceDefinitions {
    export interface Props {
        type: FernRegistry.TypeReference;
        isCollapsible: boolean;
        onHoverProperty?: (path: JsonPropertyPath, opts: { isHovering: boolean }) => void;
        className?: string;
    }
}

export const TypeReferenceDefinitions: React.FC<TypeReferenceDefinitions.Props> = ({
    type,
    isCollapsible,
    onHoverProperty,
    className,
}) => {
    return (
        <TypeDefinitionContextProvider onHoverProperty={onHoverProperty}>
            <InternalTypeReferenceDefinitions type={type} isCollapsible={isCollapsible} className={className} />
        </TypeDefinitionContextProvider>
    );
};
