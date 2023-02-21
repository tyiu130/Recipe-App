import { getDatabase, ref, remove } from "firebase/database";
import firebase from "../firebase";
import { useState } from "react";

const RecipeCard = ({recipeInfo, pushFn}) => {
    
    const [removeRecipe, setRemoveRecipe] = useState('');

    const removeItem = () => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, `/`);
        // removeFromFireBase.uri.split("_")[1]);
        // const removeId = {
        //   id: removeFromFireBase.uri.split("_")[1]
        // }
        remove(dbRef);
        setRemoveRecipe("");
    };

    return (
        <li key={recipeInfo.id}>
            <a href={recipeInfo.url} target="_blank" rel="noopener noreferrer">
                <img src={recipeInfo.image} alt={recipeInfo.label} />
            </a>

            <div >
                <a href={recipeInfo.url} target="_blank" rel="noopener noreferrer">
                    <h3>{recipeInfo.label}</h3>
                </a>
            </div>
            <div className="description">
                <p className="calories">Calories: {recipeInfo.calories.toFixed(2)}</p>
                <p className="label">Health Label: {recipeInfo.healthLabels.slice(2, 3)}</p>
            </div>

            {
                pushFn
                    ? <button onClick={() => pushFn(recipeInfo)}>Save Recipe</button>
                    : <button onClick={() => removeItem(recipeInfo.id)}>Remove Recipe</button>
            }
            
        </li>
    )
}

export default RecipeCard;


