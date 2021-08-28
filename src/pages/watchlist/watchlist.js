import React from 'react';
import CustomCard from '../../component/custom-card/custom-card';
import { connect } from 'react-redux';
import '../../styles/watchlist.scss';

function Watchlist(props) {
  const { list } = props;
  return (
    <div className='container'>
      <div className='row'>
        {list.map((movie) => {
          return (
            <div key={movie.imdbID}>
              <div className='col-md-6'>
                <CustomCard isWatchlist={true} movie={movie} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.watchlist,
  };
};

export default connect(mapStateToProps)(Watchlist);
