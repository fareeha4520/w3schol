
import logo from './logo.svg';
import './App.css';
import './components/header.css';
import './components/language.css';
import './components/hypertex.css';
import './components/styling.css';
import './components/scripting.css';
import './components/python-section.css';
import './components/query.css';
import './components/language-boxes.css';
import './components/login.css';
import './components/code-editor.css';

import Header from './components/header';
import Footer from './components/footer';
import Lanuage from './components/lanuage';
import Hypertext from './components/hypertex';
import Styling from './components/styling';
import Scripting from './components/scripting';
import Python from './components/python-section';
import Query from './components/query';
import LanguageBoxes from './components/language-boxes';
import Login from './components/login';
import Editor from './components/code-editor';



function App() {
  return (
    <>
    <Header/>
   <Lanuage/>
   <Hypertext/>
  <Styling/>
<Scripting/>
<Python/>
<Query/>
<LanguageBoxes/>
<Login/>
<Editor/>

<Footer/>
  </>

  );
}

export default App;
