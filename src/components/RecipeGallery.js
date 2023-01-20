import axios from "axios";
import { useEffect, useState } from "react";


import RecipeItems from "./RecipeItems";

function RecipeGallery({userInput}) {

    const [recipeResults , setRecipeResults ] = useState([]);

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
            console.log(results.data.hits)
            setRecipeResults(results.data.hits);
        })
    }, [userInput])


    return (
        
        <section>
            <h2>hi</h2>
             <ul className="recipeCards">
                {
                    recipeResults.map( (recipeObject, index) => {
                        return <li key={index}>
                            {
                                <img src={recipeObject.recipe.image} alt="" />
                                // console.log(recipeObject.recipe.image)
                            }
                        </li>
                    })
                }

            </ul>
        
            
            
        </section>
    );
    }
    


export default RecipeGallery;