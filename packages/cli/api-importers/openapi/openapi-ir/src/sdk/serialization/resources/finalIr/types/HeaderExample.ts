/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const HeaderExample: core.serialization.ObjectSchema<
    serializers.HeaderExample.Raw,
    FernOpenapiIr.HeaderExample
> = core.serialization.objectWithoutOptionalProperties({
    name: core.serialization.string(),
    value: core.serialization.lazy(() => serializers.FullExample)
});

export declare namespace HeaderExample {
    interface Raw {
        name: string;
        value: serializers.FullExample.Raw;
    }
}
