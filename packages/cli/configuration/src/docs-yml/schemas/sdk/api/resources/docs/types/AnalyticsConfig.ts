/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDocsConfig from "../../../index";

export interface AnalyticsConfig {
    segment?: FernDocsConfig.SegmentConfig;
    fullstory?: FernDocsConfig.FullStoryAnalyticsConfig;
    intercom?: FernDocsConfig.IntercomConfig;
    posthog?: FernDocsConfig.PostHogConfig;
    gtm?: FernDocsConfig.GtmConfig;
    ga4?: FernDocsConfig.GoogleAnalytics4Config;
}
