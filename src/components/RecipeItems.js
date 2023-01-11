
function RecipeItems(recipeArray){
    console.log(recipeArray)
 return (
    <div className="recipePhotos">
        {recipeArray.map((photo) => {
            return (
                <div className="photoContainer">
                    
                </div>
            )
        })}

    </div>
        
    
 )
}

export default RecipeItems;