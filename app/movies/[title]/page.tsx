import { movies } from "@/data/movies"
import Link from "next/link"

export default async function MoviePage({
  params,
  searchParams,
}: {
  params: Promise<{ title: string }>
  searchParams: Promise<{ from?: string }>
}) {
  const { title } = await params
  const { from } = await searchParams

const backHref = from
  ? `/movies?filters=${encodeURIComponent(from)}&restore=scroll`
  : "/movies"
  
const currentFilters = from ? from.split("|").filter(Boolean) : []

function filterHref(filter: string) {
  const combinedFilters = currentFilters.includes(filter)
    ? currentFilters
    : [...currentFilters, filter]

  return `/movies?filters=${encodeURIComponent(combinedFilters.join("|"))}`
}

const decodedTitle = decodeURIComponent(title)
  const movie = movies.find(
    (movie) => movie.title === decodedTitle
  )

  if (!movie) {
    return (
      <main className="min-h-screen bg-[#f4efe5] px-6 py-20 text-[#29251f]">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.2em] opacity-50">
            Phoebe&apos;s Cinema
          </p>

          <h1 className="mt-4 font-serif text-5xl">
            Movie not found.
          </h1>

          <Link
            href={backHref}
            className="mt-8 inline-block text-sm underline underline-offset-4"
          >
            ← Back to the collection
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#f4efe5] text-[#29251f]">
      <nav className="border-b border-[#29251f]/15 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            className="font-serif text-2xl tracking-[0.08em]"
          >
            PHOEBE&apos;S CINEMA
          </Link>

          <Link
            href="/movies"
            className="text-xs uppercase tracking-[0.18em] opacity-60 hover:opacity-100"
          >
            ← Movies
          </Link>
        </div>
      </nav>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-start">
            <div className="relative aspect-[2/3]">
  {/* ANGLED POSTER */}
  <div className="absolute inset-0 scale-[1.16]">
    <img
      src={movie.poster}
      alt={`${movie.title} poster`}
      className="absolute left-[13%] top-[9.1%] h-[82%] w-[81%] object-cover"
      style={{
        transform:
          "perspective(1000px) rotateY(7deg) rotateZ(-0.87deg) skewY(0.4deg)",
        transformOrigin: "right center",
      }}
    />
  </div>

  {/* ANGLED CASE */}
  <img
    src="/images/dvd/dvd-case-angle-no-logo.png"
    alt=""
    className="pointer-events-none absolute inset-0 z-10 h-full w-full scale-[1.16] object-contain"
  />
</div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] opacity-50">
                {movie.year} · {movie.genres.join(" · ")}
              </p>

              <h1 className="mt-4 font-serif text-5xl leading-none md:text-7xl">
                {movie.title}
              </h1>

              {/* WHEN TO WATCH */}
              <div className="mt-10">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-45">
                  When to watch
                </p>

                <div className="flex flex-wrap gap-2">
                  {movie.seasons.map((season) => (
                    <Link
                      key={season}
                      href={filterHref(season)}
                      className="rounded-full border border-[#29251f]/25 px-4 py-2 text-xs uppercase tracking-[0.12em] transition hover:bg-[#29251f] hover:text-[#f4efe5]"
                    >
                      {season}
                    </Link>
                  ))}
                </div>
              </div>

              {/* THE VIBE */}
              <div className="mt-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-45">
                  The vibe
                </p>

                <div className="flex flex-wrap gap-2">
                  {movie.moods.map((mood) => (
                    <Link
                      key={mood}
                      href={filterHref(mood)}
                      className="rounded-full border border-[#29251f]/25 px-4 py-2 text-sm transition hover:bg-[#29251f] hover:text-[#f4efe5]"
                    >
                      {mood}
                    </Link>
                  ))}
                </div>
              </div>

              {/* SPECIFICALLY */}
              <div className="mt-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] opacity-45">
                  Specifically...
                </p>

                <div className="flex flex-wrap gap-2">
                  {[...movie.tags, ...movie.eras].map((item) => (
                    <Link
                      key={item}
                      href={filterHref(item)}
                      className="rounded-full border border-[#29251f]/25 px-4 py-2 text-sm transition hover:bg-[#29251f] hover:text-[#f4efe5]"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={backHref}
                className="mt-12 inline-block text-sm underline underline-offset-4 opacity-70 hover:opacity-100"
              >
                ← Back to the collection
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}