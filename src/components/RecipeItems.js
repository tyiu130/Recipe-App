
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from 'react-router-dom';



// const RecipeItems = () => {

//     const [ recipeInfo , setRecipeInfo ] = useState([]);

//     useEffect(() => {
//         axios({
//             url: 'https://api.edamam.com/api/recipes/v2',
//             method: 'GET',
//             dataResponse: 'json',
//             params: {
//                 app_key: '4e4719780880769db9a5c0da2940752b',
//                 app_id: '78009ee3',
//                 type: 'public'
//             },
//         }).then((recipeInfo) => {

//             setRecipeInfo(recipeInfo.data.hits);
//         })
//     }, [])

//     const { label, ingredientLines, ingredients } = recipeInfo

//     return (
//         <section className="recipeItems">
//             <div className="recipeImage">
        
//             </div>
//             <div className="description">
//             <h2>{label}</h2>
//             <h3>{ingredients}</h3>
//             <p>{ingredientLines}</p>
//             </div>

//         </section>
//     )
// }

// export default RecipeItems;