import axios from "axios";
import { useEffect, useState } from "react";


import RecipeItems from "./RecipeItems";

function RecipeGallery({userInput}) {

    const [recipeResults , setRecipeResults ] = useState(null);

    const [recipeSearch, setRecipeSearch] = useState(null);

    if(recipeSearch !== null) {
        setRecipeSearch(userInput)
    }

    useEffect(() => {
        axios({
            url:'https://api.edamam.com/api/recipes/v2',
            method: 'GET',
            dataResponse: 'json',
            params: {
                app_key: '4e4719780880769db9a5c0da2940752b',
                app_id: '78009ee3',
                q: userInput,
                type: 'public'
            },
        }).then((results) => {
            setRecipeResults(results.data.hits);
        })
    }, [userInput])


    return (
        <section>
        
            {/* <RecipeItems  recipeArray={recipeResults}/> */}
            
        </section>
    );

    
}

export default RecipeGallery;