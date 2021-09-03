import Carousel from './components/Carousel/Carousel'
import Nav from './components/Nav/Nav';
import './App.css'
import InfoCards from './components/InfoCards/InfoCards';
import PictureBox from './components/PictureBox/PictureBox'
import Testimonal from './components/Testimonal/Testimonal';
import BecomeAMember from './components/Member/BecomeAMember';

function App() {
  return (
    <div className="App">
     <Nav />
     <Carousel />
     <BecomeAMember />
     <InfoCards />
     <PictureBox />
     <Testimonal />
    </div>
  );
}

export default App;
