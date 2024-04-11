import { Argument } from "./Argument";
import { ClassReference, NilValue, OmittedValue } from "./classes/ClassReference";
import { AstNode } from "./core/AstNode";
import { Import } from "./Import";
import { Variable, VariableType } from "./Variable";

export declare namespace Parameter {
    export interface Init extends AstNode.Init {
        name: string;
        type: ClassReference | ClassReference[];
        wireValue?: string;
        defaultValue?: Variable | string;
        isOptional?: boolean;
        shouldOmitOptional?: boolean;
        isNamed?: boolean;
        describeAsHashInYardoc?: boolean;
        isBlock?: boolean;
    }
}

export class Parameter extends AstNode {
    public name: string;
    public wireValue: string | undefined;
    public type: ClassReference[];
    // TODO: deal with constants in a more structured way.
    public defaultValue: Variable | string | undefined;
    public isNamed: boolean;
    public isBlock: boolean;
    public describeAsHashInYardoc: boolean;

    constructor({
        name,
        type,
        defaultValue,
        wireValue,
        isOptional = false,
        shouldOmitOptional = false,
        isNamed = true,
        describeAsHashInYardoc = false,
        isBlock = false,
        ...rest
    }: Parameter.Init) {
        super(rest);
        this.name = name;
        this.type = type instanceof ClassReference ? [type] : type;
        this.defaultValue = isBlock
            ? undefined
            : defaultValue ?? (isOptional ? (shouldOmitOptional ? OmittedValue : NilValue) : undefined);
        this.isNamed = isNamed || isBlock || this.defaultValue !== undefined;
        this.describeAsHashInYardoc = describeAsHashInYardoc;

        this.wireValue = wireValue;

        this.isBlock = isBlock;
    }

    public writeInternal(): void {
        const defaultString = this.defaultValue instanceof Variable ? this.defaultValue.write({}) : this.defaultValue;
        this.addText({
            stringContent: this.name,
            templateString: this.isBlock ? "&%s" : this.isNamed ? "%s:" : undefined
        });
        this.addText({ stringContent: defaultString, templateString: " %s", appendToLastString: true });
    }

    public getImports(): Set<Import> {
        let imports = new Set<Import>();
        this.type.forEach((cr) => (imports = new Set([...imports, ...cr.getImports()])));
        return imports;
    }

    public toArgument(value: Variable | string): Argument {
        return new Argument({
            name: this.name,
            value,
            isNamed: this.isNamed,
            documentation: this.documentation
        });
    }

    public toVariable(): Variable {
        return new Variable({
            name: this.name,
            type: this.type,
            documentation: this.documentation,
            variableType: VariableType.LOCAL
        });
    }
}
