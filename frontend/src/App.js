import {Routes, Route} from 'react-router-dom';
import { About } from './components/about';
import { Construction } from './components/construction';
import Home from './components/home';
import NavBar from './components/navbar';
import { NoMatch } from './components/nomatch';

function App(){
  return(
    <>
    <NavBar/>
      <Routes>
      
        <Route path='/' element={<Construction/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    </>
  );
}

export default App;
