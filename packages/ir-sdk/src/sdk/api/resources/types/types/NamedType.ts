/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

/**
 * A reference to a named type. For backwards compatbility, this type must be fully compatible
 * with the DeclaredTypeName.
 */
export interface NamedType {
    typeId: FernIr.TypeId;
    fernFilepath: FernIr.FernFilepath;
    name: FernIr.Name;
    default: FernIr.NamedTypeDefault | undefined;
    originalName: FernIr.Name | undefined;
    inline: boolean | undefined;
}
