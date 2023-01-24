import axios from "axios";
import { useEffect, useState } from "react";



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
                foodId: '',
                type: 'public'
            },
        }).then((results) => {
            console.log(results.data)
            setRecipeResults(results.data.hits);
        })
    }, [userInput])



    return (
        
        <section>
    
             <ul className="recipeCards wrapper">
                {
                    recipeResults.map( (recipeObject, index) => {
                        // console.log(recipeObject.recipe.label)
                        return <li key={index}>
                            {
                                <>
                                    
                                    <a href={recipeObject.recipe.url} target="_blank" rel="noopener noreferrer">
                                        <img src={recipeObject.recipe.image} alt="recipeObject.recipe.label" />
                                     </a>

                                     <div className="description"> 
                                        <a href={recipeObject.recipe.url} target="_blank" rel="noopener noreferrer">
                                            <h3>{recipeObject.recipe.label}</h3>
                                            <h4>Calories: {recipeObject.recipe.calories.toFixed(2)}</h4>
                                        </a>
                                    </div>
                                </>
                            }
                        </li>
                    })
                }

            </ul>
        
            
            
        </section>
    );
    }
    


export default RecipeGallery;