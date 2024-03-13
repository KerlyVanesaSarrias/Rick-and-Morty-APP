import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import './styles/ResidentCard.css'

const ResidentCard = ({url}) => {

    const [character, getCharacter] = useFetch(url)

    useEffect(() => {
    getCharacter()
    }, [])
    

return (
    <article className="resident">
        <header className="resident_header">
            <img className="resident_img" src={character?.image} alt=""/>
            <div className="status">
                <div className={`status_circle ${character?.status}`}></div>
                <div className="status_value">{character?.status}</div>
            </div>
        </header>
        <section className="resident_body">
            <h3 className="resident_name">{character?.name}</h3>
            <hr className="resident_hr"/>
            <ul className="resident_list">
                <li className="resident_item">
                    <span className="resident_label">Specie</span>
                    <span className="resident_value">{character?.species}</span>
                </li>
                <li className="resident_item">
                    <span className="resident_label">Origin</span>
                    <span className="resident_value">{character?.origin.name}</span>
                </li>
                <li className="resident_item">
                    <span className="resident_label">Episodes where appear</span>
                    <span className="resident_value">{character?.episode.length}</span>
                </li>
            </ul>
        </section>
    </article>
    )
}

export default ResidentCard