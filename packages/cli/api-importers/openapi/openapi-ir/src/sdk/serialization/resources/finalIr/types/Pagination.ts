/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { CursorPagination } from "./CursorPagination";
import { OffsetPagination } from "./OffsetPagination";

export const Pagination: core.serialization.Schema<serializers.Pagination.Raw, FernOpenapiIr.Pagination> =
    core.serialization
        .union("type", {
            cursor: CursorPagination,
            offset: OffsetPagination
        })
        .transform<FernOpenapiIr.Pagination>({
            transform: (value) => {
                switch (value.type) {
                    case "cursor":
                        return FernOpenapiIr.Pagination.cursor(value);
                    case "offset":
                        return FernOpenapiIr.Pagination.offset(value);
                    default:
                        return value as FernOpenapiIr.Pagination;
                }
            },
            untransform: ({ _visit, ...value }) => value as any
        });

export declare namespace Pagination {
    type Raw = Pagination.Cursor | Pagination.Offset;

    interface Cursor extends CursorPagination.Raw {
        type: "cursor";
    }

    interface Offset extends OffsetPagination.Raw {
        type: "offset";
    }
}
