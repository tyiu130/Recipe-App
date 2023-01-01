import { useState } from "react";


function SearchBar() {

    const [userInput, setUserInput] = useState({

    })

    return(
        <>
            <form action="">
                <input type="text" id="header-search"  placeholder="Search Recipes"/>
            </form> 
        </>
    )
}

export default SearchBar;