---
title: Tutorial
---

<!-- markdownlint-disable MD033 MD025 MD010 -->

This guide uses an example API for IMDb (the International Movie Database) that introduces you to using Fern. We'll generate a TypeScript Express server and a Postman collection to implement and test our API.

## Step 0: Prerequisites

- Install [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Install [Postman](https://www.postman.com/downloads/)

## Step 1: Set up

Create a new folder for this tutorial and `cd` into it. Let's create a new npm project.

```bash
npm init -y
npm install typescript express @types/express ts-node
```

This will set us up for a new TypeScript Express backend repo. We'll also install fern:

```bash
npm install -g fern-api
```

## Step 2: Initialize

In the root of your backend repo, run:

```bash
fern init
```

When it asks you for the name of your organization, enter `imdb`.

This will add the following:

```yml
fern/
└─ api
	├─ definition
		├─ api.yml # Your API name and authentication
		└─ imdb.yml # An example Fern Definition
	└─ generators.yml # Code generators you're using
fern.config.json # Your organization name and Fern CLI version
```

## Step 3: Add TypeScript code generator

When adding a generator, Fern defaults to the SDK (aka client). We'll see this by running:

```bash
fern add typescript
```

This will add:

```diff
# generators.yml
-draft: []
+draft:
+  - name: fernapi/fern-typescript
+    version: 0.0.189
+    config:
+      mode: client-v2
 release:[]
```

For this tutorial, we want to generate a TypeScript Express server, so we'll change this to:

```diff
# generators.yml
 draft:
   - name: fernapi/fern-typescript
     version: 0.0.189
     config:
-       mode: client-v2
+       mode: server
 release:[]
```

:::tip Have a question?
We're here to help! Reach out in [Discord](https://discord.gg/JkkXumPzcG).
:::tip

## Step 4: Run the generator

Next we'll invoke the TypeScript server code generator by running:

```bash
fern generate
```

After a few seconds of processing, you'll see a message in your terminal that you `Published @imdb-fern/api-server@0.0.x`.

![Successful code generation](../static/img/tutorial/generator-success.png)

Let's install the generated Express server code.

```bash
# Your version may be different, but this version will also work
npm install @imdb-fern/api-server@0.0.3
```

## Step 5: Implement the server

We'll create a new file `server.ts` at the root of our project. This will be an Express server which serves our API.

```ts
// 1. create a file called server.ts
// 2. copy and paste these contents

import { GetMovieErrorBody, MovieId } from "@imdb-fern/api-server/model";
import { MoviesService } from "@imdb-fern/api-server/services";
import express from "express";

const app = express();

app.use(
  MoviesService.expressMiddleware({
    createMovie: () => {
      return {
        ok: true,
        // We are hardcoding the movie "Iron Man 3" for this demo
        // because we don't have our server wired up to a database.
        body: MovieId.of("iron-man-3"),
      };
    },

    getMovie: () => {
      return {
        ok: false,
        error: GetMovieErrorBody.NotFoundError(),
      };
    },
  })
);

console.log("Listening for requests...");
app.listen(8080);
```

## Step 6: Run the server

```bash
npx ts-node server.ts
```

In the terminal, you should see `Listening for requests...`

## Step 7: Add the Postman generator

In another terminal, let's run:

```bash
fern add postman
fern generate
```

In the `api/` folder you'll see `generated-postman.json` that we'll import to Postman.

## Step 8: Hit the server from Postman

Open Postman and File -> Import `api/generated-postman.json`.

Select the `createMovie` endpoint and hit `Send`. You should get **`iron-man-3`** back from your server.

![createMovie-postman](../static/img/tutorial/createMovie-postman.png)

Select the `getMovie` endpoint and hit `Send`. As expected, we get a 404 response back.

![getMovie-postman](../static/img/tutorial/getMovie-postman.png)

## Step 9: Celebrate 🎉

You've successfully implemented a IMDb TypeScript Express server using Fern. You're invited to join our [Discord](https://discord.gg/JkkXumPzcG).
