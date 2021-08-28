import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from './movie-list';

jest.mock('../../services/movies');

describe('movie-list', () => {
  it('should display text in component', async () => {
    await render(<MovieList />);

    const bannerText = screen.getByText('Welcome To Stockbit Movie');
    const subTitleText = screen.getByText('What movie you gonna watch today?');
    const searchbar = screen.getByTestId('search-bar');

    expect(bannerText).toBeInTheDocument();
    expect(subTitleText).toBeInTheDocument();
    expect(searchbar).toBeInTheDocument();
  });
});
