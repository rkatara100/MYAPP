import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/about';
import Contact from './Components/contact';
import User from './Components/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='user' element={<User />} />
        <Route path='/user/:id' element={<User />} />
      </Routes>

    </BrowserRouter>
  );

}

export default App;
