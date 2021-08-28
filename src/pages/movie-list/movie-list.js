import React, { useState, useRef, useCallback } from 'react';
import SearchMovie from '../../services/searchMovie';
import CustomCard from '../../component/custom-card/custom-card';
import '../../styles/movie-list.scss';

export default function MovieList() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const { movies, hasMore, loading, error } = SearchMovie(query, pageNumber);

  const observer = useRef();
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  function handleSearch(e) {
    setQuery(e.target.value);
    setPageNumber(1);
  }

  return (
    <div className='container'>
      <div className='list-content'>
        <h2>Welcome To Stockbit Movie</h2>
        <p>What movie you gonna watch today?</p>
        <input
          data-testid='search-bar'
          className='search-bar'
          type='text'
          placeholder='Search'
          value={query}
          onChange={handleSearch}
        />
      </div>
      <div className='row'>
        {movies.map((movie, index) => {
          if (movies.length === index + 1) {
            return (
              <div ref={lastBookElementRef} key={movie.imdbID}>
                <CustomCard isWatchlist={false} movie={movie} />
              </div>
            );
          } else {
            return (
              <div key={movie.imdbID}>
                <div className='col'>
                  <CustomCard isWatchlist={false} movie={movie} />
                </div>
              </div>
            );
          }
        })}
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
      </div>
    </div>
  );
}
