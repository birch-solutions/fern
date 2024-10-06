/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { FernExample } from "./FernExample";
import { FullEndpointExample } from "./FullEndpointExample";

export const EndpointExample: core.serialization.Schema<
    serializers.EndpointExample.Raw,
    FernOpenapiIr.EndpointExample
> = core.serialization
    .union("type", {
        unknown: core.serialization.object({
            value: FernExample
        }),
        full: FullEndpointExample
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
        untransform: ({ _visit, ...value }) => value as any
    });

export declare namespace EndpointExample {
    type Raw = EndpointExample.Unknown | EndpointExample.Full;

    interface Unknown {
        type: "unknown";
        value?: FernExample.Raw;
    }

    interface Full extends FullEndpointExample.Raw {
        type: "full";
    }
}
