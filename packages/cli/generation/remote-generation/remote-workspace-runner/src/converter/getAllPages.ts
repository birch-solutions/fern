import { assertNever } from "@fern-api/core-utils";
import { AbsoluteFilePath, RelativeFilePath, relativize } from "@fern-api/fs-utils";
import { readFile } from "fs/promises";
import { DocsNavigationConfiguration, DocsNavigationItem } from "./ParsedDocsConfiguration";

export async function getAllPages({
    navigation,
    absoluteFilepathToDocsConfig,
}: {
    navigation: DocsNavigationConfiguration;
    absoluteFilepathToDocsConfig: AbsoluteFilePath;
}): Promise<Record<RelativeFilePath, string>> {
    switch (navigation.type) {
        case "tabbed":
            return combineMaps(
                await Promise.all(
                    navigation.items.map(async (tab) => {
                        return combineMaps(
                            await Promise.all(
                                tab.layout.map(async (item) => {
                                    return await getAllPagesFromNavigationItem({
                                        item,
                                        absoluteFilepathToDocsConfig,
                                    });
                                })
                            )
                        );
                    })
                )
            );
        case "untabbed":
            return combineMaps(
                await Promise.all(
                    navigation.items.map(async (item) => {
                        return await getAllPagesFromNavigationItem({
                            item,
                            absoluteFilepathToDocsConfig,
                        });
                    })
                )
            );
        case "versioned":
            return {};
        default:
            assertNever(navigation);
    }
}

export async function getAllPagesFromNavigationItem({
    item,
    absoluteFilepathToDocsConfig,
}: {
    item: DocsNavigationItem;
    absoluteFilepathToDocsConfig: AbsoluteFilePath;
}): Promise<Record<RelativeFilePath, string>> {
    switch (item.type) {
        case "apiSection":
            return {};
        case "page":
            return {
                [await relativize(absoluteFilepathToDocsConfig, item.absolutePath)]: (
                    await readFile(item.absolutePath)
                ).toString(),
            };
        case "section":
            return combineMaps(
                await Promise.all(
                    item.contents.map(async (sectionItem) => {
                        return await getAllPagesFromNavigationItem({ item: sectionItem, absoluteFilepathToDocsConfig });
                    })
                )
            );
        default:
            assertNever(item);
    }
}

function combineMaps(maps: Record<RelativeFilePath, string>[]) {
    return maps.reduce((acc, record) => ({ ...acc, ...record }), {});
}
