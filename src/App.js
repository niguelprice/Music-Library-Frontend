import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import CreateSongForm from './Components/CreateSong/CreateSongForm';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';








function App() {

  const [songs, setSongs] = useState([]);


  
  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data);
  }

  async function addNewSong(song){
    let tempSong = await axios.post('http://127.0.0.1:8000/api/music/', song);
    setSongs(tempSong.data);
  }



  

  return (
    <div style={{backgroundColor: 'skyblue'}} className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='border-box'>
          <h3 style={{margin: '1em', marginLeft: '20em'}}> Music Library</h3>
          <SearchBar input type='text' value={songs} onChange={(e) => setSongs(e.target.value)} />
          
          <DisplayMusic parentSongs={songs} />
          <button onClick={() => getAllSongs()}> Get All Songs</button>
          </div>
        </div>
        <div className='col-md-12'>
          <div>
          <h3 style={{margin: '1em', marginLeft: '20em'}}>Add a Song</h3>
          <CreateSongForm addNewSongProperty={addNewSong} />
          </div>
        </div>
      </div>
    </div>
      
    
  );
}


export default App;
