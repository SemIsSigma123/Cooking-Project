import { Link } from "react-router-dom";
import { routesArray } from "../../entites/routesArray";
import { useTranslation } from "react-i18next";

export default function Header() {

    const [t, i18n] = useTranslation()
    const langArray = ["en", "hy"]

    return (
        <header>
            <div className='header'>
                <p className='Foodieland'>FoooodyLaand</p>
                <div className='center'>
                    <ul className='headerTexts'>
                    {
                        routesArray.map((route)=>(
                            <Link key={route.id} to={route.path}>
                                {t(`header.nav.${route.name}`)}
                            </Link>
                        ))
                    }
                    </ul>
                </div>
                <div className='Logos'>
                    <img src="001-facebook.svg" alt="asaaa" />
                    <img src="003-twitter.svg" alt="asaaa" />
                    <img src="004-instagram.svg" alt="asaaa" />
                </div>
                <div>
                    {
                        langArray.map((lang) => (
                            <button key={lang} 
                            onClick={() => i18n.changeLanguage(lang)} className="text-white uppercase hover:text-[#fac564] px-2">
                                {lang}
                            </button>
                        ))
                    }
                </div>
            </div>
        </header>
    )
}