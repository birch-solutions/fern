/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernDocsConfig from "../../..";

export interface ApiSectionConfiguration {
    api: string;
    /** Name of API that we are referencing */
    apiName?: string;
    audiences?: string[];
    /** Defaults to false */
    displayErrors?: boolean;
    snippets?: FernDocsConfig.SnippetsConfiguration;
    /**
     * If `layout` is set to `sidebar`, the API section will render with a sidebar.
     * If `layout` is set to `full`, the API section will render without a sidebar.
     */
    layout?: FernDocsConfig.ApiSectionLayout | undefined;
}
