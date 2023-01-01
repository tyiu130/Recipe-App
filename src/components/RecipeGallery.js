import axios from "axios";
import { useEffect, useState } from "react";

import RecipeItems from "./RecipeItems";

function RecipeGallery() {

    const [recipeResults , setRecipeResults ] = useState();

    useEffect(() => {
        axios({
            url:'https://api.edamam.com/api/recipes/v2',
            method: 'GET',
            dataResponse: 'json',
            params: {
                app_key: '4e4719780880769db9a5c0da2940752b',
                app_id: '78009ee3',
                q: 'breakfast',
                type: 'public'
            },
        }).then((results) => {
            console.log(results.data.hits);
        })
    }, [])


    return (
        <section>
        
            <RecipeItems  recipeArray={recipeResults}/>
            
        </section>
    );

    
}

export default RecipeGallery;