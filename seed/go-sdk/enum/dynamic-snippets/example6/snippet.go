package example

import (
    client "github.com/enum/fern/client"
    option "github.com/enum/fern/option"
    context "context"
    fern "github.com/enum/fern"
)

func do() () {
    client := client.NewClient(
        option.WithBaseURL(
            "https://api.fern.com",
        ),
    )
    client.QueryParam.SendList(
        context.TODO(),
        &fern.SendEnumListAsQueryParamRequest{
            Operand: []fern.Operand{
                fern.OperandGreaterThan,
            },
            MaybeOperand: []*fern.Operand{
                fern.OperandGreaterThan.Ptr(),
            },
            OperandOrColor: []*fern.ColorOrOperand{
                &fern.ColorOrOperand{
                    Color: fern.ColorRed,
                },
            },
            MaybeOperandOrColor: []*fern.ColorOrOperand{},
        },
    )
}
