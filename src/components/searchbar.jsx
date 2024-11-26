import React, { useState } from 'react'
import Data from "./Productdata"

const searchbar = () => {
    const [search, setsearch] = useState("")
  return (
    <div>
        <div>
            <div className="searchinput container">
                <input type="text" placeholder='Search here...' className="searchInput" onChange={(event) =>{
                    setsearch(event.target.value);
                }} />
            </div>
            <div className="template-container">
                {
                    Data.filter((val) =>{
                        if(search == ""){
                            return val
                        }else if(val.name.toLowerCase().includes(search.toLowerCase())){
                            return val
                        }
                    })
                    .map((val) =>{
                        return(
                            <div className='template' key={val.id}>
                                <img src="val.image" alt="" />
                                <h3>{val.title}</h3>
                                <p>{val.price}</p>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default searchbar