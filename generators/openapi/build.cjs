const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");
const { build } = require("esbuild");
const path = require("path");
const { chmod, writeFile, mkdir } = require("fs/promises");

const packageJson = require("./package.json");

main();

async function main() {
    const options = {
        platform: "node",
        target: "node14",
        entryPoints: ["./src/cli.ts"],
        outfile: "./dist/bundle.cjs",
        bundle: true,
        external: ["cpu-features"],
        plugins: [pnpPlugin()],
        define: {
            "process.env.CLI_NAME": JSON.stringify("fern-openapi"),
            "process.env.CLI_VERSION": JSON.stringify(packageJson.version),
            "process.env.CLI_PACKAGE_NAME": JSON.stringify("@fern-api/openapi-generator")
        }
    };

    await build(options).catch(() => process.exit(1));

    process.chdir(path.join(__dirname, "dist"));

    // write cli executable
    await writeFile(
        "cli.cjs",
        `#!/usr/bin/env node

require("./bundle.cjs");`
    );
    await chmod("cli.cjs", "755");

    // write cli's package.json
    await writeFile(
        "package.json",
        JSON.stringify(
            {
                name: "@fern-api/openapi-generator",
                version: packageJson.version,
                repository: packageJson.repository,
                files: ["bundle.cjs", "cli.cjs"],
                bin: { "fern-openapi": "cli.cjs" }
            },
            undefined,
            2
        )
    );


}
