import { useState } from "react";
import RecipeGallery from "./RecipeGallery";

function SearchBar() {

    const [userInput, setUserInput] = useState("");

    const onClick = (searchTerm) => {
        console.log(`searched ${searchTerm}`)
    }

    const handleInput = (event) => {
        setUserInput(event.target.value)
    }

    console.log(userInput)
    return(
        <>
            <form id="searchContainer">
                <input type="text" value={userInput} placeholder="Search Recipes" onChange={handleInput} />
            </form> 
            <button id="searchBtn" onClick={() => onClick(userInput)}>Search</button>
            <RecipeGallery userInput={userInput}/>
        </>
    )
}

export default SearchBar;

