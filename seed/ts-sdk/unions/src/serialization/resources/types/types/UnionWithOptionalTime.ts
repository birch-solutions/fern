/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedUnions from "../../../../api/index";
import * as core from "../../../../core";

export const UnionWithOptionalTime: core.serialization.Schema<
    serializers.UnionWithOptionalTime.Raw,
    SeedUnions.UnionWithOptionalTime
> = core.serialization
    .union("type", {
        date: core.serialization.object({
            value: core.serialization.string().optional(),
        }),
        dateimte: core.serialization.object({
            value: core.serialization.date().optional(),
        }),
    })
    .transform<SeedUnions.UnionWithOptionalTime>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace UnionWithOptionalTime {
    export type Raw = UnionWithOptionalTime.Date | UnionWithOptionalTime.Dateimte;

    export interface Date {
        type: "date";
        value?: string | null;
    }

    export interface Dateimte {
        type: "dateimte";
        value?: string | null;
    }
}
