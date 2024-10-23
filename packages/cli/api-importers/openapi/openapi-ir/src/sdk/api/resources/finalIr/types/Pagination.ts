/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernOpenapiIr from "../../../index";

export type Pagination = FernOpenapiIr.Pagination.Cursor | FernOpenapiIr.Pagination.Offset;

export declare namespace Pagination {
    interface Cursor extends FernOpenapiIr.CursorPagination, _Utils {
        type: "cursor";
    }

    interface Offset extends FernOpenapiIr.OffsetPagination, _Utils {
        type: "offset";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernOpenapiIr.Pagination._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        cursor: (value: FernOpenapiIr.CursorPagination) => _Result;
        offset: (value: FernOpenapiIr.OffsetPagination) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const Pagination = {
    cursor: (value: FernOpenapiIr.CursorPagination): FernOpenapiIr.Pagination.Cursor => {
        return {
            ...value,
            type: "cursor",
            _visit: function <_Result>(
                this: FernOpenapiIr.Pagination.Cursor,
                visitor: FernOpenapiIr.Pagination._Visitor<_Result>
            ) {
                return FernOpenapiIr.Pagination._visit(this, visitor);
            },
        };
    },

    offset: (value: FernOpenapiIr.OffsetPagination): FernOpenapiIr.Pagination.Offset => {
        return {
            ...value,
            type: "offset",
            _visit: function <_Result>(
                this: FernOpenapiIr.Pagination.Offset,
                visitor: FernOpenapiIr.Pagination._Visitor<_Result>
            ) {
                return FernOpenapiIr.Pagination._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernOpenapiIr.Pagination,
        visitor: FernOpenapiIr.Pagination._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "cursor":
                return visitor.cursor(value);
            case "offset":
                return visitor.offset(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
