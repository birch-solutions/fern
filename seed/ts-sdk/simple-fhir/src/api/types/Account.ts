/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedApi from "../index";

export interface Account extends SeedApi.BaseResource {
    resourceType: "Account";
    name: string;
    patient?: SeedApi.Patient;
    practitioner?: SeedApi.Practitioner;
}
