import "./Contact.css"
import axios from "axios"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com'
import Notification from "./Notification";

export default function Contact() {
    const { register, handleSubmit, reset } = useForm()
    const [notification, setNotification] = useState(null)


    const onSubmit = (data) => {
        emailjs.send(
            'service_x9v5mqe',
            'template_3b2imv7',
            data,
            'XDFQmTmbQtcYKaKA4'
        )
            .then(() => {
                setNotification({ status: 'success', message: 'Successfully sent' })
                reset()
            })
            .catch(() => {
                setNotification({ status: 'error', message: 'unseccessfully sent' })
            })
    }

    const [recipes2, setRecipes2] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/RecipesSec')
            .then((response) => setRecipes2(response.data))
            .catch((error) => console.error('Error:', error))
    }, [])

    const handleClick = (recipe) => {
        const updatedLike = !recipe.like;
        axios.patch(`http://localhost:5000/RecipesSec/${recipe.id}/`, {
            like: updatedLike
        })
            .then((res) => setRecipes2(prev => prev.map(item => Number(item.id) === Number(recipe.id) ? { ...item, like: updatedLike } : item)))
            .catch((error) => console.error('Error:', error))
    }
    return (

        <div className="main">
            {
                notification && (
                    <Notification
                        status={notification.status}
                        message={notification.message}
                    />
                )
            }
            <div className="MainContact">
                <img src="ThumbUp.png" />
                <form className="ContactMedium" onSubmit={handleSubmit(onSubmit)}>
                    <div className="Info">
                        <div className="NameAddress">
                            <div className="name">
                                <h2>Name</h2>
                                <input {...register('name')} className="ButtonName" required />
                            </div>
                            <div className="name">
                                <h2>Email Address</h2>
                                <input {...register('email')} type='email' className="ButtonName" required />
                            </div>
                        </div>
                        <div className="NameAddress">
                            <div className="name">
                                <h2>Enquiry type</h2>
                                <input className="ButtonName" />
                            </div>
                            <div className="name">
                                <h2>Subject</h2>
                                <input className="ButtonName" />
                            </div>
                        </div>
                    </div>
                    <div className="Info">
                        <h2>Messages</h2>
                        <input {...register('message')} className="messageInput" required />
                        <button type="submit" className="Submit">Submit</button>
                    </div>
                </form>
            </div>

            <div className="Delicious_Recipe8x">
                <div className="Delicious_Recipes8x_TextsDiv">
                    <p className="Del_Recip8x_Header">Try this delicious recipe
                        <br /> to make your day</p>
                    <p className="Del_Recip8x_text">Try out our new Delicious new recipes that can make your day mood go from <br />sad to happy or angry to happy and fulfilled. Don't miss out on this new recipes.</p>
                </div>
                <div className="Recepepepe">
                    {
                        recipes2.map((value, i) => (
                            <div key={value.id} className="Recipes_Eight2">
                                <img src={value.img} alt="" />
                                <div className="LikeDiv3">
                                    <FontAwesomeIcon icon={faHeart} className={value.like ? "LikeIcon1" : "noLikeIcon1"}
                                        onClick={() => handleClick(value)} />
                                </div>
                                <p className="pText_recipes">{value.p}</p>
                                <div className="Minute_Snack">
                                    <div className="Minute">
                                        <img src="Timer.png" />
                                        <p>30 minutes</p>
                                    </div>
                                    <div className="Snack">
                                        <img src="ForkKnife.png" />
                                        <p>{value.eats}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

        </div>
    )
}