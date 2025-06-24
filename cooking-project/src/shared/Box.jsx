import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
export default function Box({ standart, recipe, setRecipes }) {
    const nav = useNavigate()

    const handleClick = (recipe) => {
        const updatedLike = !recipe.like;
        axios.patch(`http://localhost:5000/recipes/${recipe.id}/`, {
            like: updatedLike
        })
            .then((res) => setRecipes(prev => prev.map(item => Number(item.id) === Number(recipe.id) ? { ...item, like: updatedLike } : item)))
            .catch((error) => console.error('Error:', error))
    }

    const goToRecipesSelect = (id) => {
        nav(`/recipes/${id}`)
    }

    return (
        <div className="small_recipe_dives" key={recipe.id}>
            <img onClick={() => goToRecipesSelect(recipe.id)} src={recipe.img} alt="" className="RecipesPics" />
            <p className="pText_recipes">{recipe.name}</p>
            <div className="Minute_Snack">
                <div className="Minute">
                    <img src="/Timer.png" alt="" />
                    <p>30 minutes</p>
                </div>
                <div className="Snack">
                    <img src="/ForkKnife.png" alt="" />
                    <p>{recipe.eat}</p>
                </div>
            </div>

            <div className={standart ? "LikeDiv" : "LikeDiv2"}>
                <FontAwesomeIcon icon={faHeart} className={recipe.like ? "LikeIcon" : "noLikeIcon"}
                    onClick={() => handleClick(recipe)} />
            </div>
        </div>
    )
}