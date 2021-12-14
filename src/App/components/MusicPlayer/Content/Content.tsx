import React, { FC, useEffect, useState } from "react";
import "./style.css"
import { loadSongs } from "../../../../api";

const Content: FC = () => {
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const result = await loadSongs();
      if (result && result.status === 200) {
        setList(result.data);
      }
    };
    fetchSongs();
  }, []);

  console.log(list);

  return (
    <div id="content">
      <table>
        <thead>
          <tr>
            <td />
            <td>Title</td>
            <td>Artist</td>
          </tr>
        </thead>
        <tbody>
            {list && list.map((song:any) => {
                const {id, name} = song
                const artist = song.artist_name
                return (
                    <tr key={id}>
                    <td>
                      like
                      song
                    </td>
                    <td>{name}</td>
                    <td>{artist}</td>
                  </tr>
  
                )
            })

            }

        </tbody>
      </table>
    </div>
  );
};

export default Content;
