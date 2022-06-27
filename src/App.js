
import './App.css';
import Aboutme from './components/Aboutme';
import Brif from './components/Brif';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Work from './components/Work';

function App() {
  return (
    <div className='mainContainer'>
      <div className="container">
        <Brif />
        <Aboutme />
        <Skill />
        <Work />
        <Contact />
      </div>
      <div className='footerDiv'>
        <p>All Right Reserved by Jahidul islam.</p>
      </div>
    </div>
  );
}

export default App;
