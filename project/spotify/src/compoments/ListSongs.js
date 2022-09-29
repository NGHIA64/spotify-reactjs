import React, { useContext } from "react";
import { Songs } from '../Context';
export default function ListSongs() {
    const {DataSongs} = useContext(Songs)
  return (
    <div className="col-span-2">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th>#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th><i class="fas fa-download"></i></th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <th className="text-center">1</th>
                <th className="text-left">1</th>
                <th className="text-center">1</th>
                <th className="text-center">1</th>
            </tr>
        </tbody>
      </table>
    </div>
  );
}
