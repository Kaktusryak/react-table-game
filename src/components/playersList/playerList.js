
import './playerList.css'
import Player from '../player/player'
import { useState,useEffect,useCallback,useMemo } from 'react'


function PlayerList({players,deletePlayer,changePoints}){
    // let s =0;
    // const [sum,setSum] = useState(s)
    // useEffect(()=>{
    //     for(let i of players){
    //         s+=i.points
    //     }
    //     setSum(s)
    // },[sum])


    //const [, updateState] = useState();
    // forceUpdate = useCallback(() => updateState({}), []);
    
    //const [sum,setSum] = useState(0)


    //setSum(length)
    
    let pointsList = players.map((item)=>{
        return item.points
    })
    pointsList.sort().reverse()
    console.log(pointsList)



    const newPlayers = players.map((item)=>{
        console.log('points '+item.points)
        for(let i of pointsList){
            console.log('i '+ i +' '+ pointsList.indexOf(i))
            if(item.points ==i ){
                item.place = pointsList.indexOf(i)
            }
        }
        return(<Player key={item.id} id={item.id} name={item.name} playerPoints={item.points} 
            onDelete={deletePlayer} onPointsChange={changePoints} place={item.place}/>)
    })

    //forceUpdate()
    
    
    

    
    


    return(
        
        <ul className="playerList" >{newPlayers}</ul>

    )
}

export default PlayerList;