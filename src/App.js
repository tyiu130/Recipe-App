import './App.css';
import SearchBar from './components/SearchBar';
import { Route, Routes } from 'react-router-dom';
import SavedRecipes from './components/SavedRecipes';



function App() {
  return (
    <>
      <header>
        <h1>Today's Menu...</h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/recipes" element={<SavedRecipes />} />
        </Routes>
      </main>

      <footer>
        Built and Designed by Terri Yiu. Background Image by{" "}
        <a href="https://www.freepik.com/free-vector/blackboard-food-background_3876169.htm#query=chalk&position=6&from_view=search&track=sph">
          Freepik
        </a>
      </footer>
    </>
  );
}

export default App;
