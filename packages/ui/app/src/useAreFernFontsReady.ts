import { useAreFontsReady } from "@fern-ui/fonts";
import "@fontsource/actor";
import "@fontsource/roboto-mono";

export function useAreFernFontsReady(): boolean {
    return useAreFontsReady(["Actor", "Roboto Mono"]);
}
