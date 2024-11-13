export default function MovieDisplay({ movie }) {
  // Check if movie is null or undefined
  if (!movie) {
    return <h1>No Movie to Display</h1>; // Return loading JSX if movie is not available
  }

  return (
    <>
      <h1>{movie.Title}</h1>
      <h2>{movie.Genre}</h2>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Year}</h2>
    </>
  );
}