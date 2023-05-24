import { H2 } from "@blueprintjs/core";
import * as FernRegistryApiRead from "@fern-fern/registry-browser/api/resources/api/resources/v1/resources/read";
import { useMemo } from "react";
import { useApiDefinitionContext } from "../../api-context/useApiDefinitionContext";
import { PageMargins } from "../../page-margins/PageMargins";
import { ApiPackageContents } from "../ApiPackageContents";
import { useApiPageCenterElement } from "../useApiPageCenterElement";
import { doesSubpackageHaveEndpointsRecursive } from "./doesSubpackageHaveEndpointsRecursive";
import { SubpackageTitle } from "./SubpackageTitlte";

export declare namespace ApiSubpackage {
    export interface Props {
        subpackageId: FernRegistryApiRead.SubpackageId;
        slug: string;
    }
}

export const ApiSubpackage: React.FC<ApiSubpackage.Props> = ({ subpackageId, slug }) => {
    const { resolveSubpackageById } = useApiDefinitionContext();

    const subpackage = resolveSubpackageById(subpackageId);

    const { setTargetRef } = useApiPageCenterElement({ slug });

    const hasEndpointsInTree = useMemo(
        () => doesSubpackageHaveEndpointsRecursive(subpackageId, resolveSubpackageById),
        [resolveSubpackageById, subpackageId]
    );
    if (!hasEndpointsInTree) {
        return null;
    }

    return (
        <>
            <PageMargins>
                <H2 elementRef={setTargetRef} key="title">
                    <SubpackageTitle subpackage={subpackage} />
                </H2>
            </PageMargins>
            <ApiPackageContents key={subpackageId} package={subpackage} slug={slug} />
        </>
    );
};
