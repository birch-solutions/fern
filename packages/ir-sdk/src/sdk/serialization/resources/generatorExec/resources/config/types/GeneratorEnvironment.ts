/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index";
import * as FernIr from "../../../../../../api/index";
import * as core from "../../../../../../core";
import { RemoteGeneratorEnvironment } from "./RemoteGeneratorEnvironment";

export const GeneratorEnvironment: core.serialization.Schema<
    serializers.generatorExec.GeneratorEnvironment.Raw,
    FernIr.generatorExec.GeneratorEnvironment
> = core.serialization
    .union(core.serialization.discriminant("type", "_type"), {
        local: core.serialization.object({}),
        remote: RemoteGeneratorEnvironment,
    })
    .transform<FernIr.generatorExec.GeneratorEnvironment>({
        transform: (value) => {
            switch (value.type) {
                case "local":
                    return FernIr.generatorExec.GeneratorEnvironment.local();
                case "remote":
                    return FernIr.generatorExec.GeneratorEnvironment.remote(value);
                default:
                    return value as FernIr.generatorExec.GeneratorEnvironment;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace GeneratorEnvironment {
    type Raw = GeneratorEnvironment.Local | GeneratorEnvironment.Remote;

    interface Local {
        _type: "local";
    }

    interface Remote extends RemoteGeneratorEnvironment.Raw {
        _type: "remote";
    }
}
