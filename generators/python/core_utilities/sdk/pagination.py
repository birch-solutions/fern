import typing
from typing_extensions import Self
from .pydantic_utilities import pydantic_v1
import asyncio

EMPTY_PROMISE = asyncio.sleep(0)

# Generic to represent the underlying type of the results within a page
T = typing.TypeVar("T")

# SDKs implement a Page ABC per-pagination request, the endpoint then retuns a paginator that wraps this type
# for example, an endpoint will return SyncPaginator[UserPage] where UserPage implements the Page ABC. ex:
# 
# SyncPaginator<InnerListType>(
#     has_next=response.list_metadata.after is not None,
#     items=response.data,
#     # This should be the outer function that returns the SyncPaginator again
#     get_next=lambda: list(..., cursor: response.cursor) (or list(..., offset: offset + 1))
# )
class BasePage(pydantic_v1.BaseModel, typing.Generic[T]):
    has_next: bool
    items: typing.List[T]

class SyncPage(BasePage, typing.Generic[T]):
    get_next: typing.Optional[typing.Callable[[], typing.Optional[Self]]]

class AsyncPage(BasePage, typing.Generic[T]):
    get_next: typing.Optional[typing.Callable[[], typing.Awaitable[typing.Optional[Self]]]]

# ----------------------------

class SyncPaginator(SyncPage[T], typing.Generic[T]):
    def __iter__(self) -> typing.Iterator[T]:
        for page in self.iter_pages():
            for item in page.items:
                yield item
    
    def iter_pages(self) -> typing.Iterator[SyncPage[T]]:
        page = self
        while True:
            yield page
            if page.has_next and page.get_next is not None:
                page = page.get_next()
                if page is None or page.items is None or len(page.items) == 0:
                    return
            else:
                return

    def next_page(self) -> typing.Optional[SyncPage[T]]:
        return self.get_next() if self.get_next is not None else None


class AsyncPaginator(AsyncPage[T], typing.Generic[T]):
    async def __aiter__(self) -> typing.AsyncIterator[T]:
        async for page in self.iter_pages():
            for item in page.items:
                yield item

    async def iter_pages(self) -> typing.AsyncIterator[AsyncPage[T]]:
        page = self
        while True:
            yield page
            if page.has_next and page.get_next is not None:
                page = await page.get_next()
                if page is None or page.items is None or len(page.items) == 0:
                    return
            else:
                return

    async def next_page(self) -> typing.Optional[AsyncPage[T]]:
        return await self.get_next() if self.get_next is not None else None