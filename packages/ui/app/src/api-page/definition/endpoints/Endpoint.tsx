import { H2 } from "@blueprintjs/core";
import { FernRegistry } from "@fern-fern/registry";
import styles from "./Endpoint.module.scss";
import { EndpointExample } from "./EndpointExample";
import { EndpointPath } from "./EndpointPath";
import { EndpointTitle } from "./EndpointTitle";
import { EndpointTypeSection } from "./EndpointTypeSection";
import { PathParametersSection } from "./PathParametersSection";
import { QueryParametersSection } from "./QueryParametersSection";

export declare namespace Endpoint {
    export interface Props {
        endpoint: FernRegistry.EndpointDefinition;
    }
}

export const Endpoint: React.FC<Endpoint.Props> = ({ endpoint }) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleSection}>
                <H2 className={styles.title}>
                    <EndpointTitle endpoint={endpoint} />
                </H2>
                {endpoint.displayName != null && <EndpointPath className={styles.endpointPath} endpoint={endpoint} />}
            </div>
            <div className={styles.body}>
                <div className={styles.definition}>
                    {endpoint.docs != null && <div className={styles.docs}>{endpoint.docs}</div>}
                    {endpoint.path.pathParameters.length > 0 && (
                        <PathParametersSection pathParameters={endpoint.path.pathParameters} />
                    )}
                    {endpoint.queryParameters.length > 0 && (
                        <QueryParametersSection queryParameters={endpoint.queryParameters} />
                    )}
                    {endpoint.request != null && <EndpointTypeSection title="Request" type={endpoint.request} />}
                    {endpoint.response != null && <EndpointTypeSection title="Response" type={endpoint.response} />}
                </div>
                <div className={styles.examples}>
                    <EndpointExample request="" response="" />
                </div>
            </div>
        </div>
    );
};
