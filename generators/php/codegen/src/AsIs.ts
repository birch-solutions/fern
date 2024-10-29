export enum AsIsFiles {
    // Top-level files.
    GithubCiYml = "github-ci.yml",
    GitIgnore = ".gitignore",
    PhpStanNeon = "phpstan.neon",
    PhpUnitXml = "phpunit.xml",

    // Core/Client files.
    BaseApiRequest = "Client/BaseApiRequest.Template.php",
    HttpMethod = "Client/HttpMethod.Template.php",
    RawClient = "Client/RawClient.Template.php",
    RawClientTest = "Client/RawClientTest.Template.php",

    // Core/Json files.
    JsonApiRequest = "Json/JsonApiRequest.Template.php",
    JsonDecoder = "Json/JsonDecoder.Template.php",
    JsonDeserializer = "Json/JsonDeserializer.Template.php",
    JsonEncoder = "Json/JsonEncoder.Template.php",
    JsonProperty = "Json/JsonProperty.Template.php",
    JsonSerializer = "Json/JsonSerializer.Template.php",
    JsonSerializableType = "Json/JsonSerializableType.Template.php",
    Utils = "Json/Utils.Template.php",

    // Core/Multipart files.
    MultipartApiRequest = "Multipart/MultipartApiRequest.Template.php",
    MultipartFormData = "Multipart/MultipartFormData.Template.php",
    MultipartFormDataPart = "Multipart/MultipartFormDataPart.Template.php",

    // Tests/Core/Json files.
    DateArrayTest = "Json/DateArrayTest.Template.php",
    EmptyArrayTest = "Json/EmptyArrayTest.Template.php",
    EnumTest = "Json/EnumTest.Template.php",
    ExhaustiveTest = "Json/ExhaustiveTest.Template.php",
    InvalidTest = "Json/InvalidTest.Template.php",
    NestedUnionArrayTest = "Json/NestedUnionArrayTest.Template.php",
    NullableArrayTest = "Json/NullableArrayTest.Template.php",
    NullPropertyTest = "Json/NullPropertyTest.Template.php",
    ScalarTypesTest = "Json/ScalarTest.Template.php",
    TraitTest = "Json/TraitTest.Template.php",
    UnionArrayTest = "Json/UnionArrayTest.Template.php",
    UnionPropertyTest = "Json/UnionPropertyTest.Template.php",

    // Core/Types files.
    ArrayType = "Types/ArrayType.Template.php",
    Constant = "Types/Constant.Template.php",
    Date = "Types/Date.Template.php",
    Union = "Types/Union.Template.php",

    // Utils files.
    File = "Utils/File.Template.php"
}
