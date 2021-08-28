import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './component/navbar/navbar';
import MovieList from './pages/movie-list/movie-list';
import MovieDetail from './pages/movie-detail/movie-detail';
import Watchlist from './pages/watchlist/watchlist';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/watchlist/' component={Watchlist} />
        <Route path='/movie-detail/:id' component={MovieDetail} />
        <Route exact path='/' component={MovieList} />
      </Switch>
    </Router>
  );
}
