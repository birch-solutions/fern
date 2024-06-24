# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.31 - 2024-06-21]
- Fix: The underlying HTTP client safely joins endpoint path with base url. 

## [0.0.30 - 2024-06-20]

- Fix: The SDK now supports making bytes requests with Content Type `application/octet-stream`. 
- Fix: The SDK now supports api wide path parameters and joining them safely in `RawClient.cs`.  

## [0.0.29 - 2024-06-20]

- Fix: The generated SDK now respects service base paths. Previously they were omitted. 

## [0.0.28 - 2024-06-19]

- Improvement: Query parameter and header parameters with optional datetimes are
  now ISO 8601 encoded before making a request.

## [0.0.25 - 2024-06-20]

- Fix: Discriminated unions are generated as `object`. Eventually these will be more type safe, but
  that will require partnering with existing customers to understand what a better DX looks like.

- Improvement: Header parameters are no longer required in the constructor so that the user
  doesn't have to provide redundant information.

## [0.0.24 - 2024-06-19]

- Improvement: Query parameter and header parameters are now ISO 8601 encoded before
  making a request.

## [0.0.23 - 2024-06-07]

- Improvement: Only publish a `.NET 6` compatible SDK. There are larger code changes that
  need to be made to be `.NET 4+` compatible.

## [0.0.22 - 2024-06-07]

- Improvement: Publish a `.NET 4` compatible SDK

## [0.0.21 - 2024-05-31]

- Fix: Array and List fields are now generated as `IEnumerable<>`. Additionally, if the
  item type is a `OneOf`, then a new core class called `CollectionItemSerializer` is used
  to deserialize the values.

## [0.0.20 - 2024-05-29]

- Fix: Enum serializer is now added to enum declarations instead of enum references. This
  means that using a `JsonSerializer.serialize(myEnum)` will also provide the correct value.

- Fix: `OneOf` serializer is now added as a `Core` class. It uses reflection to scan all the
  generic classes and see if there is an opportunity to deserialize into that particular class.

## [0.0.19 - 2024-05-29]

- Fix: Enum serializer hands reading + writing enum string values. There is now no need to pass
  in a custom JsonSerializer option but instead the custom serialization will automatically be
  invoked with any JSONSerializaer.

- Fix: Non-success status code errors are thrown with the stringified response body.

## [0.0.18 - 2024-05-28]

- Fix: generated GitHub workflows now run on `dotnet-version` 8.x.

## [0.0.17 - 2024-05-28]

- Fix: enable `nullable` on all csharp files.

  ```csharp
  # nullable enable
  ```

- Fix: make project `.net6`, `.net7` and `.net8` compatible.

  ```xml
    <TargetFrameworks>net8.0;net7.0;net6.0</TargetFrameworks>
  ```

## [0.0.16 - 2024-05-23]

- Fix: Misc. fixes including `.csproj` indentation, setting `X-Fern-SDK-Name` to the top level
  namespace, and passing through serializer options when serializing JSON messages.

## [0.0.15 - 2024-05-23]

- Fix: Inlined requests that are strictly bodies should be JSON serializable. To achieve this
  these types of inlined requests now have JSON annotations.

  ```csharp
  public class SearchRequest
  {
      [JsonPropertyName("query")] // added
      public string Query { get; init; }
  }
  ```

## [0.0.14 - 2024-05-23]

- Fix: The SDK now adds a `JsonEnumMemberStringEnumConverter` which reads `EnumMember(Value="...")`
  annotations on enum values and appropriately serializes them as strings.

## [0.0.13 - 2024-05-22]

- Fix: If a LICENSE is specified, the generator now packages the license in the `.csproj` file.

  ```xml
    <ItemGroup>
        <None Include="..\..\LICENSE" Pack="true" PackagePath=""/>
    </ItemGroup>
  ```

## [0.0.12 - 2024-05-22]

- Improvement: The C# generator now generates an `Environments.cs` file which contains
  URLs for the different environments. If a default environment is present, then
  the `BaseURL` in `ClientOptions.cs` will be initialized to this value.

  ```csharp
  class Environments {

    public static string PRODUCTION = "https://api.production.com";

    public static string STAGING = "https://api.staging.com";

  }
  ```

## [0.0.11 - 2024-05-20]

- Fix: The C# generator now generates a proper `.csproj` file with version, GitHub url, and
  a reference to the SDK README.

## [0.0.10 - 2024-05-15]

- Improvement: The generated SDK now publishes Github Actions to build and publish the generated package to Nuget.

## [0.0.9 - 2024-05-10]

- Fix: When an inlined request body is entirely made up of request body properties, then the entire
  request can be serialized as the request body. This case was previously being overlooked.

## [0.0.8 - 2024-05-10]

- Fix: There were several fixes merged including supporting arbitrary nested clients, query parameter serialization,
  propert naming for async methods, and properly formatted solution files.
