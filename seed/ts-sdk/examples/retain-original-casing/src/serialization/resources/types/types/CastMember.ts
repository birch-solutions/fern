/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedExamples from "../../../../api/index";
import * as core from "../../../../core";
import { Actor } from "./Actor";
import { Actress } from "./Actress";
import { StuntDouble } from "./StuntDouble";

export const CastMember: core.serialization.Schema<serializers.CastMember.Raw, SeedExamples.CastMember> = core.serialization.undiscriminatedUnion([Actor, Actress, StuntDouble]);

export declare namespace CastMember {
    type Raw = Actor.Raw | Actress.Raw | StuntDouble.Raw;
}
