import { lazy, Suspense } from 'react'
import './App.css';

import { Switch, Route } from 'react-router-dom'

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Fallback from './components/fallback/fallback';
import MissingPage from './pages/404/404';


// import Profile from './pages/profile/profile';
// import NFTItem from './pages/nftItem/nftItem';
// import CreateSingle from './pages/createSingle/createSingle';
// import ProfileSearch from './pages/profileSearch/profileSearch';
// import SellMethod from './pages/sellMethod/sellMethod';
// import UserNFT from './pages/userNFT/userNFT'

const Home = lazy(() => import('./pages/home/home'))
const About = lazy(() => import('./pages/about/about'))
const CollectibleCreate = lazy(() => import('./pages/collectible/collectible'))
const ConnectWallet = lazy(() => import('./pages/connectWallet/connectWallet'))
const Profile = lazy(() => import('./pages/profile/profile'))
const NFTItem = lazy(() => import('./pages/nftItem/nftItem'))
const CreateSingle = lazy(() => import('./pages/createSingle/createSingle'))
const ProfileSearch = lazy(() => import('./pages/profileSearch/profileSearch'))
const SellMethod = lazy(() => import('./pages/sellMethod/sellMethod'))
const UserNFT = lazy(() => import('./pages/userNFT/userNFT'))

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Suspense fallback={<Fallback />} >
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/createCollectible' component={CollectibleCreate} />
            <Route exact path='/connectWallet' component={ConnectWallet} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/nftItem' component={NFTItem}  />
            <Route exact path='/createSingle' component={CreateSingle} />
            <Route exact path='/profileSearch' component={ProfileSearch} />
            <Route exact path='/sellMethod' component={SellMethod} />
            <Route exact path='/userNFT' component={UserNFT} />
            
          </Suspense>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
