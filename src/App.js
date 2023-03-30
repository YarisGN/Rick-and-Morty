import './App.css';
import React, {useEffect, useState} from 'react';
// componentes
import Narbar from './components/Navbar';
import Characters from './components/Characters';


function App() {

  const [characters, setCharacters] = useState([]);
  const {setInfo} = useState({});
  const initialUrl ="https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => { 
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
    };

    useEffect(() => {
      fetchCharacters(initialUrl);
    });
  

  return (
    <>
      <Narbar brand='Rick and Morty App'/>
    
      <div className='container mt-5'>
        <Characters characters={characters} />
      </div>
    </>
  );
}

export default App;

/* https://www.youtube.com/watch?v=BTJtTkoyprc */
