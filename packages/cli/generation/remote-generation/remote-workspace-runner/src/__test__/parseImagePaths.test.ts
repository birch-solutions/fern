import { RelativeFilePath } from "@fern-api/fs-utils";
import { parseImagePaths } from "../parseImagePaths";

const MDX_PATH = RelativeFilePath.of("my/docs/folder/file.mdx");

describe("parseImagePaths", () => {
    it("should return an empty array if there are no images", () => {
        const page = "This is a test page";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual([]);
        expect(result.markdown.trim()).toMatchInlineSnapshot('"This is a test page"');
    });

    it("should return an array of image paths", () => {
        const page = "This is a test page with an image ![image](path/to/image.png)";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual(["my/docs/folder/path/to/image.png"]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            '"This is a test page with an image ![image](my/docs/folder/path/to/image.png)"'
        );
    });

    it("should return an array of image paths with multiple images", () => {
        const page =
            "This is a test page with an image ![image1](path/to/image1.png) and another image ![image2](path/to/image2.png)";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual(["my/docs/folder/path/to/image1.png", "my/docs/folder/path/to/image2.png"]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            '"This is a test page with an image ![image1](my/docs/folder/path/to/image1.png) and another image ![image2](my/docs/folder/path/to/image2.png)"'
        );
    });

    it("should return an array of image paths with multiple images of the same path", () => {
        const page =
            "This is a test page with an image ![image1](path/to/image.png) and another image ![image2](path/to/image.png)";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual(["my/docs/folder/path/to/image.png"]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            '"This is a test page with an image ![image1](my/docs/folder/path/to/image.png) and another image ![image2](my/docs/folder/path/to/image.png)"'
        );
    });

    it("should return an array of image paths from html image tags", () => {
        const page = "This is a test page with an image <img src='path/to/image.png' />";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual(["my/docs/folder/path/to/image.png"]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            "\"This is a test page with an image <img src='my/docs/folder/path/to/image.png' />\""
        );
    });

    it("should return an array of image paths from html image tags with multiple images", () => {
        const page =
            "This is a test page with an image <img src='path/to/image1.png' /> and another image <img src='path/to/image2.png' />";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual(["my/docs/folder/path/to/image1.png", "my/docs/folder/path/to/image2.png"]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            "\"This is a test page with an image <img src='my/docs/folder/path/to/image1.png' /> and another image <img src='my/docs/folder/path/to/image2.png' />\""
        );
    });

    it("should return an array of image paths from both markdown and html image tags", () => {
        const page =
            "This is a test page with an image ![image1](path/to/image1.png) and another image \n<img src='path/to/image2.png' />";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual(["my/docs/folder/path/to/image1.png", "my/docs/folder/path/to/image2.png"]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            "\"This is a test page with an image ![image1](my/docs/folder/path/to/image1.png) and another image <img src='my/docs/folder/path/to/image2.png' />\""
        );
    });

    it("should ignore non-html tags, but still parse img tags", () => {
        const page = "This is a test page with an image <Section> <img src='path/to/image.png' /> </Section>";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual(["my/docs/folder/path/to/image.png"]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            "\"This is a test page with an image <Section> <img src='my/docs/folder/path/to/image.png' /> </Section>\""
        );
    });

    it("should accept mdx img tags", () => {
        const page = "This is a test page with an image <img src={'path/to/image.png'} />";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual(["my/docs/folder/path/to/image.png"]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            "\"This is a test page with an image \\<img src={'my/docs/folder/path/to/image.png'} />\""
        );
    });

    it("should accept mdx img tags within a JSX prop", () => {
        const page = "This is a test page with an image <Node image={<img src='path/to/image.png' />} />";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual(["my/docs/folder/path/to/image.png"]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            "\"This is a test page with an image \\<Node image={<img src='my/docs/folder/path/to/image.png' />} />\""
        );
    });

    it("should ignore images inside inline code blocks", () => {
        const page = "This is a test page with an image ` <img src='path/to/image.png' /> `";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual([]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            "\"This is a test page with an image `<img src='path/to/image.png' />`\""
        );
    });

    it("should ignore images inside code blocks", () => {
        const page = "This is a test page with an image \n```jsx\n<img src='path/to/image.png' />\n```";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual([]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(`
            "This is a test page with an image

            \`\`\`jsx
            <img src='path/to/image.png' />
            \`\`\`"
        `);
    });

    it("should ignore external urls", () => {
        const page = "This is a test page with an image ![image](https://external.com/image.png)";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual([]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            '"This is a test page with an image ![image](https://external.com/image.png)"'
        );
    });

    it("should ignore external urls in html tags", () => {
        const page = "This is a test page with an image <img src='https://external.com/image.png' />";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual([]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            "\"This is a test page with an image <img src='https://external.com/image.png' />\""
        );
    });

    it("should ignore external urls in mdx img tags", () => {
        const page = "This is a test page with an image <img src={'https://external.com/image.png'} />";
        const result = parseImagePaths(MDX_PATH, page);
        expect(result.filepaths).toEqual([]);
        expect(result.markdown.trim()).toMatchInlineSnapshot(
            "\"This is a test page with an image \\<img src={'https://external.com/image.png'} />\""
        );
    });
});
