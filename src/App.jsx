import { useEffect, useMemo, useState } from 'react';
import './App.css';
import useFetch from './hooks/useFetch';
import getRandomNumber from './services/getRandomNumber';
import LocationInfo from './components/LocationInfo';
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch';
import Pagination from './components/Pagination';

function App() {
  const randomLocation = getRandomNumber(126);
  const [locationSelected, setLocationSeled] = useState(randomLocation);
  const [currentPage, setCurrentPage] = useState(1);

  const url = `https://rickandmortyapi.com/api/location/${locationSelected || randomLocation}`;
  const [location, getLocation, hasError] = useFetch(url);

  const totalPageExc = (location?.residents.length ?? 0) / 6;
  const totalPage = Math.ceil(totalPageExc);

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
    }
  };

  const handlePreviusPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }; 

  const getDataPage = (sizePage = 6) => {
    if(location?.residents) {
      const end = currentPage * sizePage;
      const start = end - sizePage;
      return location?.residents.slice(start, end);
    }
    return []
  }

  const residentsCardsPaginated = getDataPage();

  useEffect(() => {
    getLocation();
  }, [locationSelected]);

  return (
    <div className='app'>
      <div className='app_title'>
        <img src = 'https://www.grindstore.com/cdn/shop/collections/category-rick-and-morty-20170621a_89055090-3ec3-42ac-af1e-eed5dcc843b1.jpg?v=1690214078&width=1200'></img>
      </div>
      <FormSearch setLocationSeled={setLocationSeled}/>
      {hasError 
          ? (
            <h1 className='app_error'> ❌ Hey! You must provide an id from 1 to 126 😿</h1>
            )
          : (
            <>
              <LocationInfo
                location={location}
              />

              <div className='container_resident'>
                {
                  residentsCardsPaginated.map(url => (
                    <ResidentCard
                      key={url}
                      url={url}
                    />
                  ))
                }
              </div>
              <div>
                <Pagination
                totalPage={totalPage} 
                currentPage={currentPage} 
                onNextPage={handleNextPage}
                onPreviusPage={handlePreviusPage}
                />
              </div>
            </>
          )
      }
    </div>
  )
}

export default App
