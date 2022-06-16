import './App.scss';
import Header from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import RocketOne from './pages/RocketOne/RocketOne';
import RocketTwo from './pages/RocketTwo/RocketTwo'

import {Routes,Route} from 'react-router-dom'
import RocketThree from './pages/RocketThree/RocketThree';


function App() {

  return (
  
  
    <div className='App'>
    <Header/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>   
      <Route path="rocket/:id" element={<RocketOne />}/>
      <Route path="rocket/falconheavy" element={<RocketTwo />}/>
      <Route path="rocket/starship" element={<RocketThree/>}/>

    </Routes>
  
    </div>
  );
}

export default App;
