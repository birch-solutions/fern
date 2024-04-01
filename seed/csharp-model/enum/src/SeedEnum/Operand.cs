using System.Text.Json.Serialization;
using System;
using SeedEnum.Utilities;

namespace SeedEnum;

[JsonConverter(typeof(TolerantEnumConverter))]
public enum Operand
{
    [EnumMember(Value = ">")]
    GreaterThan,

    [EnumMember(Value = "=")]
    EqualTo,

    [EnumMember(Value = "less_than")]
    LessThan
}
