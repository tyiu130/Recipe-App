import axios from "axios";
import { useEffect } from "react";

function RecipeGallery() {
    useEffect(() => {
        axios({
            url:'https://api.edamam.com/api/recipes/v2',
            method: 'GET',
            dataResponse: 'json',
            params: {
                app_key: '4e4719780880769db9a5c0da2940752b',
                app_id: '78009ee3',
                q: 'breakfast',
                type: 'public'
            },
        }).then((results) => {
            console.log(results.data.hits);
        })
    }, [])
}

export default RecipeGallery;