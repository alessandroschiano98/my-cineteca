export async function fetchPoster(title) {
    const apiKey = import.meta.env.VITE_TMDB_KEY;
  
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}`;
  
    try {
      const res = await fetch(url);
      const data = await res.json();
  
      if (!data.results || data.results.length === 0) {
        return null; // poster non trovato
      }
  
      return `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
    } catch (error) {
      console.error("Errore caricamento poster:", error);
      return null;
    }
  }
  