/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../../../index";
import * as SeedTrace from "../../../../../../../../api/index";
import * as core from "../../../../../../../../core";
import { BasicCustomFiles } from "./BasicCustomFiles";
import { Files } from "./Files";
import { Language } from "../../../../../../commons/types/Language";

export const CustomFiles: core.serialization.Schema<serializers.v2.v3.CustomFiles.Raw, SeedTrace.v2.v3.CustomFiles> =
    core.serialization
        .union("type", {
            basic: BasicCustomFiles,
            custom: core.serialization.object({
                value: core.serialization.record(Language, Files.optional()),
            }),
        })
        .transform<SeedTrace.v2.v3.CustomFiles>({
            transform: (value) => {
                switch (value.type) {
                    case "basic":
                        return SeedTrace.v2.v3.CustomFiles.basic(value);
                    case "custom":
                        return SeedTrace.v2.v3.CustomFiles.custom(value.value);
                    default:
                        return SeedTrace.v2.v3.CustomFiles._unknown(value);
                }
            },
            untransform: ({ _visit, ...value }) => value as any,
        });

export declare namespace CustomFiles {
    export type Raw = CustomFiles.Basic | CustomFiles.Custom;

    export interface Basic extends BasicCustomFiles.Raw {
        type: "basic";
    }

    export interface Custom {
        type: "custom";
        value: Record<Language.Raw, Files.Raw | null | undefined>;
    }
}
