/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../../index";

/**
 * This is intended to co-exist with the auto-generated code samples.
 */
export interface ExampleCodeSampleLanguage extends FernIr.WithDocs {
    /** Override the example name. */
    name: FernIr.Name | undefined;
    language: string;
    code: string;
    /**
     * The command to install the dependencies for the code sample.
     * For example, `npm install` or `pip install -r requirements.txt`.
     */
    install: string | undefined;
}
