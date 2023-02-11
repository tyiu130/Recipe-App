import { getDatabase, ref, onValue } from "firebase/database";
import firebase from "../firebase";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

const SavedRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    console.log(recipes)

    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, "/recipes");
        onValue(dbRef, (snapshot) => {

            const data = snapshot.val();
            const recipeArray = Object.values(data);
            setRecipes(recipeArray)

        })

    }, [])

    return (
            <section>
                <ul className="recipeCards wrapper">
                    {
                        recipes.map((recipeObject) => {
                            return (
                                <RecipeCard recipeInfo={recipeObject} />
                            )
                        })
                    }
                </ul>
            </section>
    )
}

export default SavedRecipes;