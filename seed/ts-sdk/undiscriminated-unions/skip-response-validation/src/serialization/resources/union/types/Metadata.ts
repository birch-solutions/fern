/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedUndiscriminatedUnions from "../../../../api/index";
import * as core from "../../../../core";
import { Key } from "./Key";

export const Metadata: core.serialization.Schema<serializers.Metadata.Raw, SeedUndiscriminatedUnions.Metadata> = core.serialization.record(Key, core.serialization.string());

export declare namespace Metadata {
    type Raw = Record<Key.Raw, string>;
}
