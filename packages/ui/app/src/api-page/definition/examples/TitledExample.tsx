import { PropsWithChildren } from "react";

export declare namespace TitledExample {
    export type Props = PropsWithChildren<{
        title: string;
        rightLabel?: JSX.Element | string;
    }>;
}

export const TitledExample: React.FC<TitledExample.Props> = ({ title, rightLabel, children }) => {
    return (
        <div className="flex flex-col min-h-0 rounded border border-[#252529] overflow-hidden">
            <div className="flex items-center justify-between p-2">
                <div className="flex items-center gap-2 font-bold">{title}</div>
                {rightLabel != null && <div>{rightLabel}</div>}
            </div>
            <div className="relative overflow-y-auto">{children}</div>
        </div>
    );
};
