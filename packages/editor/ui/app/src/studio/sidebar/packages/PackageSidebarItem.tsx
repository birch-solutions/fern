import { IconNames } from "@blueprintjs/icons";
import { EditorItemIdGenerator } from "@fern-api/editor-item-id-generator";
import { TransactionGenerator } from "@fern-api/transaction-generator";
import { FernApiEditor } from "@fern-fern/api-editor-sdk";
import React, { useCallback, useMemo } from "react";
import { useApiEditorContext } from "../../../api-editor-context/ApiEditorContext";
import { useSidebarContext } from "../context/useSidebarContext";
import { SidebarItemIdGenerator } from "../ids/SidebarItemIdGenerator";
import { CollapsibleSidebarItemRow } from "../items/CollapsibleSidebarItemRow";

export declare namespace PackageSidebarItem {
    export interface Props {
        package_: FernApiEditor.Package;
        isRootPackage: boolean;
        children: CollapsibleSidebarItemRow.Props["children"];
    }
}

export const PackageSidebarItem: React.FC<PackageSidebarItem.Props> = ({ package_, isRootPackage, children }) => {
    const { submitTransaction } = useApiEditorContext();
    const { setDraft } = useSidebarContext();

    const onClickAdd = useCallback(() => {
        setDraft({
            type: "package",
            isDraft: true,
            packageId: EditorItemIdGenerator.package(),
            parent: package_.packageId,
        });
    }, [package_.packageId, setDraft]);

    const onRename = useCallback(
        (newPackageName: string) => {
            submitTransaction(
                TransactionGenerator.renamePackage({
                    packageId: package_.packageId,
                    newPackageName,
                })
            );
        },
        [package_.packageId, submitTransaction]
    );

    const onDelete = useCallback(() => {
        submitTransaction(
            TransactionGenerator.deletePackage({
                packageId: package_.packageId,
            })
        );
    }, [package_.packageId, submitTransaction]);

    const sidebarItemId = useMemo(() => SidebarItemIdGenerator.package(package_), [package_]);

    return (
        <CollapsibleSidebarItemRow
            itemId={sidebarItemId}
            label={package_.packageName}
            icon={IconNames.BOX}
            onClickAdd={onClickAdd}
            onRename={onRename}
            onDelete={onDelete}
            defaultIsCollapsed={!isRootPackage}
        >
            {children}
        </CollapsibleSidebarItemRow>
    );
};
