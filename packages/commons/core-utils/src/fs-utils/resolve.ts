import path from "path";
import { AbsoluteFilePath } from "./AbsoluteFilePath";

export function resolve(first: AbsoluteFilePath, ...rest: string[]): AbsoluteFilePath;
export function resolve(...paths: string[]): string {
    return path.resolve(...paths);
}
