import axios from "axios";
import { useEffect, useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import firebase from "../firebase";
import RecipeCard from "./RecipeCard";


function RecipeGallery({ userInput }) {


  const [recipeResults, setRecipeResults] = useState([]);

  const [recipeSearch, setRecipeSearch] = useState(null);

  if (recipeSearch !== null) {
    setRecipeSearch(userInput);
  }

  useEffect(() => {
    axios({
      url: "https://api.edamam.com/api/recipes/v2",
      method: "GET",
      dataResponse: "json",
      params: {
        app_key: "4e4719780880769db9a5c0da2940752b",
        app_id: "78009ee3",
        q: userInput,
        foodId: "",
        type: "public",
      },
    })
      .then((results) => {
        setRecipeResults(results.data.hits);
      })
      .catch((error) => {
        if (error.message === 404) {
          alert(
            "The API has reached its limit! Please give it a few minutes and try again!"
          );
        }
      });
  }, [userInput]);

  const pushToDatabase = (pushToFireBase) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, "/");
    const newObject = {
      label: pushToFireBase.label,
      image: pushToFireBase.image,
      url: pushToFireBase.url,
      id: pushToFireBase.uri.split("_")[1],
      calories: pushToFireBase.calories,
      healthLabels: pushToFireBase.healthLabels,
    };
    push(dbRef, newObject);
  };

  return (
    <>

      <section>
        <ul className="recipeCards wrapper" >
          {recipeResults.map((recipeObject) => {
            const recipeUri = recipeObject.recipe.uri;
            const recipeId = recipeUri.split("_")[1];

            return (
              <>
                <RecipeCard
                  key={recipeId}
                  recipeInfo={recipeObject.recipe}
                  pushFn={pushToDatabase}
                />
              </>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default RecipeGallery;
