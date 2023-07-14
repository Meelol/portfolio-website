import React, {useEffect, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
//Portfolio Projects Pages
import Blackjack from './pages/ProjectPages/BlackjackProject/Blackjack';
import BRCM from './pages/ProjectPages/BRCMProject/BRCM';
import Hangman from './pages/ProjectPages/AssemblyProject/Hangman';
import ConcentrationMobile from './pages/ProjectPages/ConcentrationMobileProject/Concentration';

function App() {
  return(
  <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/blackjack-python" element={<Blackjack />}/>
      <Route path="/java-project" element={<BRCM />}/>
      <Route path="/hangman-assembly" element={<Hangman />}/>
      <Route path="/concentration-mobile" element={<ConcentrationMobile />}/>
    </Routes>
  </>
  );
}

export default App;
