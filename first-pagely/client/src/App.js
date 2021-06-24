import { lazy, Suspense } from 'react'
import './App.css';

import { Switch, Route } from 'react-router-dom'

import Footer from './components/footer/footer';
import Header from './components/header/header';
import Fallback from './components/fallback/fallback';
// import MissingPage from './pages/404/404';


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
      <Suspense fallback={<Fallback />} >
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/createCollectible' component={CollectibleCreate} />
            <Route path='/connectWallet' component={ConnectWallet} />
            <Route path='/profile' component={Profile} />
            <Route path='/nftItem' component={NFTItem}  />
            <Route path='/nft/:id' component={NFTItem} />
            <Route path='/createSingle' component={CreateSingle} />
            <Route path='/profileSearch' component={ProfileSearch} />
            <Route path='/sellMethod' component={SellMethod} />
            <Route path='/userNFT' component={UserNFT} />
          </Switch>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
