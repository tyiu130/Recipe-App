import { useState } from "react";
import RecipeGallery from "./RecipeGallery";
import { Outlet, Link } from 'react-router-dom';


function SearchBar() {

    const [userInput, setUserInput] = useState("");

    const [searchTerm, setSearchTerm] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        setSearchTerm(userInput);
    }


    const handleInput = (e) => {
        setUserInput(e.target.value)
    }


    console.log(userInput)
    return (
        <>
            <button className='recipePage'>
                <Link to="/recipes"> Your Saved Recipes ❤ </Link>
            </button>

            <form id="searchContainer">
                <input type="text" value={userInput} placeholder="Search recipes or ingredients" onChange={handleInput} />
                <input type="submit" value="Submit" className="button" onClick={e => { handleClick(e, userInput) }} />
            </form>

            <RecipeGallery userInput={searchTerm} />
            <Outlet />
        </>
    )
}

export default SearchBar;

