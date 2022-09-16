import { getMigrationsToRun } from "../migrations/getMigrationsToRun";

describe("getMigrationsToRun", () => {
    it("doesn't include to-version", () => {
        const migrationsToRun = getMigrationsToRun({ fromVersion: "0.0.150", toVersion: "0.0.188" });
        expect(migrationsToRun).toHaveLength(0);
    });

    it("includes from-version", () => {
        const migrationsToRun = getMigrationsToRun({ fromVersion: "0.0.188", toVersion: "0.0.189" });
        const allMigrations = migrationsToRun.flatMap(({ migrations }) => migrations);
        expect(allMigrations).toHaveLength(1);
    });

    it("works with dev versions", () => {
        const migrationsToRun = getMigrationsToRun({
            fromVersion: "0.0.190-7-g2dd301a6",
            toVersion: "0.0.191-2-g9a7cba02",
        });
        const allMigrations = migrationsToRun.flatMap(({ migrations }) => migrations);
        expect(allMigrations).toHaveLength(1);
    });
});
