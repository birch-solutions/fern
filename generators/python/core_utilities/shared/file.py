from typing import IO, Dict, List, Mapping, Optional, Tuple, Union, cast

# File typing inspired by the flexibility of types within the httpx library
# https://github.com/encode/httpx/blob/master/httpx/_types.py
FileContent = Union[IO[bytes], bytes, str]
File = Union[
    # file (or bytes)
    FileContent,
    # (filename, file (or bytes))
    Tuple[Optional[str], FileContent],
    # (filename, file (or bytes), content_type)
    Tuple[Optional[str], FileContent, Optional[str]],
    # (filename, file (or bytes), content_type, headers)
    Tuple[
        Optional[str],
        FileContent,
        Optional[str],
        Mapping[str, str],
    ],
]


def convert_file_dict_to_httpx_tuples(
    d: Dict[str, Union[File, List[File]]],
) -> List[Tuple[str, File]]:
    """
    The format we use is a list of tuples, where the first element is the
    name of the file and the second is the file object. Typically HTTPX wants
    a dict, but to be able to send lists of files, you have to use the list
    approach (which also works for non-lists)
    https://github.com/encode/httpx/pull/1032
    """

    httpx_tuples = []
    for key, file_like in d.items():
        if isinstance(file_like, list):
            for file_like_item in file_like:
                httpx_tuples.append((key, file_like_item))
        else:
            httpx_tuples.append((key, file_like))
    return httpx_tuples


def with_content_type(*, file: File, content_type: str) -> File:
    """ """
    if isinstance(file, tuple):
        if len(file) == 2:
            filename, content = cast(Tuple[Optional[str], FileContent], file)  # type: ignore
            return (filename, content, content_type)
        elif len(file) == 3:
            filename, content, _ = cast(Tuple[Optional[str], FileContent, Optional[str]], file)  # type: ignore
            return (filename, content, content_type)
        elif len(file) == 4:
            filename, content, _, headers = cast(  # type: ignore
                Tuple[Optional[str], FileContent, Optional[str], Mapping[str, str]], file
            )
            return (filename, content, content_type, headers)
        else:
            raise ValueError(f"Unexpected tuple length: {len(file)}")
    return (None, file, content_type)
