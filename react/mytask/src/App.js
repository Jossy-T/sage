import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Layout from './route/Layout';
import About from './route/pages/About';
import Home from './route/pages/Home';
import Task from './route/pages/Task';

function App() {
  return (
        <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="add" element={<Task/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

        </div>
  );
}

export default App;
