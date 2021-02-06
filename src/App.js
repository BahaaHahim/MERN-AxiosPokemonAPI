import axios from 'axios';
import  React, { useState, useEffect } from  'react';

import './App.css';

function App() {
  const [pokemon , setpokemon] = useState([]);

const showPoke =()=>{
  axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
  .then(response=>{setpokemon(response.data.results)})};

  return (
    <div className="App">
      <input type="submit" onClick={showPoke} value="Fetch Poke" />

    {
      pokemon.length>0 && pokemon.map((poke, index) =>{
        return(<div key= {index}> {poke.name} </div>)
          })
    }
      
    </div>
  );
}

export default App;
