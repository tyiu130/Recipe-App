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
            url:'https://proxy-ugwolsldnq-uc.a.run.app/https://api.edamam.com/api/recipes/v2',
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
            setRecipeResults(results.data.hits)
        }) .catch((error) => {
            if (error.message === 404) {
                alert("The API has reached its limit! Please give it a few minutes and try again!")
            }
        })
        
        
        
    }, [userInput]);

    
    return (
        
        <section>
    
             <ul className="recipeCards wrapper">
                {
                    recipeResults.map( (recipeObject, index) => {
                        
                        return <li key={index}>
                            {
                                <>
                                    
                                    <a href={recipeObject.recipe.url} target="_blank" rel="noopener noreferrer">
                                        <img src={recipeObject.recipe.image} alt={recipeObject.recipe.label} />
                                     </a>

                                     <div > 
                                        <a href={recipeObject.recipe.url} target="_blank" rel="noopener noreferrer">
                                            <h3>{recipeObject.recipe.label}</h3>
                                        </a>
                                    </div>
                                    <div className="description">
                                        <p className="calories">Calories: {recipeObject.recipe.calories.toFixed(2)}</p>
                                        <p className="label">Health Label: {recipeObject.recipe.healthLabels.slice(2, 3)}</p>
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