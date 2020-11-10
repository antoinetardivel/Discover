import React from 'react';

function Artist(props) {
    return(
        <div>
            <h1>Artiste</h1>
            {console.log(props.location.aboutProps)}
            <h3>Nom de l'artist : {props.location.aboutProps.artistName}</h3>
            <p>Image de l'artist</p>
            <img src={props.location.aboutProps.imageArtist} />
        </div>
    );
  }

export default Artist