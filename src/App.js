
import React from 'react'

import { BrowserRouter, Route, Routes} from "react-router-dom";
import Bodyside2 from './project/Bodyside2';
import Header from './project/Header';
import Input from './project/Input';

import Routing from './project/routing';





const App = () => {
  return (
  
    <BrowserRouter>
          
          <Routing/>
            <Input/>
            <Routes>
                
            <Route path="/" element={<Header/>}/>
            <Route path="/Bodyside2" element={<Bodyside2/>}/>
            </Routes>

    
    </BrowserRouter>
    
  )
};

export default App;
