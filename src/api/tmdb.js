export async function fetchPoster(title, year) {
    const apiKey = import.meta.env.VITE_TMDB_KEY;
  
    const query = encodeURIComponent(`${title} ${year}`);
  
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      if (!data.results || data.results.length === 0) return null;
  
      const posterPath = data.results[0].poster_path;
  
      return posterPath
        ? `https://image.tmdb.org/t/p/w500${posterPath}`
        : null;
  
    } catch (error) {
      console.error("Errore caricamento poster:", error);
      return null;
    }
  }
  