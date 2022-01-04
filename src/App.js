import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <UserList />
    </div>
  );
}

export default App;
