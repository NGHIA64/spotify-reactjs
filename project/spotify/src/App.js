import logo from './logo.svg';
import './App.css';
import Navbar from './compoments/Navbar';
import DetailSong from './compoments/DetailSong';
import ListSongs from './compoments/ListSongs';
import DataSongs from './data/songs.json'
import { Songs } from './Context';
import Playing from './compoments/Playing';
import { useState } from 'react';
function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    setSong(song)
  }
  return (
    <div className='App'>
      <Songs.Provider value={{ DataSongs, song , handleSetSong}}>
      <Navbar/>
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden'>
        {/* span 1 */}
        <DetailSong/>
        {/* span 2 */}
        <ListSongs/>
      </div>
      <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
