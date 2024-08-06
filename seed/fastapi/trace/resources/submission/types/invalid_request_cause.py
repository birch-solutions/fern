# This file was auto-generated by Fern from our API Definition.

from __future__ import annotations
from .submission_id_not_found import (
    SubmissionIdNotFound as resources_submission_types_submission_id_not_found_SubmissionIdNotFound,
)
from ....core.pydantic_utilities import IS_PYDANTIC_V2
from .custom_test_cases_unsupported import (
    CustomTestCasesUnsupported as resources_submission_types_custom_test_cases_unsupported_CustomTestCasesUnsupported,
)
from .unexpected_language_error import UnexpectedLanguageError
from ....core.pydantic_utilities import UniversalRootModel
import typing
import typing_extensions
import pydantic
from ....core.pydantic_utilities import update_forward_refs

T_Result = typing.TypeVar("T_Result")


class _Factory:
    def submission_id_not_found(
        self,
        value: resources_submission_types_submission_id_not_found_SubmissionIdNotFound,
    ) -> InvalidRequestCause:
        if IS_PYDANTIC_V2:
            return InvalidRequestCause(
                root=_InvalidRequestCause.SubmissionIdNotFound(
                    **value.dict(exclude_unset=True), type="submissionIdNotFound"
                )
            )
        else:
            return InvalidRequestCause(
                __root__=_InvalidRequestCause.SubmissionIdNotFound(
                    **value.dict(exclude_unset=True), type="submissionIdNotFound"
                )
            )

    def custom_test_cases_unsupported(
        self,
        value: resources_submission_types_custom_test_cases_unsupported_CustomTestCasesUnsupported,
    ) -> InvalidRequestCause:
        if IS_PYDANTIC_V2:
            return InvalidRequestCause(
                root=_InvalidRequestCause.CustomTestCasesUnsupported(
                    **value.dict(exclude_unset=True), type="customTestCasesUnsupported"
                )
            )
        else:
            return InvalidRequestCause(
                __root__=_InvalidRequestCause.CustomTestCasesUnsupported(
                    **value.dict(exclude_unset=True), type="customTestCasesUnsupported"
                )
            )

    def unexpected_language(
        self, value: UnexpectedLanguageError
    ) -> InvalidRequestCause:
        if IS_PYDANTIC_V2:
            return InvalidRequestCause(
                root=_InvalidRequestCause.UnexpectedLanguage(
                    **value.dict(exclude_unset=True), type="unexpectedLanguage"
                )
            )
        else:
            return InvalidRequestCause(
                __root__=_InvalidRequestCause.UnexpectedLanguage(
                    **value.dict(exclude_unset=True), type="unexpectedLanguage"
                )
            )


class InvalidRequestCause(UniversalRootModel):
    factory: typing.ClassVar[_Factory] = _Factory()

    if IS_PYDANTIC_V2:
        root: typing_extensions.Annotated[
            typing.Union[
                _InvalidRequestCause.SubmissionIdNotFound,
                _InvalidRequestCause.CustomTestCasesUnsupported,
                _InvalidRequestCause.UnexpectedLanguage,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _InvalidRequestCause.SubmissionIdNotFound,
            _InvalidRequestCause.CustomTestCasesUnsupported,
            _InvalidRequestCause.UnexpectedLanguage,
        ]:
            return self.root
    else:
        __root__: typing_extensions.Annotated[
            typing.Union[
                _InvalidRequestCause.SubmissionIdNotFound,
                _InvalidRequestCause.CustomTestCasesUnsupported,
                _InvalidRequestCause.UnexpectedLanguage,
            ],
            pydantic.Field(discriminator="type"),
        ]

        def get_as_union(
            self,
        ) -> typing.Union[
            _InvalidRequestCause.SubmissionIdNotFound,
            _InvalidRequestCause.CustomTestCasesUnsupported,
            _InvalidRequestCause.UnexpectedLanguage,
        ]:
            return self.__root__

    def visit(
        self,
        submission_id_not_found: typing.Callable[
            [resources_submission_types_submission_id_not_found_SubmissionIdNotFound],
            T_Result,
        ],
        custom_test_cases_unsupported: typing.Callable[
            [
                resources_submission_types_custom_test_cases_unsupported_CustomTestCasesUnsupported
            ],
            T_Result,
        ],
        unexpected_language: typing.Callable[[UnexpectedLanguageError], T_Result],
    ) -> T_Result:
        unioned_value = self.get_as_union()
        if unioned_value.type == "submissionIdNotFound":
            return submission_id_not_found(
                resources_submission_types_submission_id_not_found_SubmissionIdNotFound(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "customTestCasesUnsupported":
            return custom_test_cases_unsupported(
                resources_submission_types_custom_test_cases_unsupported_CustomTestCasesUnsupported(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )
        if unioned_value.type == "unexpectedLanguage":
            return unexpected_language(
                UnexpectedLanguageError(
                    **unioned_value.dict(exclude_unset=True, exclude={"type"})
                )
            )


class _InvalidRequestCause:
    class SubmissionIdNotFound(
        resources_submission_types_submission_id_not_found_SubmissionIdNotFound
    ):
        type: typing.Literal["submissionIdNotFound"] = "submissionIdNotFound"

    class CustomTestCasesUnsupported(
        resources_submission_types_custom_test_cases_unsupported_CustomTestCasesUnsupported
    ):
        type: typing.Literal["customTestCasesUnsupported"] = (
            "customTestCasesUnsupported"
        )

    class UnexpectedLanguage(UnexpectedLanguageError):
        type: typing.Literal["unexpectedLanguage"] = "unexpectedLanguage"


update_forward_refs(InvalidRequestCause)
