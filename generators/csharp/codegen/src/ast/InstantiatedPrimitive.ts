import { csharp } from "..";
import { AstNode } from "./core/AstNode";
import { Writer } from "./core/Writer";

type InternalPrimitiveInstantiation =
    | IntegerInstantiation
    | LongInstantiation
    | UintInstantiation
    | UlongInstantiation
    | StringInstantiation
    | BooleanInstantiation
    | FloatInstanation
    | DoubleInstantiation
    | DateInstantiation
    | DateTimeInstantiation
    | GuidInstantiation
    | NullInstantiation;

interface IntegerInstantiation {
    type: "integer";
    value: number;
}

interface LongInstantiation {
    type: "long";
    value: number;
}

interface UintInstantiation {
    type: "uint";
    value: number;
}

interface UlongInstantiation {
    type: "ulong";
    value: number;
}

interface StringInstantiation {
    type: "string";
    value: string;
}

interface BooleanInstantiation {
    type: "boolean";
    value: boolean;
}

interface FloatInstanation {
    type: "float";
    value: number;
}

interface DoubleInstantiation {
    type: "double";
    value: number;
}

interface DateInstantiation {
    type: "date";
    value: string;
}

interface DateTimeInstantiation {
    type: "dateTime";
    value: Date;
    parsed: boolean;
}

interface GuidInstantiation {
    type: "uuid";
    value: string;
}

interface NullInstantiation {
    type: "null";
}

export class PrimitiveInstantiation extends AstNode {
    private constructor(public readonly internalType: InternalPrimitiveInstantiation) {
        super();
    }

    public write(writer: Writer): void {
        switch (this.internalType.type) {
            case "integer":
                writer.write(this.internalType.value.toString());
                break;
            case "long":
                writer.write(this.internalType.value.toString());
                break;
            case "uint":
                writer.write(this.internalType.value.toString());
                break;
            case "ulong":
                writer.write(this.internalType.value.toString());
                break;
            case "string":
                writer.write(`"${PrimitiveInstantiation.escapeForCSharp(this.internalType.value)}"`);
                break;
            case "boolean":
                writer.write(this.internalType.value.toString());
                break;
            case "float":
                writer.write(this.internalType.value.toString());
                break;
            case "double":
                writer.write(this.internalType.value.toString());
                break;
            case "date": {
                const date = new Date(this.internalType.value);
                const year = date.getUTCFullYear();
                const month = date.getUTCMonth() + 1;
                const day = date.getUTCDate();
                writer.write(`new DateOnly(${year}, ${month}, ${day})`);
                break;
            }
            case "dateTime": {
                if (this.internalType.parsed) {
                    writer.write(`DateTime.Parse("${this.internalType.value.toISOString()}", null, DateTimeStyles.`);
                    writer.writeNode(
                        csharp.classReference({
                            name: "AdjustToUniversal",
                            namespace: "System.Globalization"
                        })
                    );
                    writer.write(")");
                } else {
                    writer.write(this.constructDatetimeWithoutParse(this.internalType.value));
                }
                break;
            }
            case "uuid":
                writer.write(`"${this.internalType.value.toString()}"`);
                break;
            case "null":
                writer.write("null");
                break;
        }
    }

    public static string(value: string): PrimitiveInstantiation {
        return new this({
            type: "string",
            value
        });
    }

    public static boolean(value: boolean): PrimitiveInstantiation {
        return new this({
            type: "boolean",
            value
        });
    }

    public static integer(value: number): PrimitiveInstantiation {
        return new this({
            type: "integer",
            value
        });
    }

    public static long(value: number): PrimitiveInstantiation {
        return new this({
            type: "long",
            value
        });
    }

    public static uint(value: number): PrimitiveInstantiation {
        return new this({
            type: "uint",
            value
        });
    }

    public static ulong(value: number): PrimitiveInstantiation {
        return new this({
            type: "ulong",
            value
        });
    }

    public static float(value: number): PrimitiveInstantiation {
        return new this({
            type: "float",
            value
        });
    }

    public static double(value: number): PrimitiveInstantiation {
        return new this({
            type: "double",
            value
        });
    }

    public static date(value: string): PrimitiveInstantiation {
        return new this({
            type: "date",
            value
        });
    }

    public static dateTime(value: Date, parsed = true): PrimitiveInstantiation {
        return new this({
            type: "dateTime",
            value,
            parsed
        });
    }

    public static uuid(value: string): PrimitiveInstantiation {
        return new this({
            type: "uuid",
            value
        });
    }

    public static null(): PrimitiveInstantiation {
        return new this({
            type: "null"
        });
    }

    /*
     * Currently unused because it was easier to just use `.Parse` to get passing wire tests.
     */
    private constructDatetimeWithoutParse(datetime: Date): string {
        const dateTimeYear = datetime.getUTCFullYear();
        const dateTimeMonth = (datetime.getUTCMonth() + 1).toString().padStart(2, "0");
        const dateTimeDay = datetime.getUTCDate().toString().padStart(2, "0");
        const hours = datetime.getUTCHours().toString().padStart(2, "0");
        const minutes = datetime.getUTCMinutes().toString().padStart(2, "0");
        const seconds = datetime.getUTCSeconds().toString().padStart(2, "0");
        const milliseconds = datetime.getUTCMilliseconds().toString().padStart(3, "0");
        return `new DateTime(${dateTimeYear}, ${dateTimeMonth}, ${dateTimeDay}, ${hours}, ${minutes}, ${seconds}, ${milliseconds})`;
    }

    private static escapeForCSharp(input: string): string {
        return input
            .replace(/\\/g, "\\\\") // Escape backslashes
            .replace(/"/g, '\\"') // Escape double quotes
            .replace(/\n/g, "\\n") // Escape newlines
            .replace(/\r/g, "\\r") // Escape carriage returns
            .replace(/\t/g, "\\t"); // Escape tabs
    }
}
