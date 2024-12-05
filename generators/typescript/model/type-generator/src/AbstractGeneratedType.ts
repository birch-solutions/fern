import { ExampleType, ExampleTypeShape, FernFilepath } from "@fern-fern/ir-sdk/api";
import { GetReferenceOpts, getTextOfTsNode, Reference } from "@fern-typescript/commons";
import { BaseGeneratedType } from "@fern-typescript/contexts";
import { ModuleDeclarationStructure, Node, StatementStructures, ts, TypeLiteralNode, WriterFunction } from "ts-morph";

export declare namespace AbstractGeneratedType {
    export interface Init<Shape, Context> {
        typeName: string;
        shape: Shape;
        examples: ExampleType[];
        docs: string | undefined;
        fernFilepath: FernFilepath;
        getReferenceToSelf: (context: Context) => Reference;
        includeSerdeLayer: boolean;
        noOptionalProperties: boolean;
        retainOriginalCasing: boolean;
        inline: boolean;
    }
}

const EXAMPLE_PREFIX = "    ";

export abstract class AbstractGeneratedType<Shape, Context> implements BaseGeneratedType<Context> {
    protected typeName: string;
    protected shape: Shape;
    protected examples: ExampleType[];
    protected fernFilepath: FernFilepath;
    protected getReferenceToSelf: (context: Context) => Reference;
    protected includeSerdeLayer: boolean;
    protected noOptionalProperties: boolean;
    protected retainOriginalCasing: boolean;
    protected inline: boolean;

    private docs: string | undefined;

    constructor({
        getReferenceToSelf,
        typeName,
        shape,
        examples,
        docs,
        fernFilepath,
        includeSerdeLayer,
        noOptionalProperties,
        retainOriginalCasing,
        inline
    }: AbstractGeneratedType.Init<Shape, Context>) {
        this.typeName = typeName;
        this.shape = shape;
        this.examples = examples;
        this.getReferenceToSelf = getReferenceToSelf;
        this.docs = docs;
        this.fernFilepath = fernFilepath;
        this.includeSerdeLayer = includeSerdeLayer;
        this.noOptionalProperties = noOptionalProperties;
        this.retainOriginalCasing = retainOriginalCasing;
        this.inline = inline;
    }

    protected getDocs(context: Context): string | undefined {
        const groups: string[] = [];
        if (this.docs != null) {
            groups.push(this.docs);
        }
        for (const example of this.examples) {
            const exampleStr =
                "@example\n" +
                getTextOfTsNode(
                    this.buildExample(example.shape, context, { isForComment: true, isForTypeDeclarationComment: true })
                );
            groups.push(exampleStr.replaceAll("\n", `\n${EXAMPLE_PREFIX}`));
        }
        if (groups.length === 0) {
            return undefined;
        }
        return groups.join("\n\n");
    }

    public abstract writeToFile(context: Context): void;
    public abstract generateStatements(
        context: Context
    ): string | WriterFunction | (string | WriterFunction | StatementStructures)[];
    public abstract generateForInlineUnion(context: Context): ts.TypeNode;
    public abstract generateModule(context: Context): ModuleDeclarationStructure | undefined;
    public abstract buildExample(example: ExampleTypeShape, context: Context, opts: GetReferenceOpts): ts.Expression;
}
