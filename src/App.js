import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DisplayMusic from './Components/DisplayMusic';

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



  return (
    <div>
      <DisplayMusic parentSongs={songs} />
      
    </div>
  );
}

export default App;
