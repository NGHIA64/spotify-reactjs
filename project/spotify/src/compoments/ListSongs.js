import React, { useContext, useEffect, useState } from "react";
import { Songs } from '../Context';
export default function ListSongs() {
    const {DataSongs, handleSetSong, song} = useContext(Songs)
    const [idSong, setidSong] = useState(0)
    const handlePlaySong = (idSong) => {
        setidSong(idSong)
        handleSetSong(idSong)
    }
    useEffect(() => {
        if(!song){
            setidSong(DataSongs[0])
        }else{
            setidSong(song.id)
        }
        
    },[song])
  return (
    <div className="col-span-2 overflow-y-scroll">
      <table className="table-auto w-full ">
        <thead className="text-white h-12">
          <tr>
            <th>#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th><i class="fas fa-download"></i></th>
          </tr>
        </thead>
        <tbody >
            {DataSongs.map((song, index) => 
            <tr key={index} className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${idSong === song.id && 'bg-slate-600 text-teal-400 '}`} onClick={() => handlePlaySong(song.id)}>
            <th className="text-center">{index + 1}</th>
            <th className="text-left">{song.name}</th>
            <th className="text-center">{song.author}</th>
            <th className="text-center"><a href={song.url} ><i className="fas fa-download"></i></a></th>
        </tr>
        )}
            
        </tbody>
      </table>
    </div>
  );
}
