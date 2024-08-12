/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { WithDocs } from "../../commons/types/WithDocs";

export const WebSocketMessageBodyReference: core.serialization.ObjectSchema<
    serializers.WebSocketMessageBodyReference.Raw,
    FernIr.WebSocketMessageBodyReference
> = core.serialization
    .objectWithoutOptionalProperties({
        bodyType: core.serialization.lazy(() => serializers.TypeReference),
    })
    .extend(WithDocs);

export declare namespace WebSocketMessageBodyReference {
    interface Raw extends WithDocs.Raw {
        bodyType: serializers.TypeReference.Raw;
    }
}
