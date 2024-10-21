import {
    Class,
    Field,
    Reference,
    CodeBlock,
    Method,
    Parameter,
    MethodArgument,
    PythonFile,
    Decorator,
    MethodInvocation
} from "./ast";

export function file(args: PythonFile.Args): PythonFile {
    return new PythonFile(args);
}

export function class_(args: Class.Args): Class {
    return new Class(args);
}

export function decorator(args: Decorator.Args): Decorator {
    return new Decorator(args);
}

export function reference(args: Reference.Args): Reference {
    return new Reference(args);
}

export function field(args: Field.Args): Field {
    return new Field(args);
}

export function codeBlock(args: CodeBlock.Arg): CodeBlock {
    return new CodeBlock(args);
}

export function method(args: Method.Args): Method {
    return new Method(args);
}

export function methodInvocation(args: MethodInvocation.Args): MethodInvocation {
    return new MethodInvocation(args);
}

export function parameter(args: Parameter.Args): Parameter {
    return new Parameter(args);
}

export function methodArgument(args: MethodArgument.Args): MethodArgument {
    return new MethodArgument(args);
}

export { AstNode, Class, Field, Type, Writer, Reference, CodeBlock, Method } from "./ast";
