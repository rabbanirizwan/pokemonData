import React from 'react';
import { useSelector } from 'react-redux';

const ShowDetail = () => {
    const myData = useSelector(state => state.rA)
    //console.log(myData.sprites.front_default)
    //console.log(myData)
    return (
        <div>
         { myData.sprites ?
         <img src={myData.sprites.front_default} alt="pokemon" />:
         <p>sssdsdds</p>}
            <h1>{myData.name}</h1>
        </div>
    )
}
export default ShowDetail