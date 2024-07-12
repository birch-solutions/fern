import { csharp, CSharpFile, FileGenerator } from "@fern-api/csharp-codegen";
import { join, RelativeFilePath } from "@fern-api/fs-utils";
import { EnumTypeDeclaration, TypeDeclaration } from "@fern-api/ir-sdk";
import { ModelCustomConfigSchema } from "../ModelCustomConfig";
import { ModelGeneratorContext } from "../ModelGeneratorContext";

export class EnumGenerator extends FileGenerator<CSharpFile, ModelCustomConfigSchema, ModelGeneratorContext> {
    private readonly classReference: csharp.ClassReference;

    constructor(
        context: ModelGeneratorContext,
        private readonly typeDeclaration: TypeDeclaration,
        private readonly enumDeclaration: EnumTypeDeclaration
    ) {
        super(context);
        this.classReference = this.context.csharpTypeMapper.convertToClassReference(this.typeDeclaration.name);
    }

    protected doGenerate(): CSharpFile {
        const serializerAnnotation = csharp.annotation({
            reference: csharp.classReference({
                name: "JsonConverter",
                namespace: "System.Text.Json.Serialization"
            }),
            argument: csharp.codeblock((writer) => {
                writer.write("typeof(");
                writer.writeNode(csharp.classReference(this.context.getStringEnumSerializerClassReference()));
                writer.write("<");
                writer.writeNode(this.classReference);
                writer.write(">");
                writer.write(")");
            })
        });

        const enum_ = csharp.enum_({
            ...this.classReference,
            access: "public",
            annotations: [serializerAnnotation]
        });

        this.enumDeclaration.values.forEach((member) =>
            enum_.addMember({ name: member.name.name.pascalCase.safeName, value: member.name.wireValue })
        );

        return new CSharpFile({
            clazz: enum_,
            directory: this.context.getDirectoryForTypeId(this.typeDeclaration.name.typeId)
        });
    }

    protected getFilepath(): RelativeFilePath {
        return join(
            this.context.project.filepaths.getSourceFileDirectory(),
            RelativeFilePath.of(this.classReference.name + ".cs")
        );
    }
}
