![Fern header](header.png)

<p align="center">
  <a href="https://www.npmjs.com/package/fern-api" alt="fern-api npm package">
    <img src="https://img.shields.io/npm/v/fern-api?style=flat-square" />
  </a>
</p>

<div align="center">
  <a href="https://www.buildwithfern.com/docs" alt="documentation">Documentation</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://discord.com/invite/JkkXumPzcG" alt="discord">Discord</a>
  <br />
</div>

<div align="center">
  <img src="yc.png" alt="y combinator" />
</div>
---

**Fern is an open source format for defining REST APIs.**
You can think of it like a programming language to describe
your API: your endpoints, types, errors, and examples.

This repository contains the **Fern compiler.** The compiler transforms the API description into useful outputs, like:

### 🌿 SDKs

Client libraries speed up internal developement, and help acquire customers who use your API. Our auto-generated SDKs are idiomatic and feel handwritten.

[TypeScript SDK generator ➚](https://github.com/fern-api/fern-typescript)

[Java SDK generator ➚](https://github.com/fern-api/fern-java)

### 🌿 Server-side code generation

We automatically generate lots of boilerplate on the server side, like Pydantic models for FastAPI and Jersey interfaces for Spring Boot. We also add compile-time validation that all your endpoints are being served correctly.

[FastAPI generator ➚](https://github.com/fern-api/fern-python)

[Spring Boot generator ➚](https://github.com/fern-api/fern-java)

### 🌿 Postman Collection

Complete with examples of successful and unsuccessful requests!

[Postman generator ➚](https://github.com/fern-api/fern-postman)

### 🌿 An OpenAPI spec

You can feed the generated OpenAPI into the endless list of tools that support OpenAPI.

[OpenAPI generator ➚](https://github.com/fern-api/fern-postman)

# Comparison with OpenAPI

OpenAPI is a great tool for documenting APIs, but falls short for code generation use cases.

Read [Fern vs. OpenAPI](https://www.buildwithfern.com/docs/comparison-with-openapi)
for an in-depth comparison. **TL;DR: we differ from OpenAPI in these areas:**

- [Ease of use](https://www.buildwithfern.com/docs/comparison-with-openapi#ease-of-use)
- [Quality of code generation](https://www.buildwithfern.com/docs/comparison-with-openapi#quality-of-code-generation)
- [Focus on server-side API development](https://www.buildwithfern.com/docs/comparison-with-openapi#focus-on-server-side-api-development)
- [Change management](https://www.buildwithfern.com/docs/comparison-with-openapi#change-management)
- [Cloud-based code generation and publishing](https://www.buildwithfern.com/docs/comparison-with-openapi#cloud-based-code-generation-and-publishing)

# Get started

```bash
npm install -g fern-api
```

### The `fern/` directory

The `fern/` directory contains your API definition. This generally lives in your
backend repo, but you can also have an independent repo dedicated to your API (like [Raven's](https://github.com/ravenappdev/raven-api)).

In the root of your repo, run:

```bash
fern init
```

This will create the following folder structure in your project:

```yaml
fern/
├─ fern.config.json # root-level configuration
└─ api/ # your API
  ├─ generators.yml # generators you're using
  └─ definition/
    ├─ api.yml  # API-level configuration
    └─ imdb.yml # endpoints, types, and errors
```

### Generating an SDK

To generate SDKs, you can log in with GitHub from the CLI:

```bash
fern login
```

You can add [generators](compiler/generators) using `fern add`. By default, this
will publish your SDK to the Fern npm registry (npm.buildwithfern.com).

```bash
fern add fern-typescript-sdk
```

To generate the TypeScript SDK, run:

```bash
fern generate
```

And voila! You just built and published a TypeScript SDK.

**Next step:** define _your_ API in Fern. Check out our [docs](https://www.buildwithfern.com/docs/definition) to learn more.

# CLI Reference

### `fern generate [--group <group>] [--version <version>]`

`fern generate` runs the compiler. It will validate your API and run the
generators specified in `generators.yml`.

If you don't have a `default-group` specified in `generators.yml`, then you must
specify a group using the `--group` option.

You can specify a version using the `--version` option. This version string is
used when publishing SDKs to registries (e.g. npm).

---

### `fern check`

`fern check` will validate that your API is valid.

---

### `fern upgrade`

`fern upgrade` will upgrade your compiler version in `fern.config.json` to the
latest version.

---

### `fern add <generator>`

`fern add` adds a new generator to your `generators.yml`. You can view the full
list of supported generators in our [docs](https://www.buildwithfern.com/docs/compiler/generators).

---

### `fern init`

`fern init` adds a new API to your repo.

---

### `fern register`

_Advanced feature._ You can register your API so it can be depended on by other
APIs. Read more in our [docs](https://www.buildwithfern.com/docs/advanced/depending-on-other-apis).

# Documentation

You can view our documentation [here](https://www.buildwithfern.com/docs).

# Community

[Join our Discord!](https://discord.com/invite/JkkXumPzcG)
