import { useState } from "react";
import RecipeGallery from "./RecipeGallery";

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
    return(
        <>
            <form id="searchContainer">
                <input type="text" value={userInput} placeholder="Search Recipes" onChange={handleInput} />
                <input type="submit" className="button" onClick={e => {handleClick(e, userInput)}} />
            </form> 
            
            
            <RecipeGallery userInput={searchTerm}/>
        </>
    )
}

export default SearchBar;

