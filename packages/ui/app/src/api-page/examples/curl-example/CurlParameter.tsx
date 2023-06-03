export declare namespace CurlParameter {
    export interface Props {
        paramKey: string;
        value?: string;
    }
}

export const CurlParameter: React.FC<CurlParameter.Props> = ({ paramKey, value }) => {
    return (
        <>
            <span className="text-yellow-100">{paramKey}</span>
            {value != null && (
                <>
                    {" "}
                    <span className="text-accentPrimary">{`"${value}"`}</span>
                </>
            )}
        </>
    );
};
