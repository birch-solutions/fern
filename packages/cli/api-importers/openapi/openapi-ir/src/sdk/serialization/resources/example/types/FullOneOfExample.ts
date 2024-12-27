/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { PropertyKey } from "./PropertyKey";

export const FullOneOfExample: core.serialization.Schema<
    serializers.FullOneOfExample.Raw,
    FernOpenapiIr.FullOneOfExample
> = core.serialization
    .union("type", {
        discriminated: core.serialization.object({
            value: core.serialization.record(
                PropertyKey,
                core.serialization.lazy(() => serializers.FullExample),
            ),
        }),
        undisciminated: core.serialization.object({
            value: core.serialization.lazy(() => serializers.FullExample),
        }),
    })
    .transform<FernOpenapiIr.FullOneOfExample>({
        transform: (value) => {
            switch (value.type) {
                case "discriminated":
                    return FernOpenapiIr.FullOneOfExample.discriminated(value.value);
                case "undisciminated":
                    return FernOpenapiIr.FullOneOfExample.undisciminated(value.value);
                default:
                    return value as FernOpenapiIr.FullOneOfExample;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace FullOneOfExample {
    export type Raw = FullOneOfExample.Discriminated | FullOneOfExample.Undisciminated;

    export interface Discriminated {
        type: "discriminated";
        value: Record<PropertyKey.Raw, serializers.FullExample.Raw>;
    }

    export interface Undisciminated {
        type: "undisciminated";
        value: serializers.FullExample.Raw;
    }
}
