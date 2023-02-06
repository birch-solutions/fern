import { NoInlineEnums } from "./no-inline-enums";
import { NoInlineObjects } from "./no-inline-objects";
import { NoInlineUnions } from "./no-inline-unions";
import { OperationIdRequired } from "./operation-id-required";
import { CustomRule, SpectralRule } from "./Rule";

const ALL_RULES = {
    spectralRules: [OperationIdRequired, NoInlineEnums, NoInlineObjects, NoInlineUnions],
    customRules: [],
};

export function getAllRules(): { spectralRules: SpectralRule[]; customRules: CustomRule[] } {
    return ALL_RULES;
}
