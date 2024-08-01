/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type WeatherReport = 
    | "SUNNY"
    | "CLOUDY"
    | "RAINING"
    | "SNOWING";

export const WeatherReport = {
        Sunny: "SUNNY",
        Cloudy: "CLOUDY",
        Raining: "RAINING",
        Snowing: "SNOWING",
        _visit: <R>(value: WeatherReport, visitor: WeatherReport.Visitor<R>) => {
            switch (value) {
                case WeatherReport.Sunny: return visitor.sunny();
                case WeatherReport.Cloudy: return visitor.cloudy();
                case WeatherReport.Raining: return visitor.raining();
                case WeatherReport.Snowing: return visitor.snowing();
                default: return visitor._other();
            }
        }
    } as const;

export declare namespace WeatherReport {
    interface Visitor<R> {
        sunny: () => R;
        cloudy: () => R;
        raining: () => R;
        snowing: () => R;
        _other: () => R;
    }
}
