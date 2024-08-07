/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as FernIr from "../../..";

/**
 * Defines the information related to a Protobuf service declaration. This is
 * primarily meant to be used to instantiate the internal gRPC client used by
 * the SDK.
 *
 * For example, consider the following C# snippet which instantiates a
 * `UserService` gRPC client:
 *
 * ```csharp
 * using User.Grpc;
 *
 * public class RawGrpcClient
 * {
 *     public UserService.UserServiceClient UserServiceClient;
 *
 *     public RawGrpcClient(...)
 *     {
 *         GrpcChannel channel = GrpcChannel.ForAddress(...);
 *         UserServiceClient = new UserService.UserServiceClient(channel);
 *     }
 * }
 * ```
 */
export interface ProtobufService {
    /** The `.proto` source file that defines this service. */
    file: FernIr.ProtobufFile;
    /** The name of the service defined in the `.proto` file (e.g. UserService). */
    name: FernIr.Name;
}
