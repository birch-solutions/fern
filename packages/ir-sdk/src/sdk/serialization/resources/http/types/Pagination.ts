/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernIr from "../../../../api";
import * as core from "../../../../core";

export const Pagination: core.serialization.ObjectSchema<serializers.Pagination.Raw, FernIr.Pagination> =
    core.serialization.objectWithoutOptionalProperties({
        page: core.serialization.lazyObject(async () => (await import("../../..")).QueryParameter),
        next: core.serialization.lazyObject(async () => (await import("../../..")).ObjectProperty),
        results: core.serialization.lazyObject(async () => (await import("../../..")).ObjectProperty),
    });

export declare namespace Pagination {
    interface Raw {
        page: serializers.QueryParameter.Raw;
        next: serializers.ObjectProperty.Raw;
        results: serializers.ObjectProperty.Raw;
    }
}
