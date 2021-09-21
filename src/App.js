import Carousel from './components/Carousel/Carousel'
import Nav from './components/Nav/Nav';
import './App.css'
import InfoCards from './components/InfoCards/InfoCards';
import PictureBox from './components/PictureBox/PictureBox'
import Testimonal from './components/Testimonal/Testimonal';
import BecomeAMember from './components/Member/BecomeAMember';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Nav />
     <Carousel />
     <BecomeAMember />
     <InfoCards  />
     <PictureBox />
     <Testimonal />
     <Footer />
    </div>
  );
}

export default App;
