/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index.js";
import * as SeedExamples from "../../../../api/index.js";
import * as core from "../../../../core/index.js";
import { CastMember } from "./CastMember.js";
import { ExtendedMovie } from "./ExtendedMovie.js";
import { Entity } from "./Entity.js";
import { Metadata } from "./Metadata.js";
import { Metadata } from "../../commons/resources/types/types/Metadata.js";
import { EventInfo } from "../../commons/resources/types/types/EventInfo.js";
import { Data } from "../../commons/resources/types/types/Data.js";
import { Migration } from "./Migration.js";
import { Exception } from "./Exception.js";
import { Test } from "./Test.js";
import { Moment } from "./Moment.js";

export const BigEntity: core.serialization.ObjectSchema<serializers.BigEntity.Raw, SeedExamples.BigEntity> =
    core.serialization.object({
        castMember: CastMember.optional(),
        extendedMovie: ExtendedMovie.optional(),
        entity: Entity.optional(),
        metadata: Metadata.optional(),
        commonMetadata: Metadata.optional(),
        eventInfo: EventInfo.optional(),
        data: Data.optional(),
        migration: Migration.optional(),
        exception: Exception.optional(),
        test: Test.optional(),
        node: core.serialization.lazyObject(() => serializers.Node).optional(),
        directory: core.serialization.lazyObject(() => serializers.Directory).optional(),
        moment: Moment.optional(),
    });

export declare namespace BigEntity {
    export interface Raw {
        castMember?: CastMember.Raw | null;
        extendedMovie?: ExtendedMovie.Raw | null;
        entity?: Entity.Raw | null;
        metadata?: Metadata.Raw | null;
        commonMetadata?: Metadata.Raw | null;
        eventInfo?: EventInfo.Raw | null;
        data?: Data.Raw | null;
        migration?: Migration.Raw | null;
        exception?: Exception.Raw | null;
        test?: Test.Raw | null;
        node?: serializers.Node.Raw | null;
        directory?: serializers.Directory.Raw | null;
        moment?: Moment.Raw | null;
    }
}
