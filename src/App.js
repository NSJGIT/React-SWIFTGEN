import './App.css';
//import Hello from './components/Hello';
//import Message from './components/Message';
//import Profile from './components/Profile';
import Form from './components/Form';
import Home from './components/Home';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Reconciler from './components/Reconciler';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/SWIFT" element={<Form/>} />
          <Route path="/Rec" element={<Reconciler/>} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
