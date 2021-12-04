import React from 'react'
import './fetchData.css'


function fetchData(props) {
    return (
        <div>
        <ul>
          {props.hits.map(hit=> (
            <li>
              {hit.title} 
              <a href={hit.url}>{hit.url}</a>
            </li>
          ))}
        </ul>
        </div>
    )
}

export default fetchData