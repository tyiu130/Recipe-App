import { getDatabase, ref, onValue } from "firebase/database";
import firebase from "../firebase";
import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import { Outlet, Link } from 'react-router-dom';

const SavedRecipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const database = getDatabase(firebase);
        const dbRef = ref(database, "/");
        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            const recipeArray = Object.values(data);
            setRecipes(recipeArray)
        })
    }, []);

    return (
        <section>
            <h2>Your Saved Recipes</h2>

            <button className='recipePage'>
                <Link to="/"> Look for Recipes ❤ </Link>
            </button>

            <ul className="recipeCards wrapper">
                {
                    recipes.map((recipeObject) => {
                        const recipeId = recipeObject.id;

                        return (
                            <section>
                                <RecipeCard recipeInfo={recipeObject} key={recipeId} />
                            </section>
                        )
                    })
                }
            </ul>
            <Outlet />
        </section>
    )
}

export default SavedRecipes;