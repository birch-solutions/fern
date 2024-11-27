/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as FernDocsConfig from "../../../../api";
import * as core from "../../../../core";

export const NavbarLink: core.serialization.Schema<serializers.NavbarLink.Raw, FernDocsConfig.NavbarLink> =
    core.serialization
        .union("type", {
            filled: core.serialization.lazyObject(async () => (await import("../../..")).NavbarLinkConfig),
            outlined: core.serialization.lazyObject(async () => (await import("../../..")).NavbarLinkConfig),
            minimal: core.serialization.lazyObject(async () => (await import("../../..")).NavbarLinkConfig),
            github: core.serialization.object({
                value: core.serialization.lazy(async () => (await import("../../..")).NavbarGithubConfig)
            }),
            primary: core.serialization.lazyObject(async () => (await import("../../..")).NavbarLinkConfig),
            secondary: core.serialization.lazyObject(async () => (await import("../../..")).NavbarLinkConfig)
        })
        .transform<FernDocsConfig.NavbarLink>({
            transform: (value) => value,
            untransform: (value) => value
        });

export declare namespace NavbarLink {
    type Raw =
        | NavbarLink.Filled
        | NavbarLink.Outlined
        | NavbarLink.Minimal
        | NavbarLink.Github
        | NavbarLink.Primary
        | NavbarLink.Secondary;

    interface Filled extends serializers.NavbarLinkConfig.Raw {
        type: "filled";
    }

    interface Outlined extends serializers.NavbarLinkConfig.Raw {
        type: "outlined";
    }

    interface Minimal extends serializers.NavbarLinkConfig.Raw {
        type: "minimal";
    }

    interface Github {
        type: "github";
        value: serializers.NavbarGithubConfig.Raw;
    }

    interface Primary extends serializers.NavbarLinkConfig.Raw {
        type: "primary";
    }

    interface Secondary extends serializers.NavbarLinkConfig.Raw {
        type: "secondary";
    }
}
