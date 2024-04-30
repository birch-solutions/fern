/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as SeedTrace from "../../../../api/index";
import * as core from "../../../../core";

export const TestCaseGrade: core.serialization.Schema<serializers.TestCaseGrade.Raw, SeedTrace.TestCaseGrade> =
    core.serialization
        .union("type", {
            hidden: core.serialization.lazyObject(async () => (await import("../../..")).TestCaseHiddenGrade),
            nonHidden: core.serialization.lazyObject(async () => (await import("../../..")).TestCaseNonHiddenGrade),
        })
        .transform<SeedTrace.TestCaseGrade>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace TestCaseGrade {
    type Raw = TestCaseGrade.Hidden | TestCaseGrade.NonHidden;

    interface Hidden extends serializers.TestCaseHiddenGrade.Raw {
        type: "hidden";
    }

    interface NonHidden extends serializers.TestCaseNonHiddenGrade.Raw {
        type: "nonHidden";
    }
}
