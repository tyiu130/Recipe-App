const RecipeCard = ({recipeInfo, pushFn }) => {
    
    return (
        <li>
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
                pushFn ? 
                <button onClick={() => pushFn(recipeInfo)}>Save Recipe</button>
                :null
            }
        </li>
    )
}

export default RecipeCard;


