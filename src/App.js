import React, { useState, useEffect }  from 'react';
import './App.css';
import axios from 'axios';
import FetchData from './components/fetchData/fetchData'

  const App = () => {
    const [hits, setHits] = useState([])
    const [query, setQuery] = useState('github')
    
    useEffect(() => {
      const  fetchData = async () =>  {
        const { data } = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`)
        // console.log(result);
        setHits(data.hits)
      }
      fetchData()
    }, [query])


    return(
      <div >
        <input type="text" onChange={e=> setQuery(e.target.value)} placeholder="search..."/>

        <FetchData hits={hits} />
      </div>
    )
    
  }

export default App;
