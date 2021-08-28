import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../styles/custom-card.scss';

function CustomCard(props) {
  const { movie, isWatchlist } = props;
  const [modal, setModal] = useState(false);
  const handleShowDialog = () => {
    setModal(!modal);
    console.log('cliked');
  };
  return (
    <div className='card-container'>
      <img
        className='card-image'
        src={movie.Poster}
        onClick={handleShowDialog}
        alt='movies'
      />
      {modal && (
        <dialog className='dialog' open onClick={handleShowDialog}>
          <img
            className='image-modal'
            src={movie.Poster}
            onClick={handleShowDialog}
            alt='modal movies'
          />
        </dialog>
      )}
      <div className='card-content'>
        <h3 className='card-title'>{movie.Title}</h3>
        <p>{movie.Type}</p>
        <p>{movie.Year}</p>
        <div className='card-footer'>
          <div>
            <Link to={{ pathname: `/movie-detail/` + movie.imdbID }}>
              <span>See more details</span>
            </Link>
          </div>
          <div>
            {!isWatchlist && (
              <button
                className='watchlist-button'
                onClick={() => props.handleAddWatchlist(movie)}
              >
                + Add to Watchlist
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    list: state.watchlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddWatchlist: (movie) => dispatch({ type: 'ADD_WATCHLIST', movie }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomCard);
