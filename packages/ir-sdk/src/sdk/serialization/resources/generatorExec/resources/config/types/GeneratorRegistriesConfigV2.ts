/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { MavenRegistryConfigV2 } from "./MavenRegistryConfigV2";
import { NpmRegistryConfigV2 } from "./NpmRegistryConfigV2";
import { PypiRegistryConfig } from "./PypiRegistryConfig";
import { RubyGemsRegistryConfig } from "./RubyGemsRegistryConfig";
import { NugetRegistryConfig } from "./NugetRegistryConfig";

export const GeneratorRegistriesConfigV2: core.serialization.ObjectSchema<
    serializers.generatorExec.GeneratorRegistriesConfigV2.Raw,
    FernIr.generatorExec.GeneratorRegistriesConfigV2
> = core.serialization.objectWithoutOptionalProperties({
    maven: MavenRegistryConfigV2,
    npm: NpmRegistryConfigV2,
    pypi: PypiRegistryConfig,
    rubygems: RubyGemsRegistryConfig,
    nuget: NugetRegistryConfig,
});

export declare namespace GeneratorRegistriesConfigV2 {
    interface Raw {
        maven: MavenRegistryConfigV2.Raw;
        npm: NpmRegistryConfigV2.Raw;
        pypi: PypiRegistryConfig.Raw;
        rubygems: RubyGemsRegistryConfig.Raw;
        nuget: NugetRegistryConfig.Raw;
    }
}
