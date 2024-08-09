<<<<<<< HEAD
=======
using SeedPagination;

#nullable enable

>>>>>>> f5b9bd2cb7 (add test definition)
namespace SeedPagination;

public record ListWithOffsetPaginationHasNextPageRequest
{
    /// <summary>
    /// Defaults to first page
    /// </summary>
    public int? Page { get; set; }

    /// <summary>
    /// The maxiumum number of elements to return.
    /// This is also used as the step size in this
    /// paginated endpoint.
    /// </summary>
    public int? Limit { get; set; }

    public Order? Order { get; set; }
}
