// import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
// import './App.css';
// // import Home from './page/Home';
// import Create from './page/Create';
// import Edit from './page/Edit';
// import Pclist from './page/Pclist';
// function App() {
//   return (
//     <div>
//        <nav style={{ marginBottom: "20px" }}>
//         <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
//         <Link to="/create">Create Item</Link>
//       </nav>

    
//       <Routes>
//          <Route path="/" element={<Pclist/>} />
//         <Route path="/create" element={<Create />} />
//         <Route path="/edit/:id" element={<Edit />} />
//       </Routes>
    
//     </div>
//   );
// }

// export default App;



import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/create">Create Item</Link>
      </nav>
      <Outlet /> {/* ✅ renders Pclist, Create, Edit inside */}
    </div>
  );
}
