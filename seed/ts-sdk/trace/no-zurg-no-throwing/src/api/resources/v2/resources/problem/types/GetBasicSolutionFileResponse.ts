/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedTrace from "../../../../../index";

export interface GetBasicSolutionFileResponse {
    "solutionFileByLanguage": Record<SeedTrace.Language, SeedTrace.v2.FileInfoV2 | undefined>;
}
