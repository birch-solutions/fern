/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

export type OAuthConfiguration = FernIr.OAuthConfiguration.ClientCredentials;

export declare namespace OAuthConfiguration {
    interface ClientCredentials extends FernIr.OAuthClientCredentials, _Utils {
        type: "clientCredentials";
    }

    interface _Utils {
        _visit: <_Result>(visitor: FernIr.OAuthConfiguration._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        clientCredentials: (value: FernIr.OAuthClientCredentials) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}

export const OAuthConfiguration = {
    clientCredentials: (value: FernIr.OAuthClientCredentials): FernIr.OAuthConfiguration.ClientCredentials => {
        return {
            ...value,
            type: "clientCredentials",
            _visit: function <_Result>(
                this: FernIr.OAuthConfiguration.ClientCredentials,
                visitor: FernIr.OAuthConfiguration._Visitor<_Result>
            ) {
                return FernIr.OAuthConfiguration._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: FernIr.OAuthConfiguration,
        visitor: FernIr.OAuthConfiguration._Visitor<_Result>
    ): _Result => {
        switch (value.type) {
            case "clientCredentials":
                return visitor.clientCredentials(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
