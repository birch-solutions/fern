import type { Element, Root as HastRoot } from "hast";
import { Browser } from "puppeteer";
import { visit } from "unist-util-visit";

import { htmlToHast } from "../htmlToHast.js";
import { downloadImage } from "./images.js";

function findReadmeLogoNodes(root: HastRoot): Array<Element> | undefined {
    const elements: Array<Element> = [];
    visit(root, "element", function (node) {
        if (
            node.tagName === "img" &&
            Array.isArray(node.properties.className) &&
            node.properties.className.includes("rm-Logo-img")
        )
            {elements.push(node);}
    });
    return elements.length ? elements : undefined;
}

async function findLogosFromHtml(
    html: string,
    downloadFn: (root: HastRoot) => Array<Element> | undefined,
    filepaths: Array<string>
) {
    const hast = htmlToHast(html);
    const imgNodes = downloadFn(hast);

    if (imgNodes) {
        filepaths.push(
            ...(await Promise.all(
                imgNodes.map(async (node) => {
                    const res = await downloadImage(node.properties.src as string);

                    if (res.success && res.data) {
                        return res.data[1];
                    } else {
                        return "";
                    }
                })
            ))
        );
    }

    filepaths.forEach((filepath, index) => {
        if (!filepath) {filepaths.splice(index, 1);}
    });
}

export async function downloadLogos(
    url: string | URL,
    browser: Browser | undefined
): Promise<string | { light: string; dark: string } | undefined> {
    url = new URL(url);
    const filepaths: Array<string> = [];

    if (browser) {
        const htmls: Array<string> = [];

        try {
            const page = await browser.newPage();
            await page.goto(url.toString(), {
                waitUntil: "networkidle2"
            });

            htmls.push(await page.content());
            await page.click(".rm-ThemeToggle");
            htmls.push(await page.content());
        } catch {}

        await Promise.all(
            htmls.map(async (html) => {
                return await findLogosFromHtml(html, findReadmeLogoNodes, filepaths);
            })
        );
    }
    const uniqueFilepaths = [...new Set(filepaths).values()];

    return uniqueFilepaths.length === 1
        ? uniqueFilepaths[0]
        : uniqueFilepaths.length > 1
          ? {
                light: uniqueFilepaths[0] as string,
                dark: uniqueFilepaths[1] as string
            }
          : undefined;
}
