import Box from "../../../shared/Box"
import axios from "axios"
import { useEffect, useState } from "react"
import "./Recipes.css"
import ReactPaginate from 'react-paginate';

export default function RecipesPagination() {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/recipes')
            .then((response) => setRecipes(response.data))
            .catch((error) => console.error('Error:', error))
    }, [])

    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = recipes.slice(itemOffset, endOffset);

    const pageCount = Math.ceil(recipes.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % recipes.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <article className="article-1">
            <div className="Recipes_Title_square" style={{
                gridTemplateColumns: 'repeat(4, 1fr)'
            }}>
                {
                    currentItems.map((recipe) => (
                        <Box standart={false} recipe={recipe} setRecipes={setRecipes} key={recipe.id} />
                    ))
                }
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                className="react-paginate-css"
                activeClassName="react-paginate-active"
            />
        </article>
    )
}