import logo from './logo.svg';
import './App.css';
import Navbar from './compoments/Navbar';
import DetailSong from './compoments/DetailSong';
import ListSongs from './compoments/ListSongs';

function App() {
  return (
    <div className='Ap'>
      <Navbar/>
      <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player'>
        {/* span 1 */}
        <DetailSong/>
        {/* span 2 */}
        <ListSongs/>
      </div>
    </div>
  );
}

export default App;
