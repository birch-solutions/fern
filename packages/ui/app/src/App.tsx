import { H1, InputGroup } from "@blueprintjs/core";
import { CenteredContent } from "@fern-ui/common-components";
import { ApiCard } from "./ApiCard";
import styles from "./App.module.scss";
import { FernLogo } from "./FernLogo";

export const App: React.FC = () => {
    return (
        <CenteredContent scrollable wrapperClassName={styles.wrapper} className={styles.app} fill>
            <H1>Fern</H1>
            <FernLogo size={50} />
            <InputGroup large fill placeholder="Search..." />
            <div className={styles.apiCards}>
                <ApiCard />
                <ApiCard />
                <ApiCard />
                <ApiCard />
                <ApiCard />
                <ApiCard />
                <ApiCard />
                <ApiCard />
            </div>
        </CenteredContent>
    );
};
