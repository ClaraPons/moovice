import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header.js"

import Home from "./pages/Home.js"
import Weekly from "./pages/Weekly.js"
import Popular from "./pages/Popular.js"
import Favorites from "./pages/Favorites.js"
import NotFound from "./pages/NotFound.js"

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/weekly" element={<Weekly/>}/>
            <Route path="/popular" element={<Popular />} />
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
