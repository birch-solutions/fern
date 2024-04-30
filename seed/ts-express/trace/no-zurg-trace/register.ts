/**
 * This file was auto-generated by Fern from our API Definition.
 */

import express from "express";
import { AdminService } from "./api/resources/admin/service/AdminService";
import { HomepageService } from "./api/resources/homepage/service/HomepageService";
import { MigrationService } from "./api/resources/migration/service/MigrationService";
import { PlaylistService } from "./api/resources/playlist/service/PlaylistService";
import { ProblemService } from "./api/resources/problem/service/ProblemService";
import { SubmissionService } from "./api/resources/submission/service/SubmissionService";
import { SyspropService } from "./api/resources/sysprop/service/SyspropService";
import { V2Service as v2_RootService } from "./api/resources/v2/service/V2Service";
import { ProblemService as v2_ProblemService } from "./api/resources/v2/resources/problem/service/ProblemService";
import { ProblemService as v2_v3_ProblemService } from "./api/resources/v2/resources/v3/resources/problem/service/ProblemService";

export function register(
    expressApp: express.Express | express.Router,
    services: {
        admin: AdminService;
        homepage: HomepageService;
        migration: MigrationService;
        playlist: PlaylistService;
        problem: ProblemService;
        submission: SubmissionService;
        sysprop: SyspropService;
        v2: {
            _root: v2_RootService;
            problem: v2_ProblemService;
            v3: {
                problem: v2_v3_ProblemService;
            };
        };
    }
): void {
    (expressApp as any).use("/", services.v2._root.toRouter());
    (expressApp as any).use("/admin", services.admin.toRouter());
    (expressApp as any).use("/homepage-problems", services.homepage.toRouter());
    (expressApp as any).use("/migration-info", services.migration.toRouter());
    (expressApp as any).use("/v2/playlist/:serviceParam", services.playlist.toRouter());
    (expressApp as any).use("/problem-crud", services.problem.toRouter());
    (expressApp as any).use("/sessions", services.submission.toRouter());
    (expressApp as any).use("/sysprop", services.sysprop.toRouter());
    (expressApp as any).use("/problems-v2", services.v2.problem.toRouter());
    (expressApp as any).use("/problems-v2", services.v2.v3.problem.toRouter());
}
