/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedApi from "../../../index";

/**
 * This type allows us to test a circular reference with a union type (see FieldValue).
 */
export interface ObjectFieldValue {
    "name": SeedApi.FieldName;
    "value": SeedApi.FieldValue;
}
