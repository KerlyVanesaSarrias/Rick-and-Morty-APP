import useFetch from "../hooks/useFetch"
import { useEffect } from "react"


const ResidentCard = ({url}) => {

    const [character, getCharacter] = useFetch(url)

    useEffect(() => {
    getCharacter()
    }, [])
    
    console.log(character)

return (
    <article>
        <header>
            <img src={character?.image} alt=""/>
            <div>
                <div></div>
                <div>{character?.status}</div>
            </div>
        </header>
        <section>
            <h3>{character?.name}</h3>
            <hr/>
            <ul className="father" id="list">
                <li><span>Specie</span><span>{character?.species}</span></li>
                <li><span>Origin</span><span>{character?.origin.name}</span></li>
                <li><span>Episodes where appear</span><span>{character?.episode.length}</span></li>
            </ul>
        </section>
    </article>
    )
}

export default ResidentCard