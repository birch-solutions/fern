/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernSeedConfig from "../../..";

export interface SeedWorkspaceConfiguration {
    image: string;
    displayName: string;
    irVersion: string;
    test: FernSeedConfig.TestConfiguration;
    publish: FernSeedConfig.PublishConfiguration;
    /** The location of the changelog file, the schema of which must follow FDR's `GeneratorReleaseRequest` object. */
    changelogLocation?: string;
    language?: FernSeedConfig.Language;
    defaultCustomConfig?: Record<string, unknown>;
    defaultOutputMode: FernSeedConfig.OutputMode;
    generatorType: FernSeedConfig.GeneratorType;
    buildScripts?: FernSeedConfig.BuildScripts;
    /** Configuration that will be used for any custom fixture specified by --custom-fixture */
    customFixtureConfig?: FernSeedConfig.FixtureConfigurations;
    fixtures?: Record<string, FernSeedConfig.FixtureConfigurations[]>;
    scripts?: FernSeedConfig.DockerScriptConfig[];
    /**
     * List any fixtures that are okay to fail. For normal fixtures
     * just list the fixture name. For configured fixture list {fixture}:{outputFolder}.
     */
    allowedFailures?: string[];
    features?: FernSeedConfig.GeneratorFeatures;
}
