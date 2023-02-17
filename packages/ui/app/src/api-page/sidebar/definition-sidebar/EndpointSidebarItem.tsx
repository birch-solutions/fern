import { FernRegistry } from "@fern-fern/registry";
import { useCallback } from "react";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import { FernRoutes } from "../../../routes";
import { EndpointTitle } from "../../definition/endpoints/EndpointTitle";

export declare namespace EndpointSidebarItem {
    export interface Props {
        endpoint: FernRegistry.EndpointDefinition;
        ancestorPackageNames: readonly string[];
    }
}

export const EndpointSidebarItem: React.FC<EndpointSidebarItem.Props> = ({ endpoint, ancestorPackageNames }) => {
    const {
        [FernRoutes.API_DEFINITION.parameters.API_ID]: apiId,
        [FernRoutes.API_DEFINITION.parameters.ENVIRONMENT]: environmentId,
    } = useParams();

    const navigate = useNavigate();
    const onClick = useCallback(() => {
        if (apiId == null || environmentId == null) {
            return;
        }
        navigate(
            [
                generatePath(FernRoutes.API_DEFINITION.absolutePath, {
                    API_ID: apiId,
                    ENVIRONMENT: environmentId,
                }),
                ...ancestorPackageNames.map((name) => `/${name}`),
                generatePath(FernRoutes.RELATIVE_ENDPOINT.absolutePath, {
                    ENDPOINT_ID: endpoint.id,
                }),
            ].join("")
        );
    }, [ancestorPackageNames, apiId, endpoint.id, environmentId, navigate]);

    return (
        <div onClick={onClick}>
            <EndpointTitle endpoint={endpoint} />
        </div>
    );
};
