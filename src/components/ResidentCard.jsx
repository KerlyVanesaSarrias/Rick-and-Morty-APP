import useFetch from "../hooks/useFetch"
import { useEffect } from "react"


const ResidentCard = (url) => {

    const [character, getCharacter] = useFetch(url)

    useEffect(() => {
    getCharacter()
    }, [])
    
    console.log(character)

return (
    <div>ResidentCard</div>
    )
}

export default ResidentCard