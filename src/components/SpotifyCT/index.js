import React from 'react'
import { SpotifyContext } from 'components/SpotifyProvider'
import { useContext } from 'react'
import { useState } from 'react'

const SpotifyCT = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const { 
        spotifyApi, 
        deviceId,
        token,
        player } = useContext(SpotifyContext)

    spotifyApi.getArtistAlbums('0NPc0q4DoKJHjMaScAgneP').then(
        // console.log('Artist albums', data);
        (result) => {
            setIsLoaded(true);
            setItems(result.items);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
    );

    if (error) {
        return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement...</div>;
        } else {
        return (
            <ul>
            {items.map(item => (
                <li key={item.name}>
                {item.name} {item.price}
                </li>
            ))}
            </ul>
        );
    }
}

export default SpotifyCT
