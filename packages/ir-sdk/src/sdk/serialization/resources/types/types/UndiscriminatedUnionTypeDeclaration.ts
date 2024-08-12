/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { UndiscriminatedUnionMember } from "./UndiscriminatedUnionMember";

export const UndiscriminatedUnionTypeDeclaration: core.serialization.ObjectSchema<
    serializers.UndiscriminatedUnionTypeDeclaration.Raw,
    FernIr.UndiscriminatedUnionTypeDeclaration
> = core.serialization.objectWithoutOptionalProperties({
    members: core.serialization.list(UndiscriminatedUnionMember),
});

export declare namespace UndiscriminatedUnionTypeDeclaration {
    interface Raw {
        members: UndiscriminatedUnionMember.Raw[];
    }
}
