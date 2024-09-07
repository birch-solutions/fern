import { AbstractAstNode } from "./AbstractAstNode";
import { CodeBlock } from "./CodeBlock";

const TAB_SIZE = 4;

export class AbstractWriter {
    /* The contents being written */
    public buffer = "";
    /* Indentation level (multiple of 4) */
    private indentLevel = 0;
    /* Whether anything has been written to the buffer */
    private hasWrittenAnything = false;
    /* Whether the last character written was a newline */
    private lastCharacterIsNewline = false;

    /**
     * Writes arbitrary text
     * @param text
     */
    public write(text: string): void {
        const textEndsInNewline = text.length > 0 && text.endsWith("\n");
        // temporarily remove the trailing newline, since we don't want to add the indent prefix after it
        const textWithoutNewline = textEndsInNewline ? text.substring(0, text.length - 1) : text;

        const indent = this.getIndentString();
        let indentedText = textWithoutNewline.replaceAll("\n", `\n${indent}`);
        if (this.isAtStartOfLine()) {
            indentedText = indent + indentedText;
        }
        if (textEndsInNewline) {
            indentedText += "\n";
        }
        this.writeInternal(indentedText);
    }

    /**
     * Writes a node
     * @param node
     */
    public writeNode(node: AbstractAstNode): void {
        node.write(this);
    }

    /**
     * Writes a node but then suffixes with a `;` and new line
     * @param node
     */
    public writeNodeStatement(node: AbstractAstNode): void {
        node.write(this);
        this.write(";");
        this.writeNewLineIfLastLineNot();
    }

    /**
     * Writes text but then suffixes with a `;`
     * @param node
     */
    public writeTextStatement(text: string): void {
        const codeBlock = new CodeBlock(text);
        codeBlock.write(this);
        this.write(";");
        this.writeNewLineIfLastLineNot();
    }

    /**
     * Writes text but then suffixes with a `;`
     * @param node
     */
    public controlFlow(prefix: string, statement: AbstractAstNode): void {
        const codeBlock = new CodeBlock(prefix);
        codeBlock.write(this);
        this.write(" (");
        this.writeNode(statement);
        this.write(") {");
        this.writeNewLineIfLastLineNot();
        this.indent();
    }

    /**
     * Writes text but then suffixes with a `;`
     * @param node
     */
    public endControlFlow(): void {
        this.dedent();
        this.writeLine("}");
    }

    /* Only writes a newline if last line in the buffer is not a newline */
    public writeLine(text = ""): void {
        this.write(text);
        this.writeNewLineIfLastLineNot();
    }

    /* Always writes newline */
    public newLine(): void {
        this.writeInternal("\n");
    }

    public writeNewLineIfLastLineNot(): void {
        if (!this.lastCharacterIsNewline) {
            this.writeInternal("\n");
        }
    }

    public indent(): void {
        this.indentLevel++;
    }

    public dedent(): void {
        this.indentLevel--;
    }

    /*******************************
     * Helper Methods
     *******************************/

    private writeInternal(text: string): string {
        if (text.length > 0) {
            this.hasWrittenAnything = true;
            this.lastCharacterIsNewline = text.endsWith("\n");
        }
        return (this.buffer += text);
    }

    private isAtStartOfLine(): boolean {
        return this.lastCharacterIsNewline || !this.hasWrittenAnything;
    }

    private getIndentString(): string {
        return " ".repeat(this.indentLevel * TAB_SIZE);
    }
}
