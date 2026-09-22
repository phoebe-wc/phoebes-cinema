"use client"

import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { movies } from "@/data/movies"
import Link from "next/link"

const hiddenGenres = ["Adventure", "Thriller", "Romance", "Psychological"]

export default function MoviesPage() {
const searchParams = useSearchParams()
const urlSearch = searchParams.get("search") || ""
const urlFilters = searchParams.get("filters") || ""
const restore = searchParams.get("restore") || ""

  const [search, setSearch] = useState(urlSearch)
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

useEffect(() => {
  if (urlFilters) {
    setSearch("")
    setSelectedFilters(urlFilters.split("|"))
  } else if (urlSearch) {
    setSearch("")
    setSelectedFilters([urlSearch])
  } else {
    setSearch("")
    setSelectedFilters([])
  }
}, [urlSearch, urlFilters])

useEffect(() => {
  if (restore === "scroll") {
    const savedScroll = sessionStorage.getItem("moviesScrollY")

    if (savedScroll) {
      requestAnimationFrame(() => {
        window.scrollTo(0, Number(savedScroll))
        sessionStorage.removeItem("moviesScrollY")
      })
    }
  }
}, [restore])

  const allSearchTerms = useMemo(() => {
    const terms = new Set<string>()

    movies.forEach((movie) => {
      movie.moods.forEach((item) => terms.add(item))
      movie.genres
        .filter((item) => !hiddenGenres.includes(item))
        .forEach((item) => terms.add(item))
      movie.eras.forEach((item) => terms.add(item))
      movie.tags.forEach((item) => terms.add(item))
      movie.seasons.forEach((item) => terms.add(item))
    })

    return Array.from(terms).sort()
  }, [])

  const suggestions = useMemo(() => {
    if (!search.trim()) return []

    const query = search.toLowerCase()

    return allSearchTerms
      .filter(
        (term) =>
          term.toLowerCase().startsWith(query) &&
          !selectedFilters.includes(term)
      )
      .slice(0, 8)
  }, [search, allSearchTerms, selectedFilters])

  const filteredMovies = useMemo(() => {
    const query = search.toLowerCase().trim()

    return movies
      .filter((movie) => {
        const searchableText = [
          movie.title,
          ...movie.moods,
          ...movie.genres.filter((genre) => !hiddenGenres.includes(genre)),
          ...movie.eras,
          ...movie.tags,
          ...movie.seasons,
        ]
          .join(" ")
          .toLowerCase()

        const matchesSearch =
          !query || searchableText.includes(query)

        const matchesFilters = selectedFilters.every((filter) =>
          [
            ...movie.moods,
            ...movie.genres,
            ...movie.eras,
            ...movie.tags,
            ...movie.seasons,
          ].includes(filter)
        )

        return matchesSearch && matchesFilters
      })
      .sort((a, b) => a.title.localeCompare(b.title))
  }, [search, selectedFilters])

  function addFilter(filter: string) {
    if (!selectedFilters.includes(filter)) {
      setSelectedFilters([...selectedFilters, filter])
    }

    setSearch("")
  }

  function removeFilter(filter: string) {
    setSelectedFilters(
      selectedFilters.filter((item) => item !== filter)
    )
  }

  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#29251f]">
      {/* NAV */}
      <nav className="border-b border-[#29251f]/15 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/"
            className="font-serif text-2xl tracking-[0.08em]"
          >
            PHOEBE&apos;S CINEMA
          </a>

          <a
            href="/"
            className="text-xs uppercase tracking-[0.18em] opacity-60 hover:opacity-100"
          >
            ← Home
          </a>
        </div>
      </nav>

      {/* HEADER / SEARCH */}
      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] opacity-50">
            The Collection
          </p>

          <h1 className="font-serif text-5xl leading-none md:text-7xl">
            Find a movie.
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 opacity-65">
            Search by title, mood, season, genre, era, or whatever
            extremely specific feeling you&apos;re trying to find.
          </p>

          {/* SEARCH */}
          <div className="relative mt-10 max-w-3xl">
            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search movies, moods, tags..."
              className="w-full border-b border-[#29251f]/30 bg-transparent px-0 py-4 font-serif text-2xl outline-none placeholder:opacity-30 focus:border-[#29251f]"
            />

            {suggestions.length > 0 && (
              <div className="absolute left-0 right-0 top-full z-10 border border-[#29251f]/15 bg-[#f4efe5] shadow-lg">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => addFilter(suggestion)}
                    className="block w-full border-b border-[#29251f]/10 px-5 py-3 text-left text-sm last:border-0 hover:bg-[#29251f] hover:text-[#f4efe5]"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <p className="mt-3 text-xs opacity-45">
            The buttons below are just a starting point – try searching
  “October,” “Actually Scary,” “Witches,” “New York,” “90s,” or
  other tags you&apos;re looking for.
          </p>

          {/* BROWSE FILTERS */}
          <div className="mt-12">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] opacity-50">
              When do you want to watch?
            </p>

            <div className="flex flex-wrap gap-2">
              {["Autumn", "Winter", "Spring", "Summer"].map(
                (filter) => {
                  const selected = selectedFilters.includes(filter)

                  return (
                    <button
                      key={filter}
                      onClick={() =>
                        selected
                          ? removeFilter(filter)
                          : addFilter(filter)
                      }
                      className={`rounded-full border px-4 py-2 text-sm transition ${
                        selected
                          ? "border-[#29251f] bg-[#29251f] text-[#f4efe5]"
                          : "border-[#29251f]/25 hover:bg-[#29251f] hover:text-[#f4efe5]"
                      }`}
                    >
                      {filter}
                    </button>
                  )
                }
              )}
            </div>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-[0.25em] opacity-50">
              What are you in the mood for?
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Cozy",
                "Romantic",
                "Nostalgic",
                "Spooky",
                "Funny",
                "Emotional",
                "Dark",
                "Whimsical",
                "Melancholy",
                "Magical",
                "Eerie",
                "Gothic",
                "Psychological",
                "Intellectual",
                "Hurts So Good",
                "Inspirational",
                "Adventurous",
                "Suspenseful",
                "Mysterious",
                "Thrilling",
                "Actually Scary",
              ].map((filter) => {
                const selected = selectedFilters.includes(filter)

                return (
                  <button
                    key={filter}
                    onClick={() =>
                      selected
                        ? removeFilter(filter)
                        : addFilter(filter)
                    }
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selected
                        ? "border-[#29251f] bg-[#29251f] text-[#f4efe5]"
                        : "border-[#29251f]/25 hover:bg-[#29251f] hover:text-[#f4efe5]"
                    }`}
                  >
                    {filter}
                  </button>
                )
              })}
            </div>
          </div>

          {/* ACTIVE FILTERS */}
          {selectedFilters.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {selectedFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => removeFilter(filter)}
                  className="rounded-full bg-[#29251f] px-4 py-2 text-xs uppercase tracking-[0.12em] text-[#f4efe5]"
                >
                  {filter} ×
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* MOVIES */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] opacity-45">
              The collection
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 lg:grid-cols-5">
            {filteredMovies.map((movie) => (
              <Link
                  key={movie.title}
                  href={`/movies/${encodeURIComponent(movie.title)}?from=${encodeURIComponent(selectedFilters.join("|"))}`}
                  onClick={() => {
                    sessionStorage.setItem("moviesScrollY", window.scrollY.toString())
                  }}
                  className="group cursor-pointer"
              >

{/* DVD CASE */}
<div className="relative aspect-[2/3]">
  {movie.poster ? (
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
      transform: "perspective(600px) rotateY(7deg) rotateZ(-0.87deg) skewY(0.4deg)",
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
  ) : (
    /* TEMPORARY PLACEHOLDER FOR OTHER MOVIES */
    <div className="flex h-full items-center justify-center rounded-[4px] border border-[#29251f]/25 bg-[#d8d0c2] px-5 text-center shadow-sm">
      <span className="font-serif text-2xl leading-none opacity-30">
        {movie.title}
      </span>
    </div>
  )}
</div>

                {/* MOVIE INFO */}
                <div className="pt-4">
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
          
          {filteredMovies.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-serif text-3xl">
                Nothing here yet.
              </p>

              <p className="mt-3 text-sm opacity-50">
                Try another mood, tag, or movie.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}