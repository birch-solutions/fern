package com.fern.java.generators;

import com.fern.ir.model.commons.Name;
import com.fern.ir.model.commons.SafeAndUnsafeString;
import com.fern.ir.model.types.DeclaredTypeName;
import com.fern.ir.model.types.TypeDeclaration;
import com.fern.java.AbstractGeneratorContext;
import com.fern.java.output.GeneratedJavaFile;
import com.squareup.javapoet.ClassName;
import com.squareup.javapoet.JavaFile;
import com.squareup.javapoet.TypeSpec;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;

public abstract class AbstractTypeGenerator extends AbstractFileGenerator {
    protected Set<String> reservedTypeNames;

    public AbstractTypeGenerator(
            ClassName className, AbstractGeneratorContext<?, ?> generatorContext, Set<String> reservedTypeNames) {
        super(className, generatorContext);
    }

    public abstract List<TypeDeclaration> getInlineTypeDeclarations();

    protected abstract TypeSpec getTypeSpecWithoutInlineTypes();

    public TypeSpec getTypeSpec() {
        TypeSpec typeSpec = getTypeSpecWithoutInlineTypes();
        if (generatorContext.getCustomConfig().enableInlineTypes()) {
            typeSpec = typeSpec.toBuilder().addTypes(getInlineTypeSpecs()).build();
        }
        return typeSpec;
    }

    private List<TypeSpec> getInlineTypeSpecs() {
        if (generatorContext.getCustomConfig().enableInlineTypes()) {
            return List.of();
        }

        List<TypeDeclaration> declarations = getInlineTypeDeclarations();
        List<TypeSpec> result = new ArrayList<>();
        for (TypeDeclaration declaration : declarations) {
            Optional<AbstractTypeGenerator> generator = declaration
                    .getShape()
                    .visit(new SingleTypeGenerator(
                            generatorContext,
                            declaration.getName(),
                            className.nestedClass(declaration
                                    .getName()
                                    .getName()
                                    .getPascalCase()
                                    .getSafeName()),
                            TypesGenerator.getGeneratedInterfaces(generatorContext),
                            false,
                            reservedTypeNames));
            generator.map(AbstractTypeGenerator::getTypeSpec).ifPresent(result::add);
        }

        return result;
    }

    protected String resolveName(String rawName) {
        String result = rawName;
        while (reservedTypeNames.contains(result)) {
            result += "_";
        }
        return result;
    }

    @Override
    public GeneratedJavaFile generateFile() {
        return GeneratedJavaFile.builder()
                .className(className)
                .javaFile(
                        JavaFile.builder(className.packageName(), getTypeSpec()).build())
                .build();
    }

    public static TypeDeclaration overrideTypeDeclarationName(TypeDeclaration rawTypeDeclaration, String newName) {
        return TypeDeclaration.builder()
                .name(DeclaredTypeName.builder()
                        .typeId(rawTypeDeclaration.getName().getTypeId())
                        .fernFilepath(rawTypeDeclaration.getName().getFernFilepath())
                        .name(Name.builder()
                                .originalName(newName)
                                .camelCase(safeAndUnsafe(newName))
                                .pascalCase(safeAndUnsafe(newName))
                                .snakeCase(safeAndUnsafe(newName))
                                .screamingSnakeCase(safeAndUnsafe(newName))
                                .build())
                        .build())
                .shape(rawTypeDeclaration.getShape())
                .availability(rawTypeDeclaration.getAvailability())
                .docs(rawTypeDeclaration.getDocs())
                .autogeneratedExamples(rawTypeDeclaration.getAutogeneratedExamples())
                .userProvidedExamples(rawTypeDeclaration.getUserProvidedExamples())
                .referencedTypes(rawTypeDeclaration.getReferencedTypes())
                .encoding(rawTypeDeclaration.getEncoding())
                .source(rawTypeDeclaration.getSource())
                .inline(rawTypeDeclaration.getInline())
                .build();
    }

    private static SafeAndUnsafeString safeAndUnsafe(String newName) {
        return SafeAndUnsafeString.builder()
                .unsafeName(newName)
                .safeName(newName)
                .build();
    }
}
