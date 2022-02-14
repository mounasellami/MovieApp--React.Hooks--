import React from 'react';
import './MovieCard.css';
import Rate from '../Rate';

// const MovieCard = (props.movie){             (props.movie.image) (props.movie.name) (props.movie.dat)  ...type, ...rating, ..description
const MovieCard = ({movie: {image, name, date, type, rating, description}}) => {
  return (
    <div className='card' style={{display:'flex'}}>
      <div className='card-img'>
          <img src={image} alt='poster'/>
      </div>
      <div className='card-intro'>
          <h2>{name}</h2>
          <div className='card-intro-details' style={{display:'flex', listStyleType:'none'}}>
            <ul>
              <li>{date}</li>
              <li>||</li>
              <li>{type}</li>
              </ul>
          </div>
          <div className='card-intro-rating'>
            {/* <p>{rating}</p> */}
            <Rate rating={rating} />
          </div>
          <div className='card-intro-review'>
            <p>{description}</p>
            <a href="https://www.imdb.com/?ref_=nv_home"> Read more</a>
          </div>
          <div className='card-intro-button'>
            <a href="https://www.imdb.com/?ref_=nv_home">Watch trailer</a>
          </div>
      </div>
    </div>
  );
};

export default MovieCard;
