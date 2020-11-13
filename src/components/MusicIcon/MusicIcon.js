import React, {useState} from 'react'
import Styles from './MusicIcon.module.css'
import PopUpTop10 from 'components/PopUpTop10/PopUpTop10'



const MusicIcon = (prop) => {

    
    const [Popup, updateClass] = useState(Styles.PopUpUnactive);

  const popUpTop10 = () => {

      if (Popup === Styles.PopUpUnactive) {
        updateClass(Styles.PopUpActive)
      } else {
        updateClass(Styles.PopUpUnactive)
      }
      
  }
   
  return (
      <div className={Styles.container}>
          <div onClick={popUpTop10}>
            <div className={Styles.imageContener} id={prop.id}>
                <img src={prop.src} alt="" className={Styles.image} />
            </div>
            <h3 className={Styles.musicName}>{prop.musicName}</h3>
            <h4 className={Styles.artistName}>{prop.artistName}</h4>
          </div>
        
        
        <div id={prop.artistName} className={Popup}><PopUpTop10 src={prop.src} imageArtist={prop.imageArtist} presArtist={prop.presArtist} musicName={prop.musicName} artistName={prop.artistName}  >
            <div onClick={popUpTop10}>
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37">
                    <g   id="Groupe_209" data-name="Groupe 209" transform="translate(-169 -560)">
                        <g id="Groupe_151" data-name="Groupe 151" transform="translate(-139.5 367.5)">
                            <line id="Ligne_38" data-name="Ligne 38" x2="15.622" y2="15.622" transform="translate(319.5 202.5)" fill="none" stroke="#848484" strokeLinecap="round" strokeWidth="1"/>
                            <line id="Ligne_39" data-name="Ligne 39" x1="15.622" y2="15.622" transform="translate(319.5 202.5)" fill="none" stroke="#848484" strokeLinecap="round" strokeWidth="1"/>
                        </g>
                        <g id="Ellipse_79" data-name="Ellipse 79" transform="translate(169 560)" fill="none" stroke="#707070" strokeWidth="1">
                            <circle cx="18.5" cy="18.5" r="18.5" stroke="none"/>
                            <circle cx="18.5" cy="18.5" r="18" fill="none"/>
                        </g>
                    </g>
                </svg>   
            </div>
        
            </PopUpTop10></div>
      </div>
  )
}

export default MusicIcon