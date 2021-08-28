import React from 'react';
import { act, render, screen } from '@testing-library/react';
import MovieDetail from './movie-detail';
import { fetchData } from '../../services/movies';

jest.mock('../../services/movies');

describe('movie-detail', () => {
  const props = {
    match: { params: { id: 'id' } },
  };

  const movieResult = {
    Title: 'title',
    Year: 'year',
    Rated: 'rated',
    Runtime: 'runtime',
    Poster: 'poster',
    Plot: 'plot',
    Genre: 'genre',
    Director: 'director',
    Writer: 'writer',
    Actors: 'actor',
  };

  it('should call fetchData with expected param id and render movie detail text', async () => {
    fetchData.mockResolvedValue(movieResult);
    await render(<MovieDetail {...props} />);

    await act(async () => {
      const genreText = screen.getByText('Genre');
      const directorText = screen.getByText('Director');
      const writerText = screen.getByText('Writers');
      const actorText = screen.getByText('Actors');

      expect(genreText).toBeInTheDocument();
      expect(directorText).toBeInTheDocument();
      expect(writerText).toBeInTheDocument();
      expect(actorText).toBeInTheDocument();
      expect(fetchData).toBeCalledWith(props.match.params.id);
    });
  });
});
