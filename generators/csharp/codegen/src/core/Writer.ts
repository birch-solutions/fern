import { AstNode } from "./AstNode";

export class Writer {
    private _indentation = 2;
    private _buffer = "";

    public writeNode(node: AstNode): void {
        this.write(node.toString());
    }

    public writeLine(text: string): void {
        this._buffer += `${this.getIndentation()}${text}\n`;
    }

    public write(text: string): void {
        this._buffer += `${this.getIndentation()}${text}`;
    }

    public indent(): void {
        this._indentation++;
    }

    public dedent(): void {
        this._indentation--;
    }

    public newLine(): void {
        this._buffer += "\n";
    }

    public writeNewLineIfLastLineNot(): void {
        if (this._buffer.length <= 0) {
            this.newLine();
        } else {
            const lastCharacter = this._buffer[this._buffer.length - 1];
            if (lastCharacter !== "\n") {
                this.newLine();
            }
        }
    }

    public toString(): string {
        return this._buffer;
    }

    private getIndentation(): string {
        return " ".repeat(this._indentation * 4);
    }
}
