export function recommendationPool(movies, genre = '') {
  return movies.filter(movie => !genre || movie.genres.includes(genre));
}
export function chooseRecommendation(movies, genre = '', previousId = null, random = Math.random) {
  const pool = recommendationPool(movies, genre);
  const alternatives = pool.filter(movie => movie.id !== previousId);
  const choices = alternatives.length ? alternatives : pool;
  return choices.length ? choices[Math.floor(random() * choices.length)] : null;
}
