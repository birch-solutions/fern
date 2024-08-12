/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernOpenapiIr from "../../../../api/index";
import * as core from "../../../../core";
import { TagId } from "../../commons/types/TagId";
import { Tag } from "../../commons/types/Tag";

export const Tags: core.serialization.ObjectSchema<serializers.Tags.Raw, FernOpenapiIr.Tags> =
    core.serialization.objectWithoutOptionalProperties({
        tagsById: core.serialization.record(TagId, Tag),
        orderedTagIds: core.serialization.list(TagId).optional(),
    });

export declare namespace Tags {
    interface Raw {
        tagsById: Record<TagId.Raw, Tag.Raw>;
        orderedTagIds?: TagId.Raw[] | null;
    }
}
