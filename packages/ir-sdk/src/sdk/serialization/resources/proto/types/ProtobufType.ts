/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { WellKnownProtobufType } from "./WellKnownProtobufType";
import { UserDefinedProtobufType } from "./UserDefinedProtobufType";

export const ProtobufType: core.serialization.Schema<serializers.ProtobufType.Raw, FernIr.ProtobufType> =
    core.serialization
        .union("type", {
            wellKnown: core.serialization.object({
                value: WellKnownProtobufType,
            }),
            userDefined: UserDefinedProtobufType,
        })
        .transform<FernIr.ProtobufType>({
            transform: (value) => {
                switch (value.type) {
                    case "wellKnown":
                        return FernIr.ProtobufType.wellKnown(value.value);
                    case "userDefined":
                        return FernIr.ProtobufType.userDefined(value);
                    default:
                        return value as FernIr.ProtobufType;
                }
            },
            untransform: ({ _visit, ...value }) => value as any,
        });

export declare namespace ProtobufType {
    type Raw = ProtobufType.WellKnown | ProtobufType.UserDefined;

    interface WellKnown {
        type: "wellKnown";
        value: WellKnownProtobufType.Raw;
    }

    interface UserDefined extends UserDefinedProtobufType.Raw {
        type: "userDefined";
    }
}
