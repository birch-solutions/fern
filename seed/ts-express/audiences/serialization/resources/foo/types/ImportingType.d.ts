/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../../..";
import * as SeedAudiences from "../../../../api";
import * as core from "../../../../core";
export declare const ImportingType: core.serialization.ObjectSchema<serializers.ImportingType.Raw, SeedAudiences.ImportingType>;
export declare namespace ImportingType {
    interface Raw {
        imported: serializers.Imported.Raw;
    }
}
