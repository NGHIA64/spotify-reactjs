import logo from './logo.svg';
import './App.css';
import Navbar from './compoments/Navbar';
import DetailSong from './compoments/DetailSong';
import ListSongs from './compoments/ListSongs';

function App() {
  return (
    <div>
      <Navbar/>
      <div>
        <DetailSong/>
        <ListSongs/>
      </div>
    </div>
  );
}

export default App;
