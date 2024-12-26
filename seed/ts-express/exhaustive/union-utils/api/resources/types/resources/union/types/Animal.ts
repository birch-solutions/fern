/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as SeedExhaustive from "../../../../../index";

export type Animal =
    | SeedExhaustive.types.Animal.Dog
    | SeedExhaustive.types.Animal.Cat
    | SeedExhaustive.types.Animal._Unknown;

export namespace Animal {
    export interface Dog extends SeedExhaustive.types.Dog, _Utils {
        animal: "dog";
    }

    export interface Cat extends SeedExhaustive.types.Cat, _Utils {
        animal: "cat";
    }

    export interface _Unknown extends _Utils {
        animal: void;
    }

    interface _Utils {
        _visit: <_Result>(visitor: SeedExhaustive.types.Animal._Visitor<_Result>) => _Result;
    }

    interface _Visitor<_Result> {
        dog: (value: SeedExhaustive.types.Dog) => _Result;
        cat: (value: SeedExhaustive.types.Cat) => _Result;
        _other: (value: { animal: string }) => _Result;
    }
}

export const Animal = {
    dog: (value: SeedExhaustive.types.Dog): SeedExhaustive.types.Animal.Dog => {
        return {
            ...value,
            animal: "dog",
            _visit: function <_Result>(
                this: SeedExhaustive.types.Animal.Dog,
                visitor: SeedExhaustive.types.Animal._Visitor<_Result>,
            ) {
                return SeedExhaustive.types.Animal._visit(this, visitor);
            },
        };
    },

    cat: (value: SeedExhaustive.types.Cat): SeedExhaustive.types.Animal.Cat => {
        return {
            ...value,
            animal: "cat",
            _visit: function <_Result>(
                this: SeedExhaustive.types.Animal.Cat,
                visitor: SeedExhaustive.types.Animal._Visitor<_Result>,
            ) {
                return SeedExhaustive.types.Animal._visit(this, visitor);
            },
        };
    },

    _unknown: (value: { animal: string }): SeedExhaustive.types.Animal._Unknown => {
        return {
            ...(value as any),
            _visit: function <_Result>(
                this: SeedExhaustive.types.Animal._Unknown,
                visitor: SeedExhaustive.types.Animal._Visitor<_Result>,
            ) {
                return SeedExhaustive.types.Animal._visit(this, visitor);
            },
        };
    },

    _visit: <_Result>(
        value: SeedExhaustive.types.Animal,
        visitor: SeedExhaustive.types.Animal._Visitor<_Result>,
    ): _Result => {
        switch (value.animal) {
            case "dog":
                return visitor.dog(value);
            case "cat":
                return visitor.cat(value);
            default:
                return visitor._other(value as any);
        }
    },
} as const;
