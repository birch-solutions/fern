/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedUnions from "../../..";

export type Shape = SeedUnions.Shape.Circle | SeedUnions.Shape.Square;

export declare namespace Shape {
    interface Circle extends SeedUnions.Circle, _Base {
        type: "circle";
    }

    interface Square extends SeedUnions.Square, _Base {
        type: "square";
    }

    interface _Base {
        id: string;
    }
}
