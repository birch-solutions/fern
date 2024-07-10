/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as SeedExamples from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const EventInfo: core.serialization.Schema<serializers.commons.EventInfo.Raw, SeedExamples.commons.EventInfo> =
    core.serialization
        .union("type", {
            metadata: core.serialization.lazyObject(() => serializers.commons.Metadata),
            tag: core.serialization.object({
                value: core.serialization.lazy(() => serializers.commons.Tag),
            }),
        })
        .transform<SeedExamples.commons.EventInfo>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace EventInfo {
    type Raw = EventInfo.Metadata | EventInfo.Tag;

    interface Metadata extends serializers.commons.Metadata.Raw {
        type: "metadata";
    }

    interface Tag {
        type: "tag";
        value: serializers.commons.Tag.Raw;
    }
}
