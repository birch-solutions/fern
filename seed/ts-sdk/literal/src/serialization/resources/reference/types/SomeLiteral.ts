/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedLiteral from "../../../../api/index";
import * as core from "../../../../core";

export const SomeLiteral: core.serialization.Schema<serializers.SomeLiteral.Raw, SeedLiteral.SomeLiteral> = core.serialization.stringLiteral("You're super wise");

export declare namespace SomeLiteral {
    type Raw = "You're super wise";
}
