/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { StatusCode } from "../../commons/types/StatusCode";
import { NamedFullExample } from "./NamedFullExample";
import { WithDescription } from "../../commons/types/WithDescription";
import { WithName } from "../../commons/types/WithName";
import { WithSource } from "../../commons/types/WithSource";

export const HttpErrorWithExample: core.serialization.ObjectSchema<
    serializers.HttpErrorWithExample.Raw,
    FernOpenapiIr.HttpErrorWithExample
> = core.serialization
    .objectWithoutOptionalProperties({
        statusCode: StatusCode,
        schema: core.serialization.lazy(() => serializers.SchemaWithExample),
        fullExamples: core.serialization.list(NamedFullExample).optional(),
    })
    .extend(WithDescription)
    .extend(WithName)
    .extend(WithSource);

export declare namespace HttpErrorWithExample {
    export interface Raw extends WithDescription.Raw, WithName.Raw, WithSource.Raw {
        statusCode: StatusCode.Raw;
        schema: serializers.SchemaWithExample.Raw;
        fullExamples?: NamedFullExample.Raw[] | null;
    }
}
