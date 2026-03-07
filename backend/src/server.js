const express = require('express');
const cors = require('cors');
const movies = require('./movies');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Netflix Clone API is running', timestamp: new Date().toISOString() });
});

// Get all movies data
app.get('/api/movies', (req, res) => {
  res.json(movies);
});

// Get featured movie (banner)
app.get('/api/movies/featured', (req, res) => {
  res.json(movies.featured);
});

// Get movies by category
app.get('/api/movies/:category', (req, res) => {
  const { category } = req.params;
  if (movies[category]) {
    res.json(movies[category]);
  } else {
    res.status(404).json({ error: `Category '${category}' not found` });
  }
});

// Get single movie by id
app.get('/api/movie/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const allMovies = [
    movies.featured,
    ...movies.trending,
    ...movies.netflixOriginals,
    ...movies.actionAdventure,
    ...movies.comedies,
    ...movies.documentaries
  ];
  const movie = allMovies.find(m => m.id === id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

app.listen(PORT, () => {
  console.log(`\n🎬 Netflix Clone Backend API`);
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📡 API endpoints:`);
  console.log(`   GET /health`);
  console.log(`   GET /api/movies`);
  console.log(`   GET /api/movies/featured`);
  console.log(`   GET /api/movies/:category\n`);
});
