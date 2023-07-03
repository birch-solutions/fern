import { Icon } from "@blueprintjs/core";
import { Dialog } from "@headlessui/react";
import { Configure, Hits, InstantSearch, Pagination, SearchBox } from "react-instantsearch-hooks-web";
import { useSearchService } from "../services/useSearchService";
import { SearchHit } from "./SearchHit";

export declare namespace SearchDialog {
    export interface Props {
        isOpen: boolean;
        onClose: () => void;
    }
}

export const SearchDialog: React.FC<SearchDialog.Props> = (providedProps) => {
    const { isOpen, onClose } = providedProps;
    const searchService = useSearchService();

    if (!searchService.isAvailable) {
        return null;
    }

    return (
        <Dialog as="div" className="fixed inset-0 z-10" open={isOpen} onClose={onClose}>
            <InstantSearch searchClient={searchService.client} indexName={searchService.index}>
                <div className="flex min-h-screen items-start justify-center p-4">
                    <Dialog.Overlay className="fixed inset-0 bg-gray-800/75 backdrop-blur-sm" />
                    <div className="border-border z-10 mx-3 mb-8 mt-10 flex w-full max-w-2xl flex-col overflow-hidden rounded-md border bg-gray-900 text-left align-middle shadow-2xl">
                        <div className="flex items-center space-x-3 px-3">
                            <Icon className="text-text-muted" icon="search" size={14} />
                            <SearchBox
                                inputMode="text"
                                placeholder="Find something..."
                                classNames={{
                                    root: "w-full",
                                    loadingIcon: "hidden",
                                    loadingIndicator: "hidden",
                                    reset: "hidden",
                                    resetIcon: "hidden",
                                    submit: "hidden",
                                    submitIcon: "hidden",
                                    input: "w-full text-text-default placeholder:text-text-muted bg-transparent py-5",
                                }}
                            />
                        </div>
                        <Hits hitComponent={SearchHit} className="border-border border-t p-2" />
                    </div>
                </div>

                {/* Algolia has incorrectly typed the props for this component so we need to ignore the TS error for now. */}
                {/* eslint-disable-next-line */}
                {/* @ts-ignore */}
                <Configure hitsPerPage={6} />

                <Pagination />
            </InstantSearch>
        </Dialog>
    );
};
