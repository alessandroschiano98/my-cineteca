export const personKey = name => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const actorAliases = new Map([['russelcrowe', 'Russell Crowe']]);
const directorGroups = new Map([
  ['Anthony & Joe Russo', ['Anthony Russo', 'Joe Russo']],
  ['Bobby & Peter Farrelly', ['Bobby Farrelly', 'Peter Farrelly']],
]);
export function movieActors(movie) {
  const names = movie.actors.flatMap(name => name.split(',')).map(name => name.trim()).filter(Boolean).map(name => actorAliases.get(personKey(name)) || name);
  return [...new Map(names.map(name => [personKey(name), name])).values()];
}
export function movieDirectors(movie) {
  return directorGroups.get(movie.director) || movie.director.split(/\s*[,&]\s*/).map(name => name.trim()).filter(Boolean);
}
export function indexPeople(movies, namesForMovie) {
  const index = new Map();
  for (const movie of movies) {
    for (const name of namesForMovie(movie)) {
      const key = personKey(name);
      if (!index.has(key)) index.set(key, { key, name, movies: [] });
      const person = index.get(key);
      if (!person.movies.some(item => item.id === movie.id)) person.movies.push(movie);
    }
  }
  return [...index.values()].sort((a, b) => b.movies.length - a.movies.length || a.name.localeCompare(b.name, 'it'));
}
export function rankGenres(movies) {
  const counts = new Map();
  for (const movie of movies) for (const genre of new Set(movie.genres)) counts.set(genre, (counts.get(genre) || 0) + 1);
  return [...counts].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function isVoiceRole(movie, name) {
  return (movie.voiceActors || []).some(voice => personKey(voice) === personKey(name));
}
export function movieOnScreenActors(movie) {
  return movieActors(movie).filter(name => !isVoiceRole(movie, name));
}
