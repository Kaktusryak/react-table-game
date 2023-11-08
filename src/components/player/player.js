import { useEffect, useState } from 'react';
import './player.css'



function Player(props){

    const [p,setP] = useState(props.playerPoints)
    const [addablePoints,setAddablePoints]=useState('')
    console.log('P '+props.playerPoints)

    



    const onPlusPressed=(e)=>{
        e.preventDefault()
        
        props.onPointsChange(props.id,Number(1))
        setP(props.playerPoints)
        
    }
    const onMinusPressed=(e)=>{
        e.preventDefault()
        
        props.onPointsChange(props.id,Number(-1))
        setP(props.playerPoints)
        
    }
    const onAddablePoints=(e)=>{
        e.preventDefault()
        setAddablePoints(e.target.value)
    }
    const addAddablePoints = (e)=>{
        e.preventDefault()
        
        props.onPointsChange(props.id,Number(addablePoints))
        
        console.log(props.playerPoints,props.name)
        setP(props.playerPoints)
    }
    let placeStyle = 'place '
    if(props.place ==0){
        placeStyle+='first'
    }
    if(props.place ==1){
        placeStyle+='second'
    }
    if(props.place ==2){
        placeStyle+='third'
    }
    
    
    

    return(
        <li className="player">
            <div className={placeStyle}>{props.place+1}</div>
            <button className="player-remove" onClick={()=>props.onDelete(props.id)}>
                X
            </button>
            <div className="player-name">
                {props.name}
            </div>
            <form className="player-form" name="player">
                <input className="points-input" value={addablePoints} onChange={onAddablePoints} type='number'>
                
                </input>
                <button className='points-add' onClick={addAddablePoints}>
                    Add
                </button>
                <button className='points-minus' onClick={onMinusPressed}>
                    -
                </button>
                <div className="points">
                    {props.playerPoints} points
                </div>
                <button className='points-plus' onClick={onPlusPressed}>
                    +
                </button>

                
            </form>

        
        
        </li>

    )
}

export default Player;