using System.Runtime.Serialization;

#nullable enable

namespace SeedExhaustive.Types;

public enum WeatherReport
{
    [EnumMember(Value = "SUNNY")]
    Sunny,

    [EnumMember(Value = "CLOUDY")]
    Cloudy,

    [EnumMember(Value = "RAINING")]
    Raining,

    [EnumMember(Value = "SNOWING")]
    Snowing
}
