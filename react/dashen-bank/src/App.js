import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Cata from './components/Cata';
import Electronics from './components/Electronics';
import Layout from './components/layout/Layout';
import UsersPro from './components/users/UsersPro';



function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path=":id" element={<UsersPro/>}/>
          <Route path="Cata" >
            <Route index element={<Cata/>}/>
            <Route path="Electronics" element={<Electronics/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>
     
    </>
  
}

export default App;
