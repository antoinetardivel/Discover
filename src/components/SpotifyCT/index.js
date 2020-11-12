// import React from 'react'
// import { SpotifyContext } from 'components/SpotifyProvider'
// import { useContext } from 'react'
// import { useState } from 'react'

// const SpotifyCT = () => {

//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);

//     const { 
//         spotifyApi, 
//         deviceId,
//         token,
//         player } = useContext(SpotifyContext)

//     spotifyApi.getArtistAlbums('0NPc0q4DoKJHjMaScAgneP').then(
//         // console.log('Artist albums', data);
//         (result) => {
//             setIsLoaded(true);
//             setItems(result.items);
//         },
//         (error) => {
//             setIsLoaded(true);
//             setError(error);
//         }
//     );

//     if (error) {
//         return <div>Erreur : {error.message}</div>;
//         } else if (!isLoaded) {
//             return <div>Chargement...</div>;
//         } else {
//         return (
//             <ul>
//             {items.map(item => (
//                 <li key={item.name}>
//                 {item.name} {item.price}
//                 </li>
//             ))}
//             </ul>
//         );
//     }
// }

// export default SpotifyCT




// import React, { useContext, useEffect, useState } from 'react'
// import { SpotifyContext } from 'components/SpotifyProvider'
// /* 
// {
//   key: 'value',
// }
// const liste = [
//   'value1',
//   'value2'
// ]
// liste[0] // => 'value1'
// liste[&] // => 'value 2'
// */

// const SpotifyCT = () => {
//   const { spotifyApi } = useContext(SpotifyContext)
//   const [tracks, setTracks] = useState([]);

//   useEffect(() => {
//     const loadTracks = async () => {
//       const results = await spotifyApi.searchTracks('vulfpeck', { limit: 5 })
//       setTracks(results.tracks.items)
//     }
//     loadTracks();
//   }, [spotifyApi])

//   return (
//     <div>
//       Tracks
//       <ul>
//         {tracks.map((track) => {
//           return (
//             <ul>
//               <h3>{track.name}</h3>
//               <h4>{track.album.name}</h4>
//               <img
//                 src={track.album.images[1].url}
//                 alt={`Cover of ${track.album.name}`}
//               />
//             </ul>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// export default SpotifyCT


import React, { useContext, useEffect, useState } from 'react'
import { SpotifyContext } from 'components/SpotifyProvider'

const SpotifyCT = () => {
  const { spotifyApi } = useContext(SpotifyContext)
  const [Albums, setAlbums] = useState([]);

  useEffect(() => {
    const loadAlbums = async () => {
      const results = await spotifyApi.getArtistAlbums('0NPc0q4DoKJHjMaScAgneP')
      setAlbums(results.items)
      console.log("coucou", results.items)
    }
    loadAlbums();
  }, [spotifyApi])

  return (
    <div>
      Albums
      <ul>
        {Albums.map((Album) => {
          return (
            <ul>
                <h3>{Album.name}</h3>
                <h4>{Album.artists.name}</h4>

                <ul>
                    {Album.artists.map((Artist) => {
                    return (
                        <ul>
                        <h3>{Artist.name} </h3>
                        </ul>
                    )
                    })}
                </ul>
              
                <img src={Album.images[0].url} alt={`Cover of ${Album.name}`}/>
            </ul>
          )
        })}
      </ul>
    </div>
  )
}

export default SpotifyCT
