/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernOpenapiIr from "../../../../api";
import * as core from "../../../../core";

export const EndpointExample: core.serialization.Schema<
    serializers.EndpointExample.Raw,
    FernOpenapiIr.EndpointExample
> = core.serialization
    .union("type", {
        unknown: core.serialization.object({
            value: core.serialization.lazy(async () => (await import("../../..")).FernExample),
        }),
        full: core.serialization.lazyObject(async () => (await import("../../..")).FullEndpointExample),
    })
    .transform<FernOpenapiIr.EndpointExample>({
        transform: (value) => {
            switch (value.type) {
                case "unknown":
                    return FernOpenapiIr.EndpointExample.unknown(value.value);
                case "full":
                    return FernOpenapiIr.EndpointExample.full(value);
                default:
                    return value as FernOpenapiIr.EndpointExample;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace EndpointExample {
    type Raw = EndpointExample.Unknown | EndpointExample.Full;

    interface Unknown {
        type: "unknown";
        value?: serializers.FernExample.Raw;
    }

    interface Full extends serializers.FullEndpointExample.Raw {
        type: "full";
    }
}
