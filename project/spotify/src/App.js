import logo from './logo.svg';
import './App.css';
import Navbar from './compoments/Navbar';
import DetailSong from './compoments/DetailSong';
import ListSongs from './compoments/ListSongs';
import DataSongs from './data/songs.json'
import { Songs } from './Context';
function App() {
  return (
    <div className='App'>
      <Songs.Provider value={{ DataSongs }}>
      <Navbar/>
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player'>
        {/* span 1 */}
        <DetailSong/>
        {/* span 2 */}
        <ListSongs/>
      </div>
      </Songs.Provider>
    </div>
  );
}

export default App;
