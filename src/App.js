import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic/DisplayMusic';
import CreateSongForm from './Components/CreateSong/CreateSongForm';
import './App.css';

function App() {

  const [songs, setSongs] = useState([{title: 'Codeine Crazy', artist: 'Future', album: 'Moster', release_date: '2014-10-28', genre: 'Rap'}])

  useEffect(() => {
    getAllSongs();
  }, []);

  async function getAllSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    console.log(response.data);
    setSongs(response.data)
  }


  function addNewSong(song){
    let tempSong = [...songs, song];
    setSongs(tempSong)
  }





  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='border-box'>
          <h3 style={{margin: '1em', marginLeft: '20em'}}> Music Library</h3>
          <DisplayMusic parentSongs={songs} />
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
