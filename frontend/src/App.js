import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import MovieRow from './components/MovieRow';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  const [moviesData, setMoviesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/movies`);
        if (!response.ok) throw new Error('API request failed');
        const data = await response.json();
        setMoviesData(data);
      } catch (err) {
        console.error('API Error, using fallback data:', err);
        // Fallback static data so UI always works
        setMoviesData(getFallbackData());
      } finally {
        setTimeout(() => setLoading(false), 1500);
      }
    };
    fetchMovies();
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <div className="app">
      <Navbar />
      <Banner featured={moviesData?.featured} />
      <div className="movie-rows">
        <MovieRow title="🔥 Trending Now" movies={moviesData?.trending || []} />
        <MovieRow title="Netflix Originals" movies={moviesData?.netflixOriginals || []} isLarge />
        <MovieRow title="Action & Adventure" movies={moviesData?.actionAdventure || []} />
        <MovieRow title="Comedies" movies={moviesData?.comedies || []} />
        <MovieRow title="Documentaries" movies={moviesData?.documentaries || []} />
      </div>
      <Footer />
    </div>
  );
}

function getFallbackData() {
  const makeMovies = (seeds) => seeds.map((s, i) => ({
    id: i + 100,
    title: s.title,
    genre: s.genre,
    year: 2024,
    rating: 'TV-MA',
    image: `https://picsum.photos/seed/${s.seed}/300/170`,
    match: Math.floor(Math.random() * 20) + 80
  }));

  return {
    featured: {
      id: 1, title: "Stranger Things", description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments and terrifying supernatural forces.",
      genre: "Sci-Fi & Fantasy", year: 2024, rating: "TV-14", match: 97,
      tags: ["Suspenseful", "Scary", "Exciting"],
      bannerImage: "https://picsum.photos/seed/stranger/1280/720"
    },
    trending: makeMovies([
      {title:"The Crown",genre:"Drama",seed:"crown"},{title:"Squid Game",genre:"Thriller",seed:"squid"},
      {title:"Wednesday",genre:"Comedy",seed:"wednesday"},{title:"The Witcher",genre:"Fantasy",seed:"witcher"},
      {title:"Ozark",genre:"Crime",seed:"ozark"},{title:"Dark",genre:"Sci-Fi",seed:"dark"},
      {title:"Money Heist",genre:"Action",seed:"heist"}
    ]),
    netflixOriginals: makeMovies([
      {title:"Bridgerton",genre:"Romance",seed:"bridgerton"},{title:"Narcos",genre:"Crime",seed:"narcos"},
      {title:"Black Mirror",genre:"Sci-Fi",seed:"mirror"},{title:"Cobra Kai",genre:"Action",seed:"cobra"},
      {title:"Mindhunter",genre:"Thriller",seed:"mind"},{title:"The OA",genre:"Mystery",seed:"theoa"}
    ]),
    actionAdventure: makeMovies([
      {title:"Extraction",genre:"Action",seed:"extract"},{title:"Red Notice",genre:"Comedy",seed:"rednotice"},
      {title:"The Gray Man",genre:"Action",seed:"grayman"},{title:"Army of Dead",genre:"Horror",seed:"army"},
      {title:"Project Power",genre:"Sci-Fi",seed:"power"},{title:"6 Underground",genre:"Action",seed:"underground"}
    ]),
    comedies: makeMovies([
      {title:"Umbrella Academy",genre:"Superhero",seed:"umbrella"},{title:"Emily in Paris",genre:"Romance",seed:"emily"},
      {title:"Never Have I Ever",genre:"Teen",seed:"never"},{title:"Space Force",genre:"Comedy",seed:"spaceforce"},
      {title:"Schitt's Creek",genre:"Comedy",seed:"schitts"},{title:"Brooklyn Nine-Nine",genre:"Comedy",seed:"b99"}
    ]),
    documentaries: makeMovies([
      {title:"Our Planet",genre:"Nature",seed:"planet"},{title:"The Last Dance",genre:"Sports",seed:"dance"},
      {title:"Making a Murderer",genre:"Crime",seed:"murderer"},{title:"Tiger King",genre:"Crime",seed:"tiger"},
      {title:"Seaspiracy",genre:"Environment",seed:"sea"},{title:"Abstract",genre:"Design",seed:"abstract"}
    ])
  };
}

export default App;
