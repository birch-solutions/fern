import { FernRegistry } from "@fern-fern/registry";
import { RiSendPlane2Fill } from "react-icons/ri";
import { PackagePath } from "../../../commons/PackagePath";
import { EndpointTitle } from "../../definition/endpoints/EndpointTitle";
import { useEndpointPath } from "../../routes/useEndpointPath";
import { useApiDefinitionSidebarContext } from "./context/useApiDefinitionSidebarContext";
import { SidebarItem } from "./SidebarItem";

export declare namespace EndpointSidebarItem {
    export interface Props {
        packagePath: PackagePath;
        endpoint: FernRegistry.EndpointDefinition;
    }
}

export const EndpointSidebarItem: React.FC<EndpointSidebarItem.Props> = ({ endpoint, packagePath }) => {
    const { environmentId } = useApiDefinitionSidebarContext();
    const endpointPath = useEndpointPath({ environmentId, packagePath, endpointId: endpoint.id });

    return (
        <SidebarItem path={endpointPath} icon={<RiSendPlane2Fill />} title={<EndpointTitle endpoint={endpoint} />} />
    );
};
