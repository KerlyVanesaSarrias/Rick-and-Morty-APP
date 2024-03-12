import { useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './services/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'

function App() {

  const randomLocation = getRandomNumber(126)
  const url = `https://rickandmortyapi.com/api/location/${randomLocation}`
  const [location, getLocation]= useFetch(url)

  useEffect(() => {
    getLocation()
  }, [])


  return (
      <div>
        <h1>Rick and Morty</h1>
        <LocationInfo
        location={location}
        />
        <div>
          {
            location?.residents.map(url => (
              <ResidentCard
              key={url}
              url={url}/>
            ))
          }
        </div>
      </div>

  )
}

export default App
