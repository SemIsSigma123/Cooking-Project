import Box from "../../../shared/Box"
import axios from "axios"
import { useEffect, useState } from "react"
import "./Recipes.css"

export default function Recipes({ standart, count = 8 }) {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/recipes')
            .then((response) => setRecipes(response.data))
            .catch((error) => console.error('Error:', error))
    }, [])
    console.log(recipes);
  

    let recipesNew = recipes.filter(item => standart ? item.standart : item.today)

    return (
        <div className="Recipes_Title_square" style={{
            gridTemplateColumns: standart ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'
        }}>
            {
                recipesNew.slice(0, count).map((recipe) => (
                    <Box standart={standart} recipe={recipe} setRecipes={setRecipes} key={recipe.id} />
                ))
            }
        </div>
    )
}