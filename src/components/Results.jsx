export default function Results({ results }) {
  return (
    <div>
        {results.map((result) => (   
                <div key={result.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title} />
                    <h2>{result.original_title}</h2>
                </div>
    ))}
    </div>
  )
}
