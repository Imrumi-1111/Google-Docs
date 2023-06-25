
import './App.css';
import Editor from './components/atoms/editor/editor';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/molecules/login/login';
import Home from './components/molecules/home/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/editor" element={<Editor/>}/>
        <Route/>
      </Routes>
    </div>
  );
}

export default App;
