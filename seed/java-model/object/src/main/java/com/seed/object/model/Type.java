/**
 * This file was auto-generated by Fern from our API Definition.
 */
package com.seed.object.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonSetter;
import com.fasterxml.jackson.annotation.Nulls;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.seed.object.core.ObjectMappers;
import java.math.BigInteger;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import org.jetbrains.annotations.NotNull;

@JsonInclude(JsonInclude.Include.NON_ABSENT)
@JsonDeserialize(builder = Type.Builder.class)
public final class Type {
    private final int one;

    private final double two;

    private final String three;

    private final boolean four;

    private final long five;

    private final OffsetDateTime six;

    private final String seven;

    private final UUID eight;

    private final byte[] nine;

    private final List<Integer> ten;

    private final Set<Double> eleven;

    private final Map<String, Boolean> twelve;

    private final Optional<Long> thirteen;

    private final Object fourteen;

    private final List<List<Integer>> fifteen;

    private final List<Map<String, Integer>> sixteen;

    private final List<Optional<UUID>> seventeen;

    private final Name nineteen;

    private final int twenty;

    private final long twentyone;

    private final double twentytwo;

    private final BigInteger twentythree;

    private Type(
            int one,
            double two,
            String three,
            boolean four,
            long five,
            OffsetDateTime six,
            String seven,
            UUID eight,
            byte[] nine,
            List<Integer> ten,
            Set<Double> eleven,
            Map<String, Boolean> twelve,
            Optional<Long> thirteen,
            Object fourteen,
            List<List<Integer>> fifteen,
            List<Map<String, Integer>> sixteen,
            List<Optional<UUID>> seventeen,
            Name nineteen,
            int twenty,
            long twentyone,
            double twentytwo,
            BigInteger twentythree) {
        this.one = one;
        this.two = two;
        this.three = three;
        this.four = four;
        this.five = five;
        this.six = six;
        this.seven = seven;
        this.eight = eight;
        this.nine = nine;
        this.ten = ten;
        this.eleven = eleven;
        this.twelve = twelve;
        this.thirteen = thirteen;
        this.fourteen = fourteen;
        this.fifteen = fifteen;
        this.sixteen = sixteen;
        this.seventeen = seventeen;
        this.nineteen = nineteen;
        this.twenty = twenty;
        this.twentyone = twentyone;
        this.twentytwo = twentytwo;
        this.twentythree = twentythree;
    }

    @JsonProperty("one")
    public int getOne() {
        return one;
    }

    @JsonProperty("two")
    public double getTwo() {
        return two;
    }

    @JsonProperty("three")
    public String getThree() {
        return three;
    }

    @JsonProperty("four")
    public boolean getFour() {
        return four;
    }

    @JsonProperty("five")
    public long getFive() {
        return five;
    }

    @JsonProperty("six")
    public OffsetDateTime getSix() {
        return six;
    }

    @JsonProperty("seven")
    public String getSeven() {
        return seven;
    }

    @JsonProperty("eight")
    public UUID getEight() {
        return eight;
    }

    @JsonProperty("nine")
    public byte[] getNine() {
        return nine;
    }

    @JsonProperty("ten")
    public List<Integer> getTen() {
        return ten;
    }

    @JsonProperty("eleven")
    public Set<Double> getEleven() {
        return eleven;
    }

    @JsonProperty("twelve")
    public Map<String, Boolean> getTwelve() {
        return twelve;
    }

    @JsonProperty("thirteen")
    public Optional<Long> getThirteen() {
        return thirteen;
    }

    @JsonProperty("fourteen")
    public Object getFourteen() {
        return fourteen;
    }

    @JsonProperty("fifteen")
    public List<List<Integer>> getFifteen() {
        return fifteen;
    }

    @JsonProperty("sixteen")
    public List<Map<String, Integer>> getSixteen() {
        return sixteen;
    }

    @JsonProperty("seventeen")
    public List<Optional<UUID>> getSeventeen() {
        return seventeen;
    }

    @JsonProperty("eighteen")
    public String getEighteen() {
        return "eighteen";
    }

    @JsonProperty("nineteen")
    public Name getNineteen() {
        return nineteen;
    }

    @JsonProperty("twenty")
    public int getTwenty() {
        return twenty;
    }

    @JsonProperty("twentyone")
    public long getTwentyone() {
        return twentyone;
    }

    @JsonProperty("twentytwo")
    public double getTwentytwo() {
        return twentytwo;
    }

    @JsonProperty("twentythree")
    public BigInteger getTwentythree() {
        return twentythree;
    }

    @java.lang.Override
    public boolean equals(Object other) {
        if (this == other) return true;
        return other instanceof Type && equalTo((Type) other);
    }

    private boolean equalTo(Type other) {
        return one == other.one
                && two == other.two
                && three.equals(other.three)
                && four == other.four
                && five == other.five
                && six.equals(other.six)
                && seven.equals(other.seven)
                && eight.equals(other.eight)
                && nine.equals(other.nine)
                && ten.equals(other.ten)
                && eleven.equals(other.eleven)
                && twelve.equals(other.twelve)
                && thirteen.equals(other.thirteen)
                && fourteen.equals(other.fourteen)
                && fifteen.equals(other.fifteen)
                && sixteen.equals(other.sixteen)
                && seventeen.equals(other.seventeen)
                && nineteen.equals(other.nineteen)
                && twenty == other.twenty
                && twentyone == other.twentyone
                && twentytwo == other.twentytwo
                && twentythree.equals(other.twentythree);
    }

    @java.lang.Override
    public int hashCode() {
        return Objects.hash(
                this.one,
                this.two,
                this.three,
                this.four,
                this.five,
                this.six,
                this.seven,
                this.eight,
                this.nine,
                this.ten,
                this.eleven,
                this.twelve,
                this.thirteen,
                this.fourteen,
                this.fifteen,
                this.sixteen,
                this.seventeen,
                this.nineteen,
                this.twenty,
                this.twentyone,
                this.twentytwo,
                this.twentythree);
    }

    @java.lang.Override
    public String toString() {
        return ObjectMappers.stringify(this);
    }

    public static OneStage builder() {
        return new Builder();
    }

    public interface OneStage {
        TwoStage one(int one);

        Builder from(Type other);
    }

    public interface TwoStage {
        ThreeStage two(double two);
    }

    public interface ThreeStage {
        FourStage three(@NotNull String three);
    }

    public interface FourStage {
        FiveStage four(boolean four);
    }

    public interface FiveStage {
        SixStage five(long five);
    }

    public interface SixStage {
        SevenStage six(@NotNull OffsetDateTime six);
    }

    public interface SevenStage {
        EightStage seven(@NotNull String seven);
    }

    public interface EightStage {
        NineStage eight(@NotNull UUID eight);
    }

    public interface NineStage {
        FourteenStage nine(@NotNull byte[] nine);
    }

    public interface FourteenStage {
        NineteenStage fourteen(@NotNull Object fourteen);
    }

    public interface NineteenStage {
        TwentyStage nineteen(@NotNull Name nineteen);
    }

    public interface TwentyStage {
        TwentyoneStage twenty(int twenty);
    }

    public interface TwentyoneStage {
        TwentytwoStage twentyone(long twentyone);
    }

    public interface TwentytwoStage {
        TwentythreeStage twentytwo(double twentytwo);
    }

    public interface TwentythreeStage {
        _FinalStage twentythree(@NotNull BigInteger twentythree);
    }

    public interface _FinalStage {
        Type build();

        _FinalStage ten(List<Integer> ten);

        _FinalStage addTen(Integer ten);

        _FinalStage addAllTen(List<Integer> ten);

        _FinalStage eleven(Set<Double> eleven);

        _FinalStage addEleven(Double eleven);

        _FinalStage addAllEleven(Set<Double> eleven);

        _FinalStage twelve(Map<String, Boolean> twelve);

        _FinalStage putAllTwelve(Map<String, Boolean> twelve);

        _FinalStage twelve(String key, Boolean value);

        _FinalStage thirteen(Optional<Long> thirteen);

        _FinalStage thirteen(Long thirteen);

        _FinalStage fifteen(List<List<Integer>> fifteen);

        _FinalStage addFifteen(List<Integer> fifteen);

        _FinalStage addAllFifteen(List<List<Integer>> fifteen);

        _FinalStage sixteen(List<Map<String, Integer>> sixteen);

        _FinalStage addSixteen(Map<String, Integer> sixteen);

        _FinalStage addAllSixteen(List<Map<String, Integer>> sixteen);

        _FinalStage seventeen(List<Optional<UUID>> seventeen);

        _FinalStage addSeventeen(Optional<UUID> seventeen);

        _FinalStage addAllSeventeen(List<Optional<UUID>> seventeen);
    }

    @JsonIgnoreProperties(ignoreUnknown = true)
    public static final class Builder
            implements OneStage,
                    TwoStage,
                    ThreeStage,
                    FourStage,
                    FiveStage,
                    SixStage,
                    SevenStage,
                    EightStage,
                    NineStage,
                    FourteenStage,
                    NineteenStage,
                    TwentyStage,
                    TwentyoneStage,
                    TwentytwoStage,
                    TwentythreeStage,
                    _FinalStage {
        private int one;

        private double two;

        private String three;

        private boolean four;

        private long five;

        private OffsetDateTime six;

        private String seven;

        private UUID eight;

        private byte[] nine;

        private Object fourteen;

        private Name nineteen;

        private int twenty;

        private long twentyone;

        private double twentytwo;

        private BigInteger twentythree;

        private List<Optional<UUID>> seventeen = new ArrayList<>();

        private List<Map<String, Integer>> sixteen = new ArrayList<>();

        private List<List<Integer>> fifteen = new ArrayList<>();

        private Optional<Long> thirteen = Optional.empty();

        private Map<String, Boolean> twelve = new LinkedHashMap<>();

        private Set<Double> eleven = new LinkedHashSet<>();

        private List<Integer> ten = new ArrayList<>();

        private Builder() {}

        @java.lang.Override
        public Builder from(Type other) {
            one(other.getOne());
            two(other.getTwo());
            three(other.getThree());
            four(other.getFour());
            five(other.getFive());
            six(other.getSix());
            seven(other.getSeven());
            eight(other.getEight());
            nine(other.getNine());
            ten(other.getTen());
            eleven(other.getEleven());
            twelve(other.getTwelve());
            thirteen(other.getThirteen());
            fourteen(other.getFourteen());
            fifteen(other.getFifteen());
            sixteen(other.getSixteen());
            seventeen(other.getSeventeen());
            nineteen(other.getNineteen());
            twenty(other.getTwenty());
            twentyone(other.getTwentyone());
            twentytwo(other.getTwentytwo());
            twentythree(other.getTwentythree());
            return this;
        }

        @java.lang.Override
        @JsonSetter("one")
        public TwoStage one(int one) {
            this.one = one;
            return this;
        }

        @java.lang.Override
        @JsonSetter("two")
        public ThreeStage two(double two) {
            this.two = two;
            return this;
        }

        @java.lang.Override
        @JsonSetter("three")
        public FourStage three(@NotNull String three) {
            this.three = Objects.requireNonNull(three, "three must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("four")
        public FiveStage four(boolean four) {
            this.four = four;
            return this;
        }

        @java.lang.Override
        @JsonSetter("five")
        public SixStage five(long five) {
            this.five = five;
            return this;
        }

        @java.lang.Override
        @JsonSetter("six")
        public SevenStage six(@NotNull OffsetDateTime six) {
            this.six = Objects.requireNonNull(six, "six must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("seven")
        public EightStage seven(@NotNull String seven) {
            this.seven = Objects.requireNonNull(seven, "seven must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("eight")
        public NineStage eight(@NotNull UUID eight) {
            this.eight = Objects.requireNonNull(eight, "eight must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("nine")
        public FourteenStage nine(@NotNull byte[] nine) {
            this.nine = Objects.requireNonNull(nine, "nine must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("fourteen")
        public NineteenStage fourteen(@NotNull Object fourteen) {
            this.fourteen = Objects.requireNonNull(fourteen, "fourteen must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("nineteen")
        public TwentyStage nineteen(@NotNull Name nineteen) {
            this.nineteen = Objects.requireNonNull(nineteen, "nineteen must not be null");
            return this;
        }

        @java.lang.Override
        @JsonSetter("twenty")
        public TwentyoneStage twenty(int twenty) {
            this.twenty = twenty;
            return this;
        }

        @java.lang.Override
        @JsonSetter("twentyone")
        public TwentytwoStage twentyone(long twentyone) {
            this.twentyone = twentyone;
            return this;
        }

        @java.lang.Override
        @JsonSetter("twentytwo")
        public TwentythreeStage twentytwo(double twentytwo) {
            this.twentytwo = twentytwo;
            return this;
        }

        @java.lang.Override
        @JsonSetter("twentythree")
        public _FinalStage twentythree(@NotNull BigInteger twentythree) {
            this.twentythree = Objects.requireNonNull(twentythree, "twentythree must not be null");
            return this;
        }

        @java.lang.Override
        public _FinalStage addAllSeventeen(List<Optional<UUID>> seventeen) {
            this.seventeen.addAll(seventeen);
            return this;
        }

        @java.lang.Override
        public _FinalStage addSeventeen(Optional<UUID> seventeen) {
            this.seventeen.add(seventeen);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "seventeen", nulls = Nulls.SKIP)
        public _FinalStage seventeen(List<Optional<UUID>> seventeen) {
            this.seventeen.clear();
            this.seventeen.addAll(seventeen);
            return this;
        }

        @java.lang.Override
        public _FinalStage addAllSixteen(List<Map<String, Integer>> sixteen) {
            this.sixteen.addAll(sixteen);
            return this;
        }

        @java.lang.Override
        public _FinalStage addSixteen(Map<String, Integer> sixteen) {
            this.sixteen.add(sixteen);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "sixteen", nulls = Nulls.SKIP)
        public _FinalStage sixteen(List<Map<String, Integer>> sixteen) {
            this.sixteen.clear();
            this.sixteen.addAll(sixteen);
            return this;
        }

        @java.lang.Override
        public _FinalStage addAllFifteen(List<List<Integer>> fifteen) {
            this.fifteen.addAll(fifteen);
            return this;
        }

        @java.lang.Override
        public _FinalStage addFifteen(List<Integer> fifteen) {
            this.fifteen.add(fifteen);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "fifteen", nulls = Nulls.SKIP)
        public _FinalStage fifteen(List<List<Integer>> fifteen) {
            this.fifteen.clear();
            this.fifteen.addAll(fifteen);
            return this;
        }

        @java.lang.Override
        public _FinalStage thirteen(Long thirteen) {
            this.thirteen = Optional.ofNullable(thirteen);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "thirteen", nulls = Nulls.SKIP)
        public _FinalStage thirteen(Optional<Long> thirteen) {
            this.thirteen = thirteen;
            return this;
        }

        @java.lang.Override
        public _FinalStage twelve(String key, Boolean value) {
            this.twelve.put(key, value);
            return this;
        }

        @java.lang.Override
        public _FinalStage putAllTwelve(Map<String, Boolean> twelve) {
            this.twelve.putAll(twelve);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "twelve", nulls = Nulls.SKIP)
        public _FinalStage twelve(Map<String, Boolean> twelve) {
            this.twelve.clear();
            this.twelve.putAll(twelve);
            return this;
        }

        @java.lang.Override
        public _FinalStage addAllEleven(Set<Double> eleven) {
            this.eleven.addAll(eleven);
            return this;
        }

        @java.lang.Override
        public _FinalStage addEleven(Double eleven) {
            this.eleven.add(eleven);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "eleven", nulls = Nulls.SKIP)
        public _FinalStage eleven(Set<Double> eleven) {
            this.eleven.clear();
            this.eleven.addAll(eleven);
            return this;
        }

        @java.lang.Override
        public _FinalStage addAllTen(List<Integer> ten) {
            this.ten.addAll(ten);
            return this;
        }

        @java.lang.Override
        public _FinalStage addTen(Integer ten) {
            this.ten.add(ten);
            return this;
        }

        @java.lang.Override
        @JsonSetter(value = "ten", nulls = Nulls.SKIP)
        public _FinalStage ten(List<Integer> ten) {
            this.ten.clear();
            this.ten.addAll(ten);
            return this;
        }

        @java.lang.Override
        public Type build() {
            return new Type(
                    one,
                    two,
                    three,
                    four,
                    five,
                    six,
                    seven,
                    eight,
                    nine,
                    ten,
                    eleven,
                    twelve,
                    thirteen,
                    fourteen,
                    fifteen,
                    sixteen,
                    seventeen,
                    nineteen,
                    twenty,
                    twentyone,
                    twentytwo,
                    twentythree);
        }
    }
}
