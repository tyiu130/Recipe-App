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
                <input type="text" value={userInput} placeholder="Search recipes or ingredients" onChange={handleInput} />
                <input type="submit" value="Submit" className="button" onClick={e => {handleClick(e, userInput)}} />
            </form> 
            
            
            <RecipeGallery userInput={searchTerm}/>
        </>
    )
}

export default SearchBar;

