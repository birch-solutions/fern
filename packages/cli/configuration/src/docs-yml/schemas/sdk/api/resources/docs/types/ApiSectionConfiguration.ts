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
    /** Relative path to the markdown file. This summary is displayed at the top of the API section. */
    summary?: string;
    /** Advanced usage: when specified, this object will be used to customize the order that your API endpoints are displayed in the docs site, including subpackages, and additional markdown pages (to be rendered in between API endpoints). If not specified, the order will be inferred from the OpenAPI Spec or Fern Definition. */
    layout?: FernDocsConfig.ApiNavigationItems;
}
