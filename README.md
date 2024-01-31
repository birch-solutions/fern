<br/>
<div align="center">
  <a href="https://www.buildwithfern.com/?utm_source=github&utm_medium=readme&utm_campaign=fern&utm_content=logo">
    <img src="/fern/docs/images/logo-green.png" height="80" align="center" alt="header" />
  </a>
<br/>

<br/>

![YC](https://img.shields.io/badge/Y%20Combinator-2023-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

[![Discord](https://img.shields.io/badge/Join%20Our%20Community-black?logo=discord)](https://discord.com/invite/JkkXumPzcG)
[![Documentation](https://img.shields.io/badge/Read%20our%20Documentation-black?logo=book)](https://docs.buildwithfern.com?utm_source=fern-api/fern/readme-read-our-documentation)

</div>

Fern is an open-source toolkit that simplifies the design, build, and consumption of REST APIs. It allows you to effortlessly generate SDKs, API documentation, and backend server boilerplate.

<div align="center">
    <img src="/fern/docs/images/overview.png" width="700" alt="Overview Diagram">
</div>

## Getting started

_Note: Fern requires **Node 18** or higher_

The Fern toolkit is available as a command line interface (CLI). To install it, run:

```bash
npm install -g fern-api
```

To create a starter project, navigate to the root of your repository and run:

```bash
fern init
```

This will initialize a Fern workspace in the current folder, including the `./fern` directory that Fern will use to hold its resources.

_Note: to initialize a starter project from an existing OpenAPI spec, see [Starting from OpenAPI](#starting-from-openapi)._

This will create the following folder structure in your project:

```yaml
fern/
├─ fern.config.json # root-level configuration
├─ generators.yml # generators you're using
└─ definition/
  ├─ api.yml  # API-level configuration
  └─ imdb.yml # endpoints, types, and errors
```

Here's what the `imdb.yml` starter file looks like:

```yaml
types:
  MovieId: string

  Movie:
    properties:
      id: MovieId
      title: string
      rating:
        type: double
        docs: The rating scale is one to five stars

  CreateMovieRequest:
    properties:
      title: string
      rating: double

service:
  auth: false
  base-path: /movies
  endpoints:
    createMovie:
      docs: Add a movie to the database
      method: POST
      path: /create-movie
      request: CreateMovieRequest
      response: MovieId

    getMovie:
      method: GET
      path: /{movieId}
      path-parameters:
        movieId: MovieId
      response: Movie
      errors:
        - MovieDoesNotExistError

errors:
  MovieDoesNotExistError:
    status-code: 404
    type: MovieId
```

### Starting from OpenAPI

If you have an existing OpenAPI definition, you can use that as your starting point by specifying the `--openapi` option:

```bash
fern init --openapi ./path/to/openapi.yml
# or
fern init --openapi https://petstore.swagger.io/v2/swagger.json
```

This will generate an OpenAPI-based Fern project:

```yaml
fern/
├─ fern.config.json
├─ generators.yml # generators you're using
└─ openapi/
  └─ openapi.json # your openapi definition
```

## Motivation

REST APIs underpin the internet but are still painful to work with. They are often untyped, unstandardized, and out-of-sync across multiple sources of truth. With Fern, we aim to bring great developer experiences to REST APIs.

Fern is fully compatible with OpenAPI, allowing the use of existing OpenAPI specifications. It's designed to augment, not replace, your current OpenAPI toolchains and workflows.

## Capabilities

The Fern CLI can generate the following types of artifacts:

### 🌿 SDKs

Generate idiomatic SDKs (client libraries). Fern keeps your SDKs synchronized with your backend, eliminating the need to manually maintain your SDKs as your API changes. Fern can publish your SDKs to registries, like npm, Maven, and PyPI.

Currently, the following languages are supported:

- [TypeScript](https://github.com/fern-api/fern-typescript)
- [Java](https://github.com/fern-api/fern-java)
- [Python](./generators/python)
- [Go](https://github.com/fern-api/fern-go)

For additional language support, visit [the Fern issues](https://github.com/fern-api/fern/issues) and let us know!

### 🌿 API Documentation

Fern will build and host a documentation website with an auto-generated API reference. Write additional pages in markdown and have them versioned with git. Search, SEO, dark mode, and popular components are provided out-of-the-box. Plus, you can customize the colors, font, logo, and domain name.

Check out docs built with Fern:

- [docs.vellum.ai](https://docs.vellum.ai)
- [docs.superagent.sh](https://docs.superagent.sh/)
- [docs.propexo.com](https://docs.propexo.com/)

### 🌿 Server boilerplate

Define your API, and Fern will generate models, networking code and boilerplate application code. The generated code adds type safety to your API implementation - if your backend doesn't implement the API correctly, it won't compile.

Frameworks currently supported:

- [Express](https://github.com/fern-api/fern-typescript)
- [Spring Boot](https://github.com/fern-api/fern-java)
- [FastAPI](./generators/python)

For a walkthrough, check out the [Fern + Express video](https://docs.buildwithfern.com/server-boilerplate/server-boilerplate/express-js#demo-video).

## Generators

Generators are process that take your OpenAPI or Fern Definition as input and output artifacts (generated SDKs, server
boilerplate, postman collections, etc.). Below you can find a list of all of Fern's generators.

| Generator ID                | Description                  | Latest Version | Changelog                                                 | Entrypoint                                                          |
| --------------------------- | ---------------------------- | -------------- | --------------------------------------------------------- | ------------------------------------------------------------------- |
| fernapi/fern-python-sdk     | Generate a Python SDK        | 0.8.0          | [CHANGELOG.md](./generators/python/pydantic/CHANGELOG.md) | [cli.py](./generators/python/src/fern_python/generators/sdk/cli.py) |
| fernapi/fern-pydantic-model | Generate Pydantic Models     | 0.7.7          | [CHANGELOG.md](./generators/python/sdk/CHANGELOG.md)      | [cli.py](./generators/python/src/fern_python/generators/sdk/cli.py) |
| fernapi/fern-fastapi-server | Generate FastAPI boilerplate | 0.7.7          | [CHANGELOG.md](./generators/python/fastapi/CHANGELOG.md)  | [cli.py](./generators/python/src/fern_python/generators/sdk/cli.py) |
| fernapi/fern-openapi        | Fern Definition -> OpenAPI   | 0.0.30         | [CHANGELOG.md](./generators/openapi/CHANGELOG.md)         | [cli.ts](./generators/openapi/src/cli.ts)                           |
| fernapi/fern-ruby-model     | Generate Ruby Models         | 0.0.6          | [CHANGELOG.md](./generators/ruby/model/CHANGELOG.md)      | [cli.ts](./generators/ruby/model/src/cli.ts)                        |

## Customer Showcase

See how developer-focused companies benefit from Fern.

[![Customer Showcase](/fern/docs/images/showcase.png)](https://buildwithfern.com/showcase)

## CLI Commands

Here's a quick look at the most popular CLI commands. View the documentation for [all CLI commands](https://docs.buildwithfern.com/overview/cli/cli).

`fern init`: adds a new starter API to your repository.

`fern check`: validate your API definition and Fern configuration.

`fern generate`: run the generators specified in `generators.yml`.

`fern add <generator>`: include a new generator in your `generators.yml`. For example, `fern add fern-python-sdk`.

## Community

[Join our Discord!](https://discord.com/invite/JkkXumPzcG) We are here to answer questions and help you get the most out of Fern.

## Contributing

We welcome community contributions. For guidelines, refer to our [CONTRIBUTING.md](/CONTRIBUTING.md).

![Fern Contributors](https://contrib.rocks/image?repo=fern-api/fern)
