import { python } from "../..";
import { Writer } from "../core/Writer";

describe("Field", () => {
    let writer: Writer;

    beforeEach(() => {
        writer = new Writer();
    });

    it("writes a field with a name and type", () => {
        const field = python.field({
            name: "my_field",
            type: python.annotation({ type: python.Type.str() })
        });
        field.write(writer);
        expect(writer.toString()).toBe("my_field: str");
    });

    it("writes a field with a name, type, and value", () => {
        const field = python.field({
            name: "my_int",
            type: python.annotation({ type: python.Type.int() }),
            initializer: "42"
        });
        field.write(writer);
        expect(writer.toString()).toBe("my_int: int = 42");
    });

    it("writes a field with a complex type", () => {
        const field = python.field({
            name: "my_list",
            type: python.annotation({ type: python.Type.list(python.Type.int()) }),
            initializer: "[]"
        });
        field.write(writer);
        expect(writer.toString()).toBe("my_list: List[int] = []");
    });

    it("writes a field with an optional type", () => {
        const field = python.field({
            name: "maybe_string",
            type: python.annotation({ type: python.Type.optional(python.Type.str()) })
        });
        field.write(writer);
        expect(writer.toString()).toBe("maybe_string: Optional[str]");
    });

    it("writes a field with a union type", () => {
        const field = python.field({
            name: "id",
            type: python.annotation({ type: python.Type.union([python.Type.int(), python.Type.str()]) })
        });
        field.write(writer);
        expect(writer.toString()).toBe("id: Union[int, str]");
    });

    it("writes a field with a dictionary type", () => {
        const field = python.field({
            name: "config",
            type: python.annotation({ type: python.Type.dict(python.Type.str(), python.Type.any()) })
        });
        field.write(writer);
        expect(writer.toString()).toBe("config: Dict[str, Any]");
    });

    it("writes a field with a tuple type", () => {
        const field = python.field({
            name: "coordinates",
            type: python.annotation({ type: python.Type.tuple([python.Type.float(), python.Type.float()]) })
        });
        field.write(writer);
        expect(writer.toString()).toBe("coordinates: Tuple[float, float]");
    });
});
