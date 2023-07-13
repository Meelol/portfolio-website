import React, {useEffect, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import Home from './pages/Home/Home';
//Portfolio Projects Pages
import Blackjack from './pages/BlackjackProject/Blackjack';
import BRCM from './pages/BRCMProject/BRCM';
import Hangman from './pages/AssemblyProject/Hangman';
import ConcentrationMobile from './pages/ConcentrationMobileProject/Concentration';

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
