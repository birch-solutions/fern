import { RawSchemas } from "@fern-api/syntax-analysis";
import { writeFile } from "fs/promises";
import yaml from "js-yaml";
import path from "path";

export async function writeSampleApiToDirectory(dir: string): Promise<void> {
    await writeFile(path.join(dir, BLOG_POST_API_FILENAME), yaml.dump(BLOG_POST_API));
}

const BLOG_POST_API_FILENAME = "blog.yml";

const BLOG_POST_API: RawSchemas.RawFernConfigurationSchema = {
    ids: ["PostId"],
    types: {
        BlogPost: {
            docs: "A blog post",
            properties: {
                id: "PostId",
                title: "string",
                author: "Author",
                content: "string",
                postType: "PostType",
            },
        },
        Author: {
            union: {
                anonymous: {},
                name: "string",
            },
        },
        PostType: {
            enum: ["LONG", "SHORT"],
        },
    },
    errors: {
        PostNotFoundError: {
            http: {
                statusCode: 400,
            },
            properties: {
                id: "PostId",
            },
        },
    },
    services: {
        http: {
            PostsService: {
                auth: "none",
                "base-path": "/posts",
                endpoints: {
                    createPost: {
                        docs: "Create a new blog post",
                        method: "POST",
                        path: "/create",
                        request: {
                            properties: {
                                title: "string",
                                author: "Author",
                                content: "string",
                                postType: "PostType",
                            },
                        },
                        response: {
                            ok: "PostId",
                        },
                    },
                    getPost: {
                        method: "GET",
                        path: "/{postId}",
                        parameters: {
                            postId: "PostId",
                        },
                        response: {
                            ok: "BlogPost",
                            errors: {
                                union: {
                                    notFound: "PostNotFoundError",
                                },
                            },
                        },
                    },
                },
            },
        },
    },
};
