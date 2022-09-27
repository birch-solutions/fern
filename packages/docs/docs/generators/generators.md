---
title: generators.yml
---

`generators.yml` is a file where you set configuration for which code generators you will use.

## How code generation works

A code generator reads in your **Fern Definition** and outputs code. The outputted code is either published to a registry or downloaded locally within your project. Code generators run remotely in the cloud.

By default, `generators.yml` starts with two empty lists: `draft` and `release`.

```yml title="/fern/api/generators.yml"
draft: []
release: []
```

## An example of generators.md

View an example using multiple generators [on Github](https://github.com/fern-api/fern-examples/blob/main/fern/api/generators.yml) or here:

````yml title="/fern/api/generators.yml"
draft: # Publishes the generated code to a private registry managed by Fern.
  - name: fernapi/fern-typescript
    version: 0.0.197
    generate: true
    config:
      mode: client-v2

release: # Publishes the generated code to a public registry (e.g. maven, npm, pypi).
  - name: fernapi/java-client
    version: 0.0.109
    outputs:
      maven:
        url: https://s01.oss.sonatype.org/content/repositories/releases/
        coordinate: <maven-group:maven-artifact>
        username: ${MAVEN_USERNAME} # .env variable
        password: ${MAVEN_PASSWORD}


## Draft

Generators in the `draft` list will publish to a private registry managed by Fern. Use this when your API is a work-in-progress. By default, code generators you add will show up as a draft.

[Add a generator](../cli/add.md) in the CLI. For example, when we add the `typescript` generator:

```diff title="/fern/api/generators.yml"
draft:
+ - name: fernapi/fern-typescript
+   version: 0.0.xxx
+   config:
+     mode: client-v2
release: []
````

## Release

Generators in the `release` list will publish to a public registry (e.g. npm, Maven, PyPi). Use this when your API is ready for release. You will need to add additional configuration within each generator to tell Fern where to publish.

For example:

```diff title="/fern/api/generators.yml"
draft: []
release:
  - name: fernapi/java-client
    version: 0.0.xxx
+   outputs:
+     maven:
+       url: https://s01.oss.sonatype.org/content/repositories/releases/
+       coordinate: <maven-group:maven-artifact>
+       username: ${MAVEN_USERNAME} # .env variable
+       password: ${MAVEN_PASSWORD}
```
