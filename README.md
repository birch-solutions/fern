# Fern

**Fern** is an **open source toolset** for **defining, building and generating APIs and SDKs**. Fern can be used in your existing projects through OpenAPI, and integrate effortlessly into your existing workflows, or it can serve as the basis of your API development, by describing your endpoints in a Fern specification, and having it generate your API backend code for you.

This repository contains the Fern **compiler**. The compiler transforms an API definition, either in Fern or OpenAPI format into various code artifacts, such as Client Libraries, SDKs, or even fully-fledged **Express** or **FastAPI** backends.

In short, Fern takes care of the boilerplate associated with developing APIs, so you can **focus on delivering business value**.

# Capabilities

Currently, the Fern compiler can generate the following types of artifacts:

### 🌿 Client Libraries and SDKs

Fern generates idiomatic SDKs you can use to interact with your APIs, or publish for third party usage. This makes keeping your client libraries up to date with your API endpoints trivial, and speeds up your workflows dramatically.

### 🌿 Backend Code Generation

Define your API, and Fern will generate the boilerplate for you. All the generated code is validated at build time, ensuring your all your endpoints and their data are being served correctly.

### 🌿 Developer Resources

Fern supports the generation of development resources such as Postman collections, and OpenAPI specifications, making integration into existing development workflows effortless.

## Fern and OpenAPI

We have designed Fern to complement existing OpenAPI toolchains and workflows, rather than replace them. We believe OpenAPI does a good job at as a declarative standard for defining APIs, but at times it is too verbose and complex, which harms the quality of automatically generated code as a result.

The goal of Fern is to be **complimentary to OpenAPI**, not to replace it. As such, you are never locked in to Fern, its specifications, or its toolset.

If you want to read more about where Fern and OpenAPI differ, read [﻿Fern vs. OpenAPI](https://buildwithfern.com/docs/comparison-with-openapi) for an in-depth comparison.

**TL;DR: we differ from OpenAPI in these areas:**

-   [﻿New features in specification](https://www.buildwithfern.com/docs/comparison-with-openapi#new-features-in-specification)
    
-   [﻿Quality of code generation](https://www.buildwithfern.com/docs/comparison-with-openapi#quality-of-code-generation)
    
-   [﻿Focus on server-side API development](https://www.buildwithfern.com/docs/comparison-with-openapi#focus-on-server-side-api-development)
    
-   [﻿Change management](https://www.buildwithfern.com/docs/comparison-with-openapi#change-management)
    
-   [﻿Cloud-based code generation and publishing](https://www.buildwithfern.com/docs/comparison-with-openapi#cloud-based-code-generation-and-publishing)
    
# Getting Started

The Fern tools are available as a Node package. To install it, simply run:

```
npm install -g fern-api
```

Once you have installed the Fern CLI, navigate to the root of your repository - or a different folder if you want to keep your SDKs separate from your backend code. You can either initialise a clean workspace using:

```
fern init
```

Or, you can use an existing OpenAPI specification as your starting point by specifying the `--openapi` option:

```
fern init --openapi ./path/to/openapi.yml
```

This will initialise a Fern workspace in the current folder, including the `./fern` directory that Fern will use to hold its resources. This will create roughly the following folder structure in your project:
```
fern/
├─ fern.config.json # root-level configuration
└─ api/ # your API
  ├─ generators.yml # generators you're using
  └─ definition/
    ├─ api.yml  # API-level configuration
    └─ imdb.yml # endpoints, types, and errors
```

If you're starting from an existing OpenAPI specificaiton, your `fern` directory will contain your specification rather than the standard `imdb.yml` file.

Here's what the `imdb.yml` starter file looks like:

```
types:
  MovieId: string Movie:
    properties:
      id: MovieId
      title: string rating:
        type: double docs: The rating scale is one to five stars
  CreateMovieRequest:
    properties:
      title: string rating: double service:
  auth: false  base-path: /movies
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
    status-code: 404 type: MovieId
```

## Generating an SDK

All SDKs are generated server side, so you don't have to worry about installing all the prerequisite tools locally. Before you can start generating files, you'll need to log in:

```
fern login
```

You'll be prompted to log in in a new browser tab using your GitHub account.

After you have logged in, simply run the generate command to generate your SDKs:

```
fern generate
```

Code generation is done server side, and the resulting artifacts are copied to the output directory specified in `generators.yml` , which we will touch on in the next section.

It is possible to generate the code on your own machine by using the `--local` flag. This does require you to run Docker on your local machine, and Fern will schedule containers to do the code generation automatically.

## Adding Generators

You can add [﻿generators](https://app.eraser.io/workspace/compiler/generators) using the `fern add`. You can have multiple generators for a single project, e.g. a single `fern generate` call could generate SDKs in Python, TypeScript and Java all in one go.

For instance, if you'd like to add a TypeScript generator to your project, simply run:

```
fern add fern-typescript-sdk
```

Which will add the Node variant of the TypeScript SDK to the list of generators - the other variant being a TypeScript browser library, to be used by frontends directly.

Your `generators.yml` file should contain the new generator:

```
default-group: local
groups:
  local:
    generators:
      - name: fernapi/fern-typescript-node-sdk
        version: 0.6.4
        output:
          location: local-file-system
          path: ../../generated/typescript
```

Note the `local-file-system` output may not be present by default. If it's not, simply add it and specify a local path to where the generated client will be saved.

## Publishing Clients

Fern supports automatically publishing clients to an NPM registry. By default, Node packages are published to `npm.buildwithfern.com` and are named `@organisation/package`

That's all there's to it.

## Next Steps

Define _your_ API in Fern. Check out our [﻿docs](https://www.buildwithfern.com/docs/definition) to learn more.

# Examples

Our Plant Store provides a full example of both an API defined in Fern, as well as the SDKs generated from it in both TypeScript and Java. We have also included the generated Postman Collections and OpenAPI Specification that was generated from the Fern spec.

-   [﻿Generated TypeScript SDK](https://github.com/fern-api/plantstore-node)    
-   [﻿Generated Java SDK](https://github.com/fern-api/plantstore-java)    
-   [﻿Generated Postman Collection](https://github.com/fern-api/plantstore-postman)    
-   [﻿Generated OpenAPI spec](https://github.com/fern-api/plantstore-openapi)
    


# CLI reference

### `fern generate [--group <group>] [--version <version>]`

`fern generate`

runs the compiler. It will validate your API and run the generators specified in `generators.yml`.

If you don't have a `default-group` specified in `generators.yml`, then you must specify a group using the `--group` option.

You can specify a version using the `--version` option. This version string is used when publishing SDKs to registries (e.g. npm).

#### Running locally

Generation runs in the cloud by default. If you want to run it on your local machine, you can use the `--local` option. This will run each generator in a Docker container.
By default, Fern will delete the container after running. To keep the container around (e.g. to look at the generator's logs), use the `--keepDocker` option.

----------

### `fern check`

`fern check`

will validate that your API is valid.

----------

### `fern upgrade`

`fern upgrade`

will upgrade your compiler version in `fern.config.json` to the latest version.

----------

### `fern add <generator>`

`fern add`

adds a new generator to your `generators.yml`. You can view the full list of supported generators in our [﻿docs](https://www.buildwithfern.com/docs/compiler/generators).

----------

### `fern init`

`fern init`

adds a new API to your repo.

----------

### `fern register`

_Advanced feature._

You can register your API so it can be depended on by other APIs. Read more in our [﻿docs](https://www.buildwithfern.com/docs/advanced/depending-on-other-apis).

# Documentation

You can view our documentation [﻿here](https://www.buildwithfern.com/docs).

# Community

[﻿Join our Discord!](https://discord.com/invite/JkkXumPzcG)

# Contributing

Check out [﻿CONTRIBUTING.md](https://app.eraser.io/workspace/CONTRIBUTING.md)!

# Attribution

Thanks to the folks at [﻿Twemoji](https://twemoji.twitter.com/), an open source project, who created the graphic that we use as our logo.
