import axios from "axios"
import { useEffect, useState } from "react"
import "./Home.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import Recipes from "../recipes/Recipes";
import { useTranslation } from "react-i18next";


export default function Home() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/category')
            .then((response) => setCategory(response.data))
            .catch((error) => console.error('Error:', error))
    }, [])

    const {t}= useTranslation()
    return (
        <main>
            <div className="CategoriesDiv">
                <div className="catediv">
                    <p className="CateText">{t('home.Categories')}</p>
                    <button className="AllCategories">{t('home.ViewAll')}</button>
                </div>
                <div className="categoriesSmallDiv">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={40}
                        loop={category.length > 6 ? true : false}
                    >
                        {
                            category.map((value, i) => (
                                <SwiperSlide key={value.id}>
                                    <div className="categories" style={{
                                        background: value.bg
                                    }}>
                                        <img src={value.img} alt={value.name} className="imgs" />
                                        <p className="CategoriesTexts">{value.name}</p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                </div>
                <div className="Simple_Tasty_Recipes">
                    <div className="RecipesBigtext">
                        <p className="SimpleandTastyRecipe">Simple and tasty recipes</p>
                        <p className="yummy_tasty_recipes">These are very tasty, yummy, and lovely recipes that you can try <br /> out and cook it your self.</p>
                    </div>
                    <div className="RecipeStandartTrue">
                        <Recipes standart={true} />
                    </div>
                </div>

            </div>

            <div className="BigDiv_ChefOwn">
                <div className="smallDiv_chefown">
                    <p className="SmallDivHeader">Everyone can be a
                        chef in their own kitchen</p>
                    <p className="SmallDivText">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    <button className="OwnChefButton">Learn more</button>
                </div>
                <img src="Man_Vegies.jpg" alt="Hellllla" />
            </div>

            <div className="InstaBigDiv">
                <div className="InstaHeaderTexts">
                    <p className="InstaHeader">Check out @foodieland on Instagram</p>
                    <p className="InstasmallText">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>

                <div className="PostsInsta">
                    <img src="Post1.png" />
                    <img src="Post2.png" />
                    <img src="Post3.png" />
                    <img src="Post4.png" />
                </div>

                <button className="VisitInstaButton">
                    Visit Our Instagram
                    <img src="InstaLogoSmall.png" />
                </button>

            </div>

            <div className="Delicious_Recipe8x">
                <div className="Delicious_Recipes8x_TextsDiv">
                    <p className="Del_Recip8x_Header">Try this delicious recipe
                        <br /> to make your day</p>
                    <p className="Del_Recip8x_text">Try out our new Delicious new recipes that can make your day mood go from <br />sad to happy or angry to happy and fulfilled. Don't miss out on this new recipes.</p>
                </div>
                <Recipes />
            </div>

        </main>
    )
}