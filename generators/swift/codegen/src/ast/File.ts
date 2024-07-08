import { AstNode, Writer } from "@fern-api/generator-commons";
import { Class } from "./Class";
import { FileHeader } from "./FileHeader";

export declare namespace File {
    interface Args {
        fileHeader?: FileHeader;
        class: Class;
    }
}

export class File extends AstNode {

    public readonly fileHeader?: FileHeader;
    public readonly class: Class;

    constructor({ 
        fileHeader = undefined,
        class: classInstance,
    }: File.Args) {
        super();
        this.fileHeader = fileHeader;
        this.class = classInstance;
    }

    public write(writer: Writer): void {

        // e.g. // ClassName.swift...
        if (this.fileHeader) {
            writer.writeNode(this.fileHeader);
            writer.newLine();
        }

        writer.writeNode(this.class);

    }
}
