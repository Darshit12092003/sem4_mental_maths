import React from 'react';
import Home from './Home';
import Signup from './signup';
import TakeQuiz from './takequiz';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './signin';
import Practice from './Practice';
import Level1 from './Level1';
import Level2 from './Level2';
import Logical from './Logical';
import Tricky from './Tricky';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/takequiz' element={<TakeQuiz/>}/>
          <Route path='/practice' element={<Practice/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/level1" element={<Level1 />} />
          <Route path="/level2" element={<Level2 />} />
          <Route path="/logical" element={<Logical />} />
          <Route path="/tricky" element={<Tricky />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
