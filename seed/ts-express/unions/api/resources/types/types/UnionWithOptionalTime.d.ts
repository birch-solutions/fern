/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as SeedUnions from "../../../index";
export declare type UnionWithOptionalTime = SeedUnions.UnionWithOptionalTime.Date_ | SeedUnions.UnionWithOptionalTime.Dateimte;
export declare namespace UnionWithOptionalTime {
    interface Date_ {
        type: "date";
        value?: string;
    }
    interface Dateimte {
        type: "dateimte";
        value?: Date;
    }
}
