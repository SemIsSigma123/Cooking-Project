import "./Blog.css"
import axios from "axios"
import { useEffect, useState } from "react"
import Other from "../recipes/[id]/Other"
export default function Blog() {

    const [dishes, setDishes] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/blog')
            .then((response) => setDishes(response.data))
            .catch((error) => console.error('Error:', error))
    }, [])

    return (

        < div className="Main" >
            <div className="BlogAndArticle">
                <h1 className="BlogArticleHeader">Blog & Article</h1>
                <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                <div className="InputButton">
                    <input type="text" className="ButtonsInput" />
                    <button className="BlackButtonSearch">Search</button>
                </div>
            </div>

            <div className="AlotSmallDives">
                <div className="SmallDivDishes">
                    {
                        dishes.map((value, i) => (
                            <div className="DishesDiv">
                                <img src={value.img} />
                                <div className="DishesTexts">
                                    <h2>{value.h}</h2>
                                    <p>{value.lorem}</p>
                                    <div className="DishesLogoName">
                                        <div className="LogoAndName">
                                            <img src={value.logo} />
                                            <p className="name">{value.name}</p>
                                        </div>
                                        <p className="Dishesdate">{value.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <Other />

                </div>

                <div className="PageSquares">
                    <div className="BlackSquare">1</div>
                    <div className="whiteSquares">2</div>
                    <div className="whiteSquares">3</div>
                    <div className="whiteSquares">4</div>
                    <div className="whiteSquares">5</div>
                    <div className="ThreeDotSquare">...</div>
                    <div className="NextPageSquare">&#x2192;</div>
                </div>

            </div>

            <div className="Full_Guide_to_Chef">
                <div className="HeaderAndJohnAndDate">
                    <h1 className="FullGuidCheffHeader">Full Guide to Becoming a Professional Chef</h1>
                    <div className="JohnSithAndDate">
                        <div className="JohnSmith">
                            <img src="JohnSmith.png" />
                            <h3>John Smith</h3>
                        </div>
                        <h3 className="March_2022">15 March 2022</h3>
                    </div>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac ultrices odio.Nulla at congue diam<br />, at dignissim turpis. Ut vehicula sed velit a faucibus. In feugiat vestibulum velit vel pulvinar.</h3>
                </div>
            </div>
            <img src="RandomMonkeyCooking.png" className="MonkeyCooking" />
            <div className="LotOfTexts">
                <div className="Question">
                    <h1>How did you start out in the food industry?</h1>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, dolore? Autem, eos consequatur iure in nisi expedita voluptates ex! Commodi, cum. Exercitationem eum ab.</h3>
                </div>
                <div className="Question">
                    <h1>What do you like most about your job?</h1>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur aspernatur repudiandae provident, possimus delectus ex nemo distinctio quia fugit quisquam ea excepturi.</h3>
                </div>
                <div className="Question">
                    <h1>Do you cook at home on your days off?</h1>
                    <img src="WomenMonkeyCooking.png" />
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur aspernatur repudiandae provident, possimus delectus ex nemo distinctio quia fugit quisquam ea excepturi.</h3>
                </div>

                <div className="Question">
                    <h1>What would your advice be to young people looking to get their foot in the door?</h1>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur aspernatur repudiandae provident, possimus delectus ex nemo distinctio quia fugit quisquam ea excepturi.</h3>
                </div>

                <div className="Question">
                    <h1>What is the biggest misconception that people have about being a professional chef?</h1>
                    <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur aspernatur repudiandae provident, possimus delectus ex nemo distinctio quia fugit quisquam ea excepturi.</h3>
                </div>
            </div>
        </div >
    )
}