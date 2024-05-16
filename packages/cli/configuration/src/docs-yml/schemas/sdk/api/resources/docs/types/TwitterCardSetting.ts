/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type TwitterCardSetting = "summary" | "summary_large_image" | "app" | "player";

export const TwitterCardSetting = {
    Summary: "summary",
    SummaryLargeImage: "summary_large_image",
    App: "app",
    Player: "player",
    _visit: <R>(value: TwitterCardSetting, visitor: TwitterCardSetting.Visitor<R>) => {
        switch (value) {
            case TwitterCardSetting.Summary:
                return visitor.summary();
            case TwitterCardSetting.SummaryLargeImage:
                return visitor.summaryLargeImage();
            case TwitterCardSetting.App:
                return visitor.app();
            case TwitterCardSetting.Player:
                return visitor.player();
            default:
                return visitor._other();
        }
    },
} as const;

export declare namespace TwitterCardSetting {
    interface Visitor<R> {
        summary: () => R;
        summaryLargeImage: () => R;
        app: () => R;
        player: () => R;
        _other: () => R;
    }
}
