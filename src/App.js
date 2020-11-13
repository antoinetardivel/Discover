import './App.css'
// import SpotifyWrapper from 'components/SpotifyWrapper';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from 'pages/HomePage/Home';
import Nav from './components/Menu/index'
import Account from './pages/UserPage/Account'
import Top10 from './pages/Top10Page/Top10'
import Search from './pages/SearchPage/Search'
import Artist from './pages/ArtistPage/Artist'
import Playlist from './pages/PlaylistPage/Playlist'
import SpotifyProvider from './components/SpotifyProvider'
import { useState } from 'react'
import Spotify from './pages/SpotifyPage/Spotify'
import AppContext from './AppContext'

function App() {
  // const { 
  //   spotifyApi, 
  //   deviceId,
  //   token,
  //   player } = useContext(SpotifyContext);


  const [isPlayerOpen, setPlayerOpen] = useState(false);

  const appContextValue = {
    isPlayerOpen,
    setPlayerOpen

  }


  return (
    <AppContext.Provider value={appContextValue}>
      <SpotifyProvider 
              clientId="570fa67e5f0f4fb2b93fbcecbd62615c" 
              redirectUri="http://localhost:3000"
          >
            
      
        <div className="App">
            <Router>
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/Compte' component={Account} />
                  <Route path='/Top10' component={Top10} />
                  <Route path='/Recherche' component={Search} />
                  <Route path='/Artiste' component={Artist} />
                  <Route path='/Playlist' component={Playlist} />
                  <Route path='/Spotify' component={Spotify} />
                </Switch>
              {/* <MenuAudioPlayer/> */}
              <Nav />
            </Router>
        </div>
      </SpotifyProvider>
    </AppContext.Provider>
  );
}

export default App