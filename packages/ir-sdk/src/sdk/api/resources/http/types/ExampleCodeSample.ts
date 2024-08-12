/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type ExampleCodeSample = FernIr.ExampleCodeSample.Language | FernIr.ExampleCodeSample.Sdk;

export declare namespace ExampleCodeSample {
    interface Language extends FernIr.ExampleCodeSampleLanguage, _Utils {
        type: "language";
    }

    interface Sdk extends FernIr.ExampleCodeSampleSdk, _Utils {
        type: "sdk";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.ExampleCodeSample._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        language: (value: FernIr.ExampleCodeSampleLanguage) => _Result;
        sdk: (value: FernIr.ExampleCodeSampleSdk) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const ExampleCodeSample = {
    language: (value: FernIr.ExampleCodeSampleLanguage): FernIr.ExampleCodeSample.Language => {
        return {
            ...value,
            type: "language",
            _visit: function <_Result>(
                this: FernIr.ExampleCodeSample.Language,
                visitor: FernIr.ExampleCodeSample._Visitor<_Result>
            ) {
                return FernIr.ExampleCodeSample._visit(this, visitor);
            },
        };
    },

    sdk: (value: FernIr.ExampleCodeSampleSdk): FernIr.ExampleCodeSample.Sdk => {
        return {
            ...value,
            type: "sdk",
            _visit: function <_Result>(
                this: FernIr.ExampleCodeSample.Sdk,
                visitor: FernIr.ExampleCodeSample._Visitor<_Result>
            ) {
                return FernIr.ExampleCodeSample._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.ExampleCodeSample,
        visitor: FernIr.ExampleCodeSample._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "language":
                return visitor.language(value);
            case "sdk":
                return visitor.sdk(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
