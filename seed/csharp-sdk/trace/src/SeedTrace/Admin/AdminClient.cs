using System.Net.Http;
using SeedTrace;
using SeedTrace.Core;

#nullable enable

namespace SeedTrace;

public class AdminClient
{
    private RawClient _client;

    public AdminClient(RawClient client)
    {
        _client = client;
    }

    public async Task UpdateTestSubmissionStatusAsync(
        string submissionId,
        object request,
        RequestOptions? options
    )
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = $"/admin/store-test-submission-status/{submissionId}",
                Body = request,
                Options = options
            }
        );
    }

    public async Task SendTestSubmissionUpdateAsync(
        string submissionId,
        TestSubmissionUpdate request,
        RequestOptions? options
    )
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = $"/admin/store-test-submission-status-v2/{submissionId}",
                Body = request,
                Options = options
            }
        );
    }

    public async Task UpdateWorkspaceSubmissionStatusAsync(
        string submissionId,
        object request,
        RequestOptions? options
    )
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = $"/admin/store-workspace-submission-status/{submissionId}",
                Body = request,
                Options = options
            }
        );
    }

    public async Task SendWorkspaceSubmissionUpdateAsync(
        string submissionId,
        WorkspaceSubmissionUpdate request,
        RequestOptions? options
    )
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = $"/admin/store-workspace-submission-status-v2/{submissionId}",
                Body = request,
                Options = options
            }
        );
    }

    public async Task StoreTracedTestCaseAsync(
        string submissionId,
        string testCaseId,
        StoreTracedTestCaseRequest request,
        RequestOptions? options
    )
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = $"/admin/store-test-trace/submission/{submissionId}/testCase/{testCaseId}",
                Body = request,
                Options = options
            }
        );
    }

    public async Task StoreTracedTestCaseV2Async(
        string submissionId,
        string testCaseId,
        IEnumerable<TraceResponseV2> request,
        RequestOptions? options
    )
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path =
                    $"/admin/store-test-trace-v2/submission/{submissionId}/testCase/{testCaseId}",
                Body = request,
                Options = options
            }
        );
    }

    public async Task StoreTracedWorkspaceAsync(
        string submissionId,
        StoreTracedWorkspaceRequest request,
        RequestOptions? options
    )
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = $"/admin/store-workspace-trace/submission/{submissionId}",
                Body = request,
                Options = options
            }
        );
    }

    public async Task StoreTracedWorkspaceV2Async(
        string submissionId,
        IEnumerable<TraceResponseV2> request,
        RequestOptions? options
    )
    {
        await _client.MakeRequestAsync(
            new RawClient.JsonApiRequest
            {
                BaseUrl = _client.Options.BaseUrl,
                Method = HttpMethod.Post,
                Path = $"/admin/store-workspace-trace-v2/submission/{submissionId}",
                Body = request,
                Options = options
            }
        );
    }
}
