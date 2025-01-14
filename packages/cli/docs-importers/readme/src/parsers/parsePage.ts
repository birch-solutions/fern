import type { Root as HastRoot } from "hast";
import type { Root as MdastRoot } from "mdast";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkStringify from "remark-stringify";
import { unified } from "unified";

import { unifiedRemoveBreaks } from "../cleaners/breaks";
import { unifiedRemoveClassNames } from "../cleaners/className";
import { remarkRemoveEmptyEmphases } from "../cleaners/emptyEmphasis";
import { unifiedRemoveEmptyParagraphs } from "../cleaners/emptyParagraphs";
import { remarkProperlyFormatEmphasis } from "../cleaners/formatEmphasis";
import { removeHastComments } from "../cleaners/hastComments";
import { convertHeaderLinksToText } from "../cleaners/link";
import { remarkRemoveBottomMetadata } from "../cleaners/metadata";
import { unifiedRemoveNestedRoots } from "../cleaners/nestedRoots";
import { unifiedRemovePositions } from "../cleaners/position";
import { unifiedRemoveSuggestEdits } from "../cleaners/suggestEdits";
import { remarkRemoveCodeBlocksInCells } from "../cleaners/tableCells";
import { unifiedRemoveTableOfContents } from "../cleaners/toc";
import { remarkRemoveUpdatedAt } from "../cleaners/updatedAt";
import {
    createAccordion,
    createAccordionGroup,
    createCallout,
    createCard,
    createCardGroup,
    createCodeGroup,
    createEmbed,
    createFrame,
    createTabs
} from "../customComponents/create";
import { rehypeToRemarkCustomComponents } from "../customComponents/plugin";
import { selectiveRehypeRemark } from "../customComponents/selective";
import { downloadImagesFromFile } from "../pipeline/images";
import type { Result } from "../types/result";
import { writePage } from "../utils/files/file";
import { htmlToHast } from "../utils/htmlToHast";
import { retrieveRootContent } from "../utils/root";
import { removeLeadingSlash, removeTrailingSlash } from "../utils/strings";
import { getDescriptionFromRoot, getTitleFromHeading } from "../utils/title";

export async function parsePage(
    html: string,
    url: string | URL,
    opts: {
        externalLink: boolean;
        rootPath?: string;
    } = { externalLink: false }
): Promise<Result<[string, string]>> {
    let urlObj = new URL(url);

    if (opts.externalLink) {
        const filename = html;
        const filenameWithExt = `${filename}.mdx`;
        writePage(filenameWithExt, "", "", "", urlObj.toString());
        return { success: true, data: [urlObj.toString(), filename] };
    }

    const hast = htmlToHast(html);
    removeHastComments(hast);

    const urlStr = urlObj.toString();
    const content = retrieveRootContent(hast);
    // console.log("content", JSON.stringify(content, null, 2));

    if (!content) {return { success: false, data: undefined };}

    const contentAsRoot: HastRoot = {
        type: "root",
        children: [content]
    };

    const mdastTree: MdastRoot = unified()
        .use(unifiedRemoveBreaks)
        .use(unifiedRemoveTableOfContents)
        .use(unifiedRemoveSuggestEdits)
        .use(createCard)
        .use(createAccordion)
        .use(createFrame)
        .use(createCallout)
        .use(createCardGroup)
        .use(createAccordionGroup)
        .use(createCodeGroup)
        .use(createEmbed)
        .use(createTabs)
        .use(unifiedRemoveClassNames)
        .use(unifiedRemoveEmptyParagraphs)
        .use(unifiedRemovePositions)
        .use(selectiveRehypeRemark)
        .use(rehypeToRemarkCustomComponents)
        .use(convertHeaderLinksToText)
        .use(unifiedRemoveNestedRoots)
        .use(remarkRemoveBottomMetadata)
        .use(remarkRemoveUpdatedAt)
        .use(remarkRemoveEmptyEmphases)
        .use(remarkProperlyFormatEmphasis)
        .use(remarkRemoveCodeBlocksInCells)
        // @ts-expect-error
        .runSync(contentAsRoot) as MdastRoot;

    await downloadImagesFromFile(mdastTree, url);

    const title = getTitleFromHeading(mdastTree);
    const description = getDescriptionFromRoot(mdastTree);

    try {
        const result = unified().use(remarkMdx).use(remarkGfm).use(remarkStringify).stringify(mdastTree);

        const resultStr = String(result).replace(/\n{3,}/g, "\n\n");

        if (opts.rootPath) {
            urlObj = new URL(opts.rootPath, urlObj.origin);
        } else if (urlObj.origin === removeTrailingSlash(urlObj.toString())) {
            urlObj = new URL("home", new URL(urlObj).origin);
        }

        writePage(url, title, description, resultStr);
        return {
            success: true,
            data: opts.rootPath
                ? [removeLeadingSlash(removeTrailingSlash(new URL(urlStr).pathname)), opts.rootPath]
                : undefined
        };
    } catch (error) {
        return {
            success: false,
            data: [urlStr, ""]
        };
    }
}
