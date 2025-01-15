/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { Literal } from "./Literal";

export const ContainerType: core.serialization.Schema<serializers.ContainerType.Raw, FernIr.ContainerType> =
    core.serialization
        .union(core.serialization.discriminant("type", "_type"), {
            list: core.serialization.object({
                list: core.serialization.lazy(() => serializers.TypeReference),
            }),
            map: core.serialization.lazyObject(() => serializers.MapType),
            nullable: core.serialization.object({
                nullable: core.serialization.lazy(() => serializers.TypeReference),
            }),
            optional: core.serialization.object({
                optional: core.serialization.lazy(() => serializers.TypeReference),
            }),
            set: core.serialization.object({
                set: core.serialization.lazy(() => serializers.TypeReference),
            }),
            literal: core.serialization.object({
                literal: Literal,
            }),
        })
        .transform<FernIr.ContainerType>({
            transform: (value) => {
                switch (value.type) {
                    case "list":
                        return FernIr.ContainerType.list(value.list);
                    case "map":
                        return FernIr.ContainerType.map(value);
                    case "nullable":
                        return FernIr.ContainerType.nullable(value.nullable);
                    case "optional":
                        return FernIr.ContainerType.optional(value.optional);
                    case "set":
                        return FernIr.ContainerType.set(value.set);
                    case "literal":
                        return FernIr.ContainerType.literal(value.literal);
                    default:
                        return value as FernIr.ContainerType;
                }
            },
            untransform: ({ _visit, ...value }) => value as any,
        });

export declare namespace ContainerType {
    export type Raw =
        | ContainerType.List
        | ContainerType.Map
        | ContainerType.Nullable
        | ContainerType.Optional
        | ContainerType.Set
        | ContainerType.Literal;

    export interface List {
        _type: "list";
        list: serializers.TypeReference.Raw;
    }

    export interface Map extends serializers.MapType.Raw {
        _type: "map";
    }

    export interface Nullable {
        _type: "nullable";
        nullable: serializers.TypeReference.Raw;
    }

    export interface Optional {
        _type: "optional";
        optional: serializers.TypeReference.Raw;
    }

    export interface Set {
        _type: "set";
        set: serializers.TypeReference.Raw;
    }

    export interface Literal {
        _type: "literal";
        literal: Literal.Raw;
    }
}
