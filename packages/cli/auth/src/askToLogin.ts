import { TaskContext } from "@fern-api/task-context";
import inquirer, { ConfirmQuestion } from "inquirer";
import { FernToken } from "./FernToken";
import { login } from "./login";
import { getToken } from "./persistence/getToken";
import { isLoggedIn } from "./verify/isLoggedIn";

export async function askToLogin(context: TaskContext): Promise<FernToken> {
    if (!(await isLoggedIn()) && process.stdout.isTTY) {
        await context.takeOverTerminal(async () => {
            if (await askForConfirmation("Login required. Continue?")) {
                await login();
            } else {
                context.failAndThrow();
            }
        });
    }
    const token = await getToken();
    if (token == null) {
        context.failAndThrow("Login required.");
    }

    return token;
}

async function askForConfirmation(message: string) {
    const name = "question";
    const question: ConfirmQuestion<{ [name]: boolean }> = {
        type: "confirm",
        name,
        message,
    };
    const answers = await inquirer.prompt(question);
    return answers[name];
}
