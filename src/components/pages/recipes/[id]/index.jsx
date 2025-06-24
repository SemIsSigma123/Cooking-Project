import { useParams } from "react-router-dom"
import "./index.css"
import Other from "./Other"
import { useEffect, useState } from "react"
import axios from "axios"
export default function RecipesId() {
    const { id: recipesId } = useParams()
    const [linking, setLinking] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/recipes/${recipesId}`)
            .then(res => {
                setLinking(res.data)
            })
    },[])

    
    return (
        <div className="Main">
            <div className="HealthJapFriedRiceDiv">
                <p className="JapaneseFriedRiceText">{linking.name}</p>
                <div className="JapanRiceBasicCookInfoDiv">
                    <div className="JapanRiceBasicCookSmallDiv">
                        <div className="JohnSmithDiv">
                            <img src="/JohnSmith.png" />
                            <div className="JohnSmithSmallDiv">
                                <p className="JohnSmithText">John Smith</p>
                                <p className="March152022">15 March 2022</p>
                            </div>
                        </div>
                        <div className="JohnSmithDiv">
                            <img src="/Timer.png" />
                            <div className="JohnSmithSmallDiv">
                                <p className="PREPTIME">PREP TIME</p>
                                <p className="Minuts15">15 Minutes</p>
                            </div>
                        </div>
                        <div className="JohnSmithDiv">
                            <img src="/Timer.png" />
                            <div className="JohnSmithSmallDiv">
                                <p className="PREPTIME">COOK TIME</p>
                                <p className="Minuts15">15 Minutes</p>
                            </div>
                        </div>
                        <div className="ChickenForkKnifeDiv">
                            <img src="/ForkKnife.png" />
                            <p className="Minuts15">{linking.eat}</p>
                        </div>
                    </div>

                    <div className="PrintShareBigDiv">
                        <div className="PrintDiv">
                            <img src="/Print.png" />
                            <p className="PrintText">PRINT</p>
                        </div>

                        <div className="ShareDiv">
                            <img src="/Share.png" />
                            <p className="ShareText">SHARE</p>
                        </div>
                    </div>

                </div>

                <div className="BigImgNutrInfo">
                    <img src={linking.img} className="linkingImg"/>
                    <div className="NutritionInfo">
                        <p className="NutInfoHeaderText">Nutrition Information</p>
                        <div className="NutListInfo">
                            <p className="NutListTexts">Calories - 219.9 cal</p>
                            <p className="NutListTexts">Total Fat - 10.7 g</p>
                            <p className="NutListTexts">Protein - 7.9 g</p>
                            <p className="NutListTexts">Carbohydrate - 22.3 g</p>
                            <p className="NutListTexts">Cholesterol - 37.4 mg</p>
                        </div>
                        <p className="NutInfoBottomText">With this information you could make <br /> your meal plan better, and more yummier</p>
                    </div>
                </div>

            </div>

            <div className="Ingredients">
                <div className="For_main_dish">
                    <div className="IngHeaderMainDishText">
                        <p className="IngredientsHeader">Ingredients</p>
                        <p className="For_main_dish_text">For main dish</p>
                    </div>
                    <div className="BigMainDishCheckMarks">
                        <div className="MainDishChecked">
                            <input type="checkbox" className="circular-checkbox" />
                            <p className="MainDishCheckedText">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="MainDishCheckMarks">
                            <input type="checkbox" className="circular-checkbox" />
                            <p className="MainDishCheckMarkstext">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="MainDishCheckMarks">
                            <input type="checkbox" className="circular-checkbox" />
                            <p className="MainDishCheckMarkstext">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="MainDishCheckMarks">
                            <input type="checkbox" className="circular-checkbox" />
                            <p className="MainDishCheckMarkstext">Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className="MainDishCheckMarks">
                            <input type="checkbox" className="circular-checkbox" />
                            <p className="MainDishCheckMarkstext">Lorem ipsum dolor sit amet</p>
                        </div>
                    </div>
                </div>
                <Other />
            </div>

            <div className="ForTheSouceBiggy">
                <div className="BigMainDishCheckMarks">
                    <h1>For The Souce</h1>

                    <div className="MainDishCheckMarks">
                        <input type="checkbox" className="circular-checkbox" />
                        <p className="MainDishCheckMarkstext">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="MainDishCheckMarks">
                        <input type="checkbox" className="circular-checkbox" />
                        <p className="MainDishCheckMarkstext">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="MainDishCheckMarks">
                        <input type="checkbox" className="circular-checkbox" />
                        <p className="MainDishCheckMarkstext">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>

                <img src="/Ads.png" />

            </div>

            <div className="DirectionsBiggy">
                <div className="MainDishCheckMarks">
                    <input type="checkbox" className="circular-checkbox" />
                    <div className="DirectionsSmally">
                        <h1>1. Lorem ipsum dolor sit amet </h1>
                        <p className="FindingNemo">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                        <img src="/GirlCooking.png" />
                    </div>
                </div>
                <div className="MainDishCheckMarks" id="smsmsmsm">
                    <input type="checkbox" className="circular-checkbox" />
                    <div className="DirectionsSmally">
                        <h1>2. Lorem ipsum dolor sit amet </h1>
                        <p className="FindingNemo">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                    </div>
                </div>
                <div className="MainDishCheckMarks" id="smsmsmsm2">
                    <input type="checkbox" className="circular-checkbox" />
                    <div className="DirectionsSmally">
                        <h1>2. Lorem ipsum dolor sit amet </h1>
                        <p className="FindingNemo">
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br /> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}