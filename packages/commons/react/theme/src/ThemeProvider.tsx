import { Classes } from "@blueprintjs/core";
import classNames from "classnames";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import styles from "./ThemeProvider.module.scss";

export interface ThemeContextValue {
    isDarkTheme: boolean;
}

const ThemeContext = createContext<() => ThemeContextValue>(() => {
    throw new Error("ThemeContext not found in tree.");
});

export declare namespace ThemeProvider {
    export type Props = React.PropsWithChildren<{
        defaultIsDarkTheme: boolean;
    }>;
}

export const ThemeProvider: React.FC<ThemeProvider.Props> = ({ children, defaultIsDarkTheme }) => {
    const [contextValue, setContextValue] = useState(() => {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            return { isDarkTheme: false };
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return { isDarkTheme: true };
        }
        return { isDarkTheme: defaultIsDarkTheme };
    });

    useEffect(() => {
        const lightThemeListener = (event: MediaQueryListEvent) => {
            if (event.matches) {
                setContextValue({ isDarkTheme: false });
            }
        };
        const darkThemeListener = (event: MediaQueryListEvent) => {
            if (event.matches) {
                setContextValue({ isDarkTheme: true });
            }
        };

        window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", lightThemeListener);
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", darkThemeListener);
        return () => {
            window.matchMedia("(prefers-color-scheme: light)").removeEventListener("change", lightThemeListener);
            window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", darkThemeListener);
        };
    });

    const contextValueGetter = useCallback(() => contextValue, [contextValue]);

    return (
        <ThemeContext.Provider value={contextValueGetter}>
            <div
                className={classNames(styles.container, {
                    [Classes.DARK]: contextValue.isDarkTheme,
                })}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export function useIsDarkTheme(): boolean {
    return useContext(ThemeContext)().isDarkTheme;
}

export function useBackgroundColor(): string {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return useIsDarkTheme() ? styles.backgroundColorDark! : styles.backgroundColor!;
}
