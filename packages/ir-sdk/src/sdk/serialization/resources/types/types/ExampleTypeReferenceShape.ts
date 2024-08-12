/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as FernIr from "../../../../api/index";
import * as core from "../../../../core";
import { ExamplePrimitive } from "./ExamplePrimitive";

export const ExampleTypeReferenceShape: core.serialization.Schema<
    serializers.ExampleTypeReferenceShape.Raw,
    FernIr.ExampleTypeReferenceShape
> = core.serialization
    .union("type", {
        primitive: core.serialization.object({
            primitive: ExamplePrimitive,
        }),
        container: core.serialization.object({
            container: core.serialization.lazy(() => serializers.ExampleContainer),
        }),
        unknown: core.serialization.object({
            unknown: core.serialization.unknown(),
        }),
        named: core.serialization.lazyObject(() => serializers.ExampleNamedType),
    })
    .transform<FernIr.ExampleTypeReferenceShape>({
        transform: (value) => {
            switch (value.type) {
                case "primitive":
                    return FernIr.ExampleTypeReferenceShape.primitive(value.primitive);
                case "container":
                    return FernIr.ExampleTypeReferenceShape.container(value.container);
                case "unknown":
                    return FernIr.ExampleTypeReferenceShape.unknown(value.unknown);
                case "named":
                    return FernIr.ExampleTypeReferenceShape.named(value);
                default:
                    return value as FernIr.ExampleTypeReferenceShape;
            }
        },
        untransform: ({ _visit, ...value }) => value as any,
    });

export declare namespace ExampleTypeReferenceShape {
    type Raw =
        | ExampleTypeReferenceShape.Primitive
        | ExampleTypeReferenceShape.Container
        | ExampleTypeReferenceShape.Unknown
        | ExampleTypeReferenceShape.Named;

    interface Primitive {
        type: "primitive";
        primitive: ExamplePrimitive.Raw;
    }

    interface Container {
        type: "container";
        container: serializers.ExampleContainer.Raw;
    }

    interface Unknown {
        type: "unknown";
        unknown?: unknown;
    }

    interface Named extends serializers.ExampleNamedType.Raw {
        type: "named";
    }
}
