import * as FernRegistryApiRead from "@fern-fern/registry-browser/serialization/resources/api/resources/v1/resources/read";
import * as FernRegistryDocsRead from "@fern-fern/registry-browser/serialization/resources/docs/resources/v1/resources/read";
import { useRouter } from "next/router";
import { PropsWithChildren, useCallback, useEffect, useMemo, useState } from "react";
import { DocsContext, DocsContextValue } from "./DocsContext";
import { UrlPathResolverImpl } from "./url-path-resolver/UrlPathResolver";
import { useSlugListeners } from "./useSlugListeners";

export declare namespace DocsContextProvider {
    export type Props = PropsWithChildren<{
        docsDefinition: FernRegistryDocsRead.DocsDefinition.Raw;
        basePath: string | undefined;
        pathname: string;
    }>;
}

export const DocsContextProvider: React.FC<DocsContextProvider.Props> = ({
    docsDefinition,
    basePath = "/",
    pathname,
    children,
}) => {
    const router = useRouter();
    const urlPathResolver = useMemo(() => new UrlPathResolverImpl(docsDefinition), [docsDefinition]);

    const resolvedPathFromUrl = useMemo(() => {
        let path = pathname;
        path = path.replace(new RegExp(`^${basePath}`), "");
        path = removeLeadingAndTrailingSlashes(path);
        return urlPathResolver.resolveSlug(path);
    }, [basePath, urlPathResolver, pathname]);

    const [selectedPath, setSelectedPath] = useState(resolvedPathFromUrl);
    // handle redirects
    useEffect(() => {
        if (selectedPath == null && resolvedPathFromUrl != null) {
            setSelectedPath(resolvedPathFromUrl);
        }
    }, [resolvedPathFromUrl, selectedPath]);

    const nextPath = useMemo(
        () => (resolvedPathFromUrl != null ? urlPathResolver.getNextNavigatableItem(resolvedPathFromUrl) : undefined),
        [resolvedPathFromUrl, urlPathResolver]
    );

    const previousPath = useMemo(
        () =>
            resolvedPathFromUrl != null ? urlPathResolver.getPreviousNavigatableItem(resolvedPathFromUrl) : undefined,
        [resolvedPathFromUrl, urlPathResolver]
    );

    const resolveApi = useCallback(
        (apiId: string): FernRegistryApiRead.ApiDefinition.Raw => {
            const api = docsDefinition.apis[apiId];
            if (api == null) {
                throw new Error("API does not exist: " + apiId);
            }
            return api;
        },
        [docsDefinition.apis]
    );

    const resolvePage = useCallback(
        (pageId: FernRegistryDocsRead.PageId.Raw): FernRegistryDocsRead.PageContent.Raw => {
            const page = docsDefinition.pages[pageId];
            if (page == null) {
                throw new Error("Page does not exist: " + pageId);
            }
            return page;
        },
        [docsDefinition.pages]
    );

    const resolveFile = useCallback(
        (fileId: FernRegistryDocsRead.FileId.Raw): FernRegistryDocsRead.Url.Raw => {
            const file = docsDefinition.files[fileId];
            if (file == null) {
                throw new Error("File does not exist: " + fileId);
            }
            return file;
        },
        [docsDefinition.files]
    );

    const navigateToPathListeners = useSlugListeners("navigateToPath", { selectedSlug: selectedPath?.slug });

    const [justNavigated, setJustNavigated] = useState(false);
    const navigateToPath = useCallback(
        (slug: string) => {
            const path = urlPathResolver.resolveSlugOrThrow(slug);
            setJustNavigated(true);
            setSelectedPath(path);
            void router.push(path.slug);
            navigateToPathListeners.invokeListeners(slug);

            const timeout = setTimeout(() => {
                setJustNavigated(false);
            }, 500);
            return () => {
                clearTimeout(timeout);
            };
        },
        [navigateToPathListeners, router, urlPathResolver]
    );

    const scrollToPathListeners = useSlugListeners("scrollToPath", { selectedSlug: selectedPath?.slug });

    const onScrollToPath = useCallback(
        (slug: string) => {
            if (justNavigated || slug === selectedPath?.slug) {
                return;
            }
            const path = urlPathResolver.resolveSlugOrThrow(slug);
            setSelectedPath(path);
            void router.push(path.slug, undefined, { shallow: true });
            scrollToPathListeners.invokeListeners(slug);
        },
        [justNavigated, router, scrollToPathListeners, selectedPath?.slug, urlPathResolver]
    );

    const contextValue = useCallback(
        (): DocsContextValue => ({
            basePath,
            resolveApi,
            resolvePage,
            resolveFile,
            docsDefinition,
            registerNavigateToPathListener: navigateToPathListeners.registerListener,
            navigateToPath,
            selectedPath,
            onScrollToPath,
            registerScrolledToPathListener: scrollToPathListeners.registerListener,
            resolvedPathFromUrl,
            nextPath,
            previousPath,
        }),
        [
            basePath,
            docsDefinition,
            navigateToPath,
            navigateToPathListeners.registerListener,
            nextPath,
            onScrollToPath,
            previousPath,
            resolveApi,
            resolveFile,
            resolvePage,
            resolvedPathFromUrl,
            scrollToPathListeners.registerListener,
            selectedPath,
        ]
    );

    return <DocsContext.Provider value={contextValue}>{children}</DocsContext.Provider>;
};

function removeLeadingAndTrailingSlashes(s: string): string {
    if (s.startsWith("/")) {
        s = s.substring(1);
    }
    if (s.endsWith("/")) {
        s = s.substring(0, s.length - 1);
    }
    return s;
}
