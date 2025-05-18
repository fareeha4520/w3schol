import logo from './logo.svg';
import './App.css';
import './components/header.css';
import './components/language.css';
import './components/hypertex.css';
import './components/styling.css';


import Header from './components/header';
import Footer from './components/footer';
import Lanuage from './components/lanuage';
import Hypertext from './components/hypertex';
import Styling from './components/styling';

function App() {
  return (
    <>
    <Header/>
   <Lanuage/>
   <Hypertext/>
  <Styling/>

<Footer/>
  </>
  );
}

export default App;
