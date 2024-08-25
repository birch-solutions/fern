/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const UnexpectedLanguageError: core.serialization.ObjectSchema<
    serializers.UnexpectedLanguageError.Raw,
    SeedTrace.UnexpectedLanguageError
> = core.serialization.object({
    expectedLanguage: core.serialization.lazy(() => serializers.Language),
    actualLanguage: core.serialization.lazy(() => serializers.Language),
});

export declare namespace UnexpectedLanguageError {
    interface Raw {
        expectedLanguage: serializers.Language.Raw;
        actualLanguage: serializers.Language.Raw;
    }
}
