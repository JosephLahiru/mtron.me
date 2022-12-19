import {Routes, Route} from 'react-router-dom';
import { About } from './components/about';
import Home from './components/home';
import { NoMatch } from './components/nomatch';

function App(){
  return(
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='about' element={<About/>}></Route>
        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
  );
}

export default App;
