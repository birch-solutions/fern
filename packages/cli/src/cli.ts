import { initialize } from "@fern-api/init";
import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";
import { addPluginToWorkspaces } from "./addPluginToWorkspaces";
import { compileWorkspaces } from "./compileWorkspaces";

yargs(hideBin(process.argv))
    .scriptName("fern")
    .strict()
    .command(
        ["$0 [workspaces...]", "generate", "gen"],
        "Generate typesafe servers and clients",
        (yargs) =>
            yargs.positional("workspaces", {
                array: true,
                type: "string",
                description:
                    "If omitted, every workspace specified in the project-level configuration (fern.config.json) will be processed.",
            }),
        (argv) => {
            compileWorkspaces(argv.workspaces ?? []);
        }
    )
    .command({
        command: ["$0 init"],
        describe: "Initializes an example Fern API",
        handler: (): void => {
            initialize();
        },
    })
    .command(
        ["$0 add [workspaces...] <plugin>"],
        "Add a plugin to .fernrc.yml.",
        (yargs) =>
            yargs
                .positional("workspaces", {
                    array: true,
                    type: "string",
                    description:
                        "If omitted, every workspace specified in the project-level configuration (fern.config.json) will be processed.",
                })
                .option("plugin", {
                    choices: ["typescript", "java"] as const,
                    demandOption: true,
                }),
        (argv) => {
            addPluginToWorkspaces(argv.workspaces ?? [], argv.plugin);
        }
    )
    .demandCommand()
    .showHelpOnFail(true)
    .parse();
