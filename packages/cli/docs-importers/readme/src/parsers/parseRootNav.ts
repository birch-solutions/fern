import type { Element, Root as HastRoot } from "hast";
import { CONTINUE, EXIT, visit } from "unist-util-visit";

export function retrieveRootNavElement(rootNode: HastRoot): Element | undefined {
    let element: Element | undefined = undefined;
    visit(rootNode, "element", function (node) {
        if (
            node.tagName === "nav" &&
            node.properties.className &&
            Array.isArray(node.properties.className) &&
            node.properties.className.includes("rm-Sidebar")
        ) {
            element = node;
            return EXIT;
        }
        return CONTINUE;
    });

    return element;
}
