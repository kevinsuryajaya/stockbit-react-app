import React, { useEffect, useState } from 'react';
import { fetchData } from '../../services/movies';
import '../../styles/movie-detail.scss';

export default function MovieDetail(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await fetchData(props.match.params.id);
      setData(result);
    })();
  }, [props]);

  return (
    <div className='container-movie'>
      <div className='detail-header'>
        <div>
          <h2>{data.Title}</h2>
          <span>{data.Year}</span>
          <span>&middot;</span>
          <span>{data.Rated}</span>
          <span>&middot;</span>
          <span>{data.Runtime}</span>
        </div>
      </div>
      <div className='detail-container'>
        <div>
          <img src={data.Poster} alt='poster' />
        </div>
        <div className='detail-content'>
          <p>{data.Plot}</p>
          <hr />
          <p>
            <span>Genre</span> {data.Genre}
          </p>
          <hr />
          <p>
            <span>Director</span> {data.Director}
          </p>
          <hr />
          <p>
            <span>Writers</span> {data.Writer}
          </p>
          <hr />
          <p>
            <span>Actors</span> {data.Actors}
          </p>
        </div>
      </div>
    </div>
  );
}
