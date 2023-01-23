
import './App.css';
import SearchBar from './components/SearchBar';
import { Routes, Route, Link } from 'react-router-dom';
import RecipeItems from './components/RecipeItems';



function App() {
  return (
    <>
    <header>
      <h1>Search Recipes!</h1>
    </header>
    <SearchBar />

    <Routes>

      <Route path='/recipeInfo' element={<RecipeItems />} />

    </Routes>
    </>
  );
}

export default App;
