import './App.css';
import Landing from "./pages/Landing"
import ListPage from './pages/ListPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route path="/list" element={<ListPage/>}/>
        </Routes>      
      </div>
    </Router>
  );
}

export default App;