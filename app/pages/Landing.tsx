import type { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router";
import { Container } from "~/components/dramsoc/container/Container";
import { Hero } from "~/components/dramsoc/hero/Hero";
import { DramSoc } from "~/components/dramsoc/logo/DramSoc";
import { Card, CardHeader, CardTitle } from "~/components/ui/card";

// todo: make dynamically generated when helix
type RecentShowListing = {
    imageURL: string;
    title: string;
    type: string;
    link?: string;
    tooltip?: string;
};

const recentShows: RecentShowListing[] = [
    {
        title: "The Importance of Being Earnest",
        imageURL: "/assets/img/shows/earnest.jpg",
        type: "Spring Main 2026"
    },
    {
        title: "Treasure Island",
        imageURL: "/assets/img/shows/treasure_island.jpg",
        type: "Autumn Main 2025",
        link: "//www.instagram.com/p/DRsQ1B8Ck7Z",
        tooltip: "Photo by @nikdoeSs4d on Instagram"
    },
    {
        title: "Contellations",
        type: "Autumn Studio 2025",
        imageURL: "/assets/img/shows/constellations.jpg"
    },
    {
        title: "A Pair of Wings",
        type: "October Show 2025",
        imageURL: "/assets/img/shows/a_pair_of_wings.jpg"
    },
    {
        title: "RACKS",
        type: "Edinburgh Fringe 2025",
        imageURL: "/assets/img/shows/racks.jpeg",
        link: "//www.thespaceuk.com/shows/2025/racks-1"
    },
    {
        title: "The Storm",
        type: "Summer Studio 2025",
        imageURL: "/assets/img/shows/the_storm.jpg"
    },
    {
        title: "In The Moon Under Water",
        type: "Spring Studio 2025",
        imageURL: "/assets/img/shows/in_the_moon_under_water.jpeg"
    },
    {
        title: "Saint Joan",
        type: "Spring Main 2025",
        imageURL: "/assets/img/shows/saint_joan.jpeg"
    },
    {
        title: "Wyrd Sisters",
        type: "Autumn Main 2024",
        imageURL: "/assets/img/shows/wyrd_sisters.jpeg"
    },
    {
        title: "The Waters of March",
        type: "October Show 2024",
        imageURL: "/assets/img/shows/waters_of_march.jpeg"
    },
    {
        title: "Tycho",
        type: "Edinburgh Fringe 2024",
        imageURL: "/assets/img/shows/tycho.jpeg",
        link: "https://www.thespaceuk.com/shows/2024/tycho-mankind-s-first-hotel-on-the-moon"
    },
    {
        title: "Insinuation",
        type: "Summer Studio 2024",
        imageURL: "/assets/img/shows/insinuation.jpeg"
    },
];

const SectionHeader = ({ children }: PropsWithChildren): ReactNode => {
    return (
        <h2
            className="text-3xl font-bold"
        >
            {children}
        </h2>
    );
};

const SectionContainer = ({ children }: PropsWithChildren): ReactNode => {
    return (
        <Container
            className="flex flex-col text-center items-center gap-5 line-h leading-7 md:px-24! py-6 md:py-10 lg:py-14 max-w-250"
        >
            {children}
        </Container>
    );
};

export const Landing = (): ReactNode => {
    return (
        <>
            <Hero
                url="/assets/img/events/summer_ball1.jpg"
                useChevron
            >
                <div
                    className="flex flex-col justify-center items-center"
                >
                    <DramSoc
                        width={200}
                    />

                    <h1
                        className=" text-2xl md:text-4xl font-bold mt-4 text-center"
                    >
                        Imperial College Dramatic Society
                    </h1>
                </div>
            </Hero>
            <main>
                <SectionContainer>
                    <SectionHeader>
                        Welcome to DramSoc, Imperial's Dramatic Society!
                    </SectionHeader>
                    <p>
                        We do everything related to theatre: acting, set, costume, lighting,
                        sound, stage management, directing, production and more. There's plenty
                        to get involved in!
                    </p>
                    <p>
                        DramSoc own and operate the full range of state-of-the-art entertainment
                        equipment, and out technical team run events across college, from MTSoc
                        shows to historically the Summer Ball. We take pride in training our members
                        as theatre technicians, actors and directors. We run workshops, including
                        backstage tours, improvisation, set-building, lighting design, and much more,
                        and many of our alumi graduate to become theatre professionals.
                    </p>
                    <p>
                        We stage up to 2 plays per term, with recent productions including Oscar
                        Wilde's 'The Importance of Being Earnest,' and 'If Aliens Attacked I'd Die
                        First,' a piece of original work produced for the Edinburgh Fringe. We produce
                        a range of work both written by students and established playwrights. This is
                        the place to be if you love theatre!
                    </p>
                </SectionContainer>
                <Hero
                    url="/assets/img/activities/acting1.jpg"
                >
                    <SectionContainer>
                        <SectionHeader>
                            Acting
                        </SectionHeader>
                        <p>
                            DramSoc puts on at least one full-length play in our theatre, the Union
                            Concert Hall, pers term, as well as a number of other plays in different
                            venues around the College and further afield. Usually our main shows have
                            casts of 15~20 people and we welcome auditions from anyone with any amount
                            of experience, so if you're thinking of getting involved, keep an eye out
                            for audition posters and notices on our website, social media, and our mailing
                            lists at the stand and end of every term.
                        </p>
                    </SectionContainer>
                </Hero>
                <SectionContainer>
                    <SectionHeader>
                        Recent Shows
                    </SectionHeader>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {
                            recentShows.map(show => (
                                <Card
                                    key={show.title}
                                    className="relative pt-0"
                                    title={show.tooltip}
                                >
                                    <div
                                        className="w-full inset-0 bg-black/35 aspect-video"
                                    >
                                        <img
                                            src={show.imageURL}
                                            className="w-full"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle
                                            className="font-bold"
                                        >
                                            {show.title}
                                        </CardTitle>
                                    </CardHeader>
                                </Card>
                            )).map((element, i) => recentShows[i].link ? (
                                <Link
                                    to={recentShows[i].link}
                                    target="_blank"
                                >
                                    {element}
                                </Link>
                            ) : element)
                        }
                    </div>
                </SectionContainer>
            </main >
        </>
    );
};
