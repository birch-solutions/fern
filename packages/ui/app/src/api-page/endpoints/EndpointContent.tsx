import * as FernRegistryApiRead from "@fern-fern/registry-browser/api/resources/api/resources/v1/resources/read";
import classNames from "classnames";
import { snakeCase } from "lodash-es";
import React, { useCallback, useMemo, useState } from "react";
import { isSubpackage } from "../../util/package";
import { JsonPropertyPath } from "../examples/json-example/contexts/JsonPropertyPath";
import { Markdown } from "../markdown/Markdown";
import { ApiPageMargins } from "../page-margins/ApiPageMargins";
import { useEndpointContext } from "./endpoint-context/useEndpointContext";
import { EndpointExample } from "./endpoint-examples/EndpointExample";
import { EndpointErrorsSection } from "./EndpointErrorsSection";
import { EndpointRequestSection } from "./EndpointRequestSection";
import { EndpointResponseSection } from "./EndpointResponseSection";
import { EndpointSection } from "./EndpointSection";
import { EndpointTitle } from "./EndpointTitle";
import { EndpointUrl } from "./EndpointUrl";
import { PathParametersSection } from "./PathParametersSection";
import { QueryParametersSection } from "./QueryParametersSection";

export declare namespace EndpointContent {
    export interface Props {
        endpoint: FernRegistryApiRead.EndpointDefinition;
        package: FernRegistryApiRead.ApiDefinitionPackage;
        hideBottomSeparator?: boolean;
        setContainerRef: (ref: HTMLElement | null) => void;
    }
}

export const EndpointContent = React.memo<EndpointContent.Props>(function EndpointContent({
    endpoint,
    package: package_,
    hideBottomSeparator = false,
    setContainerRef,
}) {
    const { setHoveredRequestPropertyPath, setHoveredResponsePropertyPath } = useEndpointContext();
    const onHoverRequestProperty = useCallback(
        (jsonPropertyPath: JsonPropertyPath, { isHovering }: { isHovering: boolean }) => {
            setHoveredRequestPropertyPath(isHovering ? jsonPropertyPath : undefined);
        },
        [setHoveredRequestPropertyPath]
    );
    const onHoverResponseProperty = useCallback(
        (jsonPropertyPath: JsonPropertyPath, { isHovering }: { isHovering: boolean }) => {
            setHoveredResponsePropertyPath(isHovering ? jsonPropertyPath : undefined);
        },
        [setHoveredResponsePropertyPath]
    );

    const computeAnchor = useCallback(
        (
            attributeType: "request" | "response" | "path" | "query",
            attribute:
                | FernRegistryApiRead.ObjectProperty
                | FernRegistryApiRead.PathParameter
                | FernRegistryApiRead.QueryParameter
        ) => {
            let anchor = "";
            if (isSubpackage(package_)) {
                anchor += snakeCase(package_.urlSlug) + "_";
            }
            anchor += snakeCase(endpoint.id);
            anchor += "-" + attributeType + "-";
            anchor += snakeCase(attribute.key);
            return anchor;
        },
        [package_, endpoint]
    );

    const [titleHeight, setTitleHeight] = useState<number>();
    const setTitleRef = useCallback(
        (ref: HTMLElement | null) => {
            if (titleHeight == null && ref != null) {
                setTitleHeight(ref.getBoundingClientRect().height);
            }
        },
        [titleHeight]
    );
    const [selectedErrorIndex, setSelectedErrorIndex] = useState<number | null>(null);
    const selectedError = selectedErrorIndex == null ? null : endpoint.errors[selectedErrorIndex] ?? null;
    const example = useMemo(() => {
        if (selectedError == null) {
            // Look for success example
            return endpoint.examples.find((e) => e.responseStatusCode >= 200 && e.responseStatusCode < 300) ?? null;
        }
        return endpoint.examples.find((e) => e.responseStatusCode === selectedError.statusCode) ?? null;
    }, [endpoint.examples, selectedError]);

    const endpointExample = example ? <EndpointExample endpoint={endpoint} example={example} /> : null;

    return (
        <ApiPageMargins
            className={classNames("pb-20", {
                "border-border border-b": !hideBottomSeparator,
            })}
            onClick={() => setSelectedErrorIndex(null)}
        >
            <div className="flex min-w-0 flex-1 flex-col lg:flex-row lg:space-x-[4vw]" ref={setContainerRef}>
                <div className="flex min-w-0 max-w-2xl flex-1 flex-col">
                    <div className="typography-font-heading pb-8 pt-20 text-3xl font-medium" ref={setTitleRef}>
                        <EndpointTitle endpoint={endpoint} />
                    </div>
                    <div className="flex flex-col items-start">
                        <EndpointUrl endpoint={endpoint} />
                    </div>
                    {endpoint.description != null && (
                        <div className="mt-6">
                            <Markdown type="api">{endpoint.description}</Markdown>
                        </div>
                    )}
                    <div className="mt-8 flex">
                        <div className="flex flex-1 flex-col gap-12">
                            {endpoint.path.pathParameters.length > 0 && (
                                <PathParametersSection
                                    pathParameters={endpoint.path.pathParameters}
                                    getParameterAnchor={(param) => computeAnchor("path", param)}
                                />
                            )}
                            {endpoint.queryParameters.length > 0 && (
                                <QueryParametersSection
                                    queryParameters={endpoint.queryParameters}
                                    getParameterAnchor={(param) => computeAnchor("query", param)}
                                />
                            )}
                            {endpoint.request != null && (
                                <EndpointSection title="Request">
                                    <EndpointRequestSection
                                        httpRequest={endpoint.request}
                                        onHoverProperty={onHoverRequestProperty}
                                        getPropertyAnchor={(property) => computeAnchor("request", property)}
                                    />
                                </EndpointSection>
                            )}
                            {endpoint.response != null && (
                                <EndpointSection title="Response">
                                    <EndpointResponseSection
                                        httpResponse={endpoint.response}
                                        onHoverProperty={onHoverResponseProperty}
                                        getPropertyAnchor={(property) => computeAnchor("response", property)}
                                    />
                                </EndpointSection>
                            )}
                            {process.env.NEXT_PUBLIC_DISPLAY_ERRORS === "true" && endpoint.errors.length > 0 && (
                                <EndpointSection title="Errors">
                                    <EndpointErrorsSection
                                        errors={endpoint.errors}
                                        onClickError={(_, idx, event) => {
                                            event.stopPropagation();
                                            setSelectedErrorIndex(idx);
                                        }}
                                        onHoverProperty={onHoverResponseProperty}
                                        selectedErrorIndex={selectedErrorIndex}
                                    />
                                </EndpointSection>
                            )}
                        </div>
                    </div>
                </div>
                {titleHeight != null && (
                    <div
                        className={classNames(
                            "flex-1 sticky self-start top-0 min-w-sm max-w-lg",
                            // the py-10 is the same as the 40px below
                            "py-10",
                            // the 4rem is the same as the h-10 as the Header
                            "max-h-[calc(100vh-4rem)]",
                            // hide on mobile,
                            "hidden lg:flex"
                        )}
                        style={{
                            // the 40px is the same as the py-10 above
                            marginTop: titleHeight - 40,
                        }}
                    >
                        {endpointExample}
                    </div>
                )}

                <div className="mt-10 flex max-h-[150vh] lg:mt-0 lg:hidden">{endpointExample}</div>
            </div>
        </ApiPageMargins>
    );
});
