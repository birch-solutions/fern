import { testConvertOpenAPI } from "../testConvertOpenApi";

describe("open api parser", () => {
    testConvertOpenAPI("assembly", "openapi.yml", {
        asyncApiFilename: "asyncapi.yml"
    });
});
