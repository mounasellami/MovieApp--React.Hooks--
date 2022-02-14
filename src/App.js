import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar'
import {moviesData} from './Components/MoviesData';
import MoviesList from './Components/MoviesList/MoviesList';
import Footer from './Components/Footer/Footer';
import BackgroundVideo from "./res/video/Trailer-The Pursuit of Happyness.mp4";

function App() {
  const [moviesList, setMoviesList]=useState(moviesData);
  const [filterByName, setFilterByName]=useState('');
  const [filterByRate, setFilterByRate]=useState(1);

  const addMovie = (newMovie) => setMoviesList([...moviesList, newMovie])
  return (
    <div className="App"> 
      <NavBar setFilterByName={setFilterByName}   
        filterByRate={filterByRate}   setFilterByRate={setFilterByRate}
        />
        <div className="App-introduction">
            {/*autoPlay: automaticallyStartVideo   loop: infiniteLoop  muted: turnsOffSound */}
          <video id="background-video" autoPlay   loop   muted >
            <source src={BackgroundVideo} alt="background video" type="video/mp4"/>
          </video> 
        
          <div style={{padding:'3% 0 0 4%'}}>
            <h1 style={{color:'#f6f19c'}}>The Pursuit Of <br/>Happyness</h1>
            <p>A struggling salesman takes custody <br/> of his son as he's poised to begin a <br/>life-changing professional career.</p>
            <div style={{color:'white', display:'flex', marginTop:'1.5vw', lineHeight:'88%', position:'relative'}}>
              <button>Reading</button>
              <button>More informations</button>
            </div>
          </div>
        </div>

        <div style={{display:'flex', justifyContent:'center'}} >
         <MoviesList
           moviesList={moviesList} 
           filterByName={filterByName} 
           filterByRate={filterByRate} 
           addMovie={addMovie}
         />
       </div>
      <Footer />
    </div>
  );
}

export default App;
// *Create the following components:
// MovieCard
// MovieList
// Filter ( title, rate)
// *Every movie should have the following attributes: title, description, posterURL, rating
// *The user should be:
// Able to add a new movie.
// Filter the movies with title/rating.