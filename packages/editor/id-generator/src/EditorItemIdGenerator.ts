import { FernApiEditor } from "@fern-fern/api-editor-sdk";
import { v4 as uuidv4 } from "uuid";

export interface EditorItemIdGenerator {
    package: () => FernApiEditor.PackageId;
    endpoint: () => FernApiEditor.EndpointId;
    type: () => FernApiEditor.TypeId;
    error: () => FernApiEditor.ErrorId;
}

export const EditorItemIdGenerator: EditorItemIdGenerator = {
    package: uuidv4,
    endpoint: uuidv4,
    type: uuidv4,
    error: uuidv4,
};
