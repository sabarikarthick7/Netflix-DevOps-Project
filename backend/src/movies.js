const movies = {
  featured: {
    id: 1,
    title: "Stranger Things",
    description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    genre: "Sci-Fi & Fantasy",
    year: 2024,
    rating: "TV-14",
    duration: "51m",
    bannerImage: "https://picsum.photos/seed/stranger/1280/720",
    logo: null,
    match: 97,
    tags: ["Suspenseful", "Scary", "Exciting"]
  },
  trending: [
    { id: 2, title: "The Crown", genre: "Drama", year: 2023, rating: "TV-MA", image: "https://picsum.photos/seed/crown/300/170", match: 94 },
    { id: 3, title: "Squid Game", genre: "Thriller", year: 2023, rating: "TV-MA", image: "https://picsum.photos/seed/squid/300/170", match: 98 },
    { id: 4, title: "Wednesday", genre: "Comedy", year: 2023, rating: "TV-14", image: "https://picsum.photos/seed/wednesday/300/170", match: 96 },
    { id: 5, title: "The Witcher", genre: "Fantasy", year: 2023, rating: "TV-MA", image: "https://picsum.photos/seed/witcher/300/170", match: 89 },
    { id: 6, title: "Ozark", genre: "Crime Drama", year: 2022, rating: "TV-MA", image: "https://picsum.photos/seed/ozark/300/170", match: 92 },
    { id: 7, title: "Dark", genre: "Sci-Fi", year: 2022, rating: "TV-MA", image: "https://picsum.photos/seed/dark/300/170", match: 95 },
    { id: 8, title: "Money Heist", genre: "Action", year: 2021, rating: "TV-MA", image: "https://picsum.photos/seed/heist/300/170", match: 97 }
  ],
  netflixOriginals: [
    { id: 9, title: "Bridgerton", genre: "Romance", year: 2024, rating: "TV-MA", image: "https://picsum.photos/seed/bridgerton/300/170", match: 88 },
    { id: 10, title: "Narcos", genre: "Crime", year: 2023, rating: "TV-MA", image: "https://picsum.photos/seed/narcos/300/170", match: 96 },
    { id: 11, title: "Black Mirror", genre: "Sci-Fi", year: 2023, rating: "TV-MA", image: "https://picsum.photos/seed/mirror/300/170", match: 90 },
    { id: 12, title: "Cobra Kai", genre: "Action", year: 2024, rating: "TV-14", image: "https://picsum.photos/seed/cobra/300/170", match: 93 },
    { id: 13, title: "Mindhunter", genre: "Thriller", year: 2022, rating: "TV-MA", image: "https://picsum.photos/seed/mind/300/170", match: 95 },
    { id: 14, title: "The OA", genre: "Mystery", year: 2021, rating: "TV-MA", image: "https://picsum.photos/seed/theoa/300/170", match: 87 }
  ],
  actionAdventure: [
    { id: 15, title: "Extraction", genre: "Action", year: 2024, rating: "TV-MA", image: "https://picsum.photos/seed/extract/300/170", match: 84 },
    { id: 16, title: "Red Notice", genre: "Action", year: 2023, rating: "PG-13", image: "https://picsum.photos/seed/rednotice/300/170", match: 79 },
    { id: 17, title: "The Gray Man", genre: "Action", year: 2023, rating: "PG-13", image: "https://picsum.photos/seed/grayman/300/170", match: 82 },
    { id: 18, title: "Army of the Dead", genre: "Horror Action", year: 2022, rating: "TV-MA", image: "https://picsum.photos/seed/army/300/170", match: 75 },
    { id: 19, title: "Project Power", genre: "Sci-Fi Action", year: 2022, rating: "TV-MA", image: "https://picsum.photos/seed/power/300/170", match: 77 },
    { id: 20, title: "6 Underground", genre: "Action", year: 2022, rating: "TV-MA", image: "https://picsum.photos/seed/underground/300/170", match: 72 }
  ],
  comedies: [
    { id: 21, title: "The Umbrella Academy", genre: "Superhero Comedy", year: 2024, rating: "TV-14", image: "https://picsum.photos/seed/umbrella/300/170", match: 91 },
    { id: 22, title: "Emily in Paris", genre: "Romantic Comedy", year: 2024, rating: "TV-MA", image: "https://picsum.photos/seed/emily/300/170", match: 83 },
    { id: 23, title: "Never Have I Ever", genre: "Teen Comedy", year: 2023, rating: "TV-14", image: "https://picsum.photos/seed/never/300/170", match: 86 },
    { id: 24, title: "Space Force", genre: "Comedy", year: 2022, rating: "TV-MA", image: "https://picsum.photos/seed/spaceforce/300/170", match: 78 },
    { id: 25, title: "Schitt's Creek", genre: "Comedy", year: 2022, rating: "TV-14", image: "https://picsum.photos/seed/schitts/300/170", match: 94 },
    { id: 26, title: "Brooklyn Nine-Nine", genre: "Comedy", year: 2022, rating: "TV-14", image: "https://picsum.photos/seed/b99/300/170", match: 95 }
  ],
  documentaries: [
    { id: 27, title: "Our Planet", genre: "Nature", year: 2024, rating: "TV-G", image: "https://picsum.photos/seed/planet/300/170", match: 98 },
    { id: 28, title: "The Last Dance", genre: "Sports", year: 2022, rating: "TV-MA", image: "https://picsum.photos/seed/dance/300/170", match: 99 },
    { id: 29, title: "Making a Murderer", genre: "True Crime", year: 2022, rating: "TV-MA", image: "https://picsum.photos/seed/murderer/300/170", match: 96 },
    { id: 30, title: "Tiger King", genre: "True Crime", year: 2022, rating: "TV-MA", image: "https://picsum.photos/seed/tiger/300/170", match: 88 },
    { id: 31, title: "Seaspiracy", genre: "Environmental", year: 2021, rating: "TV-14", image: "https://picsum.photos/seed/sea/300/170", match: 85 },
    { id: 32, title: "Abstract", genre: "Design", year: 2021, rating: "TV-G", image: "https://picsum.photos/seed/abstract/300/170", match: 92 }
  ]
};

module.exports = movies;
