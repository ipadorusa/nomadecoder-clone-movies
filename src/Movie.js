import React from 'react';
import ProTypes from 'prop-types';

function Movie({ id, year, title, summary, poster }) {
  return (
    <div className='movie'>
      <img src={poster} alt={title} title={title} />
      <div className='movie__data'>
        <h3 className='movie__title'>{title}</h3>
        <h5 className='movie__year'>{year}</h5>
        <p className='movie__summary'>{summary}</p>
      </div>
    </div>
  );
}

Movie.ProTypes = {
  id: ProTypes.number.isRequired,
  year: ProTypes.number.isRequired,
  title: ProTypes.string.isRequired,
  summary: ProTypes.string.isRequired,
  poster: ProTypes.string.isRequired,
};
export default Movie;
