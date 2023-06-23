import { Text } from "@blueprintjs/core";
import { marked } from "marked";
import { useMemo } from "react";

export declare namespace TableOfContents {
    export interface Props {
        markdown: string;
    }
}

export const TableOfContents: React.FC<TableOfContents.Props> = ({ markdown }) => {
    const headings = useMemo(() => marked.lexer(markdown).filter(isHeading), [markdown]);
    const minDepth = useMemo(() => Math.min(...headings.map((heading) => heading.depth)), [headings]);

    return (
        <div className="flex flex-col">
            <div className="medium mb-3 uppercase">On this page</div>
            <div className="flex flex-col gap-3">
                {headings.map((heading, index) => (
                    <Text
                        key={index}
                        className="text-text-default cursor-pointer transition hover:text-neutral-300"
                        style={{ marginLeft: 8 * (heading.depth - minDepth) }}
                        ellipsize
                    >
                        {heading.text}
                    </Text>
                ))}
            </div>
        </div>
    );
};

function isHeading(token: marked.Token): token is marked.Tokens.Heading {
    return token.type === "heading";
}
