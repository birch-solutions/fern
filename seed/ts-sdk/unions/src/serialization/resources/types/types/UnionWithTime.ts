/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedUnions from "../../../../api/index";
import * as core from "../../../../core";

export const UnionWithTime: core.serialization.Schema<serializers.UnionWithTime.Raw, SeedUnions.UnionWithTime> = core.serialization.union("type", {
        "value": core.serialization.object({
            "value": core.serialization.number()
        }),
        "date": core.serialization.object({
            "value": core.serialization.string()
        }),
        "datetime": core.serialization.object({
            "value": core.serialization.date()
        })
    }).transform<SeedUnions.UnionWithTime>({
        transform: value => value,
        untransform: value => value
    });

export declare namespace UnionWithTime {
    type Raw = UnionWithTime.Value | UnionWithTime.Date | UnionWithTime.Datetime;

    interface Value {
        "type": "value";
        "value": number;
    }

    interface Date {
        "type": "date";
        "value": string;
    }

    interface Datetime {
        "type": "datetime";
        "value": string;
    }
}
