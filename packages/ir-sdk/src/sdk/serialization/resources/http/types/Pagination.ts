/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const Pagination: core.serialization.Schema<serializers.Pagination.Raw, FernIr.Pagination> = core.serialization
    .union("type", {
        cursor: core.serialization.lazyObject(async () => (await import("../../..")).CursorPagination),
        offset: core.serialization.lazyObject(async () => (await import("../../..")).OffsetPagination),
    })
    .transform<FernIr.Pagination>({
        transform: (value) => {
            switch (value.type) {
                case "cursor":
                    return FernIr.Pagination.cursor(value);
                case "offset":
                    return FernIr.Pagination.offset(value);
                default:
                    return value as FernIr.Pagination;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace Pagination {
    type Raw = Pagination.Cursor | Pagination.Offset;

    interface Cursor extends serializers.CursorPagination.Raw {
        type: "cursor";
    }

    interface Offset extends serializers.OffsetPagination.Raw {
        type: "offset";
    }
}
