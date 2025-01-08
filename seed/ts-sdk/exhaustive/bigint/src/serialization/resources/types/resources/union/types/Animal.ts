/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../../../index.js";
import * as SeedExhaustive from "../../../../../../api/index.js";
import * as core from "../../../../../../core/index.js";
import { Dog } from "./Dog.js";
import { Cat } from "./Cat.js";

export const Animal: core.serialization.Schema<serializers.types.Animal.Raw, SeedExhaustive.types.Animal> =
    core.serialization
        .union("animal", {
            dog: Dog,
            cat: Cat,
        })
        .transform<SeedExhaustive.types.Animal>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace Animal {
    export type Raw = Animal.Dog | Animal.Cat;

    export interface Dog extends Dog.Raw {
        animal: "dog";
    }

    export interface Cat extends Cat.Raw {
        animal: "cat";
    }
}
