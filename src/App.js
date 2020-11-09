import './App.css'
import SpotifyWrapper from 'components/SpotifyWrapper';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';


import Home from 'pages/Home';
import Nav from './components/Menu/index'
import Account from './pages/UserAccount/Account'
import Top10 from './pages/Top10Page/Top10'
import Search from './pages/SearchPage/Search'
import Artist from './pages/ArtistPage/Artist'
import Playlist from './pages/PlaylistPage/Playlist'

function App() {
  return (
    <SpotifyWrapper>
      <div className="App">
          <Router>
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Account' component={Account} />
                <Route path='/Top10' component={Top10} />
                <Route path='/Search' component={Search} />
                <Route path='/Artist' component={Artist} />
                <Route path='/Playlist' component={Playlist} />
              </Switch>
            <Nav />
          </Router>
      </div>
    </SpotifyWrapper>
  );
}

export default App
