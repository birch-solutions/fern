/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../../../index";

export type GeneratorPublishTarget =
    | FernIr.generatorExec.GeneratorPublishTarget.Maven
    | FernIr.generatorExec.GeneratorPublishTarget.Npm
    | FernIr.generatorExec.GeneratorPublishTarget.Pypi
    | FernIr.generatorExec.GeneratorPublishTarget.Postman
    | FernIr.generatorExec.GeneratorPublishTarget.Rubygems
    | FernIr.generatorExec.GeneratorPublishTarget.Nuget;

export namespace GeneratorPublishTarget {
    export interface Maven extends FernIr.generatorExec.MavenRegistryConfigV2, _Utils {
        type: "maven";
    }

    export interface Npm extends FernIr.generatorExec.NpmRegistryConfigV2, _Utils {
        type: "npm";
    }

    export interface Pypi extends FernIr.generatorExec.PypiRegistryConfig, _Utils {
        type: "pypi";
    }

    export interface Postman extends FernIr.generatorExec.PostmanConfig, _Utils {
        type: "postman";
    }

    export interface Rubygems extends FernIr.generatorExec.RubyGemsRegistryConfig, _Utils {
        type: "rubygems";
    }

    export interface Nuget extends FernIr.generatorExec.NugetRegistryConfig, _Utils {
        type: "nuget";
    }

    export interface _Utils {
        _visit: <_Result>(visitor: FernIr.generatorExec.GeneratorPublishTarget._Visitor<_Result>) => _Result;
    }

    export interface _Visitor<_Result> {
        maven: (value: FernIr.generatorExec.MavenRegistryConfigV2) => _Result;
        npm: (value: FernIr.generatorExec.NpmRegistryConfigV2) => _Result;
        pypi: (value: FernIr.generatorExec.PypiRegistryConfig) => _Result;
        postman: (value: FernIr.generatorExec.PostmanConfig) => _Result;
        rubygems: (value: FernIr.generatorExec.RubyGemsRegistryConfig) => _Result;
        nuget: (value: FernIr.generatorExec.NugetRegistryConfig) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const GeneratorPublishTarget = {
    maven: (value: FernIr.generatorExec.MavenRegistryConfigV2): FernIr.generatorExec.GeneratorPublishTarget.Maven => {
        return {
            ...value,
            type: "maven",
            _visit: function <_Result>(
                this: FernIr.generatorExec.GeneratorPublishTarget.Maven,
                visitor: FernIr.generatorExec.GeneratorPublishTarget._Visitor<_Result>,
            ) {
                return FernIr.generatorExec.GeneratorPublishTarget._visit(this, visitor);
            },
        };
    },

    npm: (value: FernIr.generatorExec.NpmRegistryConfigV2): FernIr.generatorExec.GeneratorPublishTarget.Npm => {
        return {
            ...value,
            type: "npm",
            _visit: function <_Result>(
                this: FernIr.generatorExec.GeneratorPublishTarget.Npm,
                visitor: FernIr.generatorExec.GeneratorPublishTarget._Visitor<_Result>,
            ) {
                return FernIr.generatorExec.GeneratorPublishTarget._visit(this, visitor);
            },
        };
    },

    pypi: (value: FernIr.generatorExec.PypiRegistryConfig): FernIr.generatorExec.GeneratorPublishTarget.Pypi => {
        return {
            ...value,
            type: "pypi",
            _visit: function <_Result>(
                this: FernIr.generatorExec.GeneratorPublishTarget.Pypi,
                visitor: FernIr.generatorExec.GeneratorPublishTarget._Visitor<_Result>,
            ) {
                return FernIr.generatorExec.GeneratorPublishTarget._visit(this, visitor);
            },
        };
    },

    postman: (value: FernIr.generatorExec.PostmanConfig): FernIr.generatorExec.GeneratorPublishTarget.Postman => {
        return {
            ...value,
            type: "postman",
            _visit: function <_Result>(
                this: FernIr.generatorExec.GeneratorPublishTarget.Postman,
                visitor: FernIr.generatorExec.GeneratorPublishTarget._Visitor<_Result>,
            ) {
                return FernIr.generatorExec.GeneratorPublishTarget._visit(this, visitor);
            },
        };
    },

    rubygems: (
        value: FernIr.generatorExec.RubyGemsRegistryConfig,
    ): FernIr.generatorExec.GeneratorPublishTarget.Rubygems => {
        return {
            ...value,
            type: "rubygems",
            _visit: function <_Result>(
                this: FernIr.generatorExec.GeneratorPublishTarget.Rubygems,
                visitor: FernIr.generatorExec.GeneratorPublishTarget._Visitor<_Result>,
            ) {
                return FernIr.generatorExec.GeneratorPublishTarget._visit(this, visitor);
            },
        };
    },

    nuget: (value: FernIr.generatorExec.NugetRegistryConfig): FernIr.generatorExec.GeneratorPublishTarget.Nuget => {
        return {
            ...value,
            type: "nuget",
            _visit: function <_Result>(
                this: FernIr.generatorExec.GeneratorPublishTarget.Nuget,
                visitor: FernIr.generatorExec.GeneratorPublishTarget._Visitor<_Result>,
            ) {
                return FernIr.generatorExec.GeneratorPublishTarget._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.generatorExec.GeneratorPublishTarget,
        visitor: FernIr.generatorExec.GeneratorPublishTarget._Visitor<_Result>,
    ): _Result => {
        switch (value.type) {
            case "maven":
                return visitor.maven(value);
            case "npm":
                return visitor.npm(value);
            case "pypi":
                return visitor.pypi(value);
            case "postman":
                return visitor.postman(value);
            case "rubygems":
                return visitor.rubygems(value);
            case "nuget":
                return visitor.nuget(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
