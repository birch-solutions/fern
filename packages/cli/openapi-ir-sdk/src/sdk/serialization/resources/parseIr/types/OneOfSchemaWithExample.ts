/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";

export const OneOfSchemaWithExample: core.serialization.Schema<
    serializers.OneOfSchemaWithExample.Raw,
    FernOpenapiIr.OneOfSchemaWithExample
> = core.serialization
    .union("type", {
        discriminated: core.serialization.lazyObject(() => serializers.DiscriminatedOneOfSchemaWithExample),
        undisciminated: core.serialization.lazyObject(() => serializers.UnDiscriminatedOneOfSchemaWithExample),
    })
    .transform<FernOpenapiIr.OneOfSchemaWithExample>({
        transform: (value) => {
            switch (value.type) {
                case "discriminated":
                    return FernOpenapiIr.OneOfSchemaWithExample.discriminated(value);
                case "undisciminated":
                    return FernOpenapiIr.OneOfSchemaWithExample.undisciminated(value);
                default:
                    return value as FernOpenapiIr.OneOfSchemaWithExample;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace OneOfSchemaWithExample {
    type Raw = OneOfSchemaWithExample.Discriminated | OneOfSchemaWithExample.Undisciminated;

    interface Discriminated extends serializers.DiscriminatedOneOfSchemaWithExample.Raw {
        type: "discriminated";
    }

    interface Undisciminated extends serializers.UnDiscriminatedOneOfSchemaWithExample.Raw {
        type: "undisciminated";
    }
}
