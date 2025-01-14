import type { MdxJsxFlowElement } from "mdast-util-mdx-jsx";
import { visit } from "unist-util-visit";

export function unifiedRemoveEmptyParagraphs() {
    return function (node: MdxJsxFlowElement) {
        return removeEmptyParagraphs(node);
    };
}

function removeEmptyParagraphs(node: MdxJsxFlowElement) {
    return visit(node, "paragraph", function (subNode, index, parent) {
        let emptyChildrenCount = 0;
        for (const child of subNode.children) {
            if ("children" in child && child.children.length === 0) {emptyChildrenCount++;}
        }

        if (emptyChildrenCount === subNode.children.length && parent && typeof index === "number") {
            parent.children.splice(index, 1);
        }
    });
}
