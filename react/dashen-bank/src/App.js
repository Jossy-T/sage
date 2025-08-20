import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Contact from './pages/Contact';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Cata from './components/Cata';
import Electronics from './components/Electronics';
import Layout from './components/layout/Layout';
import UsersPro from './components/users/UsersPro';
import { useState } from 'react';



function App() {
  const[country,setCountry]=useState([])
  function getcountry(){
    fetch("https://restcountries.com/v3.1/all")
    .then((res)=>res.jeson())
    .then((data)=>setCountry(data))
  }
  const[searchs,setSearchs]=useState("")
  function search(name){
    fetch("https://restcountries.com/v3.1/name/"+name)
    .then((res)=>
      {
        if(res.status==200)
      return res.json()
        else return <h4>country not found</h4>
      })
      .then((data)=>setCountry(data))
  }


  return <>
    <input type='search' placeholder='search country' value={searchs}
    onChange={(e)=>setSearchs(e.target.value)}/>
    <button onClick={()=>search(searchs)}>search</button>
    <button onClick={()=>getcountry()}>click to see all country</button>

    <div style={{display:"flex", gap:"20px",maxWidth:"100%",flexWrap:"wrap",padding:"7px"}}>
      {country.map((country)=>(
      <div>
        <img src={country.flags.png} alt={country.flags.png} width="100%"/>
        <p>common Name: {country.name.common} </p>
        <p>Official name: {country.name.official}</p>
      </div>

      ))}
    </div>
     
    </>
  
}

export default App;

{/* <BrowserRouter>
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
</BrowserRouter> */}