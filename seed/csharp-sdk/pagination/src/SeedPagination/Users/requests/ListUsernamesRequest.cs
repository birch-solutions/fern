namespace SeedPagination;

public class ListUsernamesRequest
{
    /// <summary>
    /// The cursor used for pagination in order to fetch
    /// the next page of results.
    /// </summary>
    public List<string?> StartingAfter { get; init; }
}
