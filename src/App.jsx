import { BrowserRouter, Route, Routes } from "react-router-dom";
import Base from "./components/Base";
import { Home } from './pages';
import About from "./pages/About";
import Login from "./pages/Login";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Career from "./pages/Career";
import Media from "./pages/Media";
import Gallery from "./pages/Gallery";



export default function App() {
  return (
    <>
      <BrowserRouter>
       <ScrollToTop/>
        <Routes>
          <Route path="" element={<Base />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About/>}/>
           <Route path="/project/:projectId" element={<Project/>}/>
            <Route path="/contact" element={<Contact/>}/>
             <Route path="/login" element={<Login/>}/>
             <Route path="/career" element={<Career/>}/>
             <Route path="/media" element={<Media/>}/>
             <Route path="/gallery" element={<Gallery/>}/>
          </Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}