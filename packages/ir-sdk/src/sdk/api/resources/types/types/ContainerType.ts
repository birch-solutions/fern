/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type ContainerType =
    | FernIr.ContainerType.List
    | FernIr.ContainerType.Map
    | FernIr.ContainerType.Optional
    | FernIr.ContainerType.Set
    | FernIr.ContainerType.Literal;

export declare namespace ContainerType {
    interface List extends _Utils {
        type: "list";
        list: FernIr.TypeReference;
    }

    interface Map extends FernIr.MapType, _Utils {
        type: "map";
    }

    interface Optional extends _Utils {
        type: "optional";
        optional: FernIr.TypeReference;
    }

    interface Set extends _Utils {
        type: "set";
        set: FernIr.TypeReference;
    }

    interface Literal extends _Utils {
        type: "literal";
        literal: FernIr.Literal;
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ContainerType._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        list: (value: FernIr.TypeReference) => _Result;
        map: (value: FernIr.MapType) => _Result;
        optional: (value: FernIr.TypeReference) => _Result;
        set: (value: FernIr.TypeReference) => _Result;
        literal: (value: FernIr.Literal) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ContainerType = {
    list: (value: FernIr.TypeReference): FernIr.ContainerType.List => {
        return {
            list: value,
            type: "list",
            _visit <_Result>(
                this: FernIr.ContainerType.List,
                visitor: FernIr.ContainerType._Visitor<_Result>
            ) {
                return FernIr.ContainerType._visit(this, visitor);
            }
        };
    },

    map: (value: FernIr.MapType): FernIr.ContainerType.Map => {
        return {
            ...value,
            type: "map",
            _visit <_Result>(
                this: FernIr.ContainerType.Map,
                visitor: FernIr.ContainerType._Visitor<_Result>
            ) {
                return FernIr.ContainerType._visit(this, visitor);
            }
        };
    },

    optional: (value: FernIr.TypeReference): FernIr.ContainerType.Optional => {
        return {
            optional: value,
            type: "optional",
            _visit <_Result>(
                this: FernIr.ContainerType.Optional,
                visitor: FernIr.ContainerType._Visitor<_Result>
            ) {
                return FernIr.ContainerType._visit(this, visitor);
            }
        };
    },

    set: (value: FernIr.TypeReference): FernIr.ContainerType.Set => {
        return {
            set: value,
            type: "set",
            _visit <_Result>(
                this: FernIr.ContainerType.Set,
                visitor: FernIr.ContainerType._Visitor<_Result>
            ) {
                return FernIr.ContainerType._visit(this, visitor);
            }
        };
    },

    literal: (value: FernIr.Literal): FernIr.ContainerType.Literal => {
        return {
            literal: value,
            type: "literal",
            _visit <_Result>(
                this: FernIr.ContainerType.Literal,
                visitor: FernIr.ContainerType._Visitor<_Result>
            ) {
                return FernIr.ContainerType._visit(this, visitor);
            }
        };
    },

    _visit: <_Result>(value: FernIr.ContainerType, visitor: FernIr.ContainerType._Visitor<_Result>): _Result => {
        switch (value.type) {
            case "list":
                return visitor.list(value.list);
            case "map":
                return visitor.map(value);
            case "optional":
                return visitor.optional(value.optional);
            case "set":
                return visitor.set(value.set);
            case "literal":
                return visitor.literal(value.literal);
            default:
                return visitor._other(value as any);
        }
    }
} as const;
