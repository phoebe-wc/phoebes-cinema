export type Movie = {
  title: string
  year: number
  seasons: string[]
  moods: string[]
  genres: string[]
  eras: string[]
  tags: string[]
  poster?: string
}

export const movies: Movie[] = [
  // =========================
  // OCTOBER
  // =========================
  {
    title: "Halloweentown",
    year: 1998,
    seasons: ["October", "Autumn"],
    moods: ["Cozy", "Magical", "Funny", "Nostalgic"],
    genres: ["Fantasy", "Family", "Comedy"],
    eras: ["90s"],
    tags: ["Halloween", "Witches", "Small Town", "Girls Rule!"],
    poster: "/images/posters/halloweentown.jpeg",
  },

  {
    title: "Halloweentown II: Kalabar's Revenge",
    year: 2001,
    seasons: ["October", "Autumn"],
    moods: ["Cozy", "Magical", "Funny", "Nostalgic"],
    genres: ["Fantasy", "Family", "Comedy"],
    eras: ["2000s"],
    tags: ["Halloween", "Witches", "Small Town", "Girls Rule!"],
    poster: "/images/posters/halloweentown-2.jpeg",
  },

  {
    title: "Hocus Pocus",
    year: 1993,
    seasons: ["October", "Autumn"],
    moods: ["Cozy", "Magical", "Funny", "Nostalgic"],
    genres: ["Fantasy", "Comedy"],
    eras: ["90s"],
    tags: ["Halloween", "Witches", "Small Town", "Bechdel Test ✓"],
    poster: "/images/posters/hocus-pocus.jpeg",
  },

  {
    title: "Hocus Pocus 2",
    year: 2022,
    seasons: ["October", "Autumn"],
    moods: ["Cozy", "Magical", "Funny", "Nostalgic"],
    genres: ["Fantasy", "Comedy"],
    eras: ["2020s"],
    tags: ["Halloween", "Witches", "Small Town", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/hocus-pocus-2.jpeg",
  },

  {
    title: "Practical Magic",
    year: 1998,
    seasons: ["October", "Autumn"],
    moods: ["Cozy", "Magical", "Romantic"],
    genres: ["Fantasy", "Romance", "Drama"],
    eras: ["90s"],
    tags: ["Halloween", "Witches", "Sisters", "Small Town", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/practical-magic.jpeg",
  },

  {
    title: "Twitches",
    year: 2005,
    seasons: ["October", "Autumn"],
    moods: ["Cozy", "Magical", "Funny", "Nostalgic"],
    genres: ["Fantasy", "Family", "Comedy"],
    eras: ["2000s"],
    tags: ["Halloween", "Witches", "Sisters", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/twitches.jpeg",
  },

  {
    title: "Beetlejuice",
    year: 1988,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Gothic", "Eerie", "Dark", "Funny"],
    genres: ["Fantasy", "Comedy", "Horror"],
    eras: ["80s"],
    tags: ["Halloween", "Supernatural"],
    poster: "/images/posters/beetlejuice.jpeg",
  },

  {
    title: "Coraline",
    year: 2009,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Gothic", "Eerie", "Dark", "Magical"],
    genres: ["Animated", "Fantasy", "Horror"],
    eras: ["2000s"],
    tags: ["Halloween", "Supernatural", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/coraline.jpeg",
  },

  {
    title: "Corpse Bride",
    year: 2005,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Gothic", "Eerie", "Romantic", "Dark"],
    genres: ["Animated", "Fantasy", "Romance"],
    eras: ["2000s"],
    tags: ["Halloween", "Supernatural"],
    poster: "/images/posters/corpse-bride.jpeg",
    
  },

  {
    title: "Donnie Darko",
    year: 2001,
    seasons: ["October", "Autumn"],
    moods: ["Dark", "Eerie", "Psychological", "Melancholy", "Thrilling"],
    genres: ["Thriller", "Sci-Fi", "Drama"],
    eras: ["2000s"],
    tags: ["Halloween", "Cult", "High School", "Supernatural"],
    poster: "/images/posters/donnie-darko.jpeg",
  },

  {
    title: "Edward Scissorhands",
    year: 1990,
    seasons: ["October", "Autumn"],
    moods: ["Gothic", "Eerie", "Romantic", "Melancholy", "Whimsical"],
    genres: ["Fantasy", "Romance", "Drama"],
    eras: ["90s"],
    tags: ["Halloween", "Small Town"],
    poster: "/images/posters/edward-scissorhands.jpeg",
  },

  {
    title: "Frankenweenie",
    year: 2012,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Gothic", "Eerie", "Whimsical"],
    genres: ["Animated", "Fantasy", "Horror"],
    eras: ["2010s"],
    tags: ["Halloween", "Supernatural", "Animals"],
    poster: "/images/posters/frankenweenie.jpeg",
  },

  {
    title: "ParaNorman",
    year: 2012,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Eerie", "Funny", "Whimsical"],
    genres: ["Animated", "Fantasy", "Horror"],
    eras: ["2010s"],
    tags: ["Halloween", "Supernatural"],
    poster: "/images/posters/paranorman.jpeg",
  },

  {
    title: "The Nightmare Before Christmas",
    year: 1993,
    seasons: ["October", "Autumn", "December", "Winter"],
    moods: ["Spooky", "Gothic", "Magical", "Whimsical", "Nostalgic"],
    genres: ["Animated", "Fantasy", "Musical"],
    eras: ["90s"],
    tags: ["Halloween", "Christmas"],
    poster: "/images/posters/nightmare-before-christmas.jpeg",
  },

  {
    title: "The Witches",
    year: 1990,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Eerie", "Dark", "Magical"],
    genres: ["Fantasy", "Family", "Horror"],
    eras: ["90s"],
    tags: ["Halloween", "Witches"],
    poster: "/images/posters/the-witches.jpeg",
  },

  {
    title: "Twilight",
    year: 2008,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Gothic", "Romantic", "Melancholy"],
    genres: ["Fantasy", "Romance", "Drama"],
    eras: ["2000s"],
    tags: ["Halloween", "Vampires", "Pacific Northwest", "High School", "Rainy"],
    poster: "/images/posters/twilight.jpeg",
  },

  {
    title: "Halloween",
    year: 1978,
    seasons: ["October", "Autumn"],
    moods: ["Actually Scary", "Eerie", "Dark", "Thrilling"],
    genres: ["Horror", "Thriller"],
    eras: ["70s"],
    tags: ["Halloween", "Slasher", "Classic"],
    poster: "/images/posters/halloween.jpeg",
  },

  {
    title: "Jennifer's Body",
    year: 2009,
    seasons: ["October", "Autumn"],
    moods: ["Actually Scary", "Dark", "Funny", "Gothic", "Thrilling"],
    genres: ["Horror", "Comedy", "Thriller"],
    eras: ["2000s"],
    tags: ["Halloween", "Supernatural", "High School", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/jennifer's-body.jpeg",
  },

  {
    title: "Scream",
    year: 1996,
    seasons: ["October", "Autumn"],
    moods: ["Actually Scary", "Funny", "Dark", "Thrilling"],
    genres: ["Horror", "Mystery", "Thriller"],
    eras: ["90s"],
    tags: ["Halloween", "Slasher", "High School"],
    poster: "/images/posters/scream.jpeg",
  },

  {
    title: "Scary Movie",
    year: 2000,
    seasons: ["October", "Autumn"],
    moods: ["Funny", "Nostalgic"],
    genres: ["Comedy", "Horror"],
    eras: ["2000s"],
    tags: ["Halloween", "Slasher"],
    poster: "/images/posters/scary-movie.jpeg",
  },

  {
    title: "Sinners",
    year: 2025,
    seasons: ["October", "Autumn"],
    moods: ["Actually Scary", "Dark", "Eerie", "Thrilling"],
    genres: ["Horror", "Thriller", "Drama"],
    eras: ["2020s"],
    tags: ["Halloween", "Vampires"],
    poster: "/images/posters/sinners.jpeg",
  },

  {
    title: "Sleepy Hollow",
    year: 1999,
    seasons: ["October", "Autumn"],
    moods: ["Actually Scary", "Gothic", "Eerie", "Dark", "Thrilling"],
    genres: ["Horror", "Mystery", "Fantasy"],
    eras: ["90s"],
    tags: ["Halloween", "Supernatural", "Period", "Small Town"],
    poster: "/images/posters/sleepy-hollow.jpeg",
  },

  {
    title: "The Craft",
    year: 1996,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Dark", "Eerie", "Magical"],
    genres: ["Horror", "Fantasy", "Drama"],
    eras: ["90s"],
    tags: ["Halloween", "Witches", "High School", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/the-craft.jpeg",
  },

  {
    title: "The Lost Boys",
    year: 1987,
    seasons: ["October", "Autumn"],
    moods: ["Actually Scary", "Gothic", "Dark", "Funny", "Thrilling"],
    genres: ["Horror", "Comedy", "Thriller"],
    eras: ["80s"],
    tags: ["Halloween", "Vampires", "California"],
    poster: "/images/posters/the-lost-boys.jpeg",
  },

  {
    title: "The Others",
    year: 2001,
    seasons: ["October", "Autumn"],
    moods: ["Actually Scary", "Eerie", "Gothic", "Dark", "Thrilling"],
    genres: ["Horror", "Mystery", "Thriller"],
    eras: ["2000s"],
    tags: ["Halloween", "Supernatural", "Period", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/the-others.jpeg",
  },

  {
    title: "The Sixth Sense",
    year: 1999,
    seasons: ["October", "Autumn"],
    moods: ["Actually Scary", "Eerie", "Dark", "Melancholy", "Thrilling"],
    genres: ["Horror", "Mystery", "Thriller"],
    eras: ["90s"],
    tags: ["Halloween", "Supernatural"],
    poster: "/images/posters/the-sixth-sense.jpeg",
  },

  {
    title: "Casper",
    year: 1995,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Cozy", "Funny", "Nostalgic"],
    genres: ["Fantasy", "Family", "Comedy"],
    eras: ["90s"],
    tags: ["Halloween", "Supernatural"],
    poster: "/images/posters/casper.jpeg",
  },

  {
    title: "Ghostbusters",
    year: 1984,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Funny", "Nostalgic"],
    genres: ["Fantasy", "Comedy", "Horror"],
    eras: ["80s"],
    tags: ["Halloween", "Supernatural", "New York"],
    poster: "/images/posters/ghostbusters.jpeg",
  },

  {
    title: "It's the Great Pumpkin, Charlie Brown",
    year: 1966,
    seasons: ["October", "Autumn"],
    moods: ["Cozy", "Spooky", "Nostalgic", "Funny"],
    genres: ["Animated", "Family"],
    eras: ["60s"],
    tags: ["Halloween", "Classic"],
    poster: "/images/posters/it's-the-great-pumpkin-charlie-brown.jpeg",
  },

  {
    title: "Monster House",
    year: 2006,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Funny", "Nostalgic", "Eerie"],
    genres: ["Animated", "Fantasy", "Horror"],
    eras: ["2000s"],
    tags: ["Halloween", "Supernatural"],
    poster: "/images/posters/monster-house.jpeg",
  },

  {
    title: "Scooby-Doo",
    year: 2002,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Funny", "Nostalgic"],
    genres: ["Comedy", "Mystery", "Family"],
    eras: ["2000s"],
    tags: ["Halloween", "Supernatural", "Animals"],
    poster: "/images/posters/scooby-doo.jpeg",
  },

  {
    title: "The Addams Family",
    year: 1991,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Gothic", "Funny", "Nostalgic"],
    genres: ["Comedy", "Fantasy"],
    eras: ["90s"],
    tags: ["Halloween", "Family", "Gothic"],
    poster: "/images/posters/the-addams-family.jpeg",
  },

  {
    title: "The Addams Family Values",
    year: 1993,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Gothic", "Funny", "Nostalgic"],
    genres: ["Comedy", "Fantasy"],
    eras: ["90s"],
    tags: ["Halloween", "Family", "Gothic"],
    poster: "/images/posters/the-addams-family-values.jpeg",
  },

  {
    title: "The Haunted Mansion",
    year: 2003,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Funny", "Nostalgic"],
    genres: ["Fantasy", "Comedy", "Horror"],
    eras: ["2000s"],
    tags: ["Halloween", "Supernatural"],
    poster: "/images/posters/haunted-mansion.jpeg",
  },

  {
    title: "Almost Famous",
    year: 2000,
    seasons: ["September", "October", "Autumn"],
    moods: ["Nostalgic", "Cozy", "Adventurous", "Emotional"],
    genres: ["Drama", "Comedy", "Coming-of-Age"],
    eras: ["2000s"],
    tags: ["Rock & Roll", "Road Trip", "Coming-of-Age", "Mentor Moment"],
    poster: "/images/posters/almost-famous.jpeg",
  },

  {
    title: "Coco",
    year: 2017,
    seasons: ["October", "November", "Autumn"],
    moods: ["Nostalgic", "Magical", "Emotional", "Cozy"],
    genres: ["Animated", "Fantasy", "Family", "Musical"],
    eras: ["2010s"],
    tags: ["Day of the Dead", "Family", "Rock & Roll"],
    poster: "/images/posters/coco.jpeg",
  },

  {
    title: "Matilda",
    year: 1996,
    seasons: ["September", "October", "Autumn"],
    moods: ["Cozy", "Magical", "Nostalgic", "Whimsical"],
    genres: ["Fantasy", "Family", "Comedy"],
    eras: ["90s"],
    tags: ["High School", "Mentor Moment", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/matilda.jpeg",
  },

  {
    title: "October Sky",
    year: 1999,
    seasons: ["October", "Autumn"],
    moods: ["Cozy", "Nostalgic", "Emotional", "Inspirational"],
    genres: ["Drama", "Coming-of-Age"],
    eras: ["90s"],
    tags: ["Small Town", "High School", "Family", "Mentor Moment"],
    poster: "/images/posters/october-sky.jpeg",
  },

  {
    title: "Rushmore",
    year: 1998,
    seasons: ["September", "October", "Autumn"],
    moods: ["Cozy", "Nostalgic", "Funny", "Whimsical"],
    genres: ["Comedy", "Drama", "Coming-of-Age"],
    eras: ["90s"],
    tags: ["High School", "New England", "Mentor Moment"],
    poster: "/images/posters/rushmore.jpeg",
  },

  {
    title: "The Little Vampire",
    year: 2000,
    seasons: ["October", "Autumn"],
    moods: ["Spooky", "Cozy", "Funny", "Nostalgic"],
    genres: ["Fantasy", "Family", "Comedy"],
    eras: ["2000s"],
    tags: ["Halloween", "Vampires"],
    poster: "/images/posters/the-little-vampire.jpeg",
  },

  // =========================
  // NOVEMBER
  // =========================
  {
    title: "Fantastic Mr. Fox",
    year: 2009,
    seasons: ["November", "Autumn"],
    moods: ["Cozy", "Whimsical", "Nostalgic"],
    genres: ["Animated", "Comedy", "Family"],
    eras: ["2000s"],
    tags: ["Animals"],
    poster: "/images/posters/fantastic-mr-fox.jpeg",
  },

  {
    title: "Little Women",
    year: 2019,
    seasons: ["November", "Autumn", "Winter"],
    moods: ["Cozy", "Romantic", "Nostalgic", "Emotional", "Hurts So Good"],
    genres: ["Drama", "Romance", "Period"],
    eras: ["2010s"],
    tags: ["New England", "Family", "Sisters", "Period", "Slice of Life", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/little-women.jpeg",
  },

  {
    title: "The Holdovers",
    year: 2023,
    seasons: ["November", "December", "Autumn", "Winter"],
    moods: ["Cozy", "Melancholy", "Nostalgic", "Emotional", "Hurts So Good"],
    genres: ["Drama", "Comedy"],
    eras: ["2020s"],
    tags: ["New England", "College", "Snowy", "Isolation", "Mentor Moment"],
    poster: "/images/posters/the-holdovers.jpeg",
  },

  {
    title: "The Royal Tenenbaums",
    year: 2001,
    seasons: ["November", "Autumn", "Winter"],
    moods: ["Cozy", "Nostalgic", "Melancholy", "Funny"],
    genres: ["Comedy", "Drama"],
    eras: ["2000s"],
    tags: ["Family", "New York", "Bechdel Test ✓"],
    poster: "/images/posters/the-royal-tenenbaums.jpeg",
  },

  {
    title: "Stepmom",
    year: 1998,
    seasons: ["November", "Autumn", "Winter"],
    moods: ["Cozy", "Emotional", "Nostalgic", "Hurts So Good"],
    genres: ["Drama"],
    eras: ["90s"],
    tags: ["Family", "New York", "Slice of Life", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/stepmom.jpeg",
  },

  {
    title: "Clue",
    year: 1985,
    seasons: ["November", "Autumn"],
    moods: ["Cozy", "Mysterious", "Funny", "Nostalgic"],
    genres: ["Mystery", "Comedy"],
    eras: ["80s"],
    tags: ["Murder Mystery"],
    poster: "/images/posters/clue.jpeg",
  },

  {
    title: "Enola Holmes",
    year: 2020,
    seasons: ["November", "Autumn"],
    moods: ["Cozy", "Mysterious", "Adventurous", "Whimsical"],
    genres: ["Mystery", "Adventure", "Period"],
    eras: ["2020s"],
    tags: ["Detective", "Period", "England", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/enola-holmes.jpeg",
  },

  {
    title: "Knives Out",
    year: 2019,
    seasons: ["November", "Autumn"],
    moods: ["Cozy", "Mysterious", "Funny", "Dark", "Thrilling"],
    genres: ["Mystery", "Comedy", "Thriller"],
    eras: ["2010s"],
    tags: ["Murder Mystery", "Family", "Thanksgiving"],
    poster: "/images/posters/knives-out.jpeg",
  },

  {
    title: "See How They Run",
    year: 2022,
    seasons: ["November", "Autumn"],
    moods: ["Cozy", "Mysterious", "Funny", "Nostalgic"],
    genres: ["Mystery", "Comedy"],
    eras: ["2020s"],
    tags: ["Murder Mystery", "Theater", "Period"],
    poster: "/images/posters/see-how-they-run.jpeg",
  },

  {
    title: "Wake Up Dead Man: A Knives Out Mystery",
    year: 2025,
    seasons: ["November", "Autumn"],
    moods: ["Cozy", "Mysterious", "Dark"],
    genres: ["Mystery", "Crime", "Comedy"],
    eras: ["2020s"],
    tags: ["Murder Mystery", "Detective"],
    poster: "/images/posters/wake-up-dead-man.jpeg",
  },

  {
    title: "Black Swan",
    year: 2010,
    seasons: ["November", "Autumn"],
    moods: ["Dark", "Psychological", "Eerie", "Actually Scary", "Thrilling"],
    genres: ["Thriller", "Drama", "Psychological"],
    eras: ["2010s"],
    tags: ["New York", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/black-swan.jpeg",
  },

  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    seasons: ["November", "Autumn", "Winter"],
    moods: ["Dark", "Psychological", "Romantic", "Melancholy", "Emotional", "Hurts So Good"],
    genres: ["Romance", "Sci-Fi", "Drama"],
    eras: ["2000s"],
    tags: ["New York", "Romance"],
    poster: "/images/posters/eternal-sunshine.jpeg",
  },

  {
    title: "Se7en",
    year: 1995,
    seasons: ["November", "Autumn"],
    moods: ["Dark", "Psychological", "Eerie", "Actually Scary", "Thrilling"],
    genres: ["Crime", "Thriller", "Mystery"],
    eras: ["90s"],
    tags: ["Detective", "Rainy"],
    poster: "/images/posters/se7en.jpeg",
  },

  {
    title: "The Girl with the Dragon Tattoo",
    year: 2011,
    seasons: ["November", "Autumn", "Winter"],
    moods: ["Dark", "Psychological", "Mysterious", "Eerie", "Thrilling"],
    genres: ["Mystery", "Thriller", "Crime"],
    eras: ["2010s"],
    tags: ["Detective", "Snowy", "Isolation", "Girls Rule!"],
    poster: "/images/posters/girl-with-the-dragon-tattoo.jpeg",
  },

  {
    title: "The Prestige",
    year: 2006,
    seasons: ["November", "Autumn"],
    moods: ["Dark", "Psychological", "Mysterious", "Eerie", "Thrilling"],
    genres: ["Mystery", "Thriller", "Drama"],
    eras: ["2000s"],
    tags: ["Period", "Rivalry"],
    poster: "/images/posters/the-prestige.jpeg",
  },

  {
    title: "The Shining",
    year: 1980,
    seasons: ["November", "Autumn", "Winter"],
    moods: ["Dark", "Psychological", "Eerie", "Actually Scary", "Thrilling"],
    genres: ["Horror", "Psychological", "Thriller"],
    eras: ["80s"],
    tags: ["Snowy", "Isolation", "Supernatural"],
    poster: "/images/posters/the-shining.jpeg",
  },

  {
    title: "Friday Night Lights",
    year: 2004,
    seasons: ["November", "Autumn"],
    moods: ["Nostalgic", "Emotional", "Inspirational"],
    genres: ["Drama", "Sports", "Coming-of-Age"],
    eras: ["2000s"],
    tags: ["Sports", "Small Town", "High School", "Mentor Moment"],
    poster: "/images/posters/friday-night-lights.jpeg",
  },

  {
    title: "The Mighty Ducks",
    year: 1992,
    seasons: ["November", "December", "January", "February", "Autumn", "Winter"],
    moods: ["Cozy", "Nostalgic", "Funny", "Inspirational"],
    genres: ["Sports", "Family", "Comedy"],
    eras: ["90s"],
    tags: ["Sports", "Snowy", "Mentor Moment"],
    poster: "/images/posters/the-mighty-ducks.jpeg",
  },

  {
    title: "Remember the Titans",
    year: 2000,
    seasons: ["November", "Autumn"],
    moods: ["Emotional", "Nostalgic", "Inspirational", "Hurts So Good"],
    genres: ["Sports", "Drama"],
    eras: ["2000s"],
    tags: ["Sports", "High School", "Mentor Moment"],
    poster: "/images/posters/remember-the-titans.jpeg",
  },

  {
    title: "Rocky",
    year: 1976,
    seasons: ["November", "Autumn", "Winter"],
    moods: ["Nostalgic", "Emotional", "Inspirational", "Hurts So Good"],
    genres: ["Sports", "Drama"],
    eras: ["70s"],
    tags: ["Sports", "Underdog", "Mentor Moment"],
    poster: "/images/posters/rocky.jpeg",
  },

  {
    title: "Rudy",
    year: 1993,
    seasons: ["November", "Autumn"],
    moods: ["Nostalgic", "Emotional", "Inspirational", "Hurts So Good"],
    genres: ["Sports", "Drama", "Coming-of-Age"],
    eras: ["90s"],
    tags: ["Sports", "College", "Underdog", "Mentor Moment"],
    poster: "/images/posters/rudy.jpeg",
  },

  {
    title: "Autumn in New York",
    year: 2000,
    seasons: ["November", "Autumn"],
    moods: ["Romantic", "Cozy", "Melancholy", "Nostalgic", "Hurts So Good"],
    genres: ["Romance", "Drama"],
    eras: ["2000s"],
    tags: ["New York", "Romance"],
    poster: "/images/posters/autumn-in-new-york.jpeg",
  },

  {
    title: "Pride and Prejudice",
    year: 2005,
    seasons: ["October", "November", "Autumn", "Spring"],
    moods: ["Romantic", "Cozy", "Nostalgic", "Hurts So Good"],
    genres: ["Romance", "Drama", "Period"],
    eras: ["2000s"],
    tags: ["England", "Period", "Sisters", "Rainy", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/pride-and-prejudice.jpeg",
  },

  {
    title: "Serendipity",
    year: 2001,
    seasons: ["November", "Autumn", "December", "Winter"],
    moods: ["Romantic", "Cozy", "Nostalgic"],
    genres: ["Romance", "Comedy"],
    eras: ["2000s"],
    tags: ["New York", "Christmas"],
    poster: "/images/posters/serendipity.jpeg",
  },

  {
    title: "When Harry Met Sally",
    year: 1989,
    seasons: ["September", "October", "November", "December", "Autumn", "Winter"],
    moods: ["Romantic", "Cozy", "Funny", "Nostalgic"],
    genres: ["Romance", "Comedy"],
    eras: ["80s"],
    tags: ["New York", "Friendship", "Slice of Life", "Bechdel Test ✓"],
    poster: "/images/posters/when-harry-met-sally.jpeg",
  },

  {
    title: "While You Were Sleeping",
    year: 1995,
    seasons: ["November", "Autumn", "December", "Winter"],
    moods: ["Romantic", "Cozy", "Funny", "Nostalgic"],
    genres: ["Romance", "Comedy"],
    eras: ["90s"],
    tags: ["Family", "Snowy"],
    poster: "/images/posters/while-you-were-sleeping.jpeg"
  },

  {
    title: "You've Got Mail",
    year: 1998,
    seasons: ["November", "Autumn"],
    moods: ["Romantic", "Cozy", "Nostalgic"],
    genres: ["Romance", "Comedy"],
    eras: ["90s"],
    tags: ["New York", "Bookstores"],
    poster: "/images/posters/you've-got-mail.jpeg"
  },

  {
    title: "Dead Poets Society",
    year: 1989,
    seasons: ["September", "October", "November", "Autumn"],
    moods: ["Intellectual", "Emotional", "Nostalgic", "Melancholy", "Hurts So Good"],
    genres: ["Drama", "Coming-of-Age"],
    eras: ["80s"],
    tags: ["High School", "New England", "Mentor Moment"],
    poster: "/images/posters/dead-poet's-society.jpeg",
  },

  {
    title: "Good Will Hunting",
    year: 1997,
    seasons: ["November", "Autumn", "Winter"],
    moods: ["Intellectual", "Emotional", "Nostalgic", "Melancholy", "Hurts So Good"],
    genres: ["Drama", "Coming-of-Age"],
    eras: ["90s"],
    tags: ["College", "New England", "Mentor Moment"],
    poster: "/images/posters/good-will-hunting.jpeg",
  },

  {
    title: "Mona Lisa Smile",
    year: 2003,
    seasons: ["September", "November", "Autumn"],
    moods: ["Intellectual", "Cozy", "Nostalgic", "Emotional"],
    genres: ["Drama", "Period"],
    eras: ["2000s"],
    tags: ["College", "New England", "Period", "Mentor Moment", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/mona-lisa-smile.jpeg",
  },

  {
    title: "The Perks of Being a Wallflower",
    year: 2012,
    seasons: ["September", "October", "November", "Autumn"],
    moods: ["Nostalgic", "Emotional", "Melancholy", "Hurts So Good"],
    genres: ["Drama", "Coming-of-Age"],
    eras: ["2010s"],
    tags: ["High School", "Friendship", "Rock & Roll", "Slice of Life"],
    poster: "/images/posters/the-perks-of-being-a-wallflower.jpeg",
  },

  {
    title: "The Social Network",
    year: 2010,
    seasons: ["September", "November", "Autumn"],
    moods: ["Intellectual", "Dark"],
    genres: ["Drama", "Biography"],
    eras: ["2010s"],
    tags: ["College"],
    poster: "/images/posters/the-social-network.jpeg",
  },

  {
    title: "A Charlie Brown Thanksgiving",
    year: 1973,
    seasons: ["November", "Autumn"],
    moods: ["Cozy", "Nostalgic", "Funny"],
    genres: ["Animated", "Family"],
    eras: ["70s"],
    tags: ["Thanksgiving", "Classic"],
    poster: "/images/posters/a-charlie-brown-thanksgiving.jpeg",
  },

  {
    title: "Harry Potter and the Sorcerer's Stone",
    year: 2001,
    seasons: ["November", "December", "Autumn", "Winter"],
    moods: ["Cozy", "Magical", "Nostalgic", "Whimsical", "Adventurous"],
    genres: ["Fantasy", "Adventure", "Family"],
    eras: ["2000s"],
    tags: ["Witches", "Christmas"],
    poster: "/images/posters/sorcerer's-stone.jpeg",
  },

  {
    title: "Home for the Holidays",
    year: 1995,
    seasons: ["November", "Autumn"],
    moods: ["Cozy", "Funny", "Emotional", "Nostalgic", "Hurts So Good"],
    genres: ["Comedy", "Drama"],
    eras: ["90s"],
    tags: ["Thanksgiving", "Family", "Slice of Life", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/home-for-the-holidays.jpeg",
  },

  {
    title: "Planes, Trains and Automobiles",
    year: 1987,
    seasons: ["November", "Autumn"],
    moods: ["Cozy", "Funny", "Nostalgic"],
    genres: ["Comedy", "Road Trip"],
    eras: ["80s"],
    tags: ["Thanksgiving", "Travel", "Road Trip"],
    poster: "/images/posters/planes-trains-and-automobiles.jpeg",
  },

  {
    title: "The Family Stone",
    year: 2005,
    seasons: ["November", "December", "Autumn", "Winter"],
    moods: ["Cozy", "Emotional", "Funny", "Nostalgic", "Hurts So Good", "Romantic"],
    genres: ["Comedy", "Drama", "Romance"],
    eras: ["2000s"],
    tags: ["Christmas", "Family", "New England", "Bechdel Test ✓"],
    poster: "/images/posters/the-family-stone.jpeg",
  },

  {
    title: "The Holiday",
    year: 2006,
    seasons: ["November", "December", "Winter"],
    moods: ["Cozy", "Romantic", "Nostalgic"],
    genres: ["Romance", "Comedy"],
    eras: ["2000s"],
    tags: ["Christmas", "England", "California", "Girls Rule!", "Bechdel Test ✓"],
    poster: "/images/posters/the-holiday.jpeg",
  },

  {
    title: "A Charlie Brown Christmas",
    year: 1965,
    seasons: ["December", "Winter"],
    moods: ["Cozy", "Nostalgic", "Funny"],
    genres: ["Animated", "Family"],
    eras: ["60s"],
    tags: ["Christmas", "Classic"],
    poster: "/images/posters/a-charlie-brown-christmas.jpeg",
  },
]