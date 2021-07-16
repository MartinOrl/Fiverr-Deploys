
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Upload from "./pages/upload/upload";
import ConnectWallet from "./pages/connectWallet/connectWallet";
import FAQ from "./pages/faq/faq";
import Activity from "./pages/activity/activity";


function App() {
  return (
    <div className="App">
      <Header />
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/upload' component={Upload} />
        <Route exact path='/connectWallet' component={ConnectWallet} />
        <Route exact path='/faq' component={FAQ} />
        <Route exact path='/activity' component={Activity}  />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
