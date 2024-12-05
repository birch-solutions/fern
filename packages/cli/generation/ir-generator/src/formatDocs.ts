const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";

export async function formatDocs(docs: string | undefined): Promise<string | undefined> {
    if (docs == null || isBrowser) {
        return undefined;
    }
    if (docs != null) {
        const prettier = await import("prettier");
        const formattedDocs = prettier.format(docs, {
            parser: "markdown"
        });
        if (formattedDocs.endsWith("\n") || formattedDocs.endsWith("\r")) {
            return formattedDocs.substring(0, formattedDocs.length - 1);
        }
        return formattedDocs;
    }
    return docs;
}
