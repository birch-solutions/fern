"use strict";
/**
 * This file was auto-generated by Fern from our API Definition.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsService = void 0;
const express_1 = __importDefault(require("express"));
const serializers = __importStar(require("../../../../../../serialization/index"));
const errors = __importStar(require("../../../../../../errors/index"));
class ParamsService {
    constructor(methods, middleware = []) {
        this.methods = methods;
        this.router = express_1.default.Router({ mergeParams: true }).use(express_1.default.json({
            strict: false,
        }), ...middleware);
    }
    addMiddleware(handler) {
        this.router.use(handler);
        return this;
    }
    toRouter() {
        this.router.get("/path/:param", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.methods.getWithPath(req, {
                    send: (responseBody) => __awaiter(this, void 0, void 0, function* () {
                        res.json(yield serializers.endpoints.params.getWithPath.Response.jsonOrThrow(responseBody, {
                            unrecognizedObjectKeys: "strip",
                        }));
                    }),
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            }
            catch (error) {
                console.error(error);
                if (error instanceof errors.SeedExhaustiveError) {
                    console.warn(`Endpoint 'getWithPath' unexpectedly threw ${error.constructor.name}.` +
                        ` If this was intentional, please add ${error.constructor.name} to` +
                        " the endpoint's errors list in your Fern Definition.");
                    yield error.send(res);
                }
                else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        }));
        this.router.get("", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.methods.getWithQuery(req, {
                    send: () => __awaiter(this, void 0, void 0, function* () {
                        res.sendStatus(204);
                    }),
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            }
            catch (error) {
                console.error(error);
                if (error instanceof errors.SeedExhaustiveError) {
                    console.warn(`Endpoint 'getWithQuery' unexpectedly threw ${error.constructor.name}.` +
                        ` If this was intentional, please add ${error.constructor.name} to` +
                        " the endpoint's errors list in your Fern Definition.");
                    yield error.send(res);
                }
                else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        }));
        this.router.get("", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.methods.getWithAllowMultipleQuery(req, {
                    send: () => __awaiter(this, void 0, void 0, function* () {
                        res.sendStatus(204);
                    }),
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            }
            catch (error) {
                console.error(error);
                if (error instanceof errors.SeedExhaustiveError) {
                    console.warn(`Endpoint 'getWithAllowMultipleQuery' unexpectedly threw ${error.constructor.name}.` +
                        ` If this was intentional, please add ${error.constructor.name} to` +
                        " the endpoint's errors list in your Fern Definition.");
                    yield error.send(res);
                }
                else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        }));
        this.router.get("/path-query/:param", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.methods.getWithPathAndQuery(req, {
                    send: () => __awaiter(this, void 0, void 0, function* () {
                        res.sendStatus(204);
                    }),
                    cookie: res.cookie.bind(res),
                    locals: res.locals,
                });
                next();
            }
            catch (error) {
                console.error(error);
                if (error instanceof errors.SeedExhaustiveError) {
                    console.warn(`Endpoint 'getWithPathAndQuery' unexpectedly threw ${error.constructor.name}.` +
                        ` If this was intentional, please add ${error.constructor.name} to` +
                        " the endpoint's errors list in your Fern Definition.");
                    yield error.send(res);
                }
                else {
                    res.status(500).json("Internal Server Error");
                }
                next(error);
            }
        }));
        this.router.put("/path/:param", (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const request = yield serializers.endpoints.params.modifyWithPath.Request.parse(req.body);
            if (request.ok) {
                req.body = request.value;
                try {
                    yield this.methods.modifyWithPath(req, {
                        send: (responseBody) => __awaiter(this, void 0, void 0, function* () {
                            res.json(yield serializers.endpoints.params.modifyWithPath.Response.jsonOrThrow(responseBody, {
                                unrecognizedObjectKeys: "strip",
                            }));
                        }),
                        cookie: res.cookie.bind(res),
                        locals: res.locals,
                    });
                    next();
                }
                catch (error) {
                    console.error(error);
                    if (error instanceof errors.SeedExhaustiveError) {
                        console.warn(`Endpoint 'modifyWithPath' unexpectedly threw ${error.constructor.name}.` +
                            ` If this was intentional, please add ${error.constructor.name} to` +
                            " the endpoint's errors list in your Fern Definition.");
                        yield error.send(res);
                    }
                    else {
                        res.status(500).json("Internal Server Error");
                    }
                    next(error);
                }
            }
            else {
                res.status(422).json({
                    errors: request.errors.map((error) => ["request", ...error.path].join(" -> ") + ": " + error.message),
                });
                next(request.errors);
            }
        }));
        return this.router;
    }
}
exports.ParamsService = ParamsService;
