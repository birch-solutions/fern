import { useDocsContext } from "../docs-context/useDocsContext";
import { CandidLogo } from "./CandidLogo";
import { SidebarItems } from "./SidebarItems";

export const Sidebar: React.FC = () => {
    const { docsDefinition } = useDocsContext();

    return (
        <div className="flex-1 flex flex-col min-w-0 border-r border-neutral-800">
            <div className="flex justify-center items-center my-5">
                <CandidLogo />
            </div>
            <div className="flex flex-col overflow-y-auto">
                <SidebarItems navigationItems={docsDefinition.config.navigation.items} slug="" />
            </div>
        </div>
    );
};
