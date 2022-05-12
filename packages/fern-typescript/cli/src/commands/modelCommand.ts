import { generateModelFiles } from "@fern-typescript/model";
import { Command } from "../Command";

export const modelCommand: Command = {
    run: ({ project, intermediateRepresentation }) => {
        generateModelFiles({
            directory: project.createDirectory("/"),
            intermediateRepresentation,
        });
    },
};
