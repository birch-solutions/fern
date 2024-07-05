#!/usr/bin/env bash

if [[ -n "$CIRCLE_TAG" ]]; then
	echo "$CIRCLE_TAG"
	exit 0
fi

# if the current commit is tagged, then should then ignore the tag
tag="$(git describe --exact-match --tags HEAD 2> /dev/null || :)"
if [[ -n "$tag" ]]; then
	exclude_param="--exclude $tag"
fi
git describe --tags --always --first-parent $exclude_param