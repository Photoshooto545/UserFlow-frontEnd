import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from './Pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import NotfoundPage from './Pages/NotfoundPage/NotfoundPage'
import Thanks from './Components/Thanku_popup/Thanku';
import Carousel from './Components/ImageSlider/carousel'
import Version from './Components/VersionSelect_popup/version_popup';
import Popup3 from './Components/Payment_popup/popup3';
import Photo_select from './Components/photo_selection/photo';
import Popup_d from './Components/Deactivation_popup/popup_a';
import Thanks_popup from './Components/Thanks_popup/Thanks'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/slider" component={Carousel} />
        <Route component={NotfoundPage} />
      </Switch>
      <Footer />
      {/* <Thanks /> */}
      <Version />
      <Popup3/>
      <Photo_select/>
      <Popup_d/>
      <Thanks_popup/>
    </Router>
  );
}

export default App;