"use client"

import { movies } from "@/data/movies"
import Link from "next/link"

const moods = [
  "Cozy",
  "Romantic",
  "Nostalgic",
  "Spooky",
  "Funny",
  "Hurts So Good",
  "Thrilling",
  "Adventurous",
  "Actually Scary",
  "Magical",
]

const monthInfo: Record<
  string,
  {
    eyebrow: string
    title: string
    description: string
    symbol: string
  }
> = {
  January: {
    eyebrow: "Well, it's still cold but it's not Christmas anymore",
    title: "January at Phoebe's Cinema",
    description: "Fargo for sure.",
    symbol: "❄",
  },
  February: {
    eyebrow: "Still cold.",
    title: "February at Phoebe's Cinema",
    description:
      "Groundhog Day, Valentine's Day, and an unreasonable number of movies about people falling in love in New York.",
    symbol: "♡",
  },
  March: {
    eyebrow: "A new season approaches! When do the clocks change again??",
    title: "March at Phoebe's Cinema",
    description:
      "Rainy days, spring break, basketball... signs of life!!!",
    symbol: "✦",
  },
  April: {
    eyebrow: "April Showers, etc. etc.",
    title: "April at Phoebe's Cinema",
    description:
      "Rainy days, flowers blooming, spring romances, and touching grass.",
    symbol: "✿",
  },
  May: {
    eyebrow: "Ahhh late spring",
    title: "May at Phoebe's Cinema",
    description:
      "Jackets are away. School is almost out. Everyone is in love with the world.",
    symbol: "✿",
  },
  June: {
    eyebrow: "Late nights in the middle of Juneeee",
    title: "June at Phoebe's Cinema",
    description:
      "Yesss to road trips, coming of age, beach days, staying out late, and summer 4ever feeling",
    symbol: "☀",
  },
  July: {
    eyebrow: "Hot summer nights, mid July... etc",
    title: "July at Phoebe's Cinema",
    description:
      "Fireworks, lake days, pool parties, grilling, camping, getting on a million planes, or whatever else you're supposed to be doing in July.",
    symbol: "☀",
  },
  August: {
    eyebrow: "I never watch movies this month, too much to do",
    title: "August at Phoebe's Cinema",
    description: "Summer isn't over yet. Go outside.",
    symbol: "☀",
  },
  September: {
    eyebrow: "A new season begins",
    title: "September at Phoebe's Cinema",
    description:
      "Back-to-school movies, golden afternoons, late summer, and that first little feeling of fall.",
    symbol: "✦",
  },
  October: {
    eyebrow:
      "Spooky season is here! Get started there's a lot to cover... >:)",
    title: "October at Phoebe's Cinema",
    description:
      "Vampires, magic, slashers, changing leaves, and the Great Pumpkin. The best month.",
    symbol: "☾",
  },
  November: {
    eyebrow: "Thanksgiving & the red cups are back",
    title: "November at Phoebe's Cinema",
    description:
      "Knives are out, sweaters are on, ducks are mighty, women are little. Titans? Remembered. Mr. Fox? Fantastic. And Harry has met Sally for sure.",
    symbol: "✦",
  },
  December: {
    eyebrow: "Christmas movies in full swing",
    title: "December at Phoebe's Cinema",
    description: "not much to say here you know what to watch... <3",
    symbol: "❄",
  },
}

function getCurrentMonth() {
  return new Date().toLocaleString("en-US", { month: "long" })
}

export default function Home() {
  const currentMonth = getCurrentMonth()
  const month = monthInfo[currentMonth]

  // Only show movies specifically tagged for the current month.
  const monthlyMovies = movies.filter((movie) =>
    movie.seasons.includes(currentMonth)
  )

  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#29251f]">
      {/* TOP NAV */}
      <nav className="border-b border-[#29251f]/15 bg-[#f4efe5]/95 px-6 py-5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#"
            className="font-serif text-2xl tracking-[0.08em]"
          >
            PHOEBE&apos;S CINEMA
          </a>

          <div className="hidden gap-8 text-sm uppercase tracking-[0.18em] md:flex">
            <a
              href="#browse"
              className="transition-opacity hover:opacity-50"
            >
              Movies
            </a>

            <a
              href="#seasons"
              className="transition-opacity hover:opacity-50"
            >
              Seasons
            </a>

            <a
              href="#moods"
              className="transition-opacity hover:opacity-50"
            >
              Vibes
            </a>

            <a
              href="#about"
              className="transition-opacity hover:opacity-50"
            >
              About
            </a>
          </div>

          <button className="rounded-full border border-[#29251f]/30 px-4 py-2 text-xs uppercase tracking-[0.16em] transition hover:bg-[#29251f] hover:text-[#f4efe5]">
            Surprise Me
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[#29251f]/15 px-6 py-20 md:py-28">
        <div className="absolute -right-16 -top-16 text-[180px] leading-none opacity-[0.055]">
          {month.symbol}
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] opacity-60">
              {month.eyebrow}
            </p>

            <h1 className="font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-7xl lg:text-8xl">
              {month.title}
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 opacity-70 md:text-xl">
              {month.description}
            </p>

            <div className="mt-9">
              <a
                href="/movies"
                className="inline-block rounded-full bg-[#29251f] px-6 py-3 text-sm uppercase tracking-[0.14em] text-[#f4efe5] transition hover:scale-[1.02]"
              >
                Browse movies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT MONTH'S MOVIES */}
      <section id="browse" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.25em] opacity-50">
                From the collection
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                A few favorites
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 opacity-55">                A little selection from this month&apos;s movies.
              </p>
            </div>

<Link
  href={`/movies?search=${encodeURIComponent(currentMonth)}`}
  className="hidden text-xs uppercase tracking-[0.18em] underline underline-offset-4 md:block"
>
  View all {currentMonth} movies →
</Link>
          </div>


          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
  {monthlyMovies.slice(0, 6).map((movie) => (
    <Link
      key={movie.title}
      href={`/movies/${encodeURIComponent(movie.title)}?from=${encodeURIComponent(currentMonth)}`}
      className="group cursor-pointer"
    >
      {/* DVD CASE */}
<div className="relative aspect-[2/3]">
  {movie.poster && (
    <div className="absolute inset-0">

      {/* STRAIGHT VERSION */}
      <div className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          className="absolute left-[6%] top-[3%] h-[93%] w-[90%] object-cover"
          style={{
            transform: "rotateZ(-0.25deg)",
            transformOrigin: "right center",
          }}
        />

        <img
          src="/images/dvd/dvd-case-front-no-logo.png"
          alt=""
          className="pointer-events-none absolute inset-0 z-10 h-full w-full scale-[1.04] object-contain"
        />
      </div>

      {/* ANGLED VERSION */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">

        {/* ANGLED POSTER */}
        <div className="absolute inset-0 scale-[1.16]">
          <img
            src={movie.poster}
            alt=""
            className="absolute left-[13%] top-[9.1%] h-[82%] w-[81%] object-cover"
            style={{
              transform:
                "perspective(600px) rotateY(7deg) rotateZ(-0.87deg) skewY(0.4deg)",
              transformOrigin: "right center",
            }}
          />
        </div>

        {/* ANGLED CASE */}
        <img
          src="/images/dvd/dvd-case-angle-no-logo.png"
          alt=""
          className="absolute inset-0 z-10 h-full w-full scale-[1.16] object-contain"
        />

      </div>

    </div>
  )}
</div>

      {/* MOVIE INFO */}
      <div className="pt-3">
        <p className="font-serif text-lg leading-tight">
          {movie.title}
        </p>

        <p className="mt-1 text-xs opacity-50">
          {movie.year} · {movie.genres[0]}
        </p>
      </div>
    </Link>
  ))}
</div>
        </div>
      </section>

      {/* VIBES */}
      <section
        id="moods"
        className="border-y border-[#29251f]/15 bg-[#29251f] px-6 py-20 text-[#f4efe5] md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs uppercase tracking-[0.25em] opacity-50">
              Vibes
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              What are you in the mood for?
              <br />
              Pick a vibe.
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {moods.map((mood) => (
              <Link
                key={mood}
                href={`/movies?search=${encodeURIComponent(mood)}`}
                className="rounded-full border border-[#f4efe5]/30 px-6 py-3 text-sm transition hover:bg-[#f4efe5] hover:text-[#29251f]"
              >
                {mood}
              </Link>
            ))}
          </div>
        </div>
      </section>

{/* SEASONS */}
<section id="seasons" className="px-6 py-20 md:py-24">
  <div className="mx-auto max-w-7xl">
    <p className="mb-3 text-xs uppercase tracking-[0.25em] opacity-50">
      The Calendar
    </p>

    <h2 className="font-serif text-4xl md:text-5xl">
      Browse by season.
    </h2>

    <div className="mt-10 flex flex-wrap gap-3">
      {["Autumn", "Winter", "Spring", "Summer"].map((season) => (
        <Link
          key={season}
          href={`/movies?search=${encodeURIComponent(season)}`}
          className="rounded-full border border-[#29251f]/20 px-6 py-3 text-sm transition hover:bg-[#29251f] hover:text-[#f4efe5]"
        >
          {season}
        </Link>
      ))}
    </div>
  </div>
</section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-[#29251f]/15 px-6 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] opacity-50">
              Welcome to this corner of my brain.
            </p>

            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Not every movie.
              <br />
              Just the right movie.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 opacity-65">
              This isn&apos;t a database of every movie ever made. It&apos;s a
              collection of movies for very specific moods... the ones that
              remind you of a particular season, a certain year, a special place,
              or a version of yourself. The goal is to find the movie that
              feels exactly right.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#29251f]/15 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs uppercase tracking-[0.15em] opacity-50 md:flex-row">
          <span>© 2026 Phoebe&apos;s Cinema</span>
          <span>Movies for every season, mood & occasion</span>
        </div>
      </footer>
    </main>
  )
}