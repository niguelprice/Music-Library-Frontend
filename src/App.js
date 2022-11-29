import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic';
import CreateSongForm from './Components/CreateSong/CreateSongForm';

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
    <div>
      <DisplayMusic parentSongs={songs} />
      <CreateSongForm addNewSongProperty={addNewSong} />
    </div>
  );
}

export default App;
