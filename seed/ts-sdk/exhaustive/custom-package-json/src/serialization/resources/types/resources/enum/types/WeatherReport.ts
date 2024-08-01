/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as Fiddle from "../../../../../../api/index";
import * as core from "../../../../../../core";

export const WeatherReport: core.serialization.Schema<serializers.types.WeatherReport.Raw, Fiddle.types.WeatherReport> = core.serialization.enum_(["SUNNY", "CLOUDY", "RAINING", "SNOWING"]);

export declare namespace WeatherReport {
    type Raw = "SUNNY" | "CLOUDY" | "RAINING" | "SNOWING";
}
