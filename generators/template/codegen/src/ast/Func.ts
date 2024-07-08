import { AstNode, Writer } from "@fern-api/generator-commons";

export declare namespace Func {
    interface Args {
        name: string
    }
}

export class Func extends AstNode {

    public readonly name: string;

    constructor({ 
        name,
    }: Func.Args) {
        super();
        this.name = name;
    }

    public write(writer: Writer): void {

        writer.write(`function ${this.name}() {`);

        writer.openIndent();
        writer.write("print(\"Hey there! 🌱\")");
        writer.closeIndent();

        writer.write("}");

    }
}
