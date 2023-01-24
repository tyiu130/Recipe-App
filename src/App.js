
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
    <footer>
        Background Image by <a href="https://www.freepik.com/free-vector/blackboard-food-background_3876169.htm#query=chalk&position=6&from_view=search&track=sph">Freepik</a>
    </footer>

    <Routes>

      <Route path='/recipeInfo' element={<RecipeItems />} />

    </Routes>
    </>
  );
}

export default App;
