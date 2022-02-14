import React from 'react';
import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard';
import AddMovie from '../AddMovie/AddMovie';

// const MoviesList = (props.moviesList , props.addMovie) => {
const MoviesList = ({moviesList, filterByName, filterByRate, addMovie}) => {
  return (
    <div className='movies-list'>
      {moviesList
        .filter(
          (el)=>el.name.toLowerCase().includes(filterByName.toLowerCase().trim()) && 
          el.rating>=filterByRate
        ) 
        .map((movie, i) => <MovieCard movie={movie} key={i}/>)}
      <AddMovie  addMovie={addMovie}/>
    </div>
  );
};

export default MoviesList;